import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { PageHeaderModule } from './../../shared';
import { D3Service } from 'd3-ng2-service'; // <-- import statement	
import { BrushZoom2Component } from './../d3/brush-zoom-2/brush-zoom-2.component';
import { DragZoom2Component } from './../d3/drag-zoom-2/drag-zoom-2.component';
import { VoronoiSpirals3Component } from './../d3/voronoi-spirals-3/voronoi-spirals-3.component';
import { WrapperBrushZoom2Component } from './../d3/wrapper-brush-zoom-2/wrapper-brush-zoom-2.component';
import { WrapperDragZoom2Component } from './../d3/wrapper-drag-zoom-2/wrapper-drag-zoom-2.component';
import { WrapperVoronoiSpirals3Component } from './../d3/wrapper-voronoi-spirals-3/wrapper-voronoi-spirals-3.component';

import { PaginationComponent } from './../pagination/pagination.component';
import { KonsistensilistComponent } from './../rules/konsistensilist/konsistensilist.component';
import { KonsistensiService } from './../../services/konsistensi.service';


@NgModule({
    imports: [
    	CommonModule, 
    	RulesRoutingModule,
    	FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(), 
        PageHeaderModule
        ],
    declarations: [
	    RulesComponent,
	    BrushZoom2Component,
	    DragZoom2Component,
	    VoronoiSpirals3Component,
	    WrapperBrushZoom2Component,
	    WrapperDragZoom2Component,
	    WrapperVoronoiSpirals3Component,
	    PaginationComponent,
	    KonsistensilistComponent
    ],
    providers: [D3Service,KonsistensiService]
})
export class RulesModule {}
