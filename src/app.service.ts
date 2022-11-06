import { Injectable } from '@nestjs/common';
import { UpdateCatDto } from './UpdateCatDto';

@Injectable()
export class AppService {
  getPatch() {
    return 'Hello patch!';
  }

  getPut(updateCatDto: UpdateCatDto) {
    return `This family returns ${updateCatDto.firstname} - ${updateCatDto.lastname}`;
  }

  getGet(id: string) {
    return `This action returns a #${id} cat`;
  }

  getPost(version: string) {
    return `version new : ${version}`;
  }

  getFile(file: Express.Multer.File) {
    console.log(file);
  }
}
