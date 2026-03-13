import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CruiseService } from '../../../../services/cruise.service';

@Component({
  selector: 'app-cruises',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cruises.html',
  styleUrls: ['./cruises.css']
})
export class Cruises implements OnInit {

  cruises:any[] = [];

  showForm = false;
  editMode = false;

  cruiseForm:any = {
    id:'',
    title:'',
    port:'',
    destination:'',
    price:'',
    date:'',
    month:'',
    imageUrl:'',
    status:'active'
  };

  constructor(private cruiseService: CruiseService) {}

  ngOnInit(){
    this.loadCruises();
  }

  async loadCruises(){
    this.cruises = await this.cruiseService.getCruises();
  }

  openForm(){
    this.editMode = false;
    this.showForm = true;
    this.cruiseForm = {};
  }

  closeForm(){
    this.showForm = false;
  }

  editCruise(cruise:any){
    this.editMode = true;
    this.showForm = true;
    this.cruiseForm = {...cruise};
  }

  async saveCruise(){

    if(this.editMode){
      await this.cruiseService.updateCruise(
        this.cruiseForm.id,
        this.cruiseForm
      );
    }else{
      await this.cruiseService.addCruise(
        this.cruiseForm
      );
    }

    this.closeForm();
    this.loadCruises();

  }

  async deleteCruise(id:string){

    if(!confirm("Delete this cruise?")) return;

    await this.cruiseService.deleteCruise(id);
    this.loadCruises();

  }

async toggleStatus(cruise:any){

  await this.cruiseService.toggleCruiseStatus(
    cruise.id,
    cruise.isActive
  );

  this.loadCruises();

}

}