'use strict';

// Here is an example of a RingBuffer implementation for Node.js
// You can use concepts from the RingBuffer and AsyncPool implementations
// Reference code: https://github.com/HowProgrammingWorks/AsyncPool
// Explanation video: https://youtu.be/vJc4SotVL_g
// The goal is to create a RoundRobin class with the following features:
//   - RoundRobin should implement the round-robin algorithm.
//   - RoundRobin should create instances by calling a factory function
//     passed to the constructor.
//   - The getInstance method of RoundRobin should return the next instance,
//     respecting a timeout period.
//   - After the timeout, RoundRobin should be able to provide the same
//     instance again.

class RingBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = Buffer.alloc(size);
    this.offset = 0;
  }

  write(data) {
    const { size, offset } = this;
    const { length } = data;
    const available = size - offset;
    const len = Math.min(available, size, length);
    const rest = available - length;
    this.buffer.write(data, offset, len);
    this.offset += len;
    if (this.offset === size) this.offset = 0;
    if (rest < 0) this.write(data.slice(rest));
  }

  toString() {
    return this.buffer.toString('utf8');
  }
}

// Usage

const ring = new RingBuffer(10);
ring.write('1');
console.log(ring.toString());
ring.write('23');
console.log(ring.toString());
ring.write('4567890A');
console.log(ring.toString());
ring.write('B');
console.log(ring.toString());
