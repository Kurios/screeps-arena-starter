import { getObjectsByPrototype } from 'game/utils';
import { ConstructionSite, Creep, Source, StructureSpawn } from 'game/prototypes';
import { CARRY, MOVE, WORK, ERR_NOT_IN_RANGE } from 'game/constants';
import { findClosestByPath, RESOURCE_ENERGY } from 'game';
import { logCPURemaining } from '@common/utils.mjs';


const spawn = getObjectsByPrototype(StructureSpawn).find(i => i.my)!;
const constructionSite = getObjectsByPrototype(ConstructionSite).find(i => i.my)!;

export function loop() {

    if(!spawn.spawning) {
        spawn.spawnCreep([WORK, CARRY, MOVE, MOVE]);
    }

    var myCreeps = getObjectsByPrototype(Creep).filter(creep => creep.my);

    for(var creep of myCreeps) {
        let energy = creep.store.getUsedCapacity(RESOURCE_ENERGY)
        if(energy && energy > 0) {      
            if(creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                creep.moveTo(constructionSite);
            }
        } else {      
            const energySource = findClosestByPath(creep,getObjectsByPrototype(Source));
            if(creep.harvest(energySource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(energySource);
            }
        }
    }    

    logCPURemaining();
}