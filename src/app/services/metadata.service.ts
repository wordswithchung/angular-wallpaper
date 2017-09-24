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
    "001,Joyous AF,Photo by Caleb Woods on Unsplash,https://unsplash.com/photos/xxmszPRm_ck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "002,Woohoo AF,Photo by Caleb Woods on Unsplash,https://unsplash.com/photos/xxmszPRm_ck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  ]

}
