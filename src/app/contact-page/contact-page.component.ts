import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  email: string = '';
  message: string = '';
  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
    ){}
  
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id !== null) {
          this.listingsService.getListingById(id)
          .subscribe(listing => {
              this.listing = listing;
              this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;

          });
          this.listingsService.addViewToListing(id)
          .subscribe(() => console.log('Views updated'));
      } else {
          // Handle null id scenario.
          console.log('id was null');
      }
  }
  
  sendMessage(): void{
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
