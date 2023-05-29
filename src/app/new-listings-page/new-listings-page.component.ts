import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

// Define the structure of the form data
interface ListingForm {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css']
})
export class NewListingsPageComponent {
  constructor(
    private router: Router,
    private listingsService: ListingsService,
  ){}

  // Add the ListingForm type to your method parameters
  onSubmit({ name, description, price }: ListingForm): void{
    this.listingsService.createListing(name, description, price)
    .subscribe(() => {
      this.router.navigateByUrl('/my-listings')
    })
  }
}
