import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Classroom } from 'src/api/classrooms/entities/classroom.entity';
import { Message } from 'src/api/messages/entities/message.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @ApiProperty()
  @Column()
  @Field(() => String)
  name: string;

  @Field(() => Classroom, { nullable: true })
  @ManyToOne(() => Classroom, (classroom) => classroom.users, {
    nullable: true,
  })
  classroom: Classroom;

  @Field(() => [Message])
  @OneToMany(() => Message, (message) => message.user)
  messages: Array<Message>;
}
