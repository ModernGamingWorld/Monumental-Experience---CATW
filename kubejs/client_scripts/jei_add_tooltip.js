// Priority: 1
/**
 * @file JEI - Add Tooltips
 * @description Adds custom informational tooltips to items in-game.
 * @copyright KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @modified @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

ItemEvents.tooltip(event => {

  // ---------------------------------------------------------------------------
  // Eccentric Tome – Books
  // All guide books are consolidated into the Eccentric Tome.
  // ---------------------------------------------------------------------------

  const eccentricTomeBooks = [
    'patchouli:guide_book',
    'ars_nouveau:worn_notebook',
    'alexsmobs:animal_dictionary',
    'alexscaves:cave_book',
    'ftbquests:book',
    'immersiveengineering:manual',
    'botania:lexicon',
    'rftoolsbase:manual',
    'forestry:foresters_manual',
    'cookingforblockheads:recipe_book',
    'securitycraft:sc_manual',
    'croptopia:guide',
    'enigmaticlegacy:the_acknowledgment',
    'eidolon:codex',
  ]

  eccentricTomeBooks.forEach(book => {
    event.add(book, [Text.of('This book is already included within your Eccentric Tome').yellow()])
  })

  // ---------------------------------------------------------------------------
  // Mystic Agriculture – Watering Cans (Players Only / Not Automatable)
  // ---------------------------------------------------------------------------

  const wateringCans = [
    'mysticalagriculture:watering_can',
    'mysticalagriculture:inferium_watering_can',
    'mysticalagriculture:prudentium_watering_can',
    'mysticalagriculture:tertium_watering_can',
    'mysticalagriculture:imperium_watering_can',
  ]

  wateringCans.forEach(can => {
    event.add(can, [
      [Text.of('Players Only').green()],
      [Text.of('Not Automatable').darkGreen()],
    ])
  })

  // ---------------------------------------------------------------------------
  // Apotheotic Additions – Coins
  // ---------------------------------------------------------------------------

  const apotheosisCoins = [
    'apotheotic_additions:apotheotic_coin',
    'apotheotic_additions:infused_coin',
    'apotheotic_additions:ascended_coin',
  ]

  apotheosisCoins.forEach(coin => {
    event.add(coin, [
      [Text.of('Apotheotic coins are located in rogue spawners,').green()],
      [Text.of('they can also be traded from the Wandering Trader.').green()],
    ])
  })

  // ---------------------------------------------------------------------------
  // Refined Storage – Storage Parts (NBT Warning)
  // ---------------------------------------------------------------------------

  const rsWarning = [
    [Text.of('Warning: Please do not store too many NBT items.').darkRed()],
    [Text.of('Use external storage for tools, weapons, armor, etc.').lightPurple()],
  ]

  const storageParts = [
    'refinedstorage:1k_storage_part',
    'refinedstorage:4k_storage_part',
    'refinedstorage:16k_storage_part',
    'refinedstorage:64k_storage_part',
    'extradisks:256k_storage_part',
    'extradisks:1024k_storage_part',
    'extradisks:4096k_storage_part',
    'extradisks:16384k_storage_part',
    'extradisks:65536k_storage_part',
    'extradisks:262144k_storage_part',
    'extradisks:1048576k_storage_part',
    'extradisks:infinite_storage_part',
  ]

  storageParts.forEach(part => event.add(part, rsWarning))

  // ---------------------------------------------------------------------------
  // Pipez – Pipe Throughput Rates
  // ---------------------------------------------------------------------------

  event.add('pipez:item_pipe', [
    [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
    [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
  ])

  event.add('pipez:fluid_pipe', [
    [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
  ])

  event.add('pipez:gas_pipe', [
    [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
  ])

  event.add('pipez:energy_pipe', [
    [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  ])

  // ---------------------------------------------------------------------------
  // Pipez – Upgrade Stats
  // ---------------------------------------------------------------------------

  event.add('pipez:basic_upgrade', [
    [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/t')],
    [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])

  event.add('pipez:improved_upgrade', [
    [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/t').gold()],
    [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])

  event.add('pipez:advanced_upgrade', [
    [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/t').darkAqua()],
    [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])

  event.add('pipez:ultimate_upgrade', [
    [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])

  event.add('pipez:infinity_upgrade', [
    [Text.of('Item:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
    [Text.of('Fluid:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Gas:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Energy:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  ])

  // ---------------------------------------------------------------------------
  // RS Infinity Booster
  // ---------------------------------------------------------------------------

  event.add('rsinfinitybooster:infinity_card', [
    Text.of('Infinite range for RS wireless'),
    Text.of('Only works in the same dimension'),
  ])

  event.add('rsinfinitybooster:dimension_card', [
    Text.of('Infinite range for RS wireless'),
    Text.of('Works across dimensions'),
  ])

  // ---------------------------------------------------------------------------
  // Ender Storage
  // ---------------------------------------------------------------------------

  event.add('enderstorage:ender_chest', [
    [Text.of('Cross-dimensional wireless item transfer to any chest on the same channel.').gold()],
    [Text.of('Use dye on the colored bars to set the channel.').gold()],
    [Text.of('Use a diamond on the latch to switch to private channel.').gold()],
  ])

  event.add('enderstorage:ender_tank', [
    [Text.of('Cross-dimensional wireless fluid transfer to any tank on the same channel.').gold()],
    [Text.of('Use dye on the colored bars to set the channel.').gold()],
    [Text.of('Use a diamond on the latch to switch to private channel.').gold()],
  ])

  // ---------------------------------------------------------------------------
  // Enigmatic Legacy – Hearts
  // ---------------------------------------------------------------------------

  event.add('enigmaticlegacy:earth_heart', [
    [Text.of('100% drop chance by killing a Wither.').gold()],
    [Text.of('10% drop chance by killing a Vex.').gold()],
    [Text.of('5% drop chance by killing a Wither Skeleton.').gold()],  // Fixed typo: "Sceleton" -> "Skeleton"
  ])

  event.add('enigmaticlegacy:abyssal_heart', [
    [Text.of('100% drop chance by killing a Warden.').gold()],
  ])

  // ---------------------------------------------------------------------------
  // Enigmatic Addons – Lost Engine
  // ---------------------------------------------------------------------------

  event.add('enigmaticaddons:lost_engine', [
    [Text.of('Use it with caution.').darkRed()],
    [Text.of('It voids items with durability upon death by lightning.').lightPurple()],
  ])

  // ---------------------------------------------------------------------------
  // Allthemodium – Teleport Pad
  // ---------------------------------------------------------------------------

  event.add('allthemodium:teleport_pad', [
    Text.of('Place the pad down in the specified Dimension'),
    Text.of('Sneak Right Click with both hands empty to teleport'),
    Text.of('§aOverworld to Mining Dimension'),
    Text.of('§cThe Nether to The Other'),
    Text.of('§dThe End to The Beyond'),
  ])

  // ---------------------------------------------------------------------------
  // Minecraft Vanilla
  // ---------------------------------------------------------------------------

  event.add('minecraft:smithing_table', [
    [Text.of('The default recipe for this item has been disabled and can now be discovered through exploration.').gold()],
  ])

  event.add('minecraft:obsidian', [
    [Text.of('The default way to make a nether portal by lighting an Obsidian frame is disabled. Please use the Nether Painting!').gold()],
  ])

  event.add('minecraft:bucket', [
    [Text.of('Most buckets can be condensed! Crouch-right-click to change modes.').gold()],
    [Text.of('Filling acts as a normal bucket; you need buckets in your off-hand.').gold()],
    [Text.of('Emptying acts as a normal filled bucket; your buckets are refunded.').gold()],
    [Text.of('Un-condense the buckets before using in furnaces, or void the liquid.').darkRed()],
  ])

})
