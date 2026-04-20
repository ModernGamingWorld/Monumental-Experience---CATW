// Priority: 1
/**
 * @file        01_config.js
 * @description Global configuration for the entire AOF loot system.
 *              Modify drop rates, currency values, and feature toggles here.
 *              This file must load before all other loot system scripts.
 * @modpack     Age of Fate (AOF)
 * @author      KnightDexx
 * @version     1.2
 * @copyright   KnightDexx's Modded Minecraft World
 * @license     All Rights Reserved
 * @link        https://legacy.curseforge.com/minecraft/modpacks/age-of-fate
 */

const AOF_LOOT_CONFIG = {

  // ---------------------------------------------------------------------------
  // System Info
  // ---------------------------------------------------------------------------

  VERSION: '1.2',
  AUTHOR: 'KnightDexx',
  MODPACK: 'Age of Fate',

  // ---------------------------------------------------------------------------
  // Feature Toggles
  // ---------------------------------------------------------------------------

  FEATURES: {
    CHEST_BALANCE:   true,   // Remove OP items from chest loot
    MOB_CURRENCY:    false,  // Custom mob money drops
    MOB_ITEMS:       false,  // Custom mob item drops
    FISHING_LOOT:    true,   // Balance Aquaculture 2 fishing loot
    WATER_CREATURES: true,   // Neptunium drops from water mobs
    BLOCK_DROPS:     false,  // Ore bonuses (mining is earned, not stolen!)
    BOSS_REWARDS:    false,  // Special boss drops
  },

  // ---------------------------------------------------------------------------
  // Currency System
  // ---------------------------------------------------------------------------

  CURRENCY: {
    NOTES: {
      N1:    'kubejs:note_1',
      N2:    'kubejs:note_2',
      N5:    'kubejs:note_5',
      N10:   'kubejs:note_10',
      N20:   'kubejs:note_20',
      N50:   'kubejs:note_50',
      N100:  'kubejs:note_100',
      N200:  'kubejs:note_200',
      N500:  'kubejs:note_500',
      N1000: 'kubejs:note_1000',
    }
  },

  // ---------------------------------------------------------------------------
  // Fishing Loot Configuration
  // ---------------------------------------------------------------------------

  FISHING: {
    USE_CHEST_BLACKLIST: true, // Apply global blacklist to fishing loot too

    NEPTUNES_BOUNTY: {
      ENABLED:       true,
      REMOVE_GEAR:   true,   // Remove tools/weapons/armor from Neptune's Bounty
      KEEP_INGOTS:   true,   // Keep neptunium_ingot (needed for crafting)
      INCREASE_RATE: false,  // DISABLED - now drops from water creatures instead
    },

    // Items to explicitly keep from fishing (won't be removed by blacklist)
    WHITELIST: [
      'aquaculture:neptunium_ingot',
      'aquaculture:neptunium_nugget',
      // neptunes_bounty intentionally excluded - now drops from water creatures
    ],

    // Aquaculture-specific blacklist (applied in addition to global patterns)
    EXTRA_BLACKLIST: [
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
      'aquaculture:neptunium_fillet_knife',
    ]
  },

  // ---------------------------------------------------------------------------
  // Water Creatures Drop System
  // ---------------------------------------------------------------------------

  WATER_CREATURES: {
    ENABLED: true,

    DROPS: {
      BOSS: {
        NEPTUNES_BOUNTY_CHANCE:  0.07,  // 7%  — Rare drop
        NEPTUNIUM_GEAR_CHANCE:   0.15,  // 15% — Random tool/armor piece
        NEPTUNIUM_INGOT_MIN:     1,
        NEPTUNIUM_INGOT_MAX:     3,
      },
      LARGE: {
        NEPTUNES_BOUNTY_CHANCE:  0.05,  // 5%  — Rare
        NEPTUNIUM_GEAR_CHANCE:   0.10,  // 10% — Random tool/armor piece
        NEPTUNIUM_INGOT_CHANCE:  0.20,  // 20% — 1-2 ingots
        NEPTUNIUM_INGOT_MIN:     1,
        NEPTUNIUM_INGOT_MAX:     2,
      },
      MEDIUM: {
        NEPTUNIUM_INGOT_CHANCE:  0.05,  // 5%  — 1 ingot
        NEPTUNIUM_NUGGET_CHANCE: 0.10,  // 10% — 1-3 nuggets
        NEPTUNIUM_NUGGET_MIN:    1,
        NEPTUNIUM_NUGGET_MAX:    3,
      },
      SMALL: {
        NEPTUNIUM_NUGGET_CHANCE: 0.03,  // 3%  — 1-2 nuggets
        NEPTUNIUM_NUGGET_MIN:    1,
        NEPTUNIUM_NUGGET_MAX:    2,
      }
    },

    // Neptunium gear pool for random selection
    GEAR_POOL: [
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
      'aquaculture:neptunium_fillet_knife',
    ]
  },

  // ---------------------------------------------------------------------------
  // Mob Currency Drop Rates
  // ---------------------------------------------------------------------------

  MOB_DROPS: {
    // Tier 1: Easy Mobs — 65% total drop chance
    TIER_1: {
      N1_CHANCE: 0.35,  // 35% for $1
      N2_CHANCE: 0.20,  // 20% for $2  (cumulative 55%)
      N5_CHANCE: 0.10,  // 10% for $5  (cumulative 65%)
    },
    // Tier 2: Medium Mobs — 85% total drop chance
    TIER_2: {
      N5_CHANCE:  0.45,  // 45% for $5
      N10_CHANCE: 0.25,  // 25% for $10 (cumulative 70%)
      N20_CHANCE: 0.15,  // 15% for $20 (cumulative 85%)
    },
    // Tier 3: Hard Mobs — 95% total drop chance
    TIER_3: {
      N20_CHANCE:  0.50,  // 50% for $20
      N50_CHANCE:  0.30,  // 30% for $50  (cumulative 80%)
      N100_CHANCE: 0.15,  // 15% for $100 (cumulative 95%)
    },
    // Tier 4: Elite Mobs — 90% total drop chance
    TIER_4: {
      N50_CHANCE:  0.70,  // 70% for $50
      N100_CHANCE: 0.40,  // 40% for $100
      N200_CHANCE: 0.20,  // 20% for $200 (cumulative 90%)
    }
  },

  // ---------------------------------------------------------------------------
  // Blacklisted Items (never appear in chest loot)
  // ---------------------------------------------------------------------------

  BLACKLIST: {
    MODS: [
      'allthemodium',
      'allthecompressed',
    ],

    ITEMS: [
      'minecraft:enchanted_golden_apple',
      'minecraft:netherite_ingot',
      'minecraft:netherite_scrap',
      'minecraft:elytra',
      'minecraft:shulker_box',
    ],

    PATTERNS: [
      /.*:.*_pickaxe/,
      /.*:.*_axe/,
      /.*:.*_shovel/,
      /.*:.*_hoe/,
      /.*:.*_sword/,
      /.*:.*_helmet/,
      /.*:.*_chestplate/,
      /.*:.*_leggings/,
      /.*:.*_boots/,
    ]
  },

  // ---------------------------------------------------------------------------
  // Logging / Debug
  // ---------------------------------------------------------------------------

  DEBUG: {
    ENABLED: true,
    VERBOSE: false,
  }

}

// ---------------------------------------------------------------------------
// Export — make config globally accessible to other loot system scripts
// ---------------------------------------------------------------------------

global.AOF_LOOT = AOF_LOOT_CONFIG

console.info('[AOF] ════════════════════════════════════════')
console.info('[AOF] Loot System Configuration Loaded')
console.info(`[AOF] Version : ${AOF_LOOT_CONFIG.VERSION}`)
console.info(`[AOF] Author  : ${AOF_LOOT_CONFIG.AUTHOR}`)
console.info('[AOF] Active Features:')
Object.entries(AOF_LOOT_CONFIG.FEATURES).forEach(([key, value]) => {
  console.info(`[AOF]   ${value ? '✓' : '✗'} ${key}`)
})
console.info('[AOF] ════════════════════════════════════════')
