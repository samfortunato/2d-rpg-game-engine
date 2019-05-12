import * as DrawUtil from './draw_util';
import { Entities } from './../entities/entities';
import Entity from './../entities/entity';

function draw(): void {
  Entities.forEach((entity: Entity): void => {
    DrawUtil.drawEntity(entity);
  });
}

export default draw;
