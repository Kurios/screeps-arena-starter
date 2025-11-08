set -x
rm -r ./output
npx tsc
cp -r ./output/common ./output/season-1/construct-control/common
cp -r ./output/common ./output/season-1/portal-exploration/common
cp -r ./output/common ./output/season-1/spawn-strike/common
node ./embedCommonLibrary.js