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
      mockLocation: './assets/' + lines[4],
      originalLocation: './assets/' + lines[5]
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
    '001,Stay the course,Photo by Jake Blucker on Unsplash,https://unsplash.com/photos/tMzCrBkM99Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0066.JPG,IMG_0067.JPG',
    '002,Yes we can,Photo by Hudson Hintze on Unsplash,https://unsplash.com/photos/vpxeE7s-my4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0070.JPG,IMG_0071.JPG',
    '003,Be a dragon,Photo by Mohamed Nohassi on Unsplash,https://unsplash.com/photos/gaXuFx8cPWo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0069.JPG,IMG_0068.JPG',
    '004,Eternitea with you,Photo by Joanna Kosinska on Unsplash,https://unsplash.com/photos/Kx-xdl3Tap4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0072.JPG,IMG_0073.JPG',
    '005,Just Dance,Photo by Greyson Joralemon on Unsplash,https://unsplash.com/photos/ORSGQc-2Ef8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0074.JPG,IMG_0075.JPG',
    '006,Joyous AF,Photo by Caleb Woods on Unsplash,https://unsplash.com/photos/xxmszPRm_ck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0077.JPG,IMG_0078.JPG',
    '007,Ever tried...,,,IMG_0106.JPG,IMG_0107.JPG',
    '008,Beach Please,Photo by Frank McKenna on Unsplash,https://unsplash.com/@frankiefoto?photo=evrHojTLBKE,IMG_0079.JPG,IMG_0080.JPG',
    '009,You are here,,,IMG_0111.JPG,IMG_0112.JPG',
    '010,Netflix is calling & I must go,Photo by Naomi Hébert on Unsplash,https://unsplash.com/photos/2dcYhvbHV-M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0094.JPG,IMG_0095.JPG',
    '011,#unicorn,Photo by Jaime Serrano on Unsplash,https://unsplash.com/photos/ziDTXxEO_Vo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0081.JPG,IMG_0082.JPG',
    '012,Adventure Awaits,Photo by Rob Bye on Unsplash,https://unsplash.com/photos/cKBsq-5U17A,IMG_0098.JPG,IMG_0102.JPG',
    '013,Bonjour,Paris Metro Map,http://metromap.fr/en,IMG_0099.JPG,IMG_0100.JPG',
    '014,Beast Mode,Photo by Lemuel Butler on Unsplash,https://unsplash.com/photos/nTfGYGPURFA,IMG_0103.JPG,IMG_0104.JPG',
    '015,Coffee,,,IMG_0215.JPG,IMG_0216.JPG',
    '016,Start Today,Photo by Saffu on Unsplash,https://unsplash.com/photos/UEgo43quyCw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0213.JPG,IMG_0214.JPG',
    '017,Eat Pi!,Photo by Brooke Lark on Unsplash,https://unsplash.com/photos/of0pMsWApZE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,IMG_0219.JPG,IMG_0220.JPG',
    '018,Every Morning,Photo by Alex on Unsplash,https://unsplash.com/photos/-2X51mixIc0,IMG_0217.JPG,IMG_0218.JPG',
  ]

}
