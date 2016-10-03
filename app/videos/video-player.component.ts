import { Component, Input, OnChanges } from '@angular/core';
import { Video } from './shared';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'tpl-player',
    template: `
    <iframe id="player" type="text/html" 
    [src]="url"
    frameborder="0">
    </iframe>
    `
})
export class VideoPlayerComponent implements OnChanges {
    @Input() video: Video;

    url: SafeResourceUrl;
    //TODO: set default parameters

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnChanges(): void {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/'
            + this.video.url
            + '?enablejsapi=1&origin=http://vrublevski.com.ua');
    }
}
