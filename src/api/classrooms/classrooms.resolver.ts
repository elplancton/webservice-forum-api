import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassroomsService } from './classrooms.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Resolver()
export class ClassroomsResolver {
  constructor(private readonly classroomsService: ClassroomsService) {}

  @Mutation(() => Classroom)
  classroom(
    @Args('createClassroomDto') createClassroomDto: CreateClassroomDto,
  ) {
    return this.classroomsService.create(createClassroomDto);
  }

  @Query(() => [Classroom], { name: 'classrooms' })
  findAll() {
    return this.classroomsService.findAll();
  }
}
