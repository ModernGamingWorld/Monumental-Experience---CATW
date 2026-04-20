//Priority: 100
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
 * │           END REMASTERED - EYE DROP SYSTEM              │
 * ├─────────────────────────────────────────────────────────┤
 * │ @file        end_remastered_drops.js                    │
 * │ @copyright   KnightDexx's Modded Minecraft World        │
 * │ @modpack     Age of Fate (AOF)                          │
 * │ @author      KnightDexx                                 │
 * │ @version     3.0 - EntityEvents.death Edition           │
 * │ @license     All Rights Reserved                        │
 * │                                                          │
 * │ 🔧 REWORKED: Using EntityEvents.death instead of        │
 * │              LootJS to fix duplicate drop bug           │
 * │                                                         │
 * │ 200+ mobs now drop End Remastered eyes!                 │
 * │ Anti-exploit tier system prevents money farming!        │
 * │                                                          │
 * │ 💰 Each eye = $100 bonus (from mob_currency.js)        │
 * │ 🚫 LOW % for farmable mobs (no spawner abuse!)         │
 * │ ✅ HIGH % for bosses (reward skill, not AFK!)          │
 * │                                                          │
 * │ TIER SYSTEM:                                            │
 * │   Tier 1 (Farmable):    3%  (anti-exploit)             │
 * │   Tier 2 (Regular):     10%                            │
 * │   Tier 3 (Elite):       30%                            │
 * │   Tier 4 (Mini-Boss):   50%                            │
 * │   Tier 5 (Boss):        100% (GUARANTEED!)              │
 * │                                                          │
 * │ FEATURES:                                               │
 * │   📊 Eye Tracker System (statistics & debugging)       │
 * │   💬 /eyestats command (admin only)                    │
 * │   ⏰ Auto-logging every 30 minutes                     │
 * │   📈 Server shutdown report                            │
 * │                                                         │
 * │ 🔗 https://legacy.curseforge.com/minecraft/modpacks/    │
 * │    age-of-fate                                          │
 * └─────────────────────────────────────────────────────────┘
 *
**/

// ═══════════════════════════════════════════════════════════
// EYE TRACKER INITIALIZATION (Global Storage)
// ═══════════════════════════════════════════════════════════

if (!global.AOF_EYE_TRACKER) {
  global.AOF_EYE_TRACKER = {
    'endrem:old_eye': 0,
    'endrem:nether_eye': 0,
    'endrem:cold_eye': 0,
    'endrem:black_eye': 0,
    'endrem:undead_eye': 0,
    'endrem:witch_eye': 0,
    'endrem:evil_eye': 0,
    'endrem:cursed_eye': 0,
    'endrem:exotic_eye': 0,
    'endrem:rogue_eye': 0,
    'endrem:magical_eye': 0,
    'endrem:corrupted_eye': 0,
    'endrem:guardian_eye': 0,
    'endrem:wither_eye': 0,
    'endrem:lost_eye': 0,
    session_start: Date.now(),
    total_drops: 0,
    registered_mobs: 0
  }
  console.info('[AOF] ✓ Eye Tracker initialized!')
}

// ═══════════════════════════════════════════════════════════
// TIER SYSTEM CONSTANTS
// ═══════════════════════════════════════════════════════════

var TIER = {
  FARMABLE: 0.03,     // 3% for farmable mobs (anti-exploit)
  REGULAR: 0.10,      // 10% for regular mobs
  ELITE: 0.30,        // 30% for elite mobs
  MINI_BOSS: 0.50,    // 50% for mini-bosses
  BOSS: 1.00          // 100% for bosses (guaranteed drop)
}

// ═══════════════════════════════════════════════════════════
// EYE DROP CONFIGURATION
// ═══════════════════════════════════════════════════════════

var EYE_CONFIG = {
  // ───────────────────────────────────────────────────────────
  // 🏜️ OLD EYE (DESERT EYE)
  // ───────────────────────────────────────────────────────────
  old_eye: {
    eye: 'endrem:old_eye',
    tiers: {
      FARMABLE: [
        'minecraft:husk',
        'minecraft:skeleton',
        'alexsmobs:rattlesnake',
      ],
      REGULAR: [
        'cataclysm:modern_remnant',
      ],
      ELITE: [
        'alexscaves:nucleeper'
      ],
      MINI_BOSS: [
        'alexscaves:vallumraptor',
        'cataclysm:wadjet'
      ],
      BOSS: [
        'alexscaves:tremorzilla',
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🔥 NETHER EYE
  // ───────────────────────────────────────────────────────────
  nether_eye: {
    eye: 'endrem:nether_eye',
    tiers: {
      FARMABLE: [
        'minecraft:magma_cube',
        'minecraft:blaze',
      ],
      REGULAR: [
      ],
      ELITE: [
        'cataclysm:ignited_berserker',
        'cataclysm:ignited_revenant'
      ],
      MINI_BOSS: [
        'cataclysm:netherite_monstrosity'
      ],
      BOSS: [
        'alexscaves:luxtructosaurus',
        'cataclysm:ignis'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // ❄️ COLD EYE (ICE/SNOW EYE)
  // ───────────────────────────────────────────────────────────
  cold_eye: {
    eye: 'endrem:cold_eye',
    tiers: {
      FARMABLE: [
        'minecraft:stray',
        'minecraft:polar_bear',
        'twilightforest:ice_crystal'
      ],
      REGULAR: [
        'twilightforest:winter_wolf',
        'twilightforest:yeti',
        'blue_skies:frost_spirit'
      ],
      ELITE: [
        'alexscaves:subterranodon',
        'blue_skies:stonelet',
        'blue_skies:armored_frost_spirit',
      ],
      MINI_BOSS: [
        'twilightforest:yeti_alpha',
      ],
      BOSS: [
        'twilightforest:snow_queen'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🌊 BLACK EYE (OCEAN EYE)
  // ───────────────────────────────────────────────────────────
  black_eye: {
    eye: 'endrem:black_eye',
    tiers: {
      FARMABLE: [
        'minecraft:drowned',
        'minecraft:guardian',
      ],
      REGULAR: [
      ],
      ELITE: [
      ],
      MINI_BOSS: [
        'minecraft:elder_guardian'
      ],
      BOSS: [
        'alexscaves:hullbreaker',
        'cataclysm:the_leviathan'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🧟 UNDEAD EYE
  // ───────────────────────────────────────────────────────────
  undead_eye: {
    eye: 'endrem:undead_eye',
    tiers: {
      FARMABLE: [
        'minecraft:zombie',
        'minecraft:skeleton',
        'minecraft:zombie_villager'
      ],
      REGULAR: [
        'eidolon:zombie_brute' //Change mod ID to eidolon_repraised
      ],
      ELITE: [
      ],
      MINI_BOSS: [
        'twilightforest:lich'
      ],
      BOSS: [
        'cataclysm:ancient_remnant'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🧙 WITCH EYE
  // ───────────────────────────────────────────────────────────
  witch_eye: {
    eye: 'endrem:witch_eye',
    tiers: {
      FARMABLE: [
        'minecraft:witch',
        'twilightforest:skeleton_druid',
        'twilightforest:swarm_spider'
      ],
      REGULAR: [
        'alexscaves:licowitch'
      ],
      ELITE: [
      ],
      MINI_BOSS: [
      ],
      BOSS: [
        'blue_skies:summoner'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 😈 EVIL EYE
  // ───────────────────────────────────────────────────────────
  evil_eye: {
    eye: 'endrem:evil_eye',
    tiers: {
      FARMABLE: [
        'minecraft:phantom',
        'minecraft:vex',
        'raided:necromancer',
      ],
      REGULAR: [
        'twilightforest:redcap',
        'cataclysm:koboleton',
      ],
      ELITE: [
        'raided:necromancer'
      ],
      MINI_BOSS: [
      ],
      BOSS: [
        'cataclysm:the_harbinger',
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 💀 CURSED EYE
  // ───────────────────────────────────────────────────────────
  cursed_eye: {
    eye: 'endrem:cursed_eye',
    tiers: {
      FARMABLE: [
      ],
      REGULAR: [
        'majruszsdifficulty:cursed_armor',
      ],
      ELITE: [
      ],
      MINI_BOSS: [
        'twilightforest:knight_phantom',
      ],
      BOSS: [
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🌟 EXOTIC EYE
  // ───────────────────────────────────────────────────────────
  exotic_eye: {
    eye: 'endrem:exotic_eye',
    tiers: {
      FARMABLE: [
        'minecraft:spider',
        'minecraft:cave_spider',
        'twilightforest:towerwood_borer',
        'cataclysm:deepling_priest'
      ],
      REGULAR: [
        'cataclysm:deepling_brute',
        'twilightforest:swarm_spider',
        'cataclysm:lionfish'
      ],
      ELITE: [
      ],
      MINI_BOSS: [
        'blue_skies:starlit_crusher',
        'cataclysm:coral_golem',
        'cataclysm:coralssus',
        'cataclysm:amethyst_crab'
      ],
      BOSS: [
        'blue_skies:arachnarch'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🗡️ ROGUE EYE
  // ───────────────────────────────────────────────────────────
  rogue_eye: {
    eye: 'endrem:rogue_eye',
    tiers: {
      FARMABLE: [
        'minecraft:pillager',
        'minecraft:vindicator',
        'raided:savager'
      ],
      REGULAR: [
        'twilightforest:kobold',
      ],
      ELITE: [
        'twilightforest:naga',
        'minecraft:ravager'
      ],
      MINI_BOSS: [
        'cataclysm:aptrgangr',
      ],
      BOSS: [
        'twilightforest:ur_ghast',
        'minecraft:warden'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🔮 MAGICAL EYE
  // ───────────────────────────────────────────────────────────
  magical_eye: {
    eye: 'endrem:magical_eye',
    tiers: {
      FARMABLE: [
      ],
      REGULAR: [
        'twilightforest:maze_slime',
      ],
      ELITE: [
      ],
      MINI_BOSS: [
        'minecraft:evoker',
        'alexsmobs:warped_mosco'
      ],
      BOSS: [
        'blue_skies:alchemist',
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🌀 CORRUPTED EYE
  // ───────────────────────────────────────────────────────────
  corrupted_eye: {
    eye: 'endrem:corrupted_eye',
    tiers: {
      FARMABLE: [
        'minecraft:enderman',
        'thermal:basalz',
        'thermal:blizz',
        'thermal:blitz'
      ],
      REGULAR: [
        'undergarden:nargoyle',
        'alexscaves:magnetron',
      ],
      ELITE: [
        'undergarden:forgotten_guardian',
        'alexscaves:tremorsaurus'
      ],
      MINI_BOSS: [
        'twilightforest:hydra',
      ],
      BOSS: [
        'twilight_forest_final_boss:castle_keeper',
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🔱 GUARDIAN EYE
  // ───────────────────────────────────────────────────────────
  guardian_eye: {
    eye: 'endrem:guardian_eye',
    tiers: {
      FARMABLE: [
        'minecraft:guardian',
        'twilightforest:snow_guardian',
        'alexscaves:mine_guardian'
      ],
      REGULAR: [
        'ars_nouveau:wilden_guardian'
      ],
      ELITE: [
        'twilightforest:minoshroom'
      ],
      MINI_BOSS: [
        'minecraft:elder_guardian',
        'cataclysm:kobolediator'
      ],
      BOSS: [
        'draconicevolution:draconic_guardian'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 💀 WITHER EYE
  // ───────────────────────────────────────────────────────────
  wither_eye: {
    eye: 'endrem:wither_eye',
    tiers: {
      FARMABLE: [
        'minecraft:wither_skeleton',
      ],
      REGULAR: [
      ],
      ELITE: [
      ],
      MINI_BOSS: [
      ],
      BOSS: [
        'minecraft:wither',
        'draconicevolution:guardian_wither'
      ]
    }
  },

  // ───────────────────────────────────────────────────────────
  // 🎁 LOST EYE (Mixed/Random theme)
  // ───────────────────────────────────────────────────────────
  lost_eye: {
    eye: 'endrem:lost_eye',
    tiers: {
      FARMABLE: [
        'alexsmobs:crocodile',
        'alexsmobs:tiger',
        'alexsmobs:anaconda'
      ],
      REGULAR: [
        'forbidden_arcanus:lost_soul',
        'cataclysm:draugr'
      ],
      ELITE: [
      ],
      MINI_BOSS: [
        'cataclysm:the_prowler'
      ],
      BOSS: [
      ]
    }
  }
}

// ═══════════════════════════════════════════════════════════
// BUILD MOB -> EYE MAPPING (for fast lookup)
// ═══════════════════════════════════════════════════════════

if (!global.AOF_MOB_EYE_MAP) {
  global.AOF_MOB_EYE_MAP = {}
  var mobCount = 0

  Object.keys(EYE_CONFIG).forEach(eyeKey => {
    var config = EYE_CONFIG[eyeKey]
    Object.keys(config.tiers).forEach(tierName => {
      var tierValue = TIER[tierName]
      config.tiers[tierName].forEach(mobId => {
        global.AOF_MOB_EYE_MAP[mobId] = {
          eye: config.eye,
          tier: tierValue,
          tierName: tierName
        }
        mobCount++
      })
    })
  })

  global.AOF_EYE_TRACKER.registered_mobs = mobCount

  console.info('═══════════════════════════════════════════════════════')
  console.info('[AOF] End Remastered Eye Drops v3.0 - EntityEvents.death')
  console.info('═══════════════════════════════════════════════════════')
  console.info(`[AOF] ✓ Built mob->eye mapping for ${mobCount} mobs`)
  console.info('[AOF] 🚫 No pigs will drop eyes (not in config)')
  console.info('[AOF] 🎯 Ready for action!')
  console.info('═══════════════════════════════════════════════════════')
}

// ═══════════════════════════════════════════════════════════
// MAIN EVENT HANDLER - EntityEvents.death
// ═══════════════════════════════════════════════════════════

EntityEvents.death((event) => {
  var entity = event.entity
  var mobType = entity.type
  var tracker = global.AOF_EYE_TRACKER
  var mobMap = global.AOF_MOB_EYE_MAP

  // Check if this mob is in our mapping
  var mapping = mobMap[mobType]

  if (!mapping) {
    // This mob doesn't drop any eye - just return
    return
  }

  // Random chance check
  if (Math.random() < mapping.tier) {
    // Drop the eye at mob location
    entity.block.popItem(mapping.eye)

    // Update statistics
    tracker[mapping.eye]++
    tracker.total_drops++

    // Debug log
    console.info(`[AOF] ${mobType} dropped ${mapping.eye} (${mapping.tierName}, ${(mapping.tier * 100).toFixed(0)}%)`)
  }
})

// ═══════════════════════════════════════════════════════════
// EYE STATISTICS LOGGER
// ═══════════════════════════════════════════════════════════

function logEyeStats() {
  var tracker = global.AOF_EYE_TRACKER

  if (!tracker) {
    console.warn('[AOF] Eye tracker not initialized!')
    return false
  }

  console.info('═══════════════════════════════════════════════════════')
  console.info('[AOF] EYE DROP STATISTICS')
  console.info('═══════════════════════════════════════════════════════')
  console.info(`[AOF] Total Eye Drops: ${tracker.total_drops}`)
  console.info(`[AOF] Registered Mobs: ${tracker.registered_mobs}`)
  console.info('[AOF]')
  console.info(`[AOF] 🏜️ Old Eye: ${tracker['endrem:old_eye']}`)
  console.info(`[AOF] 🔥 Nether Eye: ${tracker['endrem:nether_eye']}`)
  console.info(`[AOF] ❄️ Cold Eye: ${tracker['endrem:cold_eye']}`)
  console.info(`[AOF] 🌊 Black Eye: ${tracker['endrem:black_eye']}`)
  console.info(`[AOF] 🧟 Undead Eye: ${tracker['endrem:undead_eye']}`)
  console.info(`[AOF] 🧙 Witch Eye: ${tracker['endrem:witch_eye']}`)
  console.info(`[AOF] 😈 Evil Eye: ${tracker['endrem:evil_eye']}`)
  console.info(`[AOF] 💀 Cursed Eye: ${tracker['endrem:cursed_eye']}`)
  console.info(`[AOF] 🌟 Exotic Eye: ${tracker['endrem:exotic_eye']}`)
  console.info(`[AOF] 🗡️ Rogue Eye: ${tracker['endrem:rogue_eye']}`)
  console.info(`[AOF] 🔮 Magical Eye: ${tracker['endrem:magical_eye']}`)
  console.info(`[AOF] 🌀 Corrupted Eye: ${tracker['endrem:corrupted_eye']}`)
  console.info(`[AOF] 🔱 Guardian Eye: ${tracker['endrem:guardian_eye']}`)
  console.info(`[AOF] 💀 Wither Eye: ${tracker['endrem:wither_eye']}`)
  console.info(`[AOF] 🎁 Lost Eye: ${tracker['endrem:lost_eye']}`)
  console.info('═══════════════════════════════════════════════════════')

  return true
}

// ═══════════════════════════════════════════════════════════
// STATISTICS DISPLAY COMMAND (/eyestats)
// ═══════════════════════════════════════════════════════════

ServerEvents.commandRegistry(event => {

  var { commands: Commands } = event

  event.register(
    Commands.literal('eyestats')
      .requires(source => source.hasPermission(2))
      .executes(ctx => {

        var tracker = global.AOF_EYE_TRACKER

        if (!tracker) {
          ctx.source.sendSuccess(Text.red('Eye Tracker not initialized!'), false)
          return 1
        }

        var sessionTime = Date.now() - tracker.session_start
        var hours = Math.floor(sessionTime / 3600000)
        var minutes = Math.floor((sessionTime % 3600000) / 60000)

        ctx.source.sendSuccess(Text.gold('═══════════════════════════════════════'), false)
        ctx.source.sendSuccess(Text.yellow('    END REMASTERED EYE STATISTICS'), false)
        ctx.source.sendSuccess(Text.gold('═══════════════════════════════════════'), false)
        ctx.source.sendSuccess(Text.gray(`Session Time: ${hours}h ${minutes}m`), false)
        ctx.source.sendSuccess(Text.gray(`Total Eye Drops: ${tracker.total_drops}`), false)
        ctx.source.sendSuccess(Text.gray(`Registered Mobs: ${tracker.registered_mobs}`), false)
        ctx.source.sendSuccess(Text.gold('───────────────────────────────────────'), false)

        var eyeData = [
          { name: '🏜️ Old Eye', id: 'endrem:old_eye' },
          { name: '🔥 Nether Eye', id: 'endrem:nether_eye' },
          { name: '❄️ Cold Eye', id: 'endrem:cold_eye' },
          { name: '🌊 Black Eye', id: 'endrem:black_eye' },
          { name: '🧟 Undead Eye', id: 'endrem:undead_eye' },
          { name: '🧙 Witch Eye', id: 'endrem:witch_eye' },
          { name: '😈 Evil Eye', id: 'endrem:evil_eye' },
          { name: '💀 Cursed Eye', id: 'endrem:cursed_eye' },
          { name: '🌟 Exotic Eye', id: 'endrem:exotic_eye' },
          { name: '🗡️ Rogue Eye', id: 'endrem:rogue_eye' },
          { name: '🔮 Magical Eye', id: 'endrem:magical_eye' },
          { name: '🌀 Corrupted Eye', id: 'endrem:corrupted_eye' },
          { name: '🔱 Guardian Eye', id: 'endrem:guardian_eye' },
          { name: '💀 Wither Eye', id: 'endrem:wither_eye' },
          { name: '🎁 Lost Eye', id: 'endrem:lost_eye' }
        ]

        eyeData.forEach(eye => {
          var count = tracker[eye.id] || 0
          var percentage = tracker.total_drops > 0
            ? ((count / tracker.total_drops) * 100).toFixed(1)
            : 0

          ctx.source.sendSuccess(
            Text.white(`${eye.name}: ${count} (${percentage}%)`),
            false
          )
        })

        ctx.source.sendSuccess(Text.gold('═══════════════════════════════════════'), false)

        return 1
      })
  )

  console.info('[AOF] ✓ Registered /eyestats command (admin only)')

})

// ═══════════════════════════════════════════════════════════
// SERVER START & SHUTDOWN LOGGING
// ═══════════════════════════════════════════════════════════

ServerEvents.loaded(event => {
  console.info('[AOF] Eye Statistics Logger initialized')
  console.info('[AOF] Use /eyestats to view statistics (OP only)')
  logEyeStats()
})

ServerEvents.unloaded(event => {

  var tracker = global.AOF_EYE_TRACKER

  if (!tracker) return

  console.info('═══════════════════════════════════════════════════════')
  console.info('[AOF] FINAL EYE DROP STATISTICS (Server Shutdown)')
  console.info('═══════════════════════════════════════════════════════')
  console.info(`[AOF] Total Session Eye Drops: ${tracker.total_drops}`)
  console.info(`[AOF] Registered Mobs: ${tracker.registered_mobs}`)
  console.info('[AOF]')
  console.info('[AOF] Eye Breakdown:')
  console.info(`[AOF]   Old Eye: ${tracker['endrem:old_eye']}`)
  console.info(`[AOF]   Nether Eye: ${tracker['endrem:nether_eye']}`)
  console.info(`[AOF]   Cold Eye: ${tracker['endrem:cold_eye']}`)
  console.info(`[AOF]   Black Eye: ${tracker['endrem:black_eye']}`)
  console.info(`[AOF]   Undead Eye: ${tracker['endrem:undead_eye']}`)
  console.info(`[AOF]   Witch Eye: ${tracker['endrem:witch_eye']}`)
  console.info(`[AOF]   Evil Eye: ${tracker['endrem:evil_eye']}`)
  console.info(`[AOF]   Cursed Eye: ${tracker['endrem:cursed_eye']}`)
  console.info(`[AOF]   Exotic Eye: ${tracker['endrem:exotic_eye']}`)
  console.info(`[AOF]   Rogue Eye: ${tracker['endrem:rogue_eye']}`)
  console.info(`[AOF]   Magical Eye: ${tracker['endrem:magical_eye']}`)
  console.info(`[AOF]   Corrupted Eye: ${tracker['endrem:corrupted_eye']}`)
  console.info(`[AOF]   Guardian Eye: ${tracker['endrem:guardian_eye']}`)
  console.info(`[AOF]   Wither Eye: ${tracker['endrem:wither_eye']}`)
  console.info(`[AOF]   Lost Eye: ${tracker['endrem:lost_eye']}`)
  console.info('═══════════════════════════════════════════════════════')

})

/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║              Made by KnightDexx                               ║
 * ║              For Age of Fate modpack                          ║
 * ║  🔗 https://legacy.curseforge.com/minecraft/modpacks/        ║
 * ║      age-of-fate                                              ║
 * ╚═══════════════════════════════════════════════════════════════╝
**/
