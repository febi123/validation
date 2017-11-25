import { Node } from './';

export class Link implements d3.SimulationLinkDatum<Node> {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;

  // must - defining enforced implementation properties
  source: Node | string | number;
  target: Node | string | number;

  constructor(source, target) {
    this.source = source;
    this.target = target;
  }

//   get positionlink(d) {
// 	diffX0 = d[0].x - d[1].x;
// 	diffY0 = d[0].y - d[1].y;
// 	diffX2 = d[2].x - d[1].x;
// 	diffY2 = d[2].y - d[1].y;
	
// 	pathLength01 = Math.sqrt((diffX0 * diffX0) + (diffY0 * diffY0));
// 	pathLength12 = Math.sqrt((diffX2 * diffX2) + (diffY2 * diffY2));
	
// 	offsetX0 = (diffX0 *  nodeR) / pathLength01;
// 	offsetY0 = (diffY0 *  nodeR) / pathLength01;
// 	if(!d[2].link){
// 		offsetX2 = (diffX2 * nodeR) / pathLength12;
// 		offsetY2 = (diffY2 * nodeR) / pathLength12;
// 	}else{
// 		offsetX2 = (diffX2 * lNodeR) / pathLength12;
// 		offsetY2 = (diffY2 * lNodeR) / pathLength12;
// 	}

// 	var x0Pos,y0Pos,x2Pos,y2Pos;
	
// 	if (d[0].link){
// 		x0Pos = d[0].x;
// 		y0Pos = d[0].y;
// 	}else{
// 		x0Pos = d[0].x - offsetX0;
// 		y0Pos = d[0].y - offsetY0;
// 	}
// 	if (d[2].link){
// 		x2Pos = d[2].x;
// 		y2Pos = d[2].y;
// 	}else{
// 		x2Pos = d[2].x - offsetX2;
// 		y2Pos = d[2].y - offsetY2;
// 	}

// 	return "M" + x0Pos + "," + y0Pos
//        + "S" + d[1].x + "," + d[1].y
//        + " " + x2Pos + "," + y2Pos;
// }
}
