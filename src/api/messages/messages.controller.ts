import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageInput } from './dto/create-message.input';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageInput: CreateMessageInput) {
    return this.messagesService.create(createMessageInput);
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }
}
