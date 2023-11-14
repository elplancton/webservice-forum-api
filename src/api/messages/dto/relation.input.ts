import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class RelationInput {
  @Field(() => Int)
  id: number;
}
