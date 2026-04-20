//Priority: 100
/**
  
  █▀▄▀█ █▀█ █▄░█ █░█ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ █░░   █▀▀ ▀▄▀ █▀█ █▀▀ █▀█ █ █▀▀ █▄░█ █▀▀ █▀▀
  █░▀░█ █▄█ █░▀█ █▄█ █░▀░█ ██▄ █░▀█ ░█░ █▀█ █▄▄   ██▄ █░█ █▀▀ ██▄ █▀▄ █ ██▄ █░▀█ █▄▄ ██▄

  ☻/  * @file Global scripts
  /▌  * @copyright KnightDexx's Modded Minecraft World & ModernGamingWorld
  /▌  * Modified by @Cyn-SolveroftheAbsoluteGremlins on Discord
  /\

//Priority: 100
/**
 * Full AU + AllTheOres Master Unifier (with Dusts, Gears, Ingots, Nuggets, Plates, Rods, Raw Materials, Storage Blocks, and Wires)
 */

/**
 * @param {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param {string} outP - Item output
 */
function boilRec(e, outP, ingO) {
    /*let recTypes = [
        'bloodmagic:arc',
        'tconstruct:melting'
    ]*/
    let boil = []
    if (Item.exists(`alltheores:${outP}_crystal`)) {
        boil.push(
            { output: `alltheores:${outP}_crystal`, type1: 'mekanism:crystallizing' },
            { output: `alltheores:${outP}_shard`, type1: 'mekanism:injecting', type2: 'create:filling', type3: 'immersiveengineering:bottling_machine' },
            { output: `alltheores:${outP}_clump`, type1: 'mekanism:purifying' },
            { output: `alltheores:dirty_${outP}_dust`, type1: 'mekanism:crushing', type2: 'create:crushing' }
        )
    }
    if (Item.exists(`allthemodium:${outP}_crystal`)) {
        boil.push(
            { output: `allthemodium:${outP}_crystal`, type1: 'mekanism:crystallizing' },
            { output: `allthemodium:${outP}_shard`, type1: 'mekanism:injecting', type2: 'create:filling', type3: 'immersiveengineering:bottling_machine' },
            { output: `allthemodium:${outP}_clump`, type1: 'mekanism:purifying' },
            { output: `allthemodium:dirty_${outP}_dust`, type1: 'mekanism:crushing', type2: 'create:crushing' }
        )
    }
    if (Item.exists(`create:crushed_raw_${outP}`)) {
        boil.push({ output: `create:crushed_raw_${outP}`, type1: 'create:crushing' })
    }
    if (Item.exists(`mekanism:crystal_${outP}`)) {
        boil.push(
            { output: `mekanism:crystal_${outP}`, type1: 'mekanism:crystallizing' },
            { output: `mekanism:shard_${outP}`, type1: 'mekanism:injecting', type2: 'create:filling', type3: 'immersiveengineering:bottling_machine' },
            { output: `mekanism:clump_${outP}`, type1: 'mekanism:purifying' },
            { output: `mekanism:dirty_dust_${outP}`, type1: 'mekanism:crushing', type2: 'create:crushing' }
        )
    }
    if (Item.exists(`moremekanismprocessing:crystal_${outP}`)) {
        boil.push(
            { output: `moremekanismprocessing:crystal_${outP}`, type1: 'mekanism:crystallizing' },
            { output: `moremekanismprocessing:shard_${outP}`, type1: 'mekanism:injecting', type2: 'create:filling', type3: 'immersiveengineering:bottling_machine' },
            { output: `moremekanismprocessing:clump_${outP}`, type1: 'mekanism:purifying' },
            { output: `moremekanismprocessing:dirty_dust_${outP}`, type1: 'mekanism:crushing', type2: 'create:crushing' }
        )
    }
    if (Item.exists(`moremekanismprocessing:dust_${outP}`)) {
        boil.push({ output: `moremekanismprocessing:dust_${outP}`, type1: 'mekanism:enriching', type2: 'create:splashing', type3: 'botania:mana_infusion', type4: 'mekanism:crushing', type5: 'immersiveengineering:crusher', type6: 'occultism:crushing', type7: 'immersiveengineering:hammer_crushing' })
    }
    if (Item.exists(`thermal:dust_${outP}`)) {
        boil.push({ output: `thermal:${outP}_dust`, type1: 'mekanism:enriching', type2: 'create:splashing', type3: 'botania:mana_infusion', type4: 'mekanism:crushing', type5: 'immersiveengineering:crusher', type6: 'occultism:crushing', type7: 'immersiveengineering:hammer_crushing' })
    }
    if (Item.exists(`alltheores:${outP}_dust`)) {
        boil.push({ output: `alltheores:${outP}_dust`, type1: 'mekanism:enriching', type2: 'create:splashing', type3: 'botania:mana_infusion', type4: 'mekanism:crushing', type5: 'immersiveengineering:crusher', type6: 'occultism:crushing', type7: 'immersiveengineering:hammer_crushing' })
    }
    if (Item.exists(`moremekanismprocessing:gem_${outP}`)) {
        boil.push({ output: `moremekanismprocessing:gem_${outP}`, type1: 'mekanism:enriching' })
    }
    boil.forEach(rec => {
        e.forEachRecipe({ type: rec.type1, output: rec.output, not: { mod: 'kubejs' } }, recipe => {
            e.remove({ id: recipe.getId() })
        })
        if (rec.type2 != undefined) {
            e.forEachRecipe({ type: rec.type2, output: rec.output, not: { mod: 'kubejs' } }, recipe => {
                e.remove({ id: recipe.getId() })
            })
        }
        if (rec.type3 != undefined) {
            e.forEachRecipe({ type: rec.type3, output: rec.output, not: { mod: 'kubejs' } }, recipe => {
                e.remove({ id: recipe.getId() })
            })
        }
        if (rec.type4 != undefined) {
            e.forEachRecipe({ type: rec.type4, output: rec.output, not: { mod: 'kubejs' } }, recipe => {
                e.remove({ id: recipe.getId() })
            })
        }
        if (rec.type5 != undefined) {
            e.forEachRecipe({ type: rec.type5, output: rec.output, not: { mod: 'kubejs' } }, recipe => {
                e.remove({ id: recipe.getId() })
            })
        }
        if (rec.type6 != undefined) {
            e.forEachRecipe({ type: rec.type6, output: rec.output, not: { mod: 'kubejs' } }, recipe => {
                e.remove({ id: recipe.getId() })
            })
        }
        if (rec.type7 != undefined) {
            e.forEachRecipe({ type: rec.type7, output: rec.output, not: { mod: 'kubejs' } }, recipe => {
                e.remove({ id: recipe.getId() })
            })
        }
    })
    e.forEachRecipe({ type: 'minecraft:smelting', output: ingO, not: { mod: 'kubejs' } }, recipe => {
        e.remove({ id: recipe.getId() })
    })
    e.forEachRecipe({ type: 'minecraft:blasting', output: ingO, not: { mod: 'kubejs' } }, recipe => {
        e.remove({ id: recipe.getId() })
    })
    e.forEachRecipe({ type: 'forbidden_arcanus:clibano_combustion', output: ingO, not: { mod: 'kubejs' } }, recipe => {
        e.remove({ id: recipe.getId() })
    })
    e.forEachRecipe({ type: 'immersiveengineering:arc_furnace', output: ingO, not: { mod: 'kubejs' } }, recipe => {
        e.remove({ id: recipe.getId() })
    })
    removeRecipeByID(e, [
        `bloodmagic:arc/dustsfrom_raw_${outP}`,
        `bloodmagic:arc/dustsfrom_gravel_${outP}`,
        `bloodmagic:arc/dustsfrom_ore_${outP}`,
        `bloodmagic:arc/dustsfrom_ingot_${outP}`,
        `alltheores:mek_processing/${outP}/slurry/dirty_from_raw`,
        `alltheores:mek_processing/${outP}/slurry/from_raw_ore`,
        `alltheores:mek_processing/${outP}/slurry/dirty/from_raw_block`,
        `alltheores:mek_processing/${outP}/slurry/dirty`,
        `moremekanismprocessing:processing/${outP}/slurry/dirty/ore`,
        `moremekanismprocessing:processing/${outP}/slurry/dirty/raw_ore`,
        `moremekanismprocessing:processing/${outP}/slurry/dirty/raw_storage_blocks`,
        `allthemodium:mek_processing/${outP}/slurry/dirty/from_raw_block`,
        `allthemodium:mek_processing/${outP}/slurry/dirty`,
        `allthemodium:mek_processing/${outP}/slurry/from_raw_ore`,
        `mekanism:processing/${outP}/slurry/dirty/from_raw_ore`,
        `mekanism:processing/${outP}/slurry/dirty/from_raw_block`,
        `mekanism:processing/${outP}/slurry/dirty/from_ore`,
        `alltheores:mek_processing/${outP}/slurry/clean`,
        `moremekanismprocessing:processing/${outP}/slurry/clean`,
        `allthemodium:mek_processing/${outP}/slurry/clean`,
        `mekanism:processing/${outP}/slurry/clean`,
        `mekanism:processing/${outP}/slurry/dirty/from_ore`,
    ])
}
/**
 * @param {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param {string} inP  - Tag input
 * @param {int} chemAmount - Chemical amount, optional, defaults to 1
 * @param {string} outP - Item output
 * @param {int} outputAmount - Output amount, optional, defaults to 1
 */
function mekPur(e, inP, chemAmount, outP, outputAmount) {
    if (chemAmount == undefined) {
        chemAmount = 1
    }
    if (outputAmount == undefined) {
        outputAmount = 1
    }

    e.custom({
        "type": "mekanism:purifying",
        "itemInput": {
            "ingredient": {
                "tag": inP
            }
        },
        "chemicalInput": {
            "amount": chemAmount,
            "gas": "mekanism:oxygen"
        },
        "output": {
            "item": outP,
            "count": outputAmount
        }
    }).id('kubejs:mekanism/purifying/' + outP.split("_")[0].split(':')[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
}
/**
 * @param {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param {string} inP - Tag input
 * @param {string} outP - Item output
 * @param {int} outputAmount - Output amount, optional, defaults to 1
*/
function mekEnrich(e, inP, outP, outputAmount) {
    if (outputAmount == undefined) {
        outputAmount = 1
    }

    e.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "tag": inP
            }
        },
        "output": {
            "item": outP,
            "count": outputAmount
        }
    }).id('kubejs:mekanism/enriching/' + outP.split("_")[0].split(':')[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
}
/**
 * @param {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param {int} chemAmount - Chemical amount, optional, defaults to 1
 * @param {string} inP - Tag input
 * @param {int} inputAmount - Input amount, optional, defaults to 1
 * @param {string} outP - Item output
 * @param {int} outputAmount - Output amount, optional, defaults to 1
 */
function mekInjecting(e, chemAmount, inP, inputAmount, outP, outputAmount) {
    if (chemAmount == undefined) {
        chemAmount = 1
    }
    if (inputAmount == undefined) {
        inputAmount = 1
    }
    if (outputAmount == undefined) {
        outputAmount = 1
    }

    e.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "amount": inputAmount,
            "ingredient": {
                "tag": inP
            }
        },
        "chemicalInput": {
            "amount": chemAmount,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": outP,
            "count": outputAmount
        }
    }).id('kubejs:mekanism/injecting/' + outP.split("_")[0].split(':')[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
}
/**
 * @param {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param {int} chemAmount - Chemical amount, optional, defaults to 1
 * @param {string} inP - Tag input
 * @param {int} inputAmount - Input amount, optional, defaults to 1
 * @param {string} outP - Item output
 * @param {int} outputAmount - Output amount, optional, defaults to 1000
 * @param {string} chemType - Output type. Defaults to slurry for ore processing
 */
function mekDissolution(e, chemAmount, inP, inputAmount, outP, outputAmount) {
    if (chemAmount == undefined) {
        chemAmount = 1
    }
    if (inputAmount == undefined) {
        inputAmount = 1
    }
    if (outputAmount == undefined) {
        outputAmount = 1000
    }
    e.custom({
        "type": "mekanism:dissolution",
        "gasInput": {
            "amount": chemAmount,
            "gas": "mekanism:sulfuric_acid"
        },
        "itemInput": {
            "amount": inputAmount,
            "ingredient": {
                "tag": inP
            }
        },
        "output": {
            "amount": outputAmount,
            "chemicalType": "slurry",
            "slurry": outP
        }
    }).id('kubejs:mekanism/dissolutioning/' + outP.split("_")[0].split(':')[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
}
/**
 * @param {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param {int} chemAmount - Chemical amount, optional, defaults to 300
 * @param {string} inP - Tag input
 * @param {int} inputAmount - Input amount, optional, defaults to 1
 * @param {string} outP - Item output
 * @param {int} outputAmount - Output amount, optional, defaults to 1
 */
function creFill(e, chemAmount, inP, inputAmount, outP, outputAmount) {
    if (chemAmount == undefined) {
        chemAmount = 300
    }
    if (inputAmount == undefined) {
        inputAmount = 1
    }
    if (outputAmount == undefined) {
        outputAmount = 1
    }

    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "tag": inP,
                "count": inputAmount
            },
            {

                "amount": chemAmount,
                "fluidTag": "forge:hydrogen_chloride"
            }
        ],
        "results": [
            {
                "item": outP,
                "count": outputAmount
            }
        ]
    }).id('kubejs:create/filling/' + outP.split("_")[0].split(':')[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
}
/**
 * @param {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param {string} inP - Tag input
 * @param {string} outP - Item output
 * @param {int} outputAmount - Output amount, optional, defaults to 1
 * @param {int} extraChance - Chance of experience nugget, optional, defaults to 0.75 (75%)
 */
function creCrush(e, inP, outP, outputAmount, extraChance) {
    if (outputAmount == undefined) {
        outputAmount = 1
    }
    if (extraChance == undefined) {
        extraChance = 0.75
    }
    if (outP.includes("create:crushed_raw_")) {
        if (extraChance == 0) {
            e.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "tag": inP
                    }
                ],
                "processingTime": 400,
                "results": [
                    {
                        "count": outputAmount,
                        "item": outP
                    }
                ]
            }).id('kubejs:create/crushing/' + outP.split('raw_')[1] + '/crushed_raw/from_' + inP.split('/')[0].split(":")[1])
        } else {
            e.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "tag": inP
                    }
                ],
                "processingTime": 400,
                "results": [
                    {
                        "count": outputAmount,
                        "item": outP
                    },
                    {
                        "chance": extraChance,
                        "count": outputAmount,
                        "item": "create:experience_nugget"
                    }
                ]
            }).id('kubejs:create/crushing/' + outP.split('raw_')[1] + '/crushed_raw/from_' + inP.split('/')[0].split(":")[1])
        }
    } else {
        if (extraChance == 0) {
            e.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "tag": inP
                    }
                ],
                "processingTime": 400,
                "results": [
                    {
                        "count": outputAmount,
                        "item": outP
                    }
                ]
            }).id('kubejs:create/crushing/' + inP.split(":")[1].split('/')[1] + '/' + outP.split(":")[1].split("t_")[0] + 't/from_' + inP.split('/')[0].split(":")[1])
        } else {
            e.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "tag": inP
                    }
                ],
                "processingTime": 400,
                "results": [
                    {
                        "count": outputAmount,
                        "item": outP
                    },
                    {
                        "chance": extraChance,
                        "count": outputAmount,
                        "item": "create:experience_nugget"
                    }
                ]
            }).id('kubejs:create/crushing/' + inP.split(":")[1].split('/')[1] + '/' + outP.split(":")[1].split("t_")[0] + 't/from_' + inP.split('/')[0].split(":")[1])
        }
    }
}
/**
 * @param {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param {string} inP - Tag input
 * @param {string} outP - Item output
 * @param {int} outputAmount - Output amount, optional, defaults to 2
 */
function occultCrush(e, inP, outP, outputAmount) {
    if (outputAmount == undefined) {
        outputAmount = 2
    }
    e.custom({
        "type": "occultism:crushing",
        "crushing_time": 200,
        "ignore_crushing_multiplier": false,
        "ingredient": {
            "tag": inP
        },
        "result": {
            "count": outputAmount,
            "item": outP
        }
    }).id('kubejs:occultism/crushing/' + outP.split("_")[0].split(':')[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
}
/**
 * @param  {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param  {int} energy - Energy used in the recipe, optional, defaults to 6000
 * @param  {string} inP - Tag input
 * @param  {boolean} chance - True enables it, optional, defaults to false/disabled
 * @param  {string} outP - Item output
 * @param {int} outputAmount - Output amount, optional, defaults to 1
 */
function immersiveCrush(e, energy, inP, chance, outP, outputAmount) {
    if (energy == undefined) {
        energy = 6000
    }
    if (chance == true) {
        chance = 0.33333334
    }
    if (chance == undefined) {
        chance = 0
    }
    if (outputAmount == undefined) {
        outputAmount = 1
    }
    e.custom({
        "type": "immersiveengineering:crusher",
        "energy": energy,
        "input": {
            "tag": inP
        },
        "result": {
            "base_ingredient": {
                "item": outP
            },
            "count": outputAmount
        },
        "secondaries": [
            {
                "chance": chance,
                "output": {
                    "item": outP
                }
            }
        ]
    }).id('kubejs:immersive_engineering/crushing/' + outP.split(':')[1].split("_")[0] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
}
/**
 * @param  {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param  {int} energy - Energy used in the recipe, optional, defaults to 6000
 * @param  {string} inP - Filter for the recipe
 * @param  {string} mat - Actual input
 */
function immersiveArc(e, inP, mat, outP) {
    if (inP.includes("forge:raw_materials/")) {
        e.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [],
            "energy": 25600,
            "input": {
                "tag": `forge:raw_materials/${mat}`
            },
            "results": [
                {
                    "tag": `forge:ingots/${mat}`
                }
            ],
            "secondaries": [
                {
                    "chance": 0.5,
                    "output": {
                        "item": outP
                    }
                }
            ],
            "time": 100
        }).id(`kubejs:immersive_engineering/arc_furnace/${mat}/` + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
    }
    if (inP.includes("forge:storage_blocks/raw_")) {
        e.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [],
            "energy": 230400,
            "input": {
                "tag": `forge:storage_blocks/raw_${mat}`
            },
            "results": [
                {
                    "base_ingredient": {
                        "item": outP
                    },
                    "count": 13
                }
            ],
            "secondaries": [
                {
                    "chance": 0.5,
                    "output": {
                        "item": outP
                    }
                }
            ],
            "time": 900
        }).id(`kubejs:immersive_engineering/arc_furnace/${mat}/` + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
    }
    if (inP.includes("forge:ores/")) {
        e.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [],
            "energy": 102400,
            "input": {
                "tag": `forge:ores/${mat}`
            },
            "results": [
                {
                    "base_ingredient": {
                        "item": outP
                    },
                    "count": 2
                }
            ],
            "slag": {
                "tag": "forge:slag"
            },
            "time": 200
        }).id(`kubejs:immersive_engineering/arc_furnace/${mat}/` + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
    }
    if (inP.includes("forge:dusts/")) {
        e.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [],
            "energy": 51200,
            "input": {
                "tag": `forge:dusts/${mat}`
            },
            "results": [
                {
                    "item": outP
                }
            ],
            "time": 100
        }).id(`kubejs:immersive_engineering/arc_furnace/${mat}/` + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
    }
}
/**
 * @param  {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param  {string} inP - Tag input
 * @param  {string} outP - Item output
 */
function forbiddenCombustion(e, inP, outP) {
    if (inP.includes("dust")) {
        e.custom({
            "type": "forbidden_arcanus:clibano_combustion",
            "cooking_time": 100,
            "experience": 0.35,
            "ingredient": {
                "tag": inP
            },
            "result": outP
        }).id('kubejs:forbidden_arcanus/clibano_combustion/' + inP.split("/")[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
    } else if (inP.includes("create:crushed_raw_")) {
        e.custom({
            "type": "forbidden_arcanus:clibano_combustion",
            "cooking_time": 100,
            "experience": 0.35,
            "ingredient": {
                "item": inP
            },
            "result": outP
        }).id('kubejs:forbidden_arcanus/clibano_combustion/' + inP.split("/")[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
    } else {
        e.custom({
            "type": "forbidden_arcanus:clibano_combustion",
            "cooking_time": 100,
            "experience": 0.35,
            "ingredient": {
                "tag": inP
            },
            "residue": {
                "chance": 0.33,
                "name": outP.split(":")[1].split("_")[0]
            },
            "result": outP
        }).id('kubejs:forbidden_arcanus/clibano_combustion/' + inP.split("/")[1] + '/' + outP.split(':')[1].split('_')[1] + '/from_' + inP.split('/')[0].split(":")[1])
        e.custom({
            "type": "forbidden_arcanus:combine_residues",
            "residue_amount": 9,
            "residue_name": outP.split(":")[1].split("_")[0],
            "result": {
                "item": outP
            }
        })
    }
}
/**
 * @param  {string} e - Whatever is being used as event in "ServerEvents.recipes(event => {"
 * @param  {string} inP - Tag input
 * @param  {string} outP - Item output
 * @param  {string} outputAmount - Output amount, optional, defaults to 1
 * @param  {string} fluid - Tag input for which modifier is used, defaults to "bloodmagic:arc/cuttingfluid"
 * @param  {boolean} extra - Check for if there's a secondary output
 */
function bloodmagicArc(e, inP, outP, outputAmount, fluid, extra) {
    if (fluid == undefined) {
        fluid = "bloodmagic:arc/cuttingfluid"
    }
    if (outputAmount == undefined) {
        outputAmount = 1
    }
    if (extra == undefined) {
        e.custom({
            "type": "bloodmagic:arc",
            "consumeingredient": false,
            "input": {
                "tag": inP
            },
            "inputsize": 1,
            "mainoutputchance": 0.0,
            "output": {
                "count": outputAmount,
                "item": outP
            },
            "tool": {
                "tag": fluid
            }
        }).id('kubejs:bloodmagic/arc/' + inP.split("/")[1] + '/dust/from_' + inP.split('/')[0].split(":")[1])
    } else if (extra == true && inP.includes('bloodmagic:gravels/')) {
        e.custom({
            "type": "bloodmagic:arc",
            "addedoutput": [
                {
                    "type": {
                        "item": outP
                    },
                    "chance": 0.25,
                    "mainchance": 0.0
                }
            ],
            "consumeingredient": false,
            "input": {
                "tag": inP
            },
            "inputsize": 1,
            "mainoutputchance": 0.0,
            "output": {
                "count": 2,
                "item": outP
            },
            "tool": {
                "tag": fluid
            }
        }).id('kubejs:bloodmagic/arc/gravel/' + outP.split(':')[1].split("_")[0] + '/from_' + outP.split("_")[0].split(":")[1])
    } else {
        e.custom({
            "type": "bloodmagic:arc",
            "addedoutput": [
                {
                    "type": {
                        "item": outP
                    },
                    "chance": 0.17,
                    "mainchance": 0.33
                }
            ],
            "consumeingredient": false,
            "input": {
                "tag": inP
            },
            "inputsize": 1,
            "mainoutputchance": 0.0,
            "output": {
                "item": outP
            },
            "tool": {
                "tag": fluid
            }
        }).id('kubejs:bloodmagic/arc/' + inP.split("/")[1] + '/dust/from_' + inP.split('/')[0].split(":")[1])
    }
}
ServerEvents.recipes(event => {

    /* ============================
       COUNTERS
    ============================ */

    const recipeCounts = {
        dusts: 0,
        gears: 0,
        ingots: 0,
        nuggets: 0,
        plates: 0,
        rods: 0,
        raw_materials: 0,
        storage_blocks: 0,
        wires: 0
    }

    /* ============================
       SAFETY HELPERS
    ============================ */

    const validItem = (type, material) => {
        const item = global.itemFromTag(type, material)
        return item && !item.isEmpty()
    }

    const filterExisting = (tags, type) =>
        tags.filter(material => validItem(type, material))

    const recipeExists = (outputItem) => {
        if (!outputItem || outputItem.isEmpty()) return false
        let exists = false

        event.recipeStream({}).forEach(r => {
            const res = r.json?.result
            if (!res) return

            if (Array.isArray(res)) {
                res.forEach(e => {
                    if (!e) return
                    const item = Item.of(e)
                    if (item && !item.isEmpty() && outputItem.equalsIgnoringCount(item)) {
                        exists = true
                    }
                })
            } else {
                const item = Item.of(res)
                if (item && !item.isEmpty() && outputItem.equalsIgnoringCount(item)) {
                    exists = true
                }
            }
        })

        return exists
    }

    /* ============================
       DUSTS (Occultism)
    ============================ */

    if (global.loaded.Occult_Loaded) {
        filterExisting(global.auTags.dusts, 'dusts').forEach(material => {
            const dust = global.itemFromTag('dusts', material)
            if (!dust || dust.isEmpty()) return

            const ingotTag = Ingredient.of(`#forge:ingots/${material}`)
            const oreTag = Ingredient.of(`#forge:ores/${material}`)
            const rawTag = Ingredient.of(`#forge:raw_materials/${material}`)

            let crush = { ingot: false, ore: false, raw: false }

            event.forEachRecipe({ type: "occultism:crushing" }, r => {
                if (!r.json?.result) return
                const resItem = Item.of(r.json.result.item, r.json.result.count ?? 1)
                if (!resItem || resItem.isEmpty()) return

                if (dust.equalsIgnoringCount(resItem)) {
                    const input = Ingredient.of(r.json.ingredient)
                    if (ingotTag.test(input)) crush.ingot = true
                    if (oreTag.test(input)) crush.ore = true
                    if (rawTag.test(input)) crush.raw = true
                }
            })

            if (!ingotTag.isEmpty() && !crush.ingot && !recipeExists(dust.withCount(1))) {
                event.custom({
                    type: "occultism:crushing",
                    ingredient: ingotTag.toJson(),
                    result: dust.withCount(1).toJson(),
                    crushing_time: 200,
                    ignore_crushing_multiplier: true
                })
                recipeCounts.dusts++
            }

            if (!rawTag.isEmpty() && !crush.raw && !recipeExists(dust.withCount(2))) {
                event.custom({
                    type: "occultism:crushing",
                    ingredient: rawTag.toJson(),
                    result: dust.withCount(2).toJson(),
                    crushing_time: 200
                })
                recipeCounts.dusts++
            }

            if (!oreTag.isEmpty() && !crush.ore && !recipeExists(dust.withCount(2))) {
                event.custom({
                    type: "occultism:crushing",
                    ingredient: oreTag.toJson(),
                    result: dust.withCount(2).toJson(),
                    crushing_time: 300
                })
                recipeCounts.dusts++
            }
        })
    }

    /* ============================
       GEARS
    ============================ */

    if (global.loaded.IE_Loaded || global.loaded.Thermal_Loaded) {
        filterExisting(global.auTags.gears, 'gears').forEach(material => {
            const gear = global.itemFromTag('gears', material)
            if (!gear || gear.isEmpty()) return

            const ingotTag = Ingredient.of(`#forge:ingots/${material}`)
            if (ingotTag.isEmpty()) return

            if (global.loaded.IE_Loaded && !recipeExists(gear)) {
                event.custom({
                    type: "immersiveengineering:metal_press",
                    mold: "immersiveengineering:mold_gear",
                    input: ingotTag.withCount(4).toJson(),
                    result: gear.toJson(),
                    energy: 2400
                })
                recipeCounts.gears++
            }

            if (global.loaded.Thermal_Loaded && !recipeExists(gear)) {
                event.custom({
                    type: "thermal:press",
                    ingredients: [
                        ingotTag.withCount(4).toJson(),
                        { item: "thermal:press_gear_die" }
                    ],
                    result: [{ item: gear.id, count: 1 }]
                })
                recipeCounts.gears++
            }
        })
    }

    /* ============================
       WIRES
    ============================ */

    filterExisting(global.auTags.wires, 'wires').forEach(material => {
        const wire = global.itemFromTag('wires', material)
        if (!wire || wire.isEmpty() || recipeExists(wire)) return

        if (global.loaded.CreateAdd_Loaded) {
            const plate = global.itemFromTag('plates', material)
            if (plate && !plate.isEmpty()) {
                event.custom({
                    type: 'createaddition:rolling',
                    input: plate.toJson(),
                    result: wire.withCount(2).toJson()
                })
            }
        }

        if (global.loaded.IE_Loaded) {
            const ingot = global.itemFromTag('ingots', material)
            if (ingot && !ingot.isEmpty()) {
                event.custom({
                    type: 'immersiveengineering:metal_press',
                    mold: 'immersiveengineering:mold_wire',
                    input: ingot.toJson(),
                    result: {
                        count: 2,
                        base_ingredient: wire.toJson()
                    },
                    energy: 2400
                })
            }
        }
    })

    /* ============================
       MISC CLEANUP / FIXES
    ============================ */

    event.replaceInput({ input: 'forbidden_arcanus:ender_pearl_fragment' },
        'forbidden_arcanus:ender_pearl_fragment',
        '#forge:nuggets/ender_pearl'
    )
    event.replaceInput({ input: 'inventorypets:nugget_ender' },
        'inventorypets:nugget_ender',
        '#forge:nuggets/ender_pearl'
    )
    event.replaceInput({ input: 'opolisutilities:ender_pearl_fragment' },
        'opolisutilities:ender_pearl_fragment',
        '#forge:nuggets/ender_pearl'
    )
    event.replaceOutput({ output: 'forbidden_arcanus:ender_pearl_fragment' },
        'forbidden_arcanus:ender_pearl_fragment',
        'inventorypets:nugget_ender'
    )
    event.replaceOutput({ output: 'opolisutilities:ender_pearl_fragment' },
        'opolisutilities:ender_pearl_fragment',
        'inventorypets:nugget_ender'
    )
    event.replaceInput({ input: 'immersiveengineering:coal_coke' },
        'immersiveengineering:coal_coke',
        '#forge:coal_coke'
    )
    event.replaceOutput({ output: 'immersiveengineering:coal_coke' },
        'immersiveengineering:coal_coke',
        '#forge:coal_coke'
    )
    event.remove({ input: '#forge:ores', type: 'cyclic:crusher' })
    let ore = [
        { mat: 'copper', modAdd: 'mekanism', orE: 'minecraft' },
        { mat: 'gold', modAdd: 'mekanism', orE: 'minecraft' },
        { mat: 'iron', modAdd: 'mekanism', orE: 'minecraft' },
        { mat: 'osmium', modAdd: 'mekanism', orE: 'alltheores' },
        { mat: 'tin', modAdd: 'mekanism', orE: 'alltheores' },
        { mat: 'uranium', modAdd: 'mekanism', orE: 'alltheores' },
        { mat: 'allthemodium', modAdd: 'allthemodium', orE: 'allthemodium' },
        { mat: 'unobtainium', modAdd: 'allthemodium', orE: 'allthemodium' },
        { mat: 'vibranium', modAdd: 'allthemodium', orE: 'allthemodium' },
        { mat: 'lead', modAdd: 'alltheores', orE: 'alltheores' },
        { mat: 'aluminum', modAdd: 'alltheores', orE: 'alltheores' },
        { mat: 'iridium', modAdd: 'alltheores', orE: 'alltheores' },
        { mat: 'silver', modAdd: 'alltheores', orE: 'alltheores' },
        { mat: 'platinum', modAdd: 'moremekanismprocessing', orE: 'alltheores' },
        { mat: 'zinc', modAdd: 'moremekanismprocessing', orE: 'alltheores' },
        { mat: 'nickel', modAdd: 'moremekanismprocessing', orE: 'alltheores' },
        { mat: 'desh', modAdd: 'moremekanismprocessing', orE: 'ad_astra' },
        { mat: 'ostrum', modAdd: 'moremekanismprocessing', orE: 'ad_astra' },
        { mat: 'calorite', modAdd: 'moremekanismprocessing', orE: 'ad_astra' },
        { mat: 'cobalt', modAdd: 'moremekanismprocessing', orE: 'tconstruct' },
        { mat: 'sapphire', modAdd: 'moremekanismprocessing', orE: 'alltheores', type: 'gem' },
        { mat: 'ruby', modAdd: 'moremekanismprocessing', orE: 'alltheores', type: 'gem' },
        { mat: 'peridot', modAdd: 'moremekanismprocessing', orE: 'alltheores', type: 'gem' },
        { mat: 'sulfur', modAdd: 'moremekanismprocessing', orE: 'thermal', type: 'gem' },
        { mat: 'apatite', modAdd: 'moremekanismprocessing', orE: 'thermal', type: 'gem' },
        { mat: 'cinnabar', modAdd: 'moremekanismprocessing', orE: 'thermal', type: 'gem' },
        { mat: 'niter', modAdd: 'moremekanismprocessing', orE: 'thermal', type: 'gem' },
    ]
    ore.forEach(o => {
        let cleanSlurry = `${o.modAdd}:clean_${o.mat}`
        let dirtySlurry = `${o.modAdd}:dirty_${o.mat}`
        let crystal = 'N/A'
        let shard = 'N/A'
        let clump = 'N/A'
        let dirtyDust = 'N/A'
        let dust = 'N/A'
        let out = 'N/A'
        let erroR = [{ errored: false, reason: 'N/A' }]

        if (o.modAdd != 'mekanism' && o.modAdd != 'moremekanismprocessing' && o.modAdd != 'allthemodium') {
            if (o.mat == 'lead') {
                cleanSlurry = `mekanism:clean_${o.mat}`
            } else {
                cleanSlurry = `alltheores:clean_${o.mat}`
            }
        }
        if (o.modAdd != 'mekanism' && o.modAdd != 'moremekanismprocessing' && o.modAdd != 'allthemodium') {
            if (o.mat == 'lead') {
                dirtySlurry = `mekanism:dirty_${o.mat}`
            } else {
                dirtySlurry = `alltheores:dirty_${o.mat}`
            }
        }

        if (o.modAdd == 'moremekanismprocessing' || o.modAdd == 'mekanism') {
            crystal = `${o.modAdd}:crystal_${o.mat}`
            shard = `${o.modAdd}:shard_${o.mat}`
            clump = `${o.modAdd}:clump_${o.mat}`
            dirtyDust = `${o.modAdd}:dirty_dust_${o.mat}`
        } else {
            crystal = `${o.modAdd}:${o.mat}_crystal`
            shard = `${o.modAdd}:${o.mat}_shard`
            clump = `${o.modAdd}:${o.mat}_clump`
            dirtyDust = `${o.modAdd}:dirty_${o.mat}_dust`
        }

        if (o.orE == 'ad_astra' || o.orE == 'tconstruct') {
            dust = `moremekanismprocessing:dust_${o.mat}`
        } else if (o.orE == 'thermal') {
            dust = `thermal:${o.mat}_dust`
        } else if (o.orE == 'minecraft') {
            dust = `alltheores:${o.mat}_dust`
        } else {
            dust = `${o.orE}:${o.mat}_dust`
        }

        if (o.type == 'gem') {
            out = `${o.orE}:${o.mat}`
        } else {
            out = `${o.orE}:${o.mat}_ingot`
        }

        if (!erroR.errored) {
            if (o.mat == 'iron' || o.mat == 'gold') {
                event.remove({ id: `bloodmagic:alchemytable/sand_${o.mat}` })
            }
            if (o.mat != 'copper') {
                event.custom({
                    "type": "bloodmagic:alchemytable",
                    "input": [
                        {
                            "tag": `forge:ores/${o.mat}`
                        },
                        {
                            "tag": "bloodmagic:arc/cuttingfluid"
                        }
                    ],
                    "output": {
                        "count": 2,
                        "item": dust
                    },
                    "syphon": 400,
                    "ticks": 200,
                    "upgradeLevel": 1
                }).id(`kubejs:bloodmagic/alchemytable/dust_${o.mat}`)
            } else {
                event.custom({
                    "type": "bloodmagic:alchemytable",
                    "input": [
                        {
                            "tag": `forge:ores/${o.mat}`
                        },
                        {
                            "tag": "bloodmagic:arc/cuttingfluid"
                        }
                    ],
                    "output": {
                        "count": 3,
                        "item": dust
                    },
                    "syphon": 400,
                    "ticks": 200,
                    "upgradeLevel": 1
                }).id(`kubejs:bloodmagic/alchemytable/dust_${o.mat}`)
            }
            boilRec(event, o.mat, out)
            event.custom({
                "type": "mekanism:washing",
                "fluidInput": {
                    "amount": 5,
                    "tag": "minecraft:water"
                },
                "output": {
                    "amount": 1,
                    "slurry": cleanSlurry
                },
                "slurryInput": {
                    "amount": 1,
                    "slurry": dirtySlurry
                }
            }).id('kubejs:mekanism/washing/' + cleanSlurry.split("_")[0].split(':')[1] + '/' + cleanSlurry.split('_')[1] + '/from_' + dirtySlurry.split('/')[0].split(":")[1])
            event.custom({
                "type": "mekanism:crystallizing",
                "chemicalType": "slurry",
                "input": {
                    "amount": 200,
                    "slurry": cleanSlurry
                },
                "output": {
                    "item": crystal
                }
            }).id('kubejs:mekanism/crystallizing/' + cleanSlurry.split("_")[0].split(':')[1] + '/' + cleanSlurry.split('_')[1] + '/from_' + crystal.split('/')[0].split(":")[1])
            mekInjecting(event, _, `forge:crystals/${o.mat}`, _, shard)
            creFill(event, _, `forge:crystals/${o.mat}`, _, shard)
            event.custom({
                "type": "immersiveengineering:bottling_machine",
                "fluid": {
                    "amount": 300,
                    "tag": "forge:hydrogen_chloride"
                },
                "input": {
                    "item": crystal
                },
                "results": [
                    {
                        "item": shard
                    }
                ]
            }).id('kubejs:immersive_engineering/bottling/' + crystal.split("_")[0].split(':')[1] + '/' + crystal.split('_')[1] + '/from_' + shard.split('/')[0].split(":")[1])
            mekPur(event, `forge:shards/${o.mat}`, _, clump)
            mekPur(event, `forge:ores/${o.mat}`, _, clump, 3)
            event.custom({
                "type": "mekanism:crushing",
                "input": {
                    "ingredient": {
                        "item": clump
                    }
                },
                "output": {
                    "item": dirtyDust
                }
            }).id('kubejs:mekanism/crushing/' + dirtyDust.split("_")[0].split(':')[1] + '/' + dirtyDust.split('_')[1] + '/from_' + clump.split('/')[0].split(":")[1])
            event.custom({
                "type": "mekanism:crushing",
                "input": {
                    "ingredient": {
                        "item": out
                    }
                },
                "output": {
                    "item": dust
                }
            }).id('kubejs:mekanism/crushing/' + dust.split("_")[0].split(':')[1] + '/' + dust.split('_')[1] + '/from_' + out.split('/')[0].split(":")[1])
            mekEnrich(event, `forge:dirty_dusts/${o.mat}`, dust)
            event.custom({
                "type": "botania:mana_infusion",
                "catalyst": {
                    "type": "block",
                    "block": "botania:alchemy_catalyst"
                },
                "group": "atc:dust_cycle",
                "input": {
                    "item": dirtyDust
                },
                "mana": 4000,
                "output": {
                    "item": dust
                }
            }).id('kubejs:botania/mana_infusion/' + dust.split("_")[0].split(':')[1] + '/' + dust.split('_')[1] + '/from_' + dirtyDust.split('/')[0].split(":")[1])
            event.custom({
                "type": "create:splashing",
                "ingredients": [
                    {
                        "item": dirtyDust
                    }
                ],
                "results": [
                    {
                        "item": dust,
                        "count": 1
                    }
                ]
            }).id('kubejs:create/splashing/' + dust.split("_")[0].split(':')[1] + '/' + dust.split('_')[1] + '/from_' + dirtyDust.split('/')[0].split(":")[1])
            mekInjecting(event, _, `forge:ores/${o.mat}`, _, shard, 4)
            creCrush(event, `forge:clumps/${o.mat}`, dirtyDust, _, 0)
            forbiddenCombustion(event, `forge:ores/${o.mat}`, out)
            forbiddenCombustion(event, `forge:dusts/${o.mat}`, out)
            immersiveArc(event, `forge:ores/${o.mat}`, o.mat, out)
            immersiveArc(event, `forge:dusts/${o.mat}`, o.mat, out)
            if (Item.exists(`create:crushed_raw_${o.mat}`)) {
                event.custom({
                    "type": "create:mixing",
                    "ingredients": [
                        {
                            "item": "minecraft:quartz"
                        },
                        {
                            "count": 16,
                            "item": `create:crushed_raw_${o.mat}`
                        }
                    ],
                    "results": [
                        {
                            "count": 32,
                            "item": out
                        }
                    ],
                    "heatRequirement": "heated"
                }).id(`kubejs:createchromatic/${o.mat}_doubling`)
                event.custom({
                    "type": "create:mixing",
                    "ingredients": [
                        {
                            "item": "createchromaticreturn:fortunite_bar"
                        },
                        {
                            "item": "minecraft:quartz"
                        },
                        {
                            "count": 16,
                            "item": `create:crushed_raw_${o.mat}`
                        }
                    ],
                    "results": [
                        {
                            "count": 64,
                            "item": out
                        }
                    ],
                    "heatRequirement": "superheated"
                }).id(`kubejs:createchromatic/${o.mat}_fortunite`)
                event.remove({ id: `createchromaticreturn:${o.mat}_doubling` })
                event.remove({ id: `createchromaticreturn:${o.mat}_fortunite` })
                creCrush(event, `forge:ores/${o.mat}`, `create:crushed_raw_${o.mat}`, 6)
                forbiddenCombustion(event, `create:crushed_raw_${o.mat}`, out)
            } else {
                creCrush(event, `forge:ores/${o.mat}`, dirtyDust, 6)
            }
            if (Item.exists(`${o.orE}:raw_${o.mat}`)) {
                if (Item.exists(`create:crushed_raw_${o.mat}`)) {
                    creCrush(event, `forge:raw_materials/${o.mat}`, `create:crushed_raw_${o.mat}`)
                } else {
                    creCrush(event, `forge:raw_materials/${o.mat}`, dirtyDust)
                }
                bloodmagicArc(event, `forge:raw_materials/${o.mat}`, dust, _, _, true)
                immersiveArc(event, `forge:raw_materials/${o.mat}`, o.mat, out)
                forbiddenCombustion(event, `forge:raw_materials/${o.mat}`, out)
                mekInjecting(event, _, `forge:raw_materials/${o.mat}`, 3, shard)
                mekPur(event, `forge:raw_materials/${o.mat}`, _, clump, 2)
                mekEnrich(event, `forge:raw_materials/${o.mat}`, dust, 4)
                occultCrush(event, `forge:raw_materials/${o.mat}`, dust)
                immersiveCrush(event, _, `forge:raw_materials/${o.mat}`, true, dust)
                creFill(event, _, `forge:raw_materials/${o.mat}`, 3, shard, 8)
                mekDissolution(event, _, `forge:raw_materials/${o.mat}`, 3, dirtySlurry, 2000)
                event.custom({
                    "type": "minecraft:smelting",
                    "result": out,
                    "ingredient": {
                        "tag": `forge:raw_materials/${o.mat}`
                    },
                    "cookingtime": 200,
                    "experience": 0.6
                }).id(`kubejs:minecraft/smelting/${o.mat}/ingot/from_raw_ore`)
                event.custom({
                    "type": "minecraft:blasting",
                    "result": out,
                    "ingredient": {
                        "tag": `forge:raw_materials/${o.mat}`
                    },
                    "cookingtime": 100,
                    "experience": 0.6
                }).id(`kubejs:minecraft/blasting/${o.mat}/ingot/from_raw_ore`)
            }
            if (Item.exists(`${o.orE}:raw_${o.mat}_block`) || Item.exists(`${o.modAdd}:raw_${o.mat}_block`)) {
                if (Item.exists(`create:crushed_raw_${o.mat}`)) {
                    creCrush(event, `forge:storage_blocks/raw_${o.mat}`, `create:crushed_raw_${o.mat}`, 9)
                } else {
                    creCrush(event, `forge:storage_blocks/raw_${o.mat}`, dirtyDust, 9)
                }
                immersiveArc(event, `forge:storage_blocks/raw_${o.mat}`, o.mat, out)
                mekInjecting(event, 2, `forge:storage_blocks/raw_${o.mat}`, _, shard, 24)
                mekPur(event, `forge:storage_blocks/raw_${o.mat}`, 2, clump, 18)
                mekEnrich(event, `forge:storage_blocks/raw_${o.mat}`, dust, 12)
                occultCrush(event, `forge:storage_blocks/raw_${o.mat}`, dust, 18)
                immersiveCrush(event, 54000, `forge:storage_blocks/raw_${o.mat}`, _, dust, 12)
                creFill(event, 500, `forge:storage_blocks/raw_${o.mat}`, _, shard, 24)
                mekDissolution(event, 2, `forge:storage_blocks/raw_${o.mat}`, _, dirtySlurry, 6000)
            }
            bloodmagicArc(event, `forge:ores/${o.mat}`, dust, 3)
            mekEnrich(event, `forge:ores/${o.mat}`, dust, 2)
            occultCrush(event, `forge:ores/${o.mat}`, dust)
            immersiveCrush(event, _, `forge:ores/${o.mat}`, _, dust, 2)
            mekDissolution(event, _, `forge:ores/${o.mat}`, _, dirtySlurry)
            creFill(event, _, `forge:ores/${o.mat}`, _, shard, 4)
            if (Item.exists(`${o.orE}:${o.mat}_plate`)) {
                event.custom({
                    "type": "thermal:pulverizer",
                    "ingredient": {
                        "tag": `forge:plates/${o.mat}`
                    },
                    "result": [
                        {
                            "item": dust,
                            "count": 1
                        }
                    ],
                    "energy_mod": 0.5
                }).id(`kubejs:thermal/pulverizer/${o.mat}/dust/from_plate`)
            }
            if (Item.exists(`${o.orE}:${o.mat}_ingot`)) {
                bloodmagicArc(event, `forge:ingots/${o.mat}`, dust, _, 'bloodmagic:arc/explosive')
                immersiveCrush(event, _, `forge:ingots/${o.mat}`, _, dust)
                occultCrush(event, `forge:ingots/${o.mat}`, dust)
                event.custom({
                    "type": "thermal:pulverizer",
                    "ingredient": {
                        "tag": `forge:ingots/${o.mat}`
                    },
                    "result": [
                        {
                            "item": dust,
                            "count": 1
                        }
                    ],
                    "energy_mod": 0.5
                }).id(`kubejs:thermal/pulverizer/${o.mat}/dust/from_ingot`)
            }
            if (Item.exists(`bloodmagic:${o.mat}gravel`)) {
                bloodmagicArc(event, `bloodmagic:gravels/${o.mat}`, dust)
            }
            event.remove({ id: `thermal:machines/pulverizer/pulverizer_${o.mat}_ingot_to_dust` })
            event.remove({ id: `thermal:machines/pulverizer/pulverizer_${o.mat}_plate_to_dust` })
            event.custom({
                "type": "minecraft:smelting",
                "result": out,
                "ingredient": {
                    "tag": `forge:ores/${o.mat}`
                },
                "cookingtime": 200,
                "experience": 0.7
            }).id(`kubejs:minecraft/smelting/${o.mat}/ingot/from_ore`)
            event.custom({
                "type": "minecraft:blasting",
                "result": out,
                "ingredient": {
                    "tag": `forge:ores/${o.mat}`
                },
                "cookingtime": 100,
                "experience": 0.7
            }).id(`kubejs:minecraft/blasting/${o.mat}/ingot/from_ore`)
            event.custom({
                "type": "minecraft:smelting",
                "result": out,
                "ingredient": {
                    "item": dust
                },
                "cookingtime": 200,
                "experience": 0.3
            }).id('kubejs:minecraft/smelting/' + dust.split(":")[1].split('_')[0] + '/' + dust.split(':')[1].split('_')[1] + '/from_ore')
            event.custom({
                "type": "minecraft:blasting",
                "result": out,
                "ingredient": {
                    "item": dust
                },
                "cookingtime": 100,
                "experience": 0.3
            }).id('kubejs:minecraft/blasting/' + dust.split(":")[1].split('_')[0] + '/' + dust.split(':')[1].split('_')[1] + '/from_dust')
            if (o.mat == 'cobalt' || o.mat == 'nickel' || o.mat == 'lead' || o.mat == 'uranium' || o.mat == 'tin' || o.mat == 'osmium' || o.mat == 'copper') {
                event.custom({
                    "type": "thermal:chiller",
                    "ingredients": [
                        {
                            "fluid": `tconstruct:molten_${o.mat}`,
                            "amount": 90
                        },
                        {
                            "item": "thermal:chiller_ingot_cast"
                        }
                    ],
                    "result": [
                        {
                            "item": out,
                            "count": 1
                        }
                    ],
                    "energy": 4800
                }).id(`kubejs:thermal/chilling/ingot/${o.mat}/from_molten`)
                event.custom({
                    "type": "tconstruct:melting",
                    "ingredient": {
                        "item": dust
                    },
                    "result": {
                        "fluid": `tconstruct:molten_${o.mat}`,
                        "amount": 90
                    },
                    "temperature": 975,
                    "time": 100,
                }).id(`kubejs:tconstruct/melting/molten/${o.mat}/from_dust`)
            } else if (o.orE == 'ad_astra') {
                event.custom({
                    "type": "thermal:chiller",
                    "ingredients": [
                        {
                            "fluid": `tcintegrations:molten_${o.mat}`,
                            "amount": 90
                        },
                        {
                            "item": "thermal:chiller_ingot_cast"
                        }
                    ],
                    "result": [
                        {
                            "item": out,
                            "count": 1
                        }
                    ],
                    "energy": 4800
                }).id(`kubejs:thermal/chilling/ingot/${o.mat}/from_molten`)
                event.custom({
                    "type": "tconstruct:melting",
                    "ingredient": {
                        "item": dust
                    },
                    "result": {
                        "fluid": `tcintegrations:molten_${o.mat}`,
                        "amount": 90
                    },
                    "temperature": 975,
                    "time": 100,
                }).id(`kubejs:tconstruct/melting/molten/${o.mat}/from_dust`)
            }
            event.remove({ id: `thermal:compat/tconstruct/chiller_tconstruct_${o.mat}_ingot` })
            if (Item.exists(`${o.orE}:${o.mat}_ingot`) && Item.exists(`${o.orE}:${o.mat}_nugget`)) {
                event.shaped(
                    Item.of(`${o.orE}:${o.mat}_ingot`),
                    [
                        'AAA',
                        'AAA',
                        'AAA'
                    ],
                    {
                        A: `#forge:nuggets/${o.mat}`
                    }
                ).id(`kubejs:${o.mat}_ingot_from_nuggets`)
                event.shapeless(
                    Item.of(`${o.orE}:${o.mat}_nugget`, 9),
                    [
                        `#forge:ingots/${o.mat}`
                    ]
                ).id(`kubejs:${o.mat}_nuggets_from_ingot`)
                event.forEachRecipe({ type: 'minecraft:crafting_shaped', input: `${o.orE}:${o.mat}_nugget`, output: `${o.orE}:${o.mat}_ingot` }, recipe => {
                    event.remove({ id: recipe.getId() })
                })
                event.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: `${o.orE}:${o.mat}_ingot`, output: `${o.orE}:${o.mat}_nugget` }, recipe => {
                    event.remove({ id: recipe.getId() })
                })
            }
            if (Item.exists(`${o.orE}:${o.mat}_ingot`) && Item.exists(`${o.orE}:${o.mat}_block`)) {
                event.shaped(
                    Item.of(`${o.orE}:${o.mat}_block`),
                    [
                        'AAA',
                        'AAA',
                        'AAA'
                    ],
                    {
                        A: `#forge:ingots/${o.mat}`
                    }
                ).id(`kubejs:${o.mat}_block_from_ingots`)
                event.shapeless(
                    Item.of(`${o.orE}:${o.mat}_ingot`, 9),
                    [
                        `#forge:storage_blocks/${o.mat}`
                    ]
                ).id(`kubejs:${o.mat}_ingots_from_block`)
                event.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: `#forge:storage_blocks/${o.mat}`, output: `${o.orE}:${o.mat}_ingot` }, recipe => {
                    event.remove({ id: recipe.getId() })
                })
                event.forEachRecipe({ type: 'minecraft:crafting_shaped', input: `${o.orE}:${o.mat}_ingot`, output: `${o.orE}:${o.mat}_block` }, recipe => {
                    event.remove({ id: recipe.getId() })
                })
            }
            if (Item.exists(`${o.orE}:${o.mat}_ingot`) && Item.exists(`create:crushed_raw_${o.mat}`)) {
                event.custom({
                    "type": "minecraft:smelting",
                    "result": out,
                    "ingredient": {
                        "item": `create:crushed_raw_${o.mat}`
                    },
                    "cookingtime": 200,
                    "experience": 0.1
                }).id(`kubejs:minecraft/smelting/${o.mat}/ingot/from_crushed_ore`)
                event.custom({
                    "type": "minecraft:blasting",
                    "result": out,
                    "ingredient": {
                        "item": `create:crushed_raw_${o.mat}`
                    },
                    "cookingtime": 100,
                    "experience": 0.1
                }).id(`kubejs:minecraft/blasting/${o.mat}/ingot/from_crushed_ore`)
            }
        }

    })
    let cull = [
        'azure_silver',
        'bismuth',
        'boron',
        'magnesium',
        'titanium',
        'tungsten',
        'thorium',
        'crimson_iron',
        'draconium'
    ]
    cull.forEach(mat => {
        event.remove({ output: `moremekanismprocessing:dirty_${mat}` })
        event.remove({ output: `moremekanismprocessing:clean_${mat}` })
        event.remove({ output: `moremekanismprocessing:crystal_${mat}` })
        event.remove({ output: `moremekanismprocessing:shard_${mat}` })
        event.remove({ output: `moremekanismprocessing:clump_${mat}` })
        event.remove({ output: `moremekanismprocessing:dirty_dust_${mat}` })
    })
    removeRecipeByID(event, [
        'tconstruct:smeltery/melting/metal/cobalt/dust',
        'bloodmagic:alchemytable/corrupted_coal',
        'immersiveengineering:crafting/plate_desh_hammering',
        'immersiveengineering:crafting/plate_calorite_hammering',
        'immersiveengineering:crafting/plate_ostrum_hammering',
    ])
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": `create:stone_types/crimsite`
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "chance": 0.40,
                "item": "create:crushed_raw_iron"
            },
            {
                "chance": 0.40,
                "item": "minecraft:iron_nugget"
            }
        ]
    }).id("kubejs:create/crushing/crimsite")
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": `create:stone_types/ochrum`
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "chance": 0.20,
                "item": "create:crushed_raw_gold"
            },
            {
                "chance": 0.20,
                "item": "minecraft:gold_nugget"
            }
        ]
    }).id("kubejs:create/crushing/ochrum")
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": `create:stone_types/veridium`
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "chance": 0.80,
                "item": "create:crushed_raw_copper"
            },
            {
                "chance": 0.80,
                "item": "alltheores:copper_nugget"
            }
        ]
    }).id("kubejs:create/crushing/veridium")
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": `create:stone_types/asurine`
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "chance": 0.30,
                "item": "create:crushed_raw_zinc"
            },
            {
                "chance": 0.30,
                "item": "alltheores:zinc_nugget"
            }
        ]
    }).id("kubejs:create/crushing/asurine")
    event.replaceInput({ input: 'create:brass_sheet' },
        'create:brass_sheet',
        '#forge:plates/brass'
    )
    event.replaceInput({ input: 'create:iron_sheet' },
        'create:iron_sheet',
        '#forge:plates/iron'
    )
    event.replaceInput({ input: 'create:copper_sheet' },
        'create:copper_sheet',
        '#forge:plates/copper'
    )
    event.shapeless(
        Item.of('minecraft:flint', 9),
        ['#forge:storage_blocks/flint']
    ).id('kubejs:flint_unpacking')
    let moreMekBoil = [
        'aluminum',
        'azure_silver',
        'bismuth',
        'boron',
        'calorite',
        'cobalt',
        'crimson_iron',
        'desh',
        'draconium',
        'iridium',
        'lithium',
        'magnesium',
        'nickel',
        'ostrum',
        'platinum',
        'silver',
        'thorium',
        'titanium',
        'tungsten',
        'zinc'
    ]
    moreMekBoil.forEach(boils => {
        event.remove({ output: `moremekanismprocessing:${boils}_ingot` })
        event.remove({ id: `/enderio:smelting/moremekanismprocessing/processing/${boils}/ingot/from_dust_smelting/` })
    })

    removeRecipeByID(event, [
        'actuallyadditions:charcoal_to_tiny',
        'actuallyadditions:tiny_to_charcoal',
        'actuallyadditions:coal_to_tiny',
        'actuallyadditions:tiny_to_coal',
        'ad_astra:steel_rod',
        'ad_astra:iron_rod',
        'alexscaves:uranium_from_shard',
        'alexscaves:uranium_from_block',
        'alexscaves:uranium_shard_from_uranium',
        'alexscaves:block_of_uranium',
        'alltheores:raw_osmium_block',
        'bigreactors:crafting/raw_yellorium_component_to_storage',
        'buildersaddition:iron_rod',
        'compressedcreativity:mixing/memory_essence',
        'create:crafting/materials/copper_nugget',
        'createdeco:netherite_nugget_from_netherite_ingot',
        'createaddition:compat/immersiveengineering/crushing/coke_block',
        'createaddition:compat/immersiveengineering/crushing/coal_coke',
        'cyclic:netherite_ingot',
        'eidolon:raw_silver_block',
        'eidolon:raw_lead_block',
        'eidolon:silver_block',
        'eidolon:lead_ingot',
        'enderio:iron_gear',
        'forbidden_arcanus:ender_pearl',
        'forbidden_arcanus:ender_pearl_fragment',
        'forestry:raw_tin_block',
        'forestry:resource_storage_bronze',
        'forestry:ingot_bronze_alloying',
        'forestry:gear_tin',
        `forestry:resource_storage_tin`,
        `forestry:resource_storage_bronze`,
        'immersiveengineering:crafting/raw_uranium_to_raw_block_uranium',
        'immersiveengineering:crafting/coal_coke_to_coke',
        'immersiveengineering:crafting/coke_to_coal_coke',
        'inventorypets:nugget_coal_alt',
        'inventorypets:nugget_diamond_alt',
        'inventorypets:nugget_emerald_alt',
        'inventorypets:nugget_obsidian_alt',
        'inventorypets:nugget_ender_alt',
        'ironcoals:charcoal_chunk',
        'ironcoals:charcoal',
        'ironcoals:base_coal_chunk',
        'ironcoals:coal',
        'mekanism:processing/lead/storage_blocks/from_ingots',
        `mekanism:processing/osmium/nugget/from_ingot`,
        `mekanism:processing/osmium/ingot/from_nuggets/`,
        `mekanism:processing/osmium/ingot/from_block/`,
        `mekanism:processing/osmium/storage_blocks/from_ingots/`,
        `mekanism:processing/tin/nugget/from_ingot`,
        `mekanism:processing/tin/ingot/from_nuggets/`,
        `mekanism:processing/tin/ingot/from_block/`,
        `mekanism:processing/tin/storage_blocks/from_ingots/`,
        `mekanism:processing/uranium/nugget/from_ingot`,
        `mekanism:processing/uranium/ingot/from_nuggets/`,
        `mekanism:processing/uranium/ingot/from_block/`,
        `mekanism:processing/uranium/storage_blocks/from_ingots/`,
        `mekanism:nuggets/bronze`,
        `mekanism:storage_blocks/bronze`,
        `mekanism:processing/bronze/ingot/from_block`,
        `mekanism:processing/bronze/ingot/from_nuggets`,
        `mekanism:nuggets/steel`,
        `mekanism:storage_blocks/steel`,
        `mekanism:processing/steel/ingot/from_block`,
        `mekanism:processing/steel/ingot/from_nuggets`,
        'supplementaries:flint_block',
        'thermal:storage/raw_tin_block',
        'thermal:enderium_dust_2',
        'thermal:storage/bronze_ingot_from_nuggets',
        'thermal:parts/copper_gear',
        'thermal:storage/bronze_block',

        //=== MoreMekanismProcessing ===
        `moremekanismprocessing:processing/draconium/slurry/dirty/ore`,
        `moremekanismprocessing:processing/lithium/dust/from_ingot`,
        `moremekanismprocessing:processing/lithium/dust/from_dirty_dust`,
        'moremekanismprocessing:processing/amethyst/gem/from_dust',
        `moremekanismprocessing:processing/aluminum/nugget/from_ingot`,
        `moremekanismprocessing:processing/aluminum/ingot/from_nugget`,
        `moremekanismprocessing:processing/calorite/nugget/from_ingot`,
        `moremekanismprocessing:processing/calorite/ingot/from_nugget`,
        `moremekanismprocessing:processing/iridium/nugget/from_ingot`,
        `moremekanismprocessing:processing/iridium/ingot/from_nugget`,
        `moremekanismprocessing:processing/nickel/nugget/from_ingot`,
        `moremekanismprocessing:processing/nickel/ingot/from_nugget`,
        `moremekanismprocessing:processing/platinum/nugget/from_ingot`,
        `moremekanismprocessing:processing/platinum/ingot/from_nugget`,
        `moremekanismprocessing:processing/zinc/nugget/from_ingot`,
        `moremekanismprocessing:processing/zinc/ingot/from_nugget`,
        `botanypots:mysticalagriculture/crop/titanium`,
        `botanypots:mysticalagriculture/crop/tungsten`,

        //=== Sky Exclusive ===
        'bygonenether:pressing/netherite_scrap_ingot',
        `exdeorum:cobblestone`,
        `exdeorum:cobbled_deepslate`,
        'opolisutilities:ender_pearl_fragments_from_ender_pearl',
        'opolisutilities:ender_pearl_from_ender_pearl_fragments',
        'opolisutilities:copper_ingot_from_nuggets',
        `strainers:cobbled_deepslate`,
        `strainers:cobblestone`
    ])

    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "tag": "forge:ingots/draconium"
            }
        },
        "output": {
            "item": "draconicevolution:draconium_dust"
        }
    }).id('kubejs:processing/draconium/dust/from_ingot')
    mekEnrich(event, "forge:ores/draconium", "draconicevolution:draconium_dust", 2)

    if (global.devLogging) {
        console.log("AU + Sky Unifier applied safely:", recipeCounts)
    }

})
