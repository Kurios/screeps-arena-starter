Screeps-Arena-Starter
======
a point in time example of a typescript setup.

Your code should go into:

`src/....`

Screeps Arena should be pointed to:

`output/...`

Typings borrowed from, so alot of love to kounoike: (https://github.com/kounoike/typed-screeps-arena/tree/season_1)[https://github.com/kounoike/typed-screeps-arena/tree/season_1]

If this is not Season1 or the typings change, you may need to handle getting those working/copying the new ones into here from where the game dumps them.


note: the `Any` object `memory` is added to the typedef of `GameObject` to attempt to create a generic memory buffer on all objects. By default the value is undefined.