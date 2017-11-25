import { Component, Input } from '@angular/core';
import { Link, Node } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:path
        class="link"
        marker-start="url(#circleMarker)" marker-mid="url(#textMarker)" 
        
        [attr.d]="positionLink"
        
        [attr.marker-end]=" link[2].link ? 'null': 'url(#circleMarker)'"
        
        
    ></svg:path>
  `,
  styleUrls: ['./link-visual.component.css']
})

export class LinkVisualComponent  {
  @Input('linkVisual') link: Node[];

  get positionLink() {

    let d = this.link;

    var diffX0;
    var diffY0;
    var diffX2;
    var diffY2;
    var pathLength01;
    var pathLength12;
    var offsetX0;
    var offsetY0;
    var offsetX2;
    var offsetY2;

    diffX0 = d[0].x - d[1].x;
    diffY0 = d[0].y - d[1].y;
    diffX2 = d[2].x - d[1].x;
    diffY2 = d[2].y - d[1].y;
    
    pathLength01 = Math.sqrt((diffX0 * diffX0) + (diffY0 * diffY0));
    pathLength12 = Math.sqrt((diffX2 * diffX2) + (diffY2 * diffY2));
    
    var nodeR = d[0].rnode;
    var lNodeR = d[2].r;

    offsetX0 = (diffX0 *  nodeR) / pathLength01;
    offsetY0 = (diffY0 *  nodeR) / pathLength01;
    
    if(!d[2].link){
      offsetX2 = (diffX2 * nodeR) / pathLength12;
      offsetY2 = (diffY2 * nodeR) / pathLength12;
    }else{
      offsetX2 = (diffX2 * lNodeR) / pathLength12;
      offsetY2 = (diffY2 * lNodeR) / pathLength12;
    }

    var x0Pos,y0Pos,x2Pos,y2Pos;
    
    if (d[0].link){
      x0Pos = d[0].x;
      y0Pos = d[0].y;
    }else{
      x0Pos = d[0].x - offsetX0;
      y0Pos = d[0].y - offsetY0;
    }
    if (d[2].link){
      x2Pos = d[2].x;
      y2Pos = d[2].y;
    }else{
      x2Pos = d[2].x - offsetX2;
      y2Pos = d[2].y - offsetY2;
    }

    return "M" + x0Pos + "," + y0Pos
         + "S" + d[1].x + "," + d[1].y
         + " " + x2Pos + "," + y2Pos;
  }
}
