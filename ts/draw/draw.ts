import * as DrawUtil from './draw_util';
import { Entities } from './../entities/entities';

function draw(): void {
  Entities.forEach((entity) => {
    DrawUtil.drawEntity(entity);
  });
}

export default draw;
