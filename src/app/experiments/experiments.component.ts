import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ]

  experimentBeingEdited = null;

  constructor() { }

  ngOnInit() {
  }

  add(experiment) {
    if (!(this.experiments.includes(experiment))) {
      this.experiments.push(experiment);
    }
  }

  remove(experiment) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index,1);
  }

  edit(experiment) {
    this.experimentBeingEdited = experiment;
  }

  save(newName, experiment) {
    this.experiments[this.experiments.indexOf(experiment)] = newName;
  }

}
