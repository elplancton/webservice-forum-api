import { Field, ObjectType } from '@nestjs/graphql';
import { Message } from 'src/api/messages/entities/message.entity';
import { User } from 'src/api/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Classroom {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  name: string;

  @Field(() => [User])
  @OneToMany(() => User, (user) => user.classroom)
  users: Array<User>;

  @Field(() => [Message])
  @OneToMany(() => Message, (message) => message.classroom)
  messages: Array<Message>;
}
