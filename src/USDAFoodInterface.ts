import { UsdaFoodNutrient } from "./USDAFoodNutrientInterface";

export interface IUsdaFood {
  desc: {
    name: string
    ndbno: string
    fg: string,
  };
  nutrients: UsdaFoodNutrient[];
}
