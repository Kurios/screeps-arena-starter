declare module "game" {
    export * from "game/constants";
    export * as constants from "game/constants";
    export * from "game/prototypes";
    export * as prototypes from "game/prototypes";
    export * from "game/path-finder";
    export * as pathFinder from "game/path-finder";
    export * from "game/utils";
    export * as utils from "game/utils";
    export * from "game/visual";
    export * as visual from "game/visual";

    export const arenaInfo: {
    /**
     * The name of the arena. "Capture the Flag", "Spawn and Swamp", "Collect and Control"
     */
    name: string;
    /**
     * Currently equals to 1 for basic arena and 2 for advanced.
     */
    level: number;
    /**
     * Currently equals to "alpha".
     */
    season: string;
    /**
     * Game ticks limit.
     */
    ticksLimit: number;
    /**
     * CPU wall time execution limit per one tick (except the first tick).
     */
    cpuTimeLimit: number;
    /**
     * CPU wall time limit on the first tick.
     */
    cpuTimeLimitFirstTick: number;
  };
}
