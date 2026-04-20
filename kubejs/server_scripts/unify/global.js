//Priority: 100
/**
  
  █▀▄▀█ █▀█ █▄░█ █░█ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ █░░   █▀▀ ▀▄▀ █▀█ █▀▀ █▀█ █ █▀▀ █▄░█ █▀▀ █▀▀
  █░▀░█ █▄█ █░▀█ █▄█ █░▀░█ ██▄ █░▀█ ░█░ █▀█ █▄▄   ██▄ █░█ █▀▀ ██▄ █▀▄ █ ██▄ █░▀█ █▄▄ ██▄

  ☻/  * @file Global scripts
  /▌  * @copyright KnightDexx's Modded Minecraft World & ModernGamingWorld
  /▌  * Modified by @Cyn-SolveroftheAbsoluteGremlins on Discord
  /\

*/
//Priority: 100
global.auTags = {
    dusts: [],
    gears: [],
    ingots: [],
    nuggets: [],
    plates: [],
    raw_materials: [],
    rods: [],
    storage_blocks: [],
    wires: []
}

global.loaded = {
    ATO_Loaded: 'alltheores' in Platform.mods,
    Allthemodium_Loaded: 'allthemodium' in Platform.mods,
    AdAstra_Loaded: 'ad_astra' in Platform.mods,
    Ae2_Loaded: 'ae2' in Platform.mods,
    BigReactors_Loaded: 'bigreactors' in Platform.mods,
    Botania_Loaded: 'botania' in Platform.mods,
    Blue_Skies_Loaded: 'blue_skies' in Platform.mods,
    Create_Loaded: 'create' in Platform.mods,
    CreateAdd_Loaded: 'createaddition' in Platform.mods,
    Eidolon_Loaded: 'eidolon' in Platform.mods,
    Forestry_Loaded: 'forestry' in Platform.mods,
    IE_Loaded: 'immersiveengineering' in Platform.mods,
    IF_Loaded: 'industrialforegoing' in Platform.mods,
    Mek_Loaded: 'mekanism' in Platform.mods,
    Occult_Loaded: 'occultism' in Platform.mods,
    Pneumaticcraft_Loaded: 'pneumaticcraft' in Platform.mods,
    Thermal_Loaded: 'thermal' in Platform.mods,
    Tinkers_Loaded: 'tconstruct' in Platform.mods,
    Undergarden_Loaded: 'undergarden' in Platform.mods
}

global.alloys = [
    'steel','invar','electrum','bronze','enderium',
    'lumium','signalum','constantan','brass'
]

global.blueskies = [
    'aquite','charoite','falsite','horizonite','ventium'
]

/**
 * Returns the preferred item for a given AU tag.
 * @param {string} type
 * @param {string} material
 * @returns Internal.ItemStack
 */
global.itemFromTag = function(type, material) {
    let item = AlmostUnified.getPreferredItemForTag(`forge:${type}/${material}`)
    if (!item || item.isEmpty()) {
        let ing = Ingredient.of(`#forge:${type}/${material}`)
        if (!ing.isEmpty() && ing.itemIds.length > 1 && global.devLogging) {
            console.log(`${type}/${material} has more than 1 item and is not unified by AU`)
        }
        item = ing.getFirst()
    }
    return item
}

// Populate global.auTags after all recipes are loaded
ServerEvents.recipes(event => {
    AlmostUnified.getTags().forEach(tag => {
        let tagString = tag.toString()
        let match = /forge:(dusts|gears|ingots|nuggets|plates|raw_materials|rods|storage_blocks|wires)\/(.+?)$/.exec(tagString)
        if (match) {
            let type = match[1]
            let material = match[2]
            if (!global.auTags[type].includes(material)) {
                global.auTags[type].push(material)
            }
        }
    })
})
