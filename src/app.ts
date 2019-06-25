#!/usr/bin/env node

import cli from "cli";

import { USDA } from "./usda";
cli.setApp(__dirname + "/../package.json");
cli.enable("version");
cli.enable("catchall");
cli.enable("status");

cli.parse({
  foodId: ["f", "USDA Food ID to retrive", "int", null], // -f, --file FILE   A file to process
  query: ["q", "Get a list of Foods by search query", "string", null], // -t, --time TIME   An access time
});

if (cli.options.foodId) {
  // tslint:disable-next-line: align
  (async () => {
    try {
      cli.spinner("Downloading ...");
      const usda = new USDA();
      const accessToken = "NVedpClwdoyIIuXpeWNlkMnBeABnK922mcZwhqPv";
      const food = await usda.cachedGetFoodById(cli.options.foodId, accessToken);
      const formattedFood = usda.formatFood(food);
      cli.spinner("", true);
      cli.info(JSON.stringify(formattedFood, null, 4));
    } catch (e) {
      cli.spinner("", true);
      cli.debug(e);
      cli.fatal(
        "Could not download the food. Check your Food ID and try again! You can use --debug option for more info.",
      );
    }
  })();
}

// cli.withStdin(function(data) {
//   this.output({ test: 1 });
// });

// if (require.main === module) {
//   (async () => {
//     if (process.argv.length !== 3) {
//       USDA.usage();
//       process.exit();
//     }
//     const usda = new USDA();
//     const accessToken = "NVedpClwdoyIIuXpeWNlkMnBeABnK922mcZwhqPv";
//     const food = await usda.cachedGetFoodById(process.argv[2], accessToken);
//     const formattedFood = usda.formatFood(food);
//     console.log(JSON.stringify(formattedFood, null, 4)); // tslint:disable-line:no-magic-numbers
//   })();
// }
