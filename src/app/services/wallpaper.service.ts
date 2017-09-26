import { Injectable } from '@angular/core';

import { MetadataService } from './metadata.service';

import { Metadata } from '../models/Metadata';
import { Wallpaper } from '../models/Wallpaper';

@Injectable()
export class WallpaperService {
  wallpaper:Wallpaper;

  constructor(private metadataService:MetadataService) {
   }

  ngOnInit() {
  }

  getWallpaper(index){
    this.wallpaper = {
      index: index,
      metadata: this.getMetadataInfo(index)
    }
    return this.wallpaper;
  }

  getMetadataInfo(index){
    return this.metadataService.getMetadatum(index);
  }
}
