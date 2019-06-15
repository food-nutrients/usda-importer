import UsdaFoodNutrient from "./USDAFoodNutrientInterface";

export default interface UsdaFood {
    desc: {
        name: string,
        ndbno: number
    }
    nutrients: Array<UsdaFoodNutrient>
}