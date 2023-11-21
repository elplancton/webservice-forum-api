import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({ description: 'Usuário criado com sucesso.' })
  @ApiInternalServerErrorResponse({
    description: 'Um erro do servidor impediu a criação',
  })
  @ApiOperation({ description: `Crie usuários` })
  @ApiBody({ type: CreateUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOkResponse({
    description: 'Lista de usuários.',
    type: User,
    isArray: true,
  })
  @ApiOperation({ description: `Lista os usuários` })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
