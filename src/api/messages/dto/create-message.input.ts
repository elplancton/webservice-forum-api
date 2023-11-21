import { Field, InputType } from '@nestjs/graphql';
import { RelationInput } from './relation.input';
import { IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateMessageInput {
  @ApiProperty({ description: 'Conteúdo da mensagem', example: 'oi' })
  @IsString()
  @Field()
  content: string;

  @ApiProperty({ description: 'Id do usuário', example: { id: 1 } })
  @IsObject()
  @Field(() => RelationInput)
  user: RelationInput;

  @ApiProperty({ description: 'Id da turma', example: { id: 2 } })
  @IsObject()
  @Field(() => RelationInput)
  classroom: RelationInput;
}
