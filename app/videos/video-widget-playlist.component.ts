import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from './shared';

@Component({
    selector: 'tpl-video-widget-playlist',
    templateUrl: 'app/videos/video-widget-playlist.component.html'
})
export class VideoWidgetPlaylistComponent {
  @Input() videos: Video[];
  @Input() selectedVideo: Video;
  @Output() changeVideo: EventEmitter<any> = new EventEmitter();

  constructor() { }
  isThisSelectedVideo(video: Video): Boolean {
    return video === this.selectedVideo;
  }
  onSelect(video: Video): void {
    this.selectedVideo = video;
    this.changeVideo.emit(video);
  }
 }
