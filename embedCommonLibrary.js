import * as fs from 'node:fs/promises'

async function fixPaths(dir){
    try{
        const files = await fs.readdir(dir, { withFileTypes: true });
        files.forEach(async file => {
            if(file.isDirectory()){
                if(file.name != "common"){
                    fixPaths(file.parentPath + "/" + file.name)
                }
            }else{
                let text = await fs.readFile(file.parentPath + "/" + file.name,'utf-8')
                let replaced = text.replaceAll("from '@common/", "from './common/")
                await fs.writeFile(file.parentPath + "/" + file.name,replaced)
            }
        })
    }catch(e){
        console.error(e)
    }
}

await fixPaths("./output")