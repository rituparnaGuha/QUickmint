import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventForm: any

  constructor(
    private formBuilder: FormBuilder,
    private service: WebserviceService,
    private toastr: ToastrService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("access-token-quickmint") == undefined) {
      this.toastr.success("Please login to add an event");
      this.router.navigate(['/login'])
    }
    this.eventForm = this.newForm()
  }

  newForm() {
    return this.formBuilder.group({
      location: ["", [Validators.required]], 
      slot: ["", [Validators.required]],
      description: ["", [Validators.required]],
      date: ["", [Validators.required]],
      time: ["", [Validators.required]],
      cost: ["12", [Validators.required]],
      user_id: [(localStorage.getItem("userId"))],
    });
  }

  onSubmit() {
    console.log(this.eventForm.value)
  }
}
