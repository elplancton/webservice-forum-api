import { Field, InputType } from '@nestjs/graphql';
import { RelationInput } from './relation.input';

@InputType()
export class CreateMessageInput {
  @Field()
  content: string;

  @Field(() => RelationInput)
  user: RelationInput;

  @Field(() => RelationInput)
  classroom: RelationInput;
}
