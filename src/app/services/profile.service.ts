import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '11e84999cb5dde398f30';
  private clientsecret = 'fd62f4be59b312f30a3d525b13c5773fa0136c3a';


  constructor(private http: Http) {
    console.log('service is now ready');
    this.username = 'kilewa';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .pipe(map(res => res.json()));
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
