import { Component, OnInit, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss'],
    animations: [routerTransition()]
})
export class RulesComponent implements OnInit {
	private parentNativeElement: any;
    constructor(element: ElementRef, ) {
    	this.parentNativeElement = element.nativeElement;
    }

    ngOnInit() {

    	if (this.parentNativeElement !== null) {


	    }
    }
}
