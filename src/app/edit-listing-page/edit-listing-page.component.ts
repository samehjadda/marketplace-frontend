import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';



@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent {
  listing!: Listing

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    let foundListing = fakeMyListings.find(listing => listing.id === id);
      if (!foundListing) {
        throw new Error('Listing not found');
      }
    this.listing = foundListing;
  }
  onSubmit(): void{
    alert('Saving Changes')
    this.router.navigateByUrl('/my-listings')
  }

}
