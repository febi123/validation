import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from './../../../services/metadata.service';
import { Metadata } from './../../../models/metadata';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'metadata-list',
  templateUrl: './metadatalist.component.html'
})

export class MetadatalistComponent implements OnInit {
  metadata: Metadata[];
  newMetadata: Metadata = new Metadata();
  editing: boolean = false;
  editingMetadata: Metadata = new Metadata();


// Untuk pagination
// Soon dijadikan abstract class sendiri
  loading = false;
  total = 0;
  page = 1;
  limit = 10;



  constructor(
    private metadataService: MetadataService,
  ) {}

  ngOnInit(): void {
    this.getMetadata();
  }

  getMetadata(): void {
    this.loading = true;
    this.metadataService.getMetadata(this.page, this.limit).then(res => {
      this.total = res.totalElements;
      this.metadata = res.content as Metadata[];
      this.loading = false;
    });
  }

  goToPage(n: number): void {
    this.page = n;
    this.getMetadata();
  }

  onNext(): void {
    this.page++;
    this.getMetadata();
  }

  onPrev(): void {
    this.page--;
    this.getMetadata();
  }
  

  createMetadata(metadataForm: NgForm): void {
    this.metadataService.createMetadata(this.newMetadata)
      .then(createMetadata => {        
        metadataForm.reset();
        this.newMetadata = new Metadata();
        this.metadata.unshift(createMetadata)
      });
  }

  deleteMetadata(id: string): void {
    this.metadataService.deleteMetadata(id)
    .then(() => {
      this.metadata = this.metadata.filter(metadata => metadata.id != id);
    });
  }

  updateMetadata(metadataData: Metadata): void {
    console.log(metadataData);
    this.metadataService.updateMetadata(metadataData)
    .then(updatedMetadata => {
      let existingMetadata = this.metadata.find(metadata => metadata.id === updatedMetadata.id);
      Object.assign(existingMetadata, updatedMetadata);
      this.clearEditing();
    });
  }

  toggleCompleted(metadataData: Metadata): void {
    metadataData.completed = !metadataData.completed;
    this.metadataService.updateMetadata(metadataData)
    .then(updatedMetadata => {
      let existingMetadata = this.metadata.find(metadata => metadata.id === updatedMetadata.id);
      Object.assign(existingMetadata, updatedMetadata);
    });
  }

  editMetadata(metadataData: Metadata): void {
    this.editing = true;
    Object.assign(this.editingMetadata, metadataData);
  }

  clearEditing(): void {
    this.editingMetadata = new Metadata();
    this.editing = false;
  }
}