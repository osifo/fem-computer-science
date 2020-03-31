class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  delete(index) {
    const deletedValue = this.data[index];
    this._collapseTo(index);
    return deletedValue;
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

module.exports = {
  ArrayList
};
