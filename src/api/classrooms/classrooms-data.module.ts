import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomsService } from './classrooms.service';
import { Classroom } from './entities/classroom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Classroom])],
  providers: [ClassroomsService],
  exports: [TypeOrmModule, ClassroomsService],
})
export class ClassroomsDataModule {}
