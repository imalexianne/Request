import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Request} from '../request-class/request';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
request:Request;
  constructor(private http:HttpClient) { 
    this.request=new Request("","",0,0,0,"","");
  }

   requestRequest(){

    interface ApiResponse{
      avatar_url :string;
      login:string;
      public_repos:number;
      followers:number;
      following:number;
      location:string;
      html_url:string;

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/users").toPromise().then(response=>{
            
            this.request.avatar_url=response.  avatar_url
            this.request.login=response.login
            this.request.public_repos=response.public_repos
            this.request.followers=response.followers
            this.request. following=response.following
            this.request.location=response.location
            this.request.html_url=response.html_url






            resolve()
        },
        error=>{
          this.request.avatar_url="kkkkkkkk"
          this.request.login="yyyyyyyyyy"
          this.request.public_repos=0
          this.request.followers=0
          this.request. following=0
          this.request.location="pppp"
          this.request.html_url="ttttttt"
                reject(error)
            }
        )
    })

    return promise
  }

ngOnInit() {
}
}