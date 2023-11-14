import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserClassroom } from './user-classroom.dto';

@InputType()
export class CreateUserDto {
  @ApiProperty({ description: 'Nome do usuário', example: 'Rafael' })
  @Field()
  name: string;

  @Field(() => UserClassroom, { nullable: true })
  classroom?: UserClassroom;
}
