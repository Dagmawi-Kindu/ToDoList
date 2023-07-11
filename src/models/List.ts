import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
export enum Status {
  to_do = 'to_do',
  doing = 'doing',
  done = 'done',
}
@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  date: Date;

  @Column()
  status: Status;
}
