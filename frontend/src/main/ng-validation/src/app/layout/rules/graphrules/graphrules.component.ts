import APP_CONFIG from './../../d3-hypergraph1/app.config';
import { Node, Link } from './../../d3-hypergraph1/d3';	
import { Component } from '@angular/core';
import {hypergraph} from 'd3-hypergraph';



@Component({
  selector: 'graphrules-component',
  templateUrl: './graphrules.component.html',
  styleUrls: ['./graphrules.component.css']
})

export class GraphrulesComponent {
  nodes: Node[] = [];
  links: Link[] = [];
  bilinks: Node[][] = [];

  constructor() {
    const N = APP_CONFIG.N,
          getIndex = number => number - 1;

//    /** constructing the nodes array */
//    for (let i = 1; i <= N; i++) {
//      this.nodes.push(new Node(i));
//    }
//
//    for (let i = 1; i <= N; i++) {
//      for (let m = 2; i * m <= N; m++) {
//        /** increasing connections toll on connecting nodes */
//        this.nodes[getIndex(i)].linkCount++;
//        this.nodes[getIndex(i * m)].linkCount++;
//
//        /** connecting the nodes before starting the simulation */
//        this.links.push(new Link(i, i * m));
//      }
//    }
//
    let data = new hypergraph(this.data.links,this.data.nodes);
    // console.log(data);
    for(let node of data.nodes){
      this.nodes.push(new Node(node.id, node.link));
    }

    for(let link of data.links){
      let s = this.nodeById(link.source);
      let t = this.nodeById(link.target);
      // console.log(link.source+' '+link.target); 

      this.links.push(new Link(s as Node, t as Node));

    }

    // console.log(this.nodes); 
    // console.log(this.links);

    let lengthlinks:number = this.links.length;
    // console.log(lengthlinks);
    for (var f = lengthlinks - 1; f >= 0; f--) {
      let link = this.links[f];
      let s = link.source as Node;
      let t = link.target as Node;
      let i = new Node("i"+f, true);

      this.nodes.push(i);
      this.links.push(new Link(s, i));
      this.links.push(new Link(i, t));
      this.bilinks.push([s, i, t]);
    }

    console.log(this.nodes); 
    console.log(this.links);
    console.log(this.bilinks);

  }


  get data(){
    let mynodes: any[]=[
        {id : "A"},
        {id : "B"},
        {id : "C"},
        {id : "D"},
        {id : "E"},
        {id : "F"},
        {id : "G"},
        {id : "H"},
        {id : "I"}
    ];
    let mylinks: string[][]=[
      ["A","B","C"],
      ["C","D","E"],
      ["C","E"],
      ["F","G","H","I"]
    ];
    return {nodes: mynodes, links: mylinks };
  }

  nodeById(id){
    return this.nodes.find(i => i.id === id);
  }

}
