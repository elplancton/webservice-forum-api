import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateClassroomDto {
  @ApiProperty({ description: 'Nome da turma', example: 'BSI17' })
  @Field()
  name: string;
}
