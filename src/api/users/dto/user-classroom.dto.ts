import { Field, InputType, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UserClassroom {
  @ApiProperty({ description: 'Id da turma', example: 1 })
  @Field(() => Int)
  id: number;
}
