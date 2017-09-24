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
    this.size = this.metadataService.metadata.length + 1;
    this.getWallpaper();
   }

  getWallpaper(){
    let index:string;
    let paper:Wallpaper;

    for (let i = 1; i < this.size; i++){
      index = "00" + i;
      paper = this.wallpaperService.getWallpaper(index);
      this.wallpapers.push(paper);
    }
    return this.wallpapers;
  }

}
