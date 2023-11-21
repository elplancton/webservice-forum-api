import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMessageInput } from './dto/create-message.input';
import { Message } from './entities/message.entity';
import { MessagesService } from './messages.service';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @ApiCreatedResponse({ description: 'Mensagem criada com sucesso.' })
  @ApiInternalServerErrorResponse({
    description: 'Um erro do servidor impediu a criação',
  })
  @ApiOperation({ description: `Crie mensagens em uma turma` })
  @ApiBody({ type: CreateMessageInput })
  @Post()
  create(@Body() createMessageInput: CreateMessageInput) {
    return this.messagesService.create(createMessageInput);
  }

  @ApiOkResponse({
    description: 'Lista de mensagens em uma turma.',
    type: Message,
    isArray: true,
  })
  @ApiOperation({ description: `Lista as mensagens de uma turma` })
  @Get()
  findAll(@Query('classroomId') classroomId: number) {
    return this.messagesService.findAllByClassroom(classroomId);
  }
}
