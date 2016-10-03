import { Component } from '@angular/core';

@Component({
    selector: 'tpl-video-collection',
    template: `
    <div class="container first">
      <div class="page-header">
        <h1>Video Collection</h1>
      </div>
    </div>      
    <tpl-video-grid></tpl-video-grid>  
    `
})

export class VideoCollectionComponent {
    constructor () {}
}
