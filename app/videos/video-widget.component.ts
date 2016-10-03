import { Component, OnInit } from '@angular/core';
import { Video, VideoService } from './shared';

@Component({
    selector: 'tpl-video-widget',
    templateUrl: 'app/videos/video-widget.component.html'
})

export class VideoWidgetComponent implements OnInit {
    videos: Video[];
    selectedVideo: Video;
    constructor (private videoService: VideoService) { }
    getVideos() {
        this.videoService.getTopVideos()
            .then(videos => {
                this.videos = videos;
                this.selectedVideo = this.videos[0];
            });
    }
    ngOnInit(): void {
        this.getVideos();
    }
    onChangeVideo(event: Video) {
        this.selectedVideo = event;
    }
}
