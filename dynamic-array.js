class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0
    this.capacity = defaultSize
    this.data = new Array(this.capacity)

  }

  read(index) {
    return this.data[index]
  }

  unshift(val) {
    this.data = [val].concat(this.data)
    this.length ++
  }

}


module.exports = DynamicArray;
