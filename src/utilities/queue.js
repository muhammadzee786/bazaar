export default class Queue {
  constructor () {
    this.queue = []
    this.pendingPromise = false

    this.enqueue = this.enqueue.bind(this)
    this.dequeue = this.dequeue.bind(this)
  }

  enqueue (promise) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        promise,
        resolve,
        reject
      })
      this.dequeue()
    })
  }

  dequeue () {
    if (this.workingOnPromise) {
      return false
    }
    const item = this.queue.shift()
    if (!item) {
      return false
    }
    try {
      this.workingOnPromise = true
      item.promise()
        .then((value) => {
          this.workingOnPromise = false
          item.resolve(value)
          this.dequeue()
        })
        .catch(err => {
          this.workingOnPromise = false
          item.reject(err)
          this.dequeue()
        })
    } catch (err) {
      this.workingOnPromise = false
      item.reject(err)
      this.dequeue()
    }
    return true
  }
}
