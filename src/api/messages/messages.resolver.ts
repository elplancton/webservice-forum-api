import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateMessageInput } from './dto/create-message.input';
import { Message } from './entities/message.entity';
import { MessagesService } from './messages.service';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation(() => Message, { name: 'message' })
  createMessage(
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
  ) {
    return this.messagesService.create(createMessageInput);
  }

  @Query(() => [Message], { name: 'messages' })
  findAll(@Args('classroomId', { type: () => Int }) classroomId: number) {
    return this.messagesService.findAllByClassroom(classroomId);
  }
}
