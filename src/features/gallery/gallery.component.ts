import { Component, OnInit } from '@angular/core';
import * as galleries from '../../assets/gallery.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 galleries: any = (galleries as any).default;
 gossipies!: any;

  constructor() { 
  }

  ngOnInit(): void {
  }

  modalClick(i: number){
    this.gossipies = galleries[i].gossip;
  }

}
