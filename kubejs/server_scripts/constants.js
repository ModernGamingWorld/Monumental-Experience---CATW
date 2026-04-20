// Priority: 7
/**
 * @file        constants.js
 * @description Global constants and helper functions shared across all server scripts.
 *              Must load before any script that references these values (priority 7
 *              ensures it runs before priority 100 recipe scripts).
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @author      @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

var _ = undefined
var air = 'minecraft:air'

// ---------------------------------------------------------------------------
// Dye Colors (all 16 vanilla)
// ---------------------------------------------------------------------------

var colors = [
  'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime',
  'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue',
  'brown', 'green', 'red', 'black',
]

// ---------------------------------------------------------------------------
// Botany Pots — Material Variants
// Note: `botanypotmaterial` and `BotanyPotMaterial` were duplicate arrays.
//       Unified into one. Update botanypots.js to use `botanypotmaterial`.
// ---------------------------------------------------------------------------

var botanypotmaterial = [
  // Terracotta
  'terracotta',
  'white_terracotta',      'orange_terracotta',     'magenta_terracotta',
  'light_blue_terracotta', 'yellow_terracotta',     'lime_terracotta',
  'pink_terracotta',       'gray_terracotta',        'light_gray_terracotta',
  'cyan_terracotta',       'purple_terracotta',      'blue_terracotta',
  'brown_terracotta',      'green_terracotta',       'red_terracotta',
  'black_terracotta',
  // Concrete
  'white_concrete',        'orange_concrete',        'magenta_concrete',
  'light_blue_concrete',   'yellow_concrete',        'lime_concrete',
  'pink_concrete',         'gray_concrete',           'light_gray_concrete',
  'cyan_concrete',         'purple_concrete',         'blue_concrete',
  'brown_concrete',        'green_concrete',          'red_concrete',
  'black_concrete',
  // Glazed Terracotta
  'white_glazed_terracotta',      'orange_glazed_terracotta',
  'magenta_glazed_terracotta',    'light_blue_glazed_terracotta',
  'yellow_glazed_terracotta',     'lime_glazed_terracotta',
  'pink_glazed_terracotta',       'gray_glazed_terracotta',
  'light_gray_glazed_terracotta', 'cyan_glazed_terracotta',
  'purple_glazed_terracotta',     'blue_glazed_terracotta',
  'brown_glazed_terracotta',      'green_glazed_terracotta',
  'red_glazed_terracotta',        'black_glazed_terracotta',
]

// ---------------------------------------------------------------------------
// Pebble Types
// ---------------------------------------------------------------------------

var pebble = [
  'tuff', 'andesite', 'stone', 'diorite', 'deepslate',
  'calcite', 'blackstone', 'basalt', 'granite',
]

// ---------------------------------------------------------------------------
// Wood Types — by Mod
// ---------------------------------------------------------------------------

var VanillaWoodTypes = [
  'acacia', 'birch', 'crimson', 'dark_oak', 'jungle',
  'mangrove', 'cherry', 'oak', 'spruce', 'warped',
]

var BYGWoodTypes = [
  'aspen', 'baobab', 'blue_enchanted', 'cika', 'cypress',
  'ebony', 'fir', 'green_enchanted', 'holly', 'jacaranda',
  'mahogany', 'white_mangrove', 'maple', 'palm', 'pine',
  'rainbow_eucalyptus', 'redwood', 'skyris', 'willow',
  'witch_hazel', 'zelkova', 'florus', 'ironwood', 'sakura',
]

var RUWoodTypes = [
  'alpha', 'baobab', 'blackwood', 'blue_bioshroom', 'brimwood',
  'cobalt', 'cypress', 'dead', 'eucalyptus', 'green_bioshroom',
  'joshua', 'kapok', 'larch', 'magnolia', 'maple', 'mauve',
  'palm', 'pine', 'pink_bioshroom', 'redwood', 'socotra',
  'willow', 'yellow_bioshroom',
]

var QuarkWoodTypes    = ['ancient', 'blossom', 'azalea']
var BotaniaWoodTypes  = ['livingwood', 'dreamwood']

var BlueSkiesWoodTypes = [
  'bluebright', 'starlit', 'frostbright', 'lunar',
  'dusk', 'maple', 'crystallized', 'comet',
]

var TwilightForestWoodTypes = [
  'twilight_oak', 'canopy', 'mangrove', 'dark',
  'time', 'transformation', 'mining', 'sorting',
]

var UndergadenWoodTypes = ['smogstem', 'wigglewood', 'grongle']  // Note: typo in original — "Undergaden" → "Undergarden"

var HexereiWoodType = ['mahogany', 'willow', 'witch_hazel']

// ---------------------------------------------------------------------------
// Sandstones
// ---------------------------------------------------------------------------

var sandstones = [
  'biomeswevegone:black_sandstone',
  'biomeswevegone:blue_sandstone',
  'biomeswevegone:purple_sandstone',
  'biomeswevegone:windswept_sandstone',
  'biomeswevegone:pink_sandstone',
  'biomeswevegone:white_sandstone',
  'minecraft:red_sandstone',
  'minecraft:sandstone',
  'quark:soul_sandstone',
]

// ---------------------------------------------------------------------------
// Misc Block/Item Groups
// ---------------------------------------------------------------------------

var lootChests         = ['lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_trapped_chest']
var createStoneTypes   = ['scoria', 'limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'dark_scoria', 'natural_scoria']
var quark_crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black']
var sandstone_colors   = ['colorless', 'red', 'black', 'white', 'blue', 'purple', 'windswept']
var xnet_colors        = ['red', 'yellow', 'green', 'blue']

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

function modifyShaped(event, result, count, pattern, ingredients) {
  event.remove({ output: result, type: 'minecraft:crafting_shaped' })
  event.shaped(Item.of(result, count), pattern, ingredients)
    .id('kubejs:shaped/' + result.replace(':', '/'))
}

function modifyShapeless(event, result, count, ingredients) {
  event.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  event.shapeless(Item.of(result, count), ingredients)
    .id('kubejs:shapeless/' + result.replace(':', '/'))
}

function modifySmelt(event, result, ingredients) {
  event.remove({ output: result, type: 'minecraft:smelting' })
  event.smelting(result, ingredients)
    .id('kubejs:smelting/' + result.replace(':', '/'))
}

function removeRecipeByID(event, recipes) {
  recipes.forEach(function(recipe) {
    event.remove({ id: recipe })
  })
}

function removeRecipeByOutput(event, recipes) {
  recipes.forEach(function(recipe) {
    if (Array.isArray(recipe)) {
      event.remove({ type: recipe[1], output: recipe[0] })
    } else {
      event.remove({ output: recipe })
    }
  })
}

function maInfusion(event, output, middle, item1, item2, item3, item4, item5, item6, item7, item8) {
  event.recipes.mysticalagriculture.infusion({
    input: { item: middle },
    ingredients: [
      { item: item1 }, { item: item2 }, { item: item3 }, { item: item4 },
      { item: item5 }, { item: item6 }, { item: item7 }, { item: item8 },
    ],
    result: { item: output }
  }).id('kubejs:mainfusion/' + output.replace(':', '/'))
}

function draconicFusion(event, output, craftingTier, energy, middleItem, ingredientList) {
  // craftingTier: 1=Draconium, 2=Wyvern, 3=Draconic, 4=Chaotic
  var tiers = ['DRACONIUM', 'WYVERN', 'DRACONIC', 'CHAOTIC']

  // BUG FIX: original condition was `craftingTier > 4 && craftingTier <= 1`
  // which can never be true. Replaced with a bounds-checked index lookup.
  var tierIndex = (craftingTier >= 1 && craftingTier <= 4) ? craftingTier - 1 : 0
  var tier = tiers[tierIndex]

  event.custom({
    type: 'draconicevolution:fusion_crafting',
    result: { item: output },
    catalyst: { item: middleItem },
    total_energy: energy,
    tier: tier,
    ingredients: ingredientList.map(function(item) {
      return item.charAt(0) === '#' ? { tag: item.substring(1) } : { item: item }
    })
  }).id('kubejs:fusion_crafting/' + output.replace(':', '/'))
}