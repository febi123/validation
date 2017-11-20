import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MetadataRoutingModule } from './metadata-routing.module';
import { MetadataComponent } from './metadata.component';
import { PageHeaderModule } from './../../shared';

import { PaginationComponent } from './../pagination/pagination.component';
import { MetadatalistComponent } from './../metadata/metadatalist/metadatalist.component';
import { MetadataService } from './../../services/metadata.service';

@NgModule({
    imports: [
    	CommonModule, MetadataRoutingModule, PageHeaderModule,
    	FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(), ],
    declarations: [PaginationComponent, MetadatalistComponent, MetadataComponent],
    providers: [MetadataService]
})
export class MetadataModule {}
