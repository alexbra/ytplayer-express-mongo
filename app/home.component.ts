import { Component } from '@angular/core';

@Component({
    selector: 'tpl-home',
    template: `
    <div class="container first">
      <div class="page-header">
        <h1>Angular 2: YouTube iframe player</h1>
      </div>
      <p class="lead">
        Simple implementation of YouTube player on final version of Angular 2.0
      </p>
      <p>
        <span class="glyphicon glyphicon-download-alt"></span> 
        <a href="https://github.com/alexbra/ytplayer-manage">GitHub source code</a>
      </p>  
    </div>
    <tpl-video-widget></tpl-video-widget>
    `
})
export class HomeComponent { }
