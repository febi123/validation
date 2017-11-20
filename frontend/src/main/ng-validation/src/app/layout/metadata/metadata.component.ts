import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-metadata',
    templateUrl: './metadata.component.html',
    styleUrls: ['./metadata.component.scss'],
    animations: [routerTransition()]
})
export class MetadataComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
