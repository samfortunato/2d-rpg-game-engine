import { Entities } from './../entities/entities';
import Entity from './../entities/entity';

function update(): void {
  Entities.forEach((entity: Entity): void => {
    entity.update();
  })
}

export default update;
