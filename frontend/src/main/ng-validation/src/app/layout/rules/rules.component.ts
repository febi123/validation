import { Component, OnInit, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { D3Service, D3, Selection } from 'd3-ng2-service'; 	

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss'],
    animations: [routerTransition()]
})
export class RulesComponent implements OnInit {
	private d3: D3;
	private parentNativeElement: any;
    constructor(element: ElementRef, d3Service: D3Service) {
    	this.d3 = d3Service.getD3(); 
    	this.parentNativeElement = element.nativeElement;
    }

    ngOnInit() {
    	let d3 = this.d3; // <-- for convenience use a block scope variable
    	let d3ParentElement: Selection<any, any, any, any>;

    	if (this.parentNativeElement !== null) {

	      d3ParentElement = d3.select(this.parentNativeElement); // <-- use the D3 select method 

	      // Do more D3 things 

	    }
    }
}
