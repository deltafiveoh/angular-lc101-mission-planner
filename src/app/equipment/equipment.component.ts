import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentBeingEdited: string = '';

  equipmentList: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(newEquipment: string) {
    this.equipmentList.push(newEquipment);
  }

  remove(item: string) {
    let index = this.equipmentList.indexOf(item);
    this.equipmentList.splice(index, 1);
  }

  edit(item: string) {
    let newItem = item
    // this.equipmentBeingEdited.replace('', item);
    this.equipmentBeingEdited = newItem;
    console.log(this.equipmentBeingEdited)
 }

 save(replacement: string, item: string) {
  let index = this.equipmentList.indexOf(item);
  this.equipmentList.splice(index, 1, replacement);
  this.equipmentBeingEdited = '';
  }

}
