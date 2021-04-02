import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentBeingEdited: string = '';

  experimentList: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  constructor() { }

  ngOnInit() {
  }

  add(newExperiment: string) {
    console.log(newExperiment)
    this.experimentList.push(newExperiment);
  }

  remove(oldExperiment: string) {
    let index = this.experimentList.indexOf(oldExperiment);
    this.experimentList.splice(index, 1);
  }

  edit(oldExperiment: string) {
    this.experimentBeingEdited = oldExperiment;
 }

 save(replacement: string, oldExperiment: string) {
  let index = this.experimentList.indexOf(oldExperiment);
  this.experimentList.splice(index, 1, replacement);
  this.experimentBeingEdited = '';
  }
}
