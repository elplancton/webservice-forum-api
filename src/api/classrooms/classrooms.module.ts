import { Module } from '@nestjs/common';
import { ClassroomsDataModule } from './classrooms-data.module';
import { ClassroomsController } from './classrooms.controller';
import { ClassroomsResolver } from './classrooms.resolver';

@Module({
  imports: [ClassroomsDataModule],
  controllers: [ClassroomsController],
  providers: [ClassroomsResolver],
})
export class ClassroomsModule {}
