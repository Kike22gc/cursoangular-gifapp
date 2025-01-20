import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  
  ngOnInit(): void {
    if (!this.url) throw new Error('URL es obligatorio.');
  }

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public isLoaded: boolean = false

  onLoad() {
    setTimeout( () => {
      this.isLoaded = true
    }, 1000 );
  }

}
