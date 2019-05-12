import { Entities } from './../entities/entities';
import Entity from './../entities/entity';
import EventQueue from './event_queue';
import Event from './event';

function update(): void {
  const nextEvent: Event | null = EventQueue.getNextEvent();
  
  Entities.forEach((entity: Entity): void => {
    entity.update(nextEvent);
  })
}

export default update;
