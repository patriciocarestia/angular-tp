import { Component, OnInit } from '@angular/core';
import { Person } from "../../../interfaces/person";
import { PersonsService } from "../../../services/persons.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons: Person[] = [];

  constructor(public personsService: PersonsService) { }

  ngOnInit(): void {
    this.personsService.getPersons().subscribe((data: Person[]) => {
      this.persons = data;
    });
  }

  deletePerson(id: number) {
    this.personsService.deletePerson(id).subscribe(res => {
      this.persons = this.persons.filter(item => item.id !== id);
    });
  }
}
