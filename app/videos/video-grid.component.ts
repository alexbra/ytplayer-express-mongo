import { Component, OnInit } from '@angular/core';
import { Video, VideoService } from './shared';

@Component({
    selector: 'tpl-video-grid',
    templateUrl: 'app/videos/video-grid.component.html'
})
export class VideoGridComponent implements OnInit {
  videos: Video[];
  selectedVideo: Video;
  prevVideo: Boolean;
  nextVideo: Boolean;
  curIdx: any;

  constructor(private videoService: VideoService) { }
  getVideos(): void {
    this.videoService.getVideos().then(videos => {
      this.videos = videos;
    });
  }
  ngOnInit(): void {
    this.getVideos();
  }
  onSelect(video: Video, idx: number): void {
    this.curIdx = idx;
    this.prevVideo = this.videos[idx - 1] ? true : false;
    this.nextVideo = this.videos[idx + 1] ? true : false;
    this.selectedVideo = video;
  }
  onChangeVideo(event: any) {
    switch (event) {
      case 'prev':
      this.onSelect(this.videos[ this.curIdx - 1], this.curIdx - 1);
      break;
      case 'next':
      this.onSelect(this.videos[ this.curIdx + 1], this.curIdx + 1);
      break;
      default:
      this.selectedVideo = null;
      break;
    }
  }
 }
