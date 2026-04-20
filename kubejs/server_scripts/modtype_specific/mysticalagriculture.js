ServerEvents.recipes(event => {

    let essences = [
        {tier: 'inferium'},
        {tier: 'prudentium'},
        {tier: 'tertium'},
        {tier: 'imperium'},
        {tier: 'supremium'},
        {tier: 'insanium', mod: 'mysticalagradditions'}
    ];

    let farmlandTiers = ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium'];

    // Remove old shaped recipes
    farmlandTiers.forEach(tier => {
        let mod = tier === 'insanium' ? 'mysticalagradditions' : 'mysticalagriculture';
        event.remove({id: `matc:${tier}_essence`});
        event.remove({id: 'matc:insanium_essence'});
    });

    // Essence Upgrades (including all essences)
    for (let i = 0; i < essences.length - 1; i++) {
        let inputEssence = `mysticalagriculture:${essences[i].tier}_essence`;
        let outputEssence = `${essences[i + 1].mod || 'mysticalagriculture'}:${essences[i + 1].tier}_essence`;
        let inputCrystal = `matc:${essences[i].tier}_crystal`;

        // Creating the mechanical crafting recipe for essence upgrade
        event.recipes.createMechanicalCrafting(outputEssence, [
            'XZX',
            'ZYZ',
            'XZX'
        ], {
            Z: inputEssence,
            X: 'mysticalagriculture:prosperity_shard',
            Y: ['mysticalagriculture:master_infusion_crystal', inputCrystal]
        })
        .damageIngredient(4)
        .keepIngredient('mysticalagriculture:master_infusion_crystal')  // Keep master crystal
        .keepIngredient(inputCrystal)  // Keep the tier-specific crystal
        .id(`kubejs:mysticalagriculture/${essences[i + 1].tier}_essence`);

        console.log(`Creating recipe for: kubejs:mysticalagriculture/${essences[i + 1].tier}_essence`);
    }
});
