import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  instagram:string[];
  linkedin:string[];
  medium:string[];
  twitter:string[];

  constructor() { }

  ngOnInit() {
    this.instagram = ['../../../assets/if_Instagram_logo_2258498.png', 'https://www.instagram.com/wordswithchung/'];
    this.linkedin = ['../../../assets/if_Linkedin_logo_2258497.png', 'https://www.linkedin.com/in/chungtnguyen/'];
    this.medium = ['../../../assets/if_Medium_logo_2258488.png', 'https://medium.com/@wordswithchung'];
    this.twitter = ['../../../assets/if_Twitter_letter_logo_2258489.png', 'https://twitter.com/wordswithchung'];
  }

}
