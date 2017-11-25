import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { PageHeaderModule } from './../../shared';
import { PaginationComponent } from './../pagination/pagination.component';
import { KonsistensilistComponent } from './../rules/konsistensilist/konsistensilist.component';
import { KonsistensiService } from './../../services/konsistensi.service';

// import { GraphrulesModule } from './graphrules/graphrules.module';
import { GraphrulesComponent } from './graphrules/graphrules.component';


// import { HttpModule } from '@angular/http';
import {D3Service, D3_DIRECTIVES } from './../d3-hypergraph1/d3';

import { GraphComponent } from './../d3-hypergraph1/visuals/graph/graph.component';
import { SHARED_VISUALS } from './../d3-hypergraph1/visuals/shared';
// import { BrowserModule } from '@angular/platform-browser';

// import { GraphrulesComponent } from './graphrules/graphrules.component';



@NgModule({
    imports: [
    	CommonModule, 
    	RulesRoutingModule,
    	FormsModule,
        // HttpModule,
        ReactiveFormsModule,
        NgbModule.forRoot(), 
        PageHeaderModule,
        // GraphComponent,
        // ...SHARED_VISUALS,
        // ...D3_DIRECTIVES,
        // BrowserModule,
        // GraphrulesModule
        ],
    declarations: [
	    RulesComponent,
	    PaginationComponent,
	    KonsistensilistComponent,
        GraphrulesComponent,
        GraphComponent,
        ...SHARED_VISUALS,
        ...D3_DIRECTIVES
    ],
    providers: [ KonsistensiService, D3Service]
})
export class RulesModule {}
