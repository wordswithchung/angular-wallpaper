import { Component } from '@angular/core';

import { Wallpaper } from '../../models/Wallpaper';

import { WallpaperComponent } from '../wallpaper/wallpaper.component';

import { MetadataService } from '../../services/metadata.service';
import { WallpaperService } from '../../services/wallpaper.service';

@Component({
  selector: 'app-wallpaper-list',
  templateUrl: './wallpaper-list.component.html',
  styleUrls: ['./wallpaper-list.component.css']
})
export class WallpaperListComponent {
  wallpaper:Wallpaper;
  wallpapers:Wallpaper[] = [];
  size:number;

  constructor(private metadataService:MetadataService,
  private wallpaperService:WallpaperService) {
    this.size = this.metadataService.metadata.length;
    this.getWallpaper();
   }

  getWallpaper(){
    let index:string;
    let paper:Wallpaper;

    for (let i = this.size; i > 0; i--){
      if (i <= 9){
        index = "00" + i;
      } else if (i <= 99) {
        index = "0" + i;
      } else {
        index = "" + i;
      }
      paper = this.wallpaperService.getWallpaper(index);
      this.wallpapers.push(paper);
    }
    return this.wallpapers;
  }

}
