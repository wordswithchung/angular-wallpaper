import { Component, Input, OnInit } from '@angular/core';

import { MetadataService } from '../../services/metadata.service';
import { WallpaperService } from '../../services/wallpaper.service';

import { Metadata } from '../../models/Metadata';
import { Wallpaper } from '../../models/Wallpaper'; 

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit {
  @Input('wallpaper') wallpaper:Wallpaper;

  constructor(private metadataService:MetadataService) {
   }

  ngOnInit() {
  }

}
