import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as Path from 'path';
import { UpdateCatDto } from './UpdateCatDto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api_section_get/:id')
  getHello(@Param() params: any): string {
    return this.appService.getGet(params.id);
  }

  @Post('/api_section_post')
  getPost(@Query('version') version: string): string {
    return this.appService.getPost(version);
  }

  @Put('/api_section_put')
  getPut(@Body() updateCatDto: UpdateCatDto): string {
    return this.appService.getPut(updateCatDto);
  }

  @Patch('/api_section_patch')
  getPatch(): string {
    return this.appService.getPatch();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.appService.getFile(file);
  }
}
