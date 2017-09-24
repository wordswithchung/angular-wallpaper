import { Injectable } from '@angular/core';

import { Metadata } from '../models/Metadata';

@Injectable()
export class MetadataService {
  metadatum:Metadata;
  metadatums:Metadata[];

  constructor() { }

  loadOneMetadata(csv:string){
    let lines:string[];
    lines = csv.split(',');
    this.metadatum = {
      name: lines[1],
      attribution: lines[2],
      link: lines[3]
    }
    return this.metadatum;
  }

  getMetadatum(index:string){
    for (let i = 0; i < this.metadata.length; i++){
      if (index === this.metadata[i].substr(0,3)) {
        return this.loadOneMetadata(this.metadata[i]);
      }
    }
  }

  metadata = [
    "001,Be a dragon,,",
    "002,Stay the course,Photo by Jake Blucker on Unsplash,https://unsplash.com/photos/tMzCrBkM99Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "003,Yes we can,Photo by Hudson Hintze on Unsplash,https://unsplash.com/photos/vpxeE7s-my4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "004,Be a dragon,Photo by Mohamed Nohassi on Unsplash,https://unsplash.com/photos/gaXuFx8cPWo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",  
    "005,Eternitea with you,Photo by Joanna Kosinska on Unsplash,https://unsplash.com/photos/Kx-xdl3Tap4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "006,Just Dance,Photo by Greyson Joralemon on Unsplash,https://unsplash.com/photos/ORSGQc-2Ef8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "007,Joyous AF,Photo by Caleb Woods on Unsplash,https://unsplash.com/photos/xxmszPRm_ck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "008,Beach Please,Photo by Frank McKenna on Unsplash,https://unsplash.com/@frankiefoto?photo=evrHojTLBKE",
    "009,Netflix is calling & I must go,Photo by Naomi Hébert on Unsplash,https://unsplash.com/photos/2dcYhvbHV-M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "010,#unicorn,Photo by Jaime Serrano on Unsplash,https://unsplash.com/photos/ziDTXxEO_Vo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  ]

}
