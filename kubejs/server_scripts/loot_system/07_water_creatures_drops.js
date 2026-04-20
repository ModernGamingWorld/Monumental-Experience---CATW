//Priority: 1
/**
 * ════════════════════════════════════════════════════════════════
 *
 *                   █████╗  ██████╗ ███████╗
 *                  ██╔══██╗██╔═══██╗██╔════╝
 *                  ███████║██║   ██║█████╗
 *                  ██╔══██║██║   ██║██╔══╝
 *                  ██║  ██║╚██████╔╝██║
 *                  ╚═╝  ╚═╝ ╚═════╝ ╚═╝
 *
 *                       Age of Fate
 *                   A Minecraft Modpack
 *                      By KnightDexx
 * ════════════════════════════════════════════════════════════════
 *
 * ┌─────────────────────────────────────────────────────────┐
 * │             WATER CREATURES DROP SYSTEM                 │
 * ├─────────────────────────────────────────────────────────┤
 * │ @file        water_creatures_drops.js                   │
 * │ @copyright   KnightDexx's Modded Minecraft World        │
 * │ @modpack     Age of Fate (AOF)                          │
 * │ @author      KnightDexx                                 │
 * │ @version     2.0 - EntityEvents.death Edition           │
 * │ @license     All Rights Reserved                        │
 * │                                                          │
 * │ 🔧 REWORKED: Using EntityEvents.death instead of        │
 * │              LootJS to fix duplicate drop bug           │
 * │                                                          │
 * │ Water creatures drop neptunium gear & materials.        │
 * │ Replaces fishing loot with combat-based progression.    │
 * │                                                          │
 * │ 🐟 Hunt water mobs for Neptune gear!                    │
 * │ 💎 Better loot from bigger/rarer creatures!             │
 * │                                                          │
 * │ 🔗 https://legacy.curseforge.com/minecraft/modpacks/    │
 * │    age-of-fate                                          │
 * └─────────────────────────────────────────────────────────┘
 *
**/

// ═══════════════════════════════════════════════════════════
// WATER CREATURES NEPTUNIUM DROP SYSTEM
// ═══════════════════════════════════════════════════════════

console.info('═══════════════════════════════════════════════════════')
console.info('[AOF] Water Creatures Drop System v2.0')
console.info('[AOF] Adding neptunium drops to water creatures...')
console.info('═══════════════════════════════════════════════════════')

// ═══════════════════════════════════════════════════════════
// WATER CREATURES DROP CONFIGURATION
// ═══════════════════════════════════════════════════════════

var WATER_CREATURE_CONFIG = {
  // ───────────────────────────────────────────────────────────
  // TIER 1: BOSS CREATURES (100% Neptune's Bounty + Gear)
  // ───────────────────────────────────────────────────────────
  BOSS: {
    mobs: [
      'minecraft:elder_guardian',       // Vanilla boss
      'cataclysm:the_leviathan',        // Cataclysm boss
      'alexscaves:hullbreaker',         // Alex's Mobs boss
    ],
    drops: [
      // Neptune's Bounty (100%)
      { item: 'aquaculture:neptunes_bounty', chance: 1.0, count: 1 },
      // 3-5 Neptunium Ingots (100%)
      { item: 'aquaculture:neptunium_ingot', chance: 1.0, countMin: 3, countMax: 5 },
      // Random Gear (50%)
      { item: 'GEAR_POOL', chance: 0.50, count: 1 }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // TIER 2: LARGE WATER MOBS
  // ───────────────────────────────────────────────────────────
  LARGE: {
    mobs: [
      'minecraft:guardian',
      'alexscaves:deep_one',
      'alexscaves:deep_one_knight',
      'alexscaves:deep_one_mage',
      'alexscaves:sea_pig',
      'alexscaves:trilocaris',
      'alexscaves:tripodfish',
      'alexsmobs:cachalot_whale',
      'alexsmobs:giant_squid',
      'alexsmobs:orca',
      'aquaculture:arapaima',
      'aquaculture:tuna',
      'blue_skies:grittle_flatfish',
      'blue_skies:horizofin_tunid',
      'blue_skies:municipal_monkfish',
      'cataclysm:coral_golem',
      'cataclysm:coralssus',
      'cataclysm:deepling',
      'cataclysm:deepling_angler',
      'cataclysm:deepling_brute',
      'cataclysm:deepling_priest',
      'cataclysm:deepling_warlock',
      'cataclysm:the_baby_leviathan',
      'deeperdarker:angler_fish',
    ],
    drops: [
      // Neptune's Bounty (10%)
      { item: 'aquaculture:neptunes_bounty', chance: 0.10, count: 1 },
      // Random Gear (5%)
      { item: 'GEAR_POOL', chance: 0.05, count: 1 },
      // 1-2 Neptunium Ingots (10%)
      { item: 'aquaculture:neptunium_ingot', chance: 0.10, countMin: 1, countMax: 2 }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // TIER 3: MEDIUM FISH
  // ───────────────────────────────────────────────────────────
  MEDIUM: {
    mobs: [
      'minecraft:cod',
      'minecraft:salmon',
      'minecraft:tropical_fish',
      'minecraft:pufferfish',
      'minecraft:dolphin',
      'alexscaves:lanternfish',
      'alexscaves:radgill',
      'alexscaves:sweetish_fish',
      'alexsmobs:blobfish',
      'alexsmobs:catfish',
      'alexsmobs:comb_jelly',
      'alexsmobs:cosmic_cod',
      'alexsmobs:devils_hole_pupfish',
      'alexsmobs:flying_fish',
      'alexsmobs:frilled_shark',
      'alexsmobs:hammerhead_shark',
      'alexsmobs:lobster',
      'alexsmobs:mantis_shrimp',
      'alexsmobs:mimic_octopus',
      'alexsmobs:mudskipper',
      'alexsmobs:platypus',
      'alexsmobs:seal',
      'alexsmobs:terrapin',
      'aquaculture:atlantic_cod',
      'aquaculture:atlantic_halibut',
      'aquaculture:atlantic_herring',
      'aquaculture:bayad',
      'aquaculture:blackfish',
      'aquaculture:bluegill',
      'aquaculture:boulti',
      'aquaculture:brown_trout',
      'aquaculture:capitaine',
      'aquaculture:carp',
      'aquaculture:catfish',
      'aquaculture:gar',
      'aquaculture:muskellunge',
      'aquaculture:pacific_halibut',
      'aquaculture:perch',
      'aquaculture:pink_salmon',
      'aquaculture:piranha',
      'aquaculture:pollock',
      'aquaculture:rainbow_trout',
      'aquaculture:red_grouper',
      'aquaculture:smallmouth_bass',
      'aquaculture:synodontis',
      'aquaculture:tambaqui',
      'blue_skies:whistleshell_crab',
      'cataclysm:lionfish',
    ],
    drops: [
      // 1 Neptunium Ingot (2%)
      { item: 'aquaculture:neptunium_ingot', chance: 0.02, count: 1 },
      // 1-3 Neptunium Nuggets (10%)
      { item: 'aquaculture:neptunium_nugget', chance: 0.10, countMin: 1, countMax: 3 }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // TIER 4: SMALL FISH
  // ───────────────────────────────────────────────────────────
  SMALL: {
    mobs: [
      'minecraft:squid',
      'minecraft:glow_squid',
      'minecraft:axolotl',
      'minecraft:tadpole',
      'alexsmobs:triops',
      'aquaculture:jellyfish',
      'aquaculture:minnow',
      'aquamirae:luminous_jelly',
      'biomeswevegone:man_o_war',
      'blue_skies:jelly_drifter'
    ],
    drops: [
      // 1-2 Neptunium Nuggets (5%)
      { item: 'aquaculture:neptunium_nugget', chance: 0.05, countMin: 1, countMax: 2 }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // TIER 5: TURTLES (Box & Treasure Chests)
  // ───────────────────────────────────────────────────────────
  TURTLE: {
    mobs: [
      'minecraft:turtle',
      'aquaculture:box_turtle',
      'aquaculture:arrau_turtle',
      'aquaculture:starshell_turtle',
      'alexsmobs:alligator_snapping_turtle'
    ],
    drops: [
      // Box (15%)
      { item: 'aquaculture:box', chance: 0.15, count: 1 },
      // Lockbox (8%)
      { item: 'aquaculture:lockbox', chance: 0.08, count: 1 },
      // Treasure Chest (3%)
      { item: 'aquaculture:treasure_chest', chance: 0.03, count: 1 },
      // 1-2 Neptunium Nuggets (20%)
      { item: 'aquaculture:neptunium_nugget', chance: 0.20, countMin: 1, countMax: 2 }
    ]
  }
}

// ═══════════════════════════════════════════════════════════
// GEAR POOL (Neptunium Equipment)
// ═══════════════════════════════════════════════════════════

var NEPTUNIUM_GEAR_POOL = [
  'aquaculture:neptunium_axe',
  'aquaculture:neptunium_pickaxe',
  'aquaculture:neptunium_shovel',
  'aquaculture:neptunium_hoe',
  'aquaculture:neptunium_sword',
  'aquaculture:neptunium_helmet',
  'aquaculture:neptunium_chestplate',
  'aquaculture:neptunium_leggings',
  'aquaculture:neptunium_boots',
  'aquaculture:neptunium_bow',
  'aquaculture:neptunium_fishing_rod',
  'aquaculture:neptunium_fillet_knife'
]

// ═══════════════════════════════════════════════════════════
// BUILD MOB -> DROPS MAPPING
// ═══════════════════════════════════════════════════════════

if (!global.AOF_WATER_MOB_MAP) {
  global.AOF_WATER_MOB_MAP = {}
  var mobCounts = { BOSS: 0, LARGE: 0, MEDIUM: 0, SMALL: 0, TURTLE: 0 }

  Object.keys(WATER_CREATURE_CONFIG).forEach(tier => {
    var tierData = WATER_CREATURE_CONFIG[tier]
    tierData.mobs.forEach(mobId => {
      global.AOF_WATER_MOB_MAP[mobId] = {
        tier: tier,
        drops: tierData.drops
      }
      mobCounts[tier]++
    })
  })

  console.info('═══════════════════════════════════════════════════════')
  console.info('[AOF] Water Creatures Drops v2.0 - EntityEvents.death')
  console.info('═══════════════════════════════════════════════════════')
  console.info(`[AOF] ✓ BOSS: ${mobCounts.BOSS} mobs`)
  console.info(`[AOF] ✓ LARGE: ${mobCounts.LARGE} mobs`)
  console.info(`[AOF] ✓ MEDIUM: ${mobCounts.MEDIUM} mobs`)
  console.info(`[AOF] ✓ SMALL: ${mobCounts.SMALL} mobs`)
  console.info(`[AOF] ✓ TURTLE: ${mobCounts.TURTLE} mobs`)
  var total = mobCounts.BOSS + mobCounts.LARGE + mobCounts.MEDIUM + mobCounts.SMALL + mobCounts.TURTLE
  console.info(`[AOF] Total: ${total} water creatures configured`)
  console.info('[AOF]')
  console.info('[AOF] 🐟 Hunt the seas for neptunium gear!')
  console.info('[AOF] 💎 Bosses = 1 random gear piece!')
  console.info('[AOF] ⚔️  Combat > Fishing!')
  console.info('[AOF] 🎯 Ready for action!')
  console.info('═══════════════════════════════════════════════════════')
}

// ═══════════════════════════════════════════════════════════
// HELPER: Get random item from gear pool
// ═══════════════════════════════════════════════════════════

function getRandomGear() {
  var index = Math.floor(Math.random() * NEPTUNIUM_GEAR_POOL.length)
  return NEPTUNIUM_GEAR_POOL[index]
}

// ═══════════════════════════════════════════════════════════
// HELPER: Get random count in range
// ═══════════════════════════════════════════════════════════

function getRandomCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// ═══════════════════════════════════════════════════════════
// MAIN EVENT HANDLER - EntityEvents.death
// ═══════════════════════════════════════════════════════════

EntityEvents.death((event) => {
  // Check if feature is enabled
  if (!global.AOF_LOOT || !global.AOF_LOOT.FEATURES.WATER_CREATURES) {
    return
  }

  var entity = event.entity
  var mobType = entity.type
  var mobMap = global.AOF_WATER_MOB_MAP

  // Check if this mob is in our mapping
  var mobData = mobMap[mobType]

  if (!mobData) {
    return
  }

  // Process each drop
  mobData.drops.forEach(drop => {
    var chance = drop.chance || 1.0

    if (Math.random() < chance) {
      // Determine item
      var item = drop.item
      if (item === 'GEAR_POOL') {
        item = getRandomGear()
      }

      // Determine count
      var count = drop.count || 1
      if (drop.countMin !== undefined && drop.countMax !== undefined) {
        count = getRandomCount(drop.countMin, drop.countMax)
      }

      // Drop the item(s)
      for (var i = 0; i < count; i++) {
        entity.block.popItem(item)
      }

      // Debug log
      var chanceStr = chance < 1.0 ? ` (${(chance * 100).toFixed(0)}%)` : ''
      console.info(`[AOF] ${mobType} [${mobData.tier}] dropped ${count}x ${item}${chanceStr}`)
    }
  })
})

/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║              Made by KnightDexx                               ║
 * ║              For Age of Fate modpack                          ║
 * ║  🔗 https://legacy.curseforge.com/minecraft/modpacks/        ║
 * ║      age-of-fate                                              ║
 * ╚═══════════════════════════════════════════════════════════════╝
**/
