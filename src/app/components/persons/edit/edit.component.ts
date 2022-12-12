import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id?: number;
  person?: Person;
  persons: Person[] = [];
  editForm;

  constructor(
    public personsService: PersonsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['personId'];

    this.personsService.getPerson(this.id!).subscribe((data: Person) => {
      this.person = data;
      this.editForm.patchValue(data);
    });
  }
  
  onSubmit(formData:any) {
    this.personsService.updatePerson(this.id!, formData.value).subscribe((res: any)=> {
      this.router.navigateByUrl('persons/list');
    });
  }
}
