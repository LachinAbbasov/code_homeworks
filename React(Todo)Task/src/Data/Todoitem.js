const { nanoid } = require('nanoid');

class ToDoItem {
  constructor(title, isDone = false) {
    this.id = nanoid();
    this.title = title;
    this.isDone = isDone;
    this.createdAt = new Date();
  }
}

module.exports = ToDoItem;
