import { ctx } from './canvas';

export function drawEntity(entity): void {
  ctx.fillStyle = '#000000';
  ctx.fillRect(entity.xPos, entity.yPos, entity.width, entity.height);
}
