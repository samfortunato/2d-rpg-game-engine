import Entity from './entity';
import Event from './../core_engine/event';

enum State {
  Idle = 'IDLE'
}

class Player extends Entity {
  private state: State = State.Idle;

  constructor(xPos: number = 512, yPos: number = 384) {
    super();
    
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = 32;
    this.height = 32;
  }

  public update(event: Event): void {
    switch (this.state) {
      case State.Idle:
        break;

      default:
        break;
    }
  }
}

export default new Player();
