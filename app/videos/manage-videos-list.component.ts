import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from './shared';
@Component({
    selector: 'tpl-manage-videos-list',
    template: `
    <div *ngIf = "videos">
        <div *ngFor = "let video of videos">
            <div class="row">
                <div class="col-md-8 col-sm-8">
                    {{ video.name }}
                </div>
                <div class="col-md-2 col-sm-2">
                    <a (click) = "onDeleteVideo(video)">Delete</a>
                </div>        
                <div class="col-md-2 col-sm-2">
                    <a (click) = "onSelectVideo(video)">Edit</a>
                </div>        
            </div> 
        </div>
    </div>
    `
})
export class ManageVideosListComponent {
    @Input() videos: Video[];
    @Output() selectVideo: EventEmitter<Video> = new EventEmitter();
    @Output() deleteVideo: EventEmitter<Video> = new EventEmitter();
    constructor() {}
    onSelectVideo(video: Video): void {
        this.selectVideo.emit(video);
    }
    onDeleteVideo(video: Video): void {
        this.deleteVideo.emit(video);
    }
}
