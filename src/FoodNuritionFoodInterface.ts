export interface IFoodNutritionFood {
  name: string;
  category: string;
  usda_id: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  fibers: number;
  saturated_fats: number;
  sugars: number;
  water: number;
  ash: number;
  serving: number;
  nutrients: {
    Calcium: number
    Iron: number
    Potassium: number
    Magnesium: number
    Phosphorus: number
    Chromium: number
    Iodine: number
    Sodium: number
    Chloride: number
    Zinc: number
    Copper: number
    Molybdenum: number
    Manganese: number
    Selenium: number
    "Vitamin C": number
    "Vitamin B12": number
    "Vitamin B1": number
    "Vitamin B2": number
    "Vitamin B3": number
    "Vitamin B5": number
    "Vitamin B6": number
    "Vitamin B7": number
    "Vitamin B9": number
    Choline: number
    "Vitamin A": number
    "Vitamin E": number
    "Vitamin K": number
    "Linoleic acid": number
    "α-Linolenic acid": number
    Tryptophan: number
    Threonine: number
    Isoleucine: number
    Leucine: number
    Lysine: number
    Methionine: number
    Phenylalanine: number
    Valine: number
    Histidine: number,
  };
}
