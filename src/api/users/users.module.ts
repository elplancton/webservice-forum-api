import { Module } from '@nestjs/common';
import { UsersDataModule } from './users-data.module';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [UsersDataModule],
  controllers: [UsersController],
  providers: [UsersResolver],
})
export class UsersModule {}
