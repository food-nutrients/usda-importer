import UsdaFoodNutrient from "./USDAFoodNutrientInterface";

export interface UsdaFood {
    desc: {
        name: string,
        ndbno: number
    }
    nutrients: Array<UsdaFoodNutrient>
}