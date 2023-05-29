import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

interface ListingForm {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent {
  listing!: Listing

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ){

  }
  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.listingsService.getListingById(id)
      .subscribe(listing => this.listing = listing);
    } else {
      // Handle the case where id is null. For example, you could redirect the user to a 404 page.
    }
  }

  onSubmit({ name, description, price }: ListingForm): void{
    this.listingsService.editListing(this.listing.id, name, description, price)
    .subscribe(() => {
      this.router.navigateByUrl('/my-listings')
    })
  }

}
