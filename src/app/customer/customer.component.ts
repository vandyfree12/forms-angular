import { Component, OnInit } from '@angular/core';

import { Customer }    from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  nationalities =['','Afghanistan','Albana','Algeria','Andorra'
  ,'Angola','Anguilla','Antigua','Armenia','Ghana'];
	

  customer = new Customer(1, '', '', 23);

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }
}
