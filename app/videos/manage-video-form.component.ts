import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Video } from './shared';

@Component({
    selector: 'tpl-manage-video-form',
    template: `
    <div>
        <div [hidden]="submitted">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <form *ngIf="active" #videoForm="ngForm">
                        <div class="form-group">
                            <label for="name">Video Name</label>
                            <input type="text" class="form-control" id="name" required
                                [(ngModel)]="selectedVideo.name" name="name" #name="ngModel">
                            <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
                                Name is required
                            </div>                                
   
                        </div>
                        <div class="form-group">
                            <label for="url">Video Url</label>
                            <input type="text" class="form-control" id="url"
                                [(ngModel)]="selectedVideo.url" name="url" #url="ngModel">
                            <div [hidden]="url.valid || url.pristine" class="alert alert-danger">
                                Url is required
                            </div>                                                                
                        </div>
                        <div class="form-group">
                            <label for="top">Show on a main page</label>
                            <input type="checkbox" id="top"
                                [(ngModel)]="selectedVideo.top" name="top">
                        </div>            
                        <button *ngIf="active"
                            [disabled]="!videoForm.form.valid" 
                            (click)="onSave()" 
                            class="btn btn-default">
                            Save changes
                        </button>

                        <button *ngIf="active" 
                            (click)="onCancelForm()" 
                            class="btn btn-default">
                            Discard changes
                        </button>                    
                    </form>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <tpl-player [video] = "selectedVideo"></tpl-player>
                </div>
            </div>
        </div>
        <div [hidden]="!submitted">
            Video changes has been submitted
        </div>        
    </div>
    `
})
export class ManageVideoFormComponent implements OnChanges {
    @Input() selectedVideo: Video;
    @Input() isNew: boolean;
    @Output() updateVideo: EventEmitter<Video> = new EventEmitter();
    @Output() discardChanges: EventEmitter<Video> = new EventEmitter();
    submitted = false;
    active = true;
    onSave(): void {
        this.updateVideo.emit(this.selectedVideo);
        this.submitted = true;
    }
    onCancelForm(): void {
        this.discardChanges.emit(this.selectedVideo);
    }
    ngOnChanges() {
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this.submitted = false;
    }
}
