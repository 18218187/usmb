export default class Subscribable {
  constructor() {
    this.subscribers = new Set();
  }
  /**
   * Subscribe to the message stream.
   * @param  {(msg:MessageType)=>void} callback
   */
  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }
  /**
   * Publish a message to the message stream.
   * @param msg The message to publish
   */
  broadcast(msg) {
    this.subscribers.forEach((callback) => {
      callback(msg);
    });
  }
}
//# sourceMappingURL=Subscribable.js.map
