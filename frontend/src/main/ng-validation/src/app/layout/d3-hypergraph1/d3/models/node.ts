import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  link?:boolean;

  id: string;
  linkCount: number = 0;


  constructor(id, link) {
    this.id = id;
    this.link = link;

  }

  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  get r() {
    return this.link ? this.rlink : this.rnode;
  }

  get rnode() {
    return 50 * this.normal() + 5;
  }

  get rlink() {
    return 0.6 * this.normal();
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    let index = 0;//Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    return APP_CONFIG.SPECTRUM[index];
  }

 

}
