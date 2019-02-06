import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Repository } from '../repository'
@Injectable()

export class RepositoryRequestService {
  repository: Repository;

  constructor(private http: HttpClient) {
    this.repository = new Repository("","", 0, 0, 0, "", "", new Date(2019, 2, 5));
  }

  repositoryRequest(userName) {
var userInput=userName;


    interface ApiResponse {
      avatar_url: string;
      name: string;
      public_repos: number;
      followers: number;
      following: number;
      location: string;
      html_url: string;
      completeDate: Date;


    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + userInput).toPromise().then(response => {

        this.repository.avatar_url = response.avatar_url
        this.repository.name = response.name
        this.repository.public_repos = response.public_repos
        this.repository.followers = response.followers
        this.repository.following = response.following
        this.repository.location = response.location
        this.repository.html_url = response.html_url
        this.repository.completeDate = response.completeDate






        resolve()
      },
        error => {
          this.repository.avatar_url = "kkkkkkkk"
          this.repository.name = "yyyyyyyyyy"
          this.repository.public_repos = 0
          this.repository.followers = 0
          this.repository.following = 0
          this.repository.location = "oooo"
          this.repository.html_url = "oooo"
          reject(error)
        }
      )
    })

    return promise
  }


}

