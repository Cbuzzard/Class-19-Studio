import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ]

  equipmentPieceBeingEdited = null;

  constructor() { }

  ngOnInit() { }

  add(newEquipment) {
    if (!(this.equipment.includes(newEquipment))) {
      this.equipment.push(newEquipment);
    }
  }

  remove(equipmentPiece) {
    let index = this.equipment.indexOf(equipmentPiece);
    this.equipment.splice(index,1);
  }

  edit(equipmentPiece) {
    this.equipmentPieceBeingEdited = equipmentPiece;
  }

  save(newName, equipmentPiece) {
    this.equipment[this.equipment.indexOf(equipmentPiece)] = newName;
  }

}
