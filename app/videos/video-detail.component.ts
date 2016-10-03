import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { Video, IframeVideoParams } from './shared';

@Component({
    selector: 'tpl-video-detail',
    templateUrl: 'app/videos/video-detail.component.html',
    styleUrls: [ 'app/videos/video-detail.component.css' ]
})
export class VideoDetailComponent implements OnInit, OnChanges {
    @Input() video: Video;
    @Input() pvideo: Boolean;
    @Input() nvideo: Boolean;
    @Output() changeVideo: EventEmitter<any> = new EventEmitter();

    iframeParams: IframeVideoParams = {left: null, top: null};

    ngOnInit(): void {
        return;
    }
    onCloseVideo() {
        this.changeVideo.emit(null);
    }
    setIframeVideoParams() {
        let left: Number;
        let top: Number;
        left = ((window.outerWidth - 600) / 2);
        top = ((window.outerHeight - 400) / 2) + window.pageYOffset;
        left = left < 10 ? 10 : left;
        top = top < 40 ? 40 : top;
        this.iframeParams.top = top.toString() + 'px';
        this.iframeParams.left = left.toString() + 'px';
    }
    onPrevVideo() {
        this.changeVideo.emit('prev');
    }
    onNextVideo() {
        this.changeVideo.emit('next');
    }
    ngOnChanges(): void {
        this.setIframeVideoParams();
    }
}
