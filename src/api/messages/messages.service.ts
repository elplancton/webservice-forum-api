import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageInput } from './dto/create-message.input';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  create(createMessageInput: CreateMessageInput) {
    return this.messageRepository.save(createMessageInput);
  }

  findAllByClassroom(classroomId: number) {
    return this.messageRepository.find({
      where: { classroom: { id: classroomId } },
      relations: { user: true, classroom: true },
    });
  }
}
