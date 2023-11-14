import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserClassroom {
  @Field(() => Int)
  id: number;
}
