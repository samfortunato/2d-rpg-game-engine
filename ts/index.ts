import update from './core_engine/update';
import draw from './draw/draw';

function gameLoop(): void {
  update();
  draw();
  
  requestAnimationFrame(gameLoop);
}

gameLoop();
