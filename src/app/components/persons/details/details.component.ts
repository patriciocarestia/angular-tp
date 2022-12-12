import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from "../../../interfaces/person";
import { PersonsService } from "../../../services/persons.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: any;
  person?: Person;

  constructor(
    public personsService: PersonsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['personId'];
    this.personsService.getPerson(this.id).subscribe((data: Person) => {
      this.person = data;
    });
  }

}
