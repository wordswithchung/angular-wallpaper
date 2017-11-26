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
      link: lines[3],
      mockLocation: '/assets/' + lines[4],
      originalLocation: lines[5]
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
    '001,Be a dragon,,,IMG_0063.JPG,IMG_0064.JPG',
    '002,Stay the course,Photo by Jake Blucker on Unsplash,https://unsplash.com/photos/tMzCrBkM99Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0066.JPG,IMG_0067.JPG',
    '007,Joyous AF,Photo by Caleb Woods on Unsplash,https://unsplash.com/photos/xxmszPRm_ck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0077.JPG,IMG_0078.JPG',
    '004,Be a dragon,Photo by Mohamed Nohassi on Unsplash,https://unsplash.com/photos/gaXuFx8cPWo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0069.JPG,IMG_0068.JPG',
    '003,Yes we can,Photo by Hudson Hintze on Unsplash,https://unsplash.com/photos/vpxeE7s-my4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0070.JPG,IMG_0071.JPG',
    '005,Eternitea with you,Photo by Joanna Kosinska on Unsplash,https://unsplash.com/photos/Kx-xdl3Tap4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0072.JPG,IMG_0073.JPG',
    '006,Just Dance,Photo by Greyson Joralemon on Unsplash,https://unsplash.com/photos/ORSGQc-2Ef8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0074.JPG,IMG_0075.JPG',
    '008,Beach Please,Photo by Frank McKenna on Unsplash,https://unsplash.com/@frankiefoto?photo=evrHojTLBKE,IMG_0079.JPG,IMG_0080.JPG',
    '009,Netflix is calling & I must go,Photo by Naomi Hébert on Unsplash,https://unsplash.com/photos/2dcYhvbHV-M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0094.JPG,IMG_0095.JPG',
    '010,#unicorn,Photo by Jaime Serrano on Unsplash,https://unsplash.com/photos/ziDTXxEO_Vo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0081.JPG,IMG_0082.JPG',
    '011,Adventure Awaits,Photo by Rob Bye on Unsplash,https://unsplash.com/photos/cKBsq-5U17A,IMG_0098.JPG,IMG_0102.JPG',
    '012,Bonjour,Paris Metro Map,http://metromap.fr/en,IMG_0099.JPG,IMG_0100.JPG',
    '013,Beast Mode,Photo by Lemuel Butler on Unsplash,https://unsplash.com/photos/nTfGYGPURFA,IMG_0103.JPG,IMG_0104.JPG',
    '014,Ever tried...,,,IMG_0106.JPG,IMG_0107.JPG',
    '015,You are here,,,IMG_0111.JPG,IMG_0112.JPG',
  ]

}
