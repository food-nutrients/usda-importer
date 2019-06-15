import { USDA } from './usda'

if (require.main === module) {
  ; (async function () {
    if (process.argv.length !== 3) {
      USDA.usage()
      process.exit()
    }
    const usda = new USDA()
    const access_token = 'NVedpClwdoyIIuXpeWNlkMnBeABnK922mcZwhqPv'
    const food = await usda.cachedGetFoodById(process.argv[2], access_token)
    const formattedFood = usda.formatFood(food)
    console.log(JSON.stringify(formattedFood, null, 4))
  })()
}
