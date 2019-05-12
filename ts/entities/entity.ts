import Event from './../core_engine/event';

class Entity {
  public name: string;
  public xPos: number;
  public yPos: number;
  public width: number;
  public height: number;

  public update(event: Event): void {}
}

export default Entity;
