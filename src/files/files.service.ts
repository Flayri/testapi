import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {

    async createFile(file): Promise<string>{
        try {
            const fileName=uuid.v4()+'.jpg'
            const filePath = path.resolve(__dirname,'..','static')
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive:true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        } catch (e) {
            throw new HttpException('Произошла ошибка при записи файла',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async todase64(file): Promise<string>{
        const img = fs.readFileSync(file);
        const base64String = Buffer.from(file).toString('base64');
        //const result = fs.readFileSync(file, {encoding: 'base64'})
        const withPrefix='data:image/png;base64,' + base64String;
        return withPrefix;
    }
}
