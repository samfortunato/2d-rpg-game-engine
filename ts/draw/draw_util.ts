import Entity from '../entities/entity';
import { ctx } from './canvas';

export function drawEntity(entity: Entity): void {
  ctx.fillStyle = '#000000';
  ctx.fillRect(entity.xPos, entity.yPos, entity.width, entity.height);
}
