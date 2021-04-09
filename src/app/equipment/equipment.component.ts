import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   cargoHoldMaxed: boolean = false;
   active: boolean = true;
   warningMass: boolean = false;

   constructor() { }

   ngOnInit() { }

   addItem(item: any) {
    this.cargoHold.push(item);
    this.cargoMass = this.cargoMass + item.mass;
    if (this.cargoHold.length >= this.maxItems || this.cargoMass >= 2000){
      this.cargoHoldMaxed = true;
      this.active = false;
    } else {
      this.cargoHoldMaxed = false;
      this.active = true;
    }
    if (this.cargoMass > 1800){
      this.warningMass = true;
      return true;
    } else {
      return false;
    }
  }

  emptyHold() {
    this.cargoMass = 0;
    this.cargoHold = [];
    this.cargoHoldMaxed = false;
    this.active = true;
    this.warningMass = false;
  }
}
