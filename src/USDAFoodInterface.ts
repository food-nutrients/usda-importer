import { UsdaFoodNutrient } from "./USDAFoodNutrientInterface";

export interface UsdaFood {
    desc: {
        name: string,
        ndbno: string,
    }
    nutrients: Array<UsdaFoodNutrient>
}
