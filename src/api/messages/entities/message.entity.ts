import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Classroom } from 'src/api/classrooms/entities/classroom.entity';
import { User } from 'src/api/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Message {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  content: string;

  @Field(() => Classroom)
  @ManyToOne(() => Classroom, (classroom) => classroom.messages)
  classroom: Classroom;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.messages)
  user: User;
}
