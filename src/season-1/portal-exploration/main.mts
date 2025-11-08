import { getObjectsByPrototype } from 'game/utils';
import { Creep, StructureSpawn } from 'game/prototypes';
import { ATTACK, MOVE, ERR_NOT_IN_RANGE } from 'game/constants';

const mySpawn = getObjectsByPrototype(StructureSpawn).find(spawn => spawn.my)!;
const enemySpawn = getObjectsByPrototype(StructureSpawn).find(spawn => !spawn.my)!;
var creep:Creep;

export function loop() {
    if(!creep) {
        let spawn = mySpawn.spawnCreep([ATTACK, ATTACK, MOVE, MOVE]).object;
        if(spawn){
            creep = spawn;
        }
    }
    if(creep.attack(enemySpawn) == ERR_NOT_IN_RANGE) {
        creep.moveTo(enemySpawn);
    }
}