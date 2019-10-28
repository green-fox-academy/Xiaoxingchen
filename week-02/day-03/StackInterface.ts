export default interface Stack<T> {
  empty(): boolean;
  peek(): T;
  push(value: T): void;
  pop(): T;
  }