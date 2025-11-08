import { getCpuTime, getTicks } from "game/utils";
import { arenaInfo } from 'game';

export function logCPURemaining() {
    let ticklimit = arenaInfo.cpuTimeLimit
    if (getTicks() == 1) {
        ticklimit = arenaInfo.cpuTimeLimitFirstTick
    }
    let cpuTime = getCpuTime()
    console.log("CPU Time Limit: " + ticklimit + " CPU Used: " + cpuTime + " Tick: " + getTicks() + "Remaining %: " + (cpuTime / ticklimit * 100).toFixed(2));
}