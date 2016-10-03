import { Component, OnInit } from '@angular/core';
import { Video, VideoService } from './shared';

@Component({
    selector: 'tpl-manage-videos',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <button type="submit" class="btn btn-default"
                (click) = "openFormCreateNew()">Add new video</button>
                <tpl-manage-videos-list
                    [videos] = "videos"
                    (selectVideo) = "onSelectVideo($event)"
                    (deleteVideo) = "onDeleteVideo($event)">
                </tpl-manage-videos-list>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <tpl-manage-video-form
                    *ngIf = "selectedVideo"
                    [selectedVideo] = "selectedVideo"
                    [isNew] = "isNew"
                    (updateVideo) = "onUpdateVideo($event)"
                    (discardChanges) = "onDiscardChanges($event)"></tpl-manage-video-form>
            </div>        
        </div>        
    </div>
    `
})
export class ManageVideosComponent implements OnInit {
    videos: Video[];
    selectedVideo: Video;
    isNew: boolean;
    maxCode: number;
    constructor(private videoService: VideoService) {
    }
    getVideos(): void {
        this.videoService.getVideos().then(videos => {
        this.videos = videos;
        this.maxCode = this.videos ? this.videos[this.videos.length - 1].id : 0;
        });
    }
    openFormCreateNew(): void {
        this.isNew = true;
        this.selectedVideo = new Video(null, '', '', false, '');
    }
    onUpdateVideo(event: Video) {
        if (this.isNew) {
            this.maxCode += 1;
            event.id = this.maxCode;
            this.videoService.create(event)
                    .then((video) => this.videos.push(video));
        } else {
            this.videoService.update(event)
                    .then((video) => {
                        this.videos.forEach((h, i) => {
                            if (h.id === video.id) { this.videos[i] = video; }
                        });
                     });
        }
    }
    onDeleteVideo(event: Video) {
        this.videoService.delete(event.id)
            .then(() => {
                this.videos = this.videos.filter(h => h !== event);
                if (this.selectedVideo.id === event.id) { this.selectedVideo = null; }
            });
    }
    onSelectVideo(event: Video) {
        this.isNew = false;
        this.videoService.getVideoById(event.id)
                .then(video => this.selectedVideo = video);
    }
    onDiscardChanges(event: Video) {
        setTimeout(() => this.selectedVideo = null, 0);
    }
    ngOnInit(): void {
        this.getVideos();
    }
}
