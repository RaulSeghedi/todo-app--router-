import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  isEdit: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.firstName = 'John';
    this.lastName = 'Smith';
    this.email = 'email@email.com';
    this.address = {
      street: 'str. Main',
      city: 'New York'
    }
  }

  toggleEditAbout(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street: string,
  city: string
}
