import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClassroomDto {
  @Field()
  name: string;
}
