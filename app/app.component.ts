import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" 
            aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" routerLink="/home">YT Player</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li routerLinkActive='active'><a routerLink="/home">Home</a></li>
            <li routerLinkActive='active'><a routerLink="/video-collection">Video Collection</a></li>
            <li routerLinkActive='active'><a routerLink="/manage-videos">Manage Videos</a></li>         
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <router-outlet></router-outlet>
    <footer class="footer">
      <div class="container">
        <p class="text-muted">Developed by <a href="https://alexbra.github.io">@Alex Brazhenko</a> Feedback very welcome.</p>
      </div>
    </footer>    
    `
})
export class AppComponent { }
