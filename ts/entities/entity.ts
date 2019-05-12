import Event from './../core_engine/event';

class Entity {
  public name: string = '';
  public xPos: number = 0;
  public yPos: number = 0;
  public width: number = 0;
  public height: number = 0;

  public update(event?: Event): void {}
}

export default Entity;
