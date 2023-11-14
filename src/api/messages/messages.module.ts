import { Module } from '@nestjs/common';
import { MessagesDataModule } from './messages-data.module';
import { MessagesResolver } from './messages.resolver';

@Module({
  imports: [MessagesDataModule],
  providers: [MessagesResolver],
})
export class MessagesModule {}
