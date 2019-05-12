enum State {
  Idle = 'IDLE'
}

class Player {
  public name: string;
  public xPos: number;
  public yPos: number;
  public width: number = 32;
  public height: number = 32;

  private state: State = State.Idle;

  constructor(xPos: number = 512, yPos: number = 384) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  public update(): void {
    switch (this.state) {
      case State.Idle:
        break;

      default:
        break;
    }
  }
}

export default new Player();
