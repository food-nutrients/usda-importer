// tslint:disable: object-literal-sort-keys no-conosle
import fs from "fs-extra";
import { USDA } from "./usda";

test("General fetching works", async () => {
  jest.setTimeout(30000);
  const usda = new USDA();
  const usdaId = "11564";
  await fs.removeSync(`foods/${usdaId}.json`);
  const accessToken = "NVedpClwdoyIIuXpeWNlkMnBeABnK922mcZwhqPv";
  const food = await usda.cachedGetFoodById(usdaId, accessToken);
  const formattedFood = usda.formatFood(food);
  expect(formattedFood).toStrictEqual({
    name: "Turnips, raw",
    usda_id: "11564",
    category: "Vegetables and Vegetable Products",
    saturated_fats: 110,
    sugars: 38000,
    water: 918700,
    ash: 7000,
    calories: 0.28,
    proteins: 9000,
    fat: 1000,
    carbohydrates: 64300,
    fibers: 18000,
    serving: 100,
    nutrients: {
      "Calcium": 300,
      "Iron": 3,
      "Potassium": 1910,
      "Magnesium": 110,
      "Phosphorus": 270,
      "Chromium": null,
      "Iodine": null,
      "Sodium": 670,
      "Chloride": null,
      "Zinc": 2.7,
      "Copper": 0.85,
      "Molybdenum": null,
      "Manganese": 1.34,
      "Selenium": 0.01,
      "Vitamin C": 210,
      "Vitamin B12": 0,
      "Vitamin B1": 0.4,
      "Vitamin B2": 0.3,
      "Vitamin B3": 4,
      "Vitamin B5": 2,
      "Vitamin B6": 0.9,
      "Vitamin B7": null,
      "Vitamin B9": 0,
      "Choline": 111,
      "Vitamin A": 0,
      "Vitamin E": 0.3,
      "Vitamin K": 0,
      "Linoleic acid": null,
      "α-Linolenic acid": null,
      "Tryptophan": 90,
      "Threonine": 250,
      "Isoleucine": 360,
      "Leucine": 330,
      "Lysine": 360,
      "Methionine": 110,
      "Phenylalanine": 170,
      "Valine": 300,
      "Histidine": 140,
    },
  });
});

test("General caching works", async () => {
  const usda = new USDA();
  const usdaId = "11564";
  const accessToken = "NVedpClwdoyIIuXpeWNlkMnBeABnK922mcZwhqPv";
  const food = await usda.cachedGetFoodById(usdaId, accessToken);
  const formattedFood = usda.formatFood(food);
  expect(formattedFood).toStrictEqual({
    name: "Turnips, raw",
    usda_id: "11564",
    ash: 7000,
    category: "Vegetables and Vegetable Products",
    saturated_fats: 110,
    sugars: 38000,
    water: 918700,
    calories: 0.28,
    proteins: 9000,
    fat: 1000,
    carbohydrates: 64300,
    fibers: 18000,
    serving: 100,
    nutrients: {
      "Calcium": 300,
      "Iron": 3,
      "Potassium": 1910,
      "Magnesium": 110,
      "Phosphorus": 270,
      "Chromium": null,
      "Iodine": null,
      "Sodium": 670,
      "Chloride": null,
      "Zinc": 2.7,
      "Copper": 0.85,
      "Molybdenum": null,
      "Manganese": 1.34,
      "Selenium": 0.01,
      "Vitamin C": 210,
      "Vitamin B12": 0,
      "Vitamin B1": 0.4,
      "Vitamin B2": 0.3,
      "Vitamin B3": 4,
      "Vitamin B5": 2,
      "Vitamin B6": 0.9,
      "Vitamin B7": null,
      "Vitamin B9": 0,
      "Choline": 111,
      "Vitamin A": 0,
      "Vitamin E": 0.3,
      "Vitamin K": 0,
      "Linoleic acid": null,
      "α-Linolenic acid": null,
      "Tryptophan": 90,
      "Threonine": 250,
      "Isoleucine": 360,
      "Leucine": 330,
      "Lysine": 360,
      "Methionine": 110,
      "Phenylalanine": 170,
      "Valine": 300,
      "Histidine": 140,
    },
  });
});
test("Testing unrecognized unit", async () => {
  const usda = new USDA();
  const usdaId = "11564";
  const accessToken = "NVedpClwdoyIIuXpeWNlkMnBeABnK922mcZwhqPv";
  const food = await usda.cachedGetFoodById(usdaId, accessToken);
  const calciumId = food.nutrients.findIndex((n) => n.nutrient_id === 301);
  food.nutrients[calciumId].unit = "randomUnit";
  expect(usda.formatFood.bind(usda, food)).toThrowError("Unrecognized unit randomUnit");
});
test("Usage", async () => {
  const cl = console.log;
  const result = [];
  console.log = (d: string) => {
    result.push(d);
  };
  USDA.usage();
  console.log = cl;
  expect(result).toStrictEqual([
    "USDA Food Data Extractor",
    "=======================",
    "Usage: node dist/app.js [usda_id]",
    "You can find the usda id from: https://ndb.nal.usda.gov/ndb/search/list",
    "Example Usage: node dist/app.js 11564",
  ]);
});
