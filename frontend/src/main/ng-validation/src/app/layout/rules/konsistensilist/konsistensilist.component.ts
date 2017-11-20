import { Component, Input, OnInit } from '@angular/core';
import { KonsistensiService } from './../../../services/konsistensi.service';
import { Konsistensi } from './../../../models/konsistensi';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'konsistensi-list',
  templateUrl: './konsistensilist.component.html'
})

export class KonsistensilistComponent implements OnInit {
  konsistensi: Konsistensi[];
  newKonsistensi: Konsistensi = new Konsistensi();
  editing: boolean = false;
  editingKonsistensi: Konsistensi = new Konsistensi();


// Untuk pagination
// Soon dijadikan abstract class sendiri
  loading = false;
  total = 0;
  page = 1;
  limit = 10;



  constructor(
    private konsistensiService: KonsistensiService,
  ) {}

  ngOnInit(): void {
    this.getKonsistensi();
  }

  getKonsistensi(): void {
    this.loading = true;
    this.konsistensiService.getKonsistensi(this.page, this.limit).then(res => {
      this.total = res.totalElements;
      this.konsistensi = res.content as Konsistensi[];
      this.loading = false;
    });
  }

  goToPage(n: number): void {
    this.page = n;
    this.getKonsistensi();
  }

  onNext(): void {
    this.page++;
    this.getKonsistensi();
  }

  onPrev(): void {
    this.page--;
    this.getKonsistensi();
  }
  

  createKonsistensi(konsistensiForm: NgForm): void {
    this.konsistensiService.createKonsistensi(this.newKonsistensi)
      .then(createKonsistensi => {        
        konsistensiForm.reset();
        this.newKonsistensi = new Konsistensi();
        this.konsistensi.unshift(createKonsistensi)
      });
  }

  deleteKonsistensi(id: string): void {
    this.konsistensiService.deleteKonsistensi(id)
    .then(() => {
      this.konsistensi = this.konsistensi.filter(konsistensi => konsistensi.id != id);
    });
  }

  updateKonsistensi(konsistensiData: Konsistensi): void {
    console.log(konsistensiData);
    this.konsistensiService.updateKonsistensi(konsistensiData)
    .then(updatedKonsistensi => {
      let existingKonsistensi = this.konsistensi.find(konsistensi => konsistensi.id === updatedKonsistensi.id);
      Object.assign(existingKonsistensi, updatedKonsistensi);
      this.clearEditing();
    });
  }

  toggleCompleted(konsistensiData: Konsistensi): void {
    konsistensiData.completed = !konsistensiData.completed;
    this.konsistensiService.updateKonsistensi(konsistensiData)
    .then(updatedKonsistensi => {
      let existingKonsistensi = this.konsistensi.find(konsistensi => konsistensi.id === updatedKonsistensi.id);
      Object.assign(existingKonsistensi, updatedKonsistensi);
    });
  }

  editKonsistensi(konsistensiData: Konsistensi): void {
    this.editing = true;
    Object.assign(this.editingKonsistensi, konsistensiData);
  }

  clearEditing(): void {
    this.editingKonsistensi = new Konsistensi();
    this.editing = false;
  }
}