import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ClassroomsService } from './classrooms.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@ApiTags('classrooms')
@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) {}

  @ApiCreatedResponse({ description: 'Turma criada com sucesso.' })
  @ApiInternalServerErrorResponse({
    description: 'Um erro do servidor impediu a criação',
  })
  @ApiOperation({ description: `Crie turmas` })
  @ApiBody({ type: CreateClassroomDto })
  @Post()
  create(@Body() createClassroomDto: CreateClassroomDto) {
    return this.classroomsService.create(createClassroomDto);
  }

  @ApiOkResponse({
    description: 'Lista de turmas.',
    type: Classroom,
    isArray: true,
  })
  @ApiOperation({ description: `Lista as turmas` })
  @Get()
  findAll() {
    return this.classroomsService.findAll();
  }
}
