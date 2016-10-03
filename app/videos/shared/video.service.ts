import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class VideoService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private videosUrl = '/videos';  // URL to web api

  constructor(private http: Http) { }
  getVideos(): Promise<Video[]> {
    return this.http.get(this.videosUrl)
               .toPromise()
               .then(response => response.json() as Video[] )
               .catch(this.handleError);
  }
  getTopVideos() {
    return this.getVideos()
            .then(
              (videos) => videos = videos.filter(v => v.top === true)
            );
  }
  getVideoById(id: number): Promise<Video> {
    return this.getVideos()
               .then(videos => videos.find(video => video.id === id));
  }
  create(video: Video): Promise<Video> {
    console.log(JSON.stringify(video));
    return this.http
      .post(this.videosUrl, JSON.stringify(video), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.videosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  update(video: Video): Promise<Video> {
    const url = `${this.videosUrl}/${video.id}`;
    return this.http
      .put(url, JSON.stringify(video), {headers: this.headers})
      .toPromise()
      .then(() => video)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
