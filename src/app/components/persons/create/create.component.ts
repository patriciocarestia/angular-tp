import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  persons: Person[] = [];
  createForm: any;

  constructor(
    public personsService: PersonsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.personsService.getPersons().subscribe((data: Person[]) => {
      this.persons = data;
    });
  }

  onSubmit(formData: any) {
    this.personsService.createPerson(formData.value).subscribe((res: any) => {
      this.router.navigateByUrl('persons/list');
    });
  }

}
