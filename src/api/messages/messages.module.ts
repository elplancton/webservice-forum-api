import { Module } from '@nestjs/common';
import { MessagesDataModule } from './messages-data.module';
import { MessagesResolver } from './messages.resolver';
import { MessagesController } from './messages.controller';

@Module({
  imports: [MessagesDataModule],
  controllers: [MessagesController],
  providers: [MessagesResolver],
})
export class MessagesModule {}
