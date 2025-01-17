import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService:GifsService) {  }

  sidebarTagsHistory: string[] = [];

  get tags(): string[]{
    return this.gifsService.tagsHistory;
  }

  public research(tag:string): void {
    console.log('research:', tag)
    this.gifsService.searchTag(tag);
    
  }

}
