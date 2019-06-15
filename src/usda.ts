import axios from 'axios'
import fs from 'fs-extra'
import path from 'path'

import { UsdaFood } from './USDAFoodInterface';
import { UsdaFoodNutrient } from './USDAFoodNutrientInterface';
import { FoodNutritionFood } from './FoodNuritionFoodInterface';

export class USDA {
  public static usage(): void {
    console.log('USDA Food Data Extractor')
    console.log('=======================')
    console.log('Usage: node dist/app.js [usda_id]')
    console.log('You can find the usda id from: https://ndb.nal.usda.gov/ndb/search/list')
    console.log('Example Usage: node dist/app.js 11564')
  }
  public async getFoodByID(foodId: string, access_token: string): Promise<UsdaFood> {
    const url = `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${foodId}&type=f&format=json&api_key=${access_token}`
    return (await axios.get(url)).data.foods.shift().food
  }

  public async cachedGetFoodById(foodId: string, access_token: string): Promise<UsdaFood> {
    const foodCachePath = path.resolve(__dirname, `../foods/${foodId}.json`);
    let food = null;
    try {
      food = JSON.parse(await fs.readFile(foodCachePath, 'utf-8'))
    } catch (e) {
      food = await this.getFoodByID(foodId, access_token)
      await fs.writeFile(foodCachePath, JSON.stringify(food, null, 4)) // tslint:disable-line:no-magic-numbers
    }
    return food
  }

  /* tslint:disable:object-literal-sort-keys no-magic-numbers*/
  public formatFood(food: UsdaFood): FoodNutritionFood {
    const get = this.extractNutrient(food.nutrients)
    return {
      name: food.desc.name,
      usda_id: food.desc.ndbno,
      calories: get(208),
      proteins: get(203),
      fat: get(204),
      carbohydrates: get(205),
      fibers: get(291),
      serving: 100,
      nutrients: {
        Calcium: get(301),
        Iron: get(303),
        Potassium: get(306),
        Magnesium: get(304),
        Phosphorus: get(305),
        Chromium: get(null),
        Iodine: get(null),
        Sodium: get(307),
        Chloride: get(null),
        Zinc: get(309),
        Copper: get(312),
        Molybdenum: get(null),
        Manganese: get(315),
        Selenium: get(317),
        'Vitamin C': get(401),
        'Vitamin B12': get(418),
        'Vitamin B1': get(404), // Thiamine or thiamin
        'Vitamin B2': get(405), // Riboflavin
        'Vitamin B3': get(406), // (nicotinamide (niacinamide), niacin (nicotinic acid), and nicotinamide riboside)
        'Vitamin B5': get(410), // Pantothenic acid
        'Vitamin B6': get(415),
        'Vitamin B7': get(null), // Biotin, formerly known vit. H or coenzyme R
        'Vitamin B9': get(431), // Folic acid
        Choline: get(421),
        'Vitamin A': get(320),
        'Vitamin E': get(323),
        'Vitamin K': get(430),
        'Linoleic acid': get(null),
        'α-Linolenic acid': get(null),
        Tryptophan: get(501),
        Threonine: get(502),
        Isoleucine: get(503),
        Leucine: get(504),
        Lysine: get(505),
        Methionine: get(506),
        Phenylalanine: get(508),
        Valine: get(510),
        Histidine: get(512),
      },
    }
  }
  /* tslint:enable:object-literal-sort-keys no-magic-numbers*/

  /* 
      We divide by 100 because of how we store the nutrients - 
      so we can easly multiply them by 100 grams (serving size). 
      We store them as nutrient per 1 g.
    */
  private convertNutrientUnits(nutrient: UsdaFoodNutrient): number {

    /* tslint:disable:object-literal-sort-keys no-magic-numbers*/
    const unitMap = {
      'µg': (1 / 100),
      'mg': 1000 * (1 / 100),
      'g': 1000 * 1000 * (1 / 100),
      'kcal': (1 / 100),
    }
    /* tslint:enable:object-literal-sort-keys no-magic-numbers*/

    if (Object.keys(unitMap).includes(nutrient.unit)) {
      return +(unitMap[nutrient.unit] * nutrient.value).toFixed(2);
    }
    throw Error(`Unrecognized unit ${nutrient.unit}`)
  }

  private findNutrient(nutrients: Array<UsdaFoodNutrient>, nutrient_id: number): UsdaFoodNutrient {
    return nutrients.find((nutrient: UsdaFoodNutrient) => nutrient.nutrient_id === nutrient_id)
  }

  private extractNutrient(nutrients: Array<UsdaFoodNutrient>): (nutrient_id: number) => number {
    return (nutrient_id: number) => {
      const nutrient = this.findNutrient(nutrients, nutrient_id);
      return (nutrient) ? this.convertNutrientUnits(nutrient) : null
    }
  }
}
