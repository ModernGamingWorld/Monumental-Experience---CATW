//Priority: 1
/**
  ---╔═══╗------------╔═╗--╔═══╗--╔╗-------
  ---║╔═╗║------------║╔╝--║╔══╝-╔╝╚╗------
  ---║║ ║╠══╦══╗--╔══╦╝╚╗--║╚══╦═╩╗╔╬══╗---
  ---║╚═╝║╔╗║║═╣--║╔╗╠╗╔╝--║╔══╣╔╗║║║║═╣---
  ---║╔═╗║╚╝║║═╣--║╚╝║║║---║║--║╔╗║╚╣║═╣---
  ---╚╝ ╚╩═╗╠══╝--╚══╝╚╝---╚╝--╚╝╚╩═╩══╝---
  -------╔═╝║------------------------------
  -------╚══╝------------------------------
*/
/**

  ☻/  * @file <<=-- Global items modification --=>> script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ItemEvents.modification(event => {

  const colors = [
    'white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow',
    'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta',
    'pink', 'brown'
  ]

  // ---------- Helper functions ----------

  const modifyStack = (items, size) => {
    items.forEach(it => {
      event.modify(it, item => item.maxStackSize = size)
    })
  }

  const setMaxStackForColored = (suffix, size) => {
    colors.forEach(color => {
      event.modify(`minecraft:${color}_${suffix}`, item => item.maxStackSize = size)
    })
  }

  const setAttack = (id, dmg) => {
    event.modify(id, m => m.setAttackDamage(dmg))
  }

  const setDurability = (id, durability) => {
    event.modify(id, m => m.setMaxDamage(durability))
  }


  // ---------- Max stack size 64 ----------

  modifyStack([
    // Misc region
    /^industrialforegoing:.*addon.*/,
    /^sophisticatedbackpacks:.*upgrade.*/,
    /^sophisticatedstorage:.*upgrade.*/,
    /^thermal:.*grenade.*/,
    'cyclic:heart',
    'cyclic:heart_empty',
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:cake',
    'minecraft:minecart',
    'minecraft:saddle',
    'blue_skies:camel_saddle',
    'minecraft:shulker_box',
    'minecraft:writable_book',
    'minecraft:enchanted_book',
    'minecraft:honey_bottle',
    'minecraft:totem_of_undying',
    'minecraft:snowball',
    'minecraft:armor_stand',
    'minecraft:bucket',
    'rftoolsbase:infused_enderpearl',
    'rftoolsbase:infused_diamond',

    // Sign region
    /^minecraft:.*sign.*/,
    /^framedblocks:.*sign.*/,
    /^twilightforest:.*sign.*/,
    /^securitycraft:.*sign.*/,
    /^quark:.*sign.*/,
    /^biomeswevegone:.*sign.*/,
    /^deeperdarker:.*sign.*/,
    /^undergarden:.*sign.*/,
    /^alexscaves:.*sign.*/,
    /^forbidden_arcanus:.*sign.*/,
    /^forestry:.*sign.*/,
    /^hexerei:.*sign.*/,
    /^aether:.*sign.*/,
    /^midnight:.*sign.*/,
    /^thermal:.*sign.*/,
    /^tconstruct:.*sign.*/,
    /^supplementaries:.*sign_post.*/,

    // Boat region
    /^minecraft:.*boat.*/,
    /^quark:.*boat.*/,
    /^biomeswevegone:.*boat.*/,
    /^undergarden:.*boat.*/,
    /^securitycraft:.*boat.*/,
    /^alexscaves:.*boat.*/,
    /^deeperdarker:.*boat.*/,
    /^forbidden_arcanus:.*boat.*/,
    /^forestry:.*boat.*/,
    /^hexerei:.*boat.*/,
    /^twilightforest:.*boat.*/,
    /^midnight:.*boat.*/,

    // Ancient Tome region (NBT specific)
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:11s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:thorns",lvl:5s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:9s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:smite",lvl:10s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:10s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:knockback",lvl:5s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:5s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:looting",lvl:8s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:8s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:9s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:8s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:fortune",lvl:8s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:power",lvl:9s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:punch",lvl:5s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:8s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:lure",lvl:8s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:9s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:impaling",lvl:10s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:riptide",lvl:9s}]}'),
    Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:piercing",lvl:8s}]}'),

    // Horse armor
    'minecraft:iron_horse_armor',
    'minecraft:golden_horse_armor',
    'minecraft:diamond_horse_armor',
    'minecraft:leather_horse_armor',

    // Stew/soup
    'minecraft:mushroom_stew',
    'minecraft:rabbit_stew',
    'minecraft:beetroot_soup',
    'thermal:hearty_stew',
    'thermal:xp_stew',

    // Music discs
    'minecraft:music_disc_13',
    'minecraft:music_disc_cat',
    'minecraft:music_disc_blocks',
    'minecraft:music_disc_chirp',
    'minecraft:music_disc_far',
    'minecraft:music_disc_mall',
    'minecraft:music_disc_mellohi',
    'minecraft:music_disc_stal',
    'minecraft:music_disc_strad',
    'minecraft:music_disc_ward',
    'minecraft:music_disc_11',
    'minecraft:music_disc_wait',
    'minecraft:music_disc_otherside',
    'minecraft:music_disc_pigstep',
    'minecraft:music_disc_relic',
    'minecraft:music_disc_5',
    'botania:record_gaia_1',
    'botania:record_gaia_2',
    'alexsmobs:music_disc_thime',
    'alexsmobs:music_disc_daze',
    'alexscaves:music_disc_fusion',
    'alexscaves:music_disc_tasty',
    'ars_nouveau:music_disc_aria_biblio',
    'ars_nouveau:music_disc_thistle_the_sound_of_glass',
    'ars_nouveau:music_disc_firel_the_wild_hunt',
    'doggytalents:disc_chopin_op64_no1',
    'eidolon:music_disc_parousia',
    'eidolon:music_disc_the_living_mist',
    'environmental:music_disc_forest_dawn',
    'mowziesmobs:music_disc_petiole',
    'biomeswevegone:music_disc_pixie_club',
    'biomeswevegone:music_disc_better_days',
    'quark:music_disc_endermosh',
    'quark:music_disc_drips',
    'quark:music_disc_ocean',
    'quark:music_disc_rain',
    'quark:music_disc_wind',
    'quark:music_disc_fire',
    'quark:music_disc_clock',
    'quark:music_disc_crickets',
    'quark:music_disc_chatter',
    'blue_skies:blinding_rage',
    'blue_skies:defying_starlight',
    'blue_skies:venomous_encounter',
    'blue_skies:population',
    'supplementaries:music_disc_heave_ho',
    'undergarden:music_disc_mammoth',
    'undergarden:music_disc_limax_maximus',
    'undergarden:music_disc_relict',
    'undergarden:music_disc_gloomper_anthem',
    'twilightforest:music_disc_radiance',
    'twilightforest:music_disc_steps',
    'twilightforest:music_disc_superstitious',
    'twilightforest:music_disc_home',
    'twilightforest:music_disc_wayfarer',
    'twilightforest:music_disc_findings',
    'twilightforest:music_disc_maker',
    'twilightforest:music_disc_thread',
    'twilightforest:music_disc_motion',
    'cataclysm:music_disc_netherite_monstrosity',
    'cataclysm:music_disc_ender_guardian',
    'cataclysm:music_disc_ignis',
    'cataclysm:music_disc_the_harbinger',
    'cataclysm:music_disc_the_leviathan',
    'cataclysm:music_disc_ancient_remnant',
    'cataclysm:music_disc_maledictus',
    'cataclysm:music_disc_scylla',
    'cataclysm:music_disc_the_cataclysmfarer'
  ], 64)

  // Banners, Beds, Shulkers → all 64 stack
  setMaxStackForColored('banner', 64)
  setMaxStackForColored('bed', 64)
  setMaxStackForColored('shulker_box', 64)


  // ---------- Other changes ----------

  // Burn time for sawdust block
  event.modify('thermal:sawdust_block', item => {
    item.burnTime = 1000
  })

  // Attack damage
  setAttack('allthemodium:allthemodium_sword', 24)
  setAttack('allthemodium:alloy_sword', 74)
  setAttack('allthemodium:alloy_axe', 84)
  setAttack('allthemodium:alloy_paxel', 104)

  // Max durability
  setDurability('allthemodium:alloy_paxel', 17500)
  setDurability('mysticalagriculture:supremium_axe', 8000)
  setDurability('mysticalagradditions:supremium_paxel', 11000)
  setDurability('mysticalagriculture:awakened_supremium_axe', 9000)
  setDurability('mysticalagradditions:awakened_supremium_paxel', 13500)
  setDurability('mysticaladaptations:insanium_axe', 12000)
  setDurability('mysticaladaptations:insanium_paxel', 16000)

})
//Made by KnightDexx, for Age of Fate modpack
//https://legacy.curseforge.com/minecraft/modpacks/age-of-fate