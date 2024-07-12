export class ExecutorResultSuccess {
  constructor(result) {
    this.result = result;
    this.success = true;
    this.retriable = false;
  }
}
export class ExecutorResultFailRetriable {
  constructor(result) {
    this.result = result;
    this.success = false;
    this.retriable = true;
  }
}
export class ExecutorResultFailNotRetriable {
  constructor(result) {
    this.result = result;
    this.success = false;
    this.retriable = false;
  }
}
//# sourceMappingURL=ExecutorResult.js.map
