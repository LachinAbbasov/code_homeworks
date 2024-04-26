import { nanoid } from 'nanoid';

export default class ToDoitem {
  constructor(title, isDone = false) {
    this.id = nanoid();
    this.title = title;
    this.isDone = isDone;
    this.createdAt = new Date();
  }
}

