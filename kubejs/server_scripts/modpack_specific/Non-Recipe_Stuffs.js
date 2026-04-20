// Priority: 1
/**
 * @file        non_recipe_stuffs.js
 * @description Miscellaneous server-side event fixes:
 *                - Opolis Utilities death stone → Tombstone grave key swap on respawn
 *                - Enigmatic Delicacy bush fruit fix on right-click
 *                - Bucket condenser (filling / emptying mode toggling)
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @author      @Cyn-SolveroftheAbsoluteGremlins on Discord
 */
// ---------------------------------------------------------------------------
// Opolis Utilities — Replace death stone with Tombstone grave key on respawn
// ---------------------------------------------------------------------------

PlayerEvents.respawned(event => {
    const stoneSlot = event.player.inventory.find(Item.of('opolisutilities:death_stone'))
    if (stoneSlot < 0) return

    const keySlot = event.player.inventory.find(Item.of('tombstone:grave_key'))
    const keyNbt = event.player.getSlot(keySlot).get().nbt

    event.player.inventory.setStackInSlot(stoneSlot, Item.of('tombstone:grave_key', 1, keyNbt))
    event.player.getSlot(keySlot).get().shrink(1)
})

// ---------------------------------------------------------------------------
// Bucket Condenser — Helper function
// ---------------------------------------------------------------------------
/**
 * @description Check if a string is acceptable for condensing
 * @description If it returns false it's not acceptable
 * @description If it returns the bucket it is acceptable
 * @param {string} test
 */
function allowed(test) {
    let whitelist = [
        "minecraft:water_bucket",
        "minecraft:lava_bucket",
        "minecraft:powder_snow_bucket",
        "minecraft:milk_bucket",
        "biomesoplenty:blood_bucket",
        "industrialforegoing:latex_bucket",
        "industrialforegoing:meat_bucket",
        "industrialforegoing:sewage_bucket",
        "industrialforegoing:essence_bucket",
        "industrialforegoing:sludge_bucket",
        "industrialforegoing:pink_slime_bucket",
        "industrialforegoing:biofuel_bucket",
        "industrialforegoing:ether_gas_bucket",
        "industrialforegoing:raw_ore_meat_bucket",
        "industrialforegoing:fermented_ore_meat_bucket",
        "securitycraft:bucket_f_water",
        "securitycraft:bucket_f_lava",
        "ad_astra:oxygen_bucket",
        "ad_astra:hydrogen_bucket",
        "ad_astra:oil_bucket",
        "ad_astra:fuel_bucket",
        "ad_astra:cryo_fuel_bucket",
        "mekanism:hydrogen_bucket",
        "mekanism:oxygen_bucket",
        "mekanism:chlorine_bucket",
        "mekanism:sulfur_dioxide_bucket",
        "mekanism:sulfur_trioxide_bucket",
        "mekanism:sulfuric_acid_bucket",
        "mekanism:hydrogen_chloride_bucket",
        "mekanism:hydrofluoric_acid_bucket",
        "mekanism:uranium_oxide_bucket",
        "mekanism:uranium_hexafluoride_bucket",
        "mekanism:ethene_bucket",
        "mekanism:sodium_bucket",
        "mekanism:superheated_sodium_bucket",
        "mekanism:brine_bucket",
        "mekanism:lithium_bucket",
        "mekanism:steam_bucket",
        "mekanism:heavy_water_bucket",
        "mekanism:nutritional_paste_bucket",
        "mekanismgenerators:bioethanol_bucket",
        "mekanismgenerators:deuterium_bucket",
        "mekanismgenerators:fusion_fuel_bucket",
        "mekanismgenerators:tritium_bucket",
        "alexscaves:acid_bucket",
        "alexscaves:purple_soda_bucket",
        "create:honey_bucket",
        "create:chocolate_bucket",
        "createchromaticreturn:shadow_essence_bucket",
        "createchromaticreturn:refined_mixture_bucket",
        "cyclic:xpjuice_bucket",
        "cyclic:slime_bucket",
        "cyclic:biomass_bucket",
        "cyclic:honey_bucket",
        "cyclic:magma_bucket",
        "cyclic:wax_bucket",
        "pneumaticcraft:biodiesel_bucket",
        "pneumaticcraft:diesel_bucket",
        "pneumaticcraft:etching_acid_bucket",
        "pneumaticcraft:ethanol_bucket",
        "pneumaticcraft:gasoline_bucket",
        "pneumaticcraft:kerosene_bucket",
        "pneumaticcraft:lpg_bucket",
        "pneumaticcraft:lubricant_bucket",
        "pneumaticcraft:memory_essence_bucket",
        "pneumaticcraft:oil_bucket",
        "pneumaticcraft:plastic_bucket",
        "pneumaticcraft:vegetable_oil_bucket",
        "pneumaticcraft:yeast_culture_bucket",
        "bloodmagic:life_essence_bucket",
        "bloodmagic:doubt_bucket",
        "supplementaries:lumisene_bucket",
        "experienceobelisk:cognitium_bucket",
        "createaddition:seed_oil_bucket",
        "createaddition:bioethanol_bucket",
        "create_enchantment_industry:ink_bucket",
        "enderio:nutrient_distillation_bucket",
        "enderio:dew_of_the_void_bucket",
        "enderio:vapor_of_levity_bucket",
        "enderio:hootch_bucket",
        "enderio:rocket_fuel_bucket",
        "enderio:fire_water_bucket",
        "enderio:xp_juice_bucket",
        "enderio:liquid_sunshine_bucket",
        "enderio:cloud_seed_bucket",
        "enderio:cloud_seed_concentrated_bucket",
        "bigreactors:steam_bucket",
        "bigreactors:yellorium_bucket",
        "bigreactors:cyanite_bucket",
        "bigreactors:blutonium_bucket",
        "bigreactors:magentite_bucket",
        "bigreactors:verderium_bucket",
        "bigreactors:rossinite_bucket",
        "bigreactors:cryomisi_bucket",
        "bigreactors:tangerium_bucket",
        "bigreactors:redfrigium_bucket",
        "forcecraft:force_bucket",
        "forestry:bucket_bio_ethanol",
        "forestry:bucket_biomass",
        "forestry:bucket_glass",
        "forestry:bucket_honey",
        "forestry:bucket_ice",
        "forestry:bucket_juice",
        "forestry:bucket_seed_oil",
        "forestry:bucket_short_mead",
        "gendustry:bucket_mutagen",
        "gendustry:bucket_liquid_dna",
        "gendustry:bucket_protein",
        "immersiveengineering:creosote_bucket",
        "immersiveengineering:plantoil_bucket",
        "immersiveengineering:ethanol_bucket",
        "immersiveengineering:biodiesel_bucket",
        "immersiveengineering:concrete_bucket",
        "immersiveengineering:herbicide_bucket",
        "immersiveengineering:redstone_acid_bucket",
        "immersiveengineering:acetaldehyde_bucket",
        "immersiveengineering:phenolic_resin_bucket",
        "hexerei:blood_bucket",
        "hexerei:tallow_bucket",
        "hexerei:quicksilver_bucket",
        "mysticalagradditions:molten_inferium_bucket",
        "mysticalagradditions:molten_prudentium_bucket",
        "mysticalagradditions:molten_tertium_bucket",
        "mysticalagradditions:molten_imperium_bucket",
        "mysticalagradditions:molten_supremium_bucket",
        "mysticalagradditions:molten_soulium_bucket",
        "the_bumblezone:sugar_water_bucket",
        "the_bumblezone:royal_jelly_bucket",
        "the_bumblezone:honey_bucket",
        "undergarden:virulent_mix_bucket",
        "thermal:redstone_bucket",
        "thermal:glowstone_bucket",
        "thermal:ender_bucket",
        "thermal:sap_bucket",
        "thermal:syrup_bucket",
        "thermal:resin_bucket",
        "thermal:tree_oil_bucket",
        "thermal:latex_bucket",
        "thermal:creosote_bucket",
        "thermal:crude_oil_bucket",
        "thermal:heavy_oil_bucket",
        "thermal:light_oil_bucket",
        "thermal:refined_fuel_bucket",
        "tconstruct:earth_slime_bucket",
        "tconstruct:sky_slime_bucket",
        "tconstruct:ichor_bucket",
        "tconstruct:ender_slime_bucket",
        "tconstruct:magma_bucket",
        "tconstruct:venom_bucket",
        "tconstruct:honey_bucket",
        "tconstruct:beetroot_soup_bucket",
        "tconstruct:mushroom_stew_bucket",
        "tconstruct:rabbit_stew_bucket",
        "tconstruct:meat_soup_bucket",
        "tconstruct:seared_stone_bucket",
        "tconstruct:scorched_stone_bucket",
        "tconstruct:molten_clay_bucket",
        "tconstruct:molten_glass_bucket",
        "tconstruct:molten_obsidian_bucket",
        "tconstruct:liquid_soul_bucket",
        "tconstruct:molten_ender_bucket",
        "tconstruct:blazing_blood_bucket",
        "tconstruct:molten_emerald_bucket",
        "tconstruct:molten_quartz_bucket",
        "tconstruct:molten_amethyst_bucket",
        "tconstruct:molten_diamond_bucket",
        "tconstruct:molten_debris_bucket",
        "tconstruct:molten_copper_bucket",
        "tconstruct:molten_iron_bucket",
        "tconstruct:molten_gold_bucket",
        "tconstruct:molten_cobalt_bucket",
        "tconstruct:molten_steel_bucket",
        "tconstruct:molten_slimesteel_bucket",
        "tconstruct:molten_amethyst_bronze_bucket",
        "tconstruct:molten_rose_gold_bucket",
        "tconstruct:molten_pig_iron_bucket",
        "tconstruct:molten_cinderslime_bucket",
        "tconstruct:molten_queens_slime_bucket",
        "tconstruct:molten_manyullyn_bucket",
        "tconstruct:molten_hepatizon_bucket",
        "tconstruct:molten_netherite_bucket",
        "tconstruct:molten_knightmetal_bucket",
        "tconstruct:molten_tin_bucket",
        "tconstruct:molten_aluminum_bucket",
        "tconstruct:molten_lead_bucket",
        "tconstruct:molten_silver_bucket",
        "tconstruct:molten_nickel_bucket",
        "tconstruct:molten_zinc_bucket",
        "tconstruct:molten_platinum_bucket",
        "tconstruct:molten_tungsten_bucket",
        "tconstruct:molten_osmium_bucket",
        "tconstruct:molten_uranium_bucket",
        "tconstruct:molten_bronze_bucket",
        "tconstruct:molten_brass_bucket",
        "tconstruct:molten_electrum_bucket",
        "tconstruct:molten_invar_bucket",
        "tconstruct:molten_constantan_bucket",
        "tconstruct:molten_pewter_bucket",
        "tconstruct:molten_enderium_bucket",
        "tconstruct:molten_lumium_bucket",
        "tconstruct:molten_signalum_bucket",
        "tconstruct:molten_refined_glowstone_bucket",
        "tconstruct:molten_refined_obsidian_bucket",
        "tconstruct:molten_steeleaf_bucket",
        "tconstruct:fiery_liquid_bucket",
        "create_central_kitchen:tomato_sauce_bucket",
        "create_central_kitchen:mulberry_jam_bucket",
        "actuallyadditions:canola_oil_bucket",
        "actuallyadditions:refined_canola_oil_bucket",
        "actuallyadditions:crystallized_oil_bucket",
        "actuallyadditions:empowered_oil_bucket",
        "tcintegrations:molten_manasteel_bucket",
        "tcintegrations:molten_neptunium_bucket",
        "tcintegrations:molten_source_gem_bucket",
        "tcintegrations:molten_cloggrum_bucket",
        "tcintegrations:molten_froststeel_bucket",
        "tcintegrations:molten_forgotten_metal_bucket",
        "tcintegrations:molten_desh_bucket",
        "tcintegrations:molten_ostrum_bucket",
        "tcintegrations:molten_calorite_bucket",
        "strainers:eroding_water_bucket",
        "strainers:purified_water_bucket",
        "woot_revived:vitality_fuel_fluid_bucket",
        "woot_revived:pure_dye_fluid_bucket",
        "woot_revived:enchanted_fluid_bucket",
        "woot_revived:mob_tears_fluid_bucket"
    ]
    if (whitelist.some(v => test.includes(v))) {
        return (test)
    } else return (false)
}

BlockEvents.rightClicked(event => {
    // Ensure it only processes each action once, instead of once per hand
    if (event.hand != 'MAIN_HAND') return
    // ---------------------------------------------------------------------------
    // Enigmatic Delicacy — Fix bush fruit drop on right-click at max age
    // ---------------------------------------------------------------------------
    if (event.block.id === 'enigmaticdelicacy:enigmatic_bush' && event.block.getProperties().age.toString() === '7') {
        event.block.set('enigmaticdelicacy:enigmatic_bush')

        const fruitColor = Math.floor(Math.random() * 14) + 1
        const fruitAmount = Math.floor(Math.random() * 2) + 1

        if (fruitColor <= 7) {
            event.player.give(Item.of('enigmaticdelicacy:enigmatic_fruit', fruitAmount, `{AssignedColor:0.${fruitColor}f}`))
        }

        event.cancel()
    }
    // ---------------------------------------------------------------------------
    // Bucket Condenser — Right-click on block to fill/empty
    // ---------------------------------------------------------------------------
    const mainHand = event.player.mainHandItem
    const mainHandID = mainHand.id
    const mainHandNBT = mainHand.getNbt()
    const offHand = event.player.offHandItem
    const offHandID = offHand.id
    const perData = event.player.persistentData

    if (mainHand.getNbtString().contains('Enchantments:[{}]')) {
        // --- Condensed bucket (filling mode entry) ---
        if (mainHandID === 'minecraft:bucket') {
            if (mainHandNBT.stored >= 64) {
                event.player.tell("You're in filling mode and your bucket's too full!")
                event.cancel()
                return
            }
            if (offHandID != 'minecraft:bucket') {
                event.player.tell('You need a bucket in your off-hand!')
                event.cancel()
                return
            }

            // Notify at every 16-bucket milestone
            if ((mainHandNBT.stored + 1) % 16 == 0) {
                event.player.tell(`Your bucket has ${mainHandNBT.stored + 1} condensed buckets in it!`)
            }

            perData.putInt('store', mainHandNBT.stored)
            perData.putInt('switch', 1)
            return
        }

        // --- Condensed bucket (emptying mode entry) ---
        if (allowed(mainHandID) != false && mainHandNBT.stored > 1) {
            // Notify at every 16-bucket milestone
            if ((mainHandNBT.stored - 1) % 16 == 0) {
                event.player.tell(`Your bucket has ${mainHandNBT.stored - 1} condensed buckets in it!`)
            }

            perData.putInt('store', mainHandNBT.stored)
            perData.putInt('switch', 2)
            return
        }
    }
})
// ---------------------------------------------------------------------------
// Bucket Condenser — Right-click on block to fill/empty
// ---------------------------------------------------------------------------
const $FillBucketEvent = Java.loadClass('net.minecraftforge.event.entity.player.FillBucketEvent')
NativeEvents.onEvent($FillBucketEvent, (/** @type {Internal.PlayerEvent.FillBucketEvent} */event) => {
    const player = event.entity
    const mainHand = player.mainHandItem
    const mainHandID = mainHand.id
    const mainHandNBT = mainHand.getNbt()
    const offHand = player.offHandItem
    const offHandID = offHand.id
    const perData = player.persistentData
    if (mainHand.getNbtString().contains('Enchantments:[{}]')) {
        // --- Condensed bucket (filling mode entry) ---
        if (mainHandID === 'minecraft:bucket') {
            if (mainHandNBT.stored >= 64) {
                event.setCanceled(true)
                return
            }
            if (offHandID != 'minecraft:bucket') {
                event.setCanceled(true)
                return
            }

            perData.putInt('store', mainHandNBT.stored)
            perData.putInt('switch', 1)
            return
        }

        // --- Condensed bucket (emptying mode entry) ---
        if (allowed(mainHandID) != false && mainHandNBT.stored > 1) {
            perData.putInt('store', mainHandNBT.stored)
            perData.putInt('switch', 2)
            return
        }
    }
})

// ---------------------------------------------------------------------------
// Bucket Condenser — Right-click on entity to fill/empty
// ---------------------------------------------------------------------------
ItemEvents.entityInteracted(event => {
    const mainHand = event.player.mainHandItem
    const mainHandID = mainHand.id
    const mainHandNBT = mainHand.getNbt()
    const offHandID = event.player.offHandItem.id
    const perData = event.player.persistentData

    if (mainHand.getNbtString().contains('Enchantments:[{}]')) {
        // --- Condensed bucket (filling mode entry) ---
        if (mainHandID === 'minecraft:bucket') {
            if (mainHandNBT.stored >= 64) {
                event.player.tell("You're in filling mode and your bucket's too full!")
                event.cancel()
                return
            }
            if (offHandID != 'minecraft:bucket') {
                event.player.tell('You need a bucket in your off-hand!')
                event.cancel()
                return
            }

            // Notify at every 16-bucket milestone
            if ((mainHandNBT.stored + 1) % 16 == 0) {
                event.player.tell(`Your bucket has ${mainHandNBT.stored + 1} condensed buckets in it!`)
            }

            perData.putInt('store', mainHandNBT.stored)
            perData.putInt('switch', 1)
            return
        }

        // --- Condensed bucket (emptying mode entry) ---
        if (allowed(mainHandID) != false && mainHandNBT.stored > 1) {
            // Notify at every 16-bucket milestone
            if ((mainHandNBT.stored - 1) % 16 == 0) {
                event.player.tell(`Your bucket has ${mainHandNBT.stored - 1} condensed buckets in it!`)
            }

            perData.putInt('store', mainHandNBT.stored)
            perData.putInt('switch', 2)
            return
        }
    }
})
// ---------------------------------------------------------------------------
// Bucket Condenser — Left-click to toggle fill/empty mode
// ---------------------------------------------------------------------------

ItemEvents.firstLeftClicked(event => {
    const mainHand = event.player.mainHandItem
    const mainHandID = mainHand.id
    const mainHandNBT = mainHand.getNbt() || { stored: 1, storedBucket: allowed(mainHandID).toString() }
    if (allowed(mainHandID) != false || (mainHandID === 'minecraft:bucket' && mainHand.getNbtString().contains('Enchantments:[{}]'))) {

        // Crouch + left-click = show current count
        if (event.player.isCrouching()) {
            const count = mainHandNBT.stored ?? 1
            event.player.tell(`You currently have ${count} bucket${count === 1 ? '' : 's'} condensed!`)
            return
        }

        // Left-click = toggle between filling and emptying mode
        if (allowed(mainHandID) != false) {
            event.player.tell('Filling mode enabled — left-click to switch to emptying mode!')
            event.player.setMainHandItem(Item.of('minecraft:bucket', 1, { stored: mainHandNBT.stored, storedBucket: allowed(mainHandID).toString(), Enchantments: [{}] }))
            event.player.persistentData.putString('storedBuck', allowed(mainHandID).toString())
        } else if (mainHandID === 'minecraft:bucket' && allowed(mainHandNBT.storedBucket) != false) {
            event.player.tell('Emptying mode enabled — left-click to switch to filling mode!')
            event.player.setMainHandItem(Item.of(mainHandNBT.storedBucket, 1, mainHandNBT))
            event.player.persistentData.putString('storedBuck', mainHandNBT.storedBucket)
        }
    }
})


// ---------------------------------------------------------------------------
// Bucket Condenser — Tick handler: apply the queued fill/empty action
// ---------------------------------------------------------------------------
PlayerEvents.tick(event => {
    const player = event.player
    const mainHand = player.mainHandItem
    const mainHandID = mainHand.id
    const offHand = player.offHandItem
    const offHandID = offHand.id
    const perData = player.persistentData
    const store = perData.getInt('store')
    const storedBuck = perData.getString('storedBuck')
    const storedEnch = { stored: store, Enchantments: [{}], storedBucket: storedBuck }

    if (perData.getInt('switch') > 0) {
        // --- Fill action: bucket placed → increment stored count ---
        if (perData.getInt('switch') === 1 && mainHandID === storedBuck) {
            storedEnch.stored++
            player.setMainHandItem(Item.of('minecraft:bucket', 1, storedEnch))
            offHand.shrink(1)
        }

        // --- Empty action: condensed bucket used → decrement stored count ---
        if (perData.getInt('switch') === 2 && mainHandID === 'minecraft:bucket') {
            storedEnch.stored--
            player.setMainHandItem(Item.of(storedBuck, 1, storedEnch))

            // Return the empty bucket to the player
            if (offHandID === 'minecraft:bucket' && offHand.count < 64) {
                player.setOffHandItem(`${offHand.count + 1}x minecraft:bucket`)
            } else if (offHandID === 'minecraft:air') {
                player.setOffHandItem('minecraft:bucket')
            } else {
                player.give('minecraft:bucket')
            }
        }
        // Set all persistent data to placeholder values
        perData.putInt('switch', 0)
        perData.putInt('store', 0)
    }
})