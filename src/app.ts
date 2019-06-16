import { USDA } from "./usda";

if (require.main === module) {
  (async () => {
    if (process.argv.length !== 3) {
      USDA.usage();
      process.exit();
    }
    const usda = new USDA();
    const accessToken = "NVedpClwdoyIIuXpeWNlkMnBeABnK922mcZwhqPv";
    const food = await usda.cachedGetFoodById(process.argv[2], accessToken);
    const formattedFood = usda.formatFood(food);
    console.log(JSON.stringify(formattedFood, null, 4)); // tslint:disable-line:no-magic-numbers
  })();
}
