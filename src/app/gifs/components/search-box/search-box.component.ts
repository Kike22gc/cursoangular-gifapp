import { GifsService } from './../../services/gifs.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'gif-search-box',
    standalone: false,
    template: `
        <h5>Buscar:</h5>
        <input 
            type="text" 
            class="form-control" 
            placeholder="Buscar GIFs..." 
            (keyup.enter)="searchTag()" 
            #txtTagInput
        >
    `
})

export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;


    constructor( private gifsService:GifsService) { }

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;

        this.gifsService.searchTag(newTag)
        this.tagInput.nativeElement.value = ''

    }
    
}