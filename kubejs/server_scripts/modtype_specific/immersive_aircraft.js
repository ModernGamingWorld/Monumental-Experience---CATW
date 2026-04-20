//Priority: 1000
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

  ☻/  * @file <<=-- Immersive Aircraft --=>> recipe script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(function (event) {

    // ---------- Helpers ----------

    // Create sequenced assembly helper
    function addSequencedAssembly(idSuffix, blueprintItem, resultItem, sequenceSteps) {
        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: {
                item: blueprintItem
            },
            loops: 1,
            results: [{
                chance: 100,
                item: resultItem
            }],
            sequence: sequenceSteps,
            transitionalItem: {
                item: blueprintItem
            }
        }).id('kubejs:immersive_aircraft/' + idSuffix)
    }

    // Helper for one deploying step in sequenced_assembly
    function seqDeploy(blueprintItem, ingredientItem) {
        return {
            type: 'create:deploying',
            ingredients: [{
                    item: blueprintItem
                },
                {
                    item: ingredientItem
                }
            ],
            results: [{
                item: blueprintItem
            }]
        }
    }

    // ---------- Create: Sequenced Assembly (aircraft) ----------

    // Airship
    addSequencedAssembly(
        'airship',
        'kubejs:airship_blueprint',
        'immersive_aircraft:airship',
        [
            seqDeploy('kubejs:airship_blueprint', 'create:precision_mechanism'),
            seqDeploy('kubejs:airship_blueprint', 'immersive_aircraft:sail'),
            seqDeploy('kubejs:airship_blueprint', 'immersive_aircraft:sail'),
            seqDeploy('kubejs:airship_blueprint', 'immersive_aircraft:hull'),
            seqDeploy('kubejs:airship_blueprint', 'immersive_aircraft:engine')
        ]
    )

    // Cargo Airship
    addSequencedAssembly(
        'cargo_airship',
        'kubejs:cargo_blueprint',
        'immersive_aircraft:cargo_airship',
        [
            seqDeploy('kubejs:cargo_blueprint', 'create:precision_mechanism'),
            seqDeploy('kubejs:cargo_blueprint', 'immersive_aircraft:airship'),
            seqDeploy('kubejs:cargo_blueprint', 'sophisticatedstorage:storage_tool'),
            seqDeploy('kubejs:cargo_blueprint', 'immersive_aircraft:hull')
        ]
    )

    // Biplane
    addSequencedAssembly(
        'biplane',
        'kubejs:biplane_blueprint',
        'immersive_aircraft:biplane',
        [
            seqDeploy('kubejs:biplane_blueprint', 'create:precision_mechanism'),
            seqDeploy('kubejs:biplane_blueprint', 'immersive_aircraft:hull'),
            seqDeploy('kubejs:biplane_blueprint', 'immersive_aircraft:hull'),
            seqDeploy('kubejs:biplane_blueprint', 'immersive_aircraft:engine'),
            seqDeploy('kubejs:biplane_blueprint', 'immersive_aircraft:propeller')
        ]
    )

    // Gyrodyne
    addSequencedAssembly(
        'gyrodyne',
        'kubejs:gyrodyne_blueprint',
        'immersive_aircraft:gyrodyne',
        [
            seqDeploy('kubejs:gyrodyne_blueprint', 'create:precision_mechanism'),
            seqDeploy('kubejs:gyrodyne_blueprint', 'immersive_aircraft:sail'),
            seqDeploy('kubejs:gyrodyne_blueprint', 'immersive_aircraft:sail'),
            seqDeploy('kubejs:gyrodyne_blueprint', 'immersive_aircraft:hull'),
            seqDeploy('kubejs:gyrodyne_blueprint', 'immersive_aircraft:propeller')
        ]
    )

    // Quadrocopter
    addSequencedAssembly(
        'quadrocopter',
        'kubejs:quadrocopter_blueprint',
        'immersive_aircraft:quadrocopter',
        [
            seqDeploy('kubejs:quadrocopter_blueprint', 'immersive_aircraft:propeller'),
            seqDeploy('kubejs:quadrocopter_blueprint', 'immersive_aircraft:propeller'),
            seqDeploy('kubejs:quadrocopter_blueprint', 'immersive_aircraft:engine'),
            seqDeploy('kubejs:quadrocopter_blueprint', 'farmersdelight:basket'),
            seqDeploy('kubejs:quadrocopter_blueprint', 'immersive_aircraft:propeller'),
            seqDeploy('kubejs:quadrocopter_blueprint', 'immersive_aircraft:propeller')
        ]
    )

    // ========== Removals ==========

    removeRecipeByID(event, [
        'immersive_aircraft:gyroscope',
        'immersive_aircraft:airship',
        'immersive_aircraft:cargo_airship',
        'immersive_aircraft:biplane',
        'immersive_aircraft:gyrodyne',
        'immersive_aircraft:quadrocopter'
    ])

})
//Made by KnightDexx, for use in both Monumental Experience & Age of Fate modpacks
//https://legacy.curseforge.com/minecraft/modpacks/age-of-fate
//https://legacy.curseforge.com/minecraft/modpacks/monumental-experience-in-space