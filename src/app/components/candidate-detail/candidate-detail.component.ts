import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from './../../models/candidate';
import { Favourite } from './../../models/favourite';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  @Input('candidate') candidate: Candidate;

  constructor() { }

  ngOnInit() {
  }

  addFavourite() {
    this.candidate.FavouriteCollection.push({Key: '', Value: ''});
  }

  getDOB(event) {
    console.log(event);

  }

  saveCandidateInfo() {
    console.log(this.candidate);
    console.log( this.candidate.FavouriteCollection);
  }



}
