import Event from './event';

class EventQueue {
  private events: Event[] = [];

  public enqueueEvent(event: Event): Event {
    this.events.push(event);
    return event;
  }

  public getNextEvent(): Event | undefined {
    if (this.events.length !== 0) {
      return this.events.shift();
    } else {
      return undefined;
    }
  }
}

export default new EventQueue();
