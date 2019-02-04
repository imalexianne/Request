import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Info} from '../info-class/info';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
info:Info;
  constructor(private http:HttpClient) { }

  ngOnInit() { 
    interface ApiResponse{
      avatar_url :string;
         login:string;
         public_repos:number;
         followers:number;
         following:number;
         location:string;
        html_url:string;
    
       }
       this.http.get<ApiResponse>("https://api.github.com/users/imalexianne?access_token=f6fab55daca40d78b55a350dd2fe8927a8acd169").subscribe(data=>{
        this.info= new Info(data.avatar_url,data.login,data.public_repos,data.followers,data.following,data.location,data.html_url)
      })
    }
  
  }





//this.info=new Info("","",0,0,0,"","");
//   }

//    infoRequest(){

//     interface ApiResponse{
//       avatar_url :string;
//       login:string;
//       public_repos:number;
//       followers:number;
//       following:number;
//       location:string;
//       html_url:string;

//     }
//     let promise =new Promise((resolve,reject)=>{
//         this.http.get<ApiResponse>("https://api.github.com/users/imalexianne").toPromise().then(response=>{
            
//             this.info.avatar_url=response.avatar_url
//             this.info.login=response.login
//             this.info.public_repos=response.public_repos
//             this.info.followers=response.followers
//             this.info. following=response.following
//             this.info.location=response.location
//             this.info.html_url=response.html_url






//             resolve()
//         },
//         error=>{
//           this.info.avatar_url="kkkkkkkk"
//           this.info.login="yyyyyyyyyy"
//           this.info.public_repos=0
//           this.info.followers=0
//           this.info. following=0
//           this.info.location="pppp"
//           this.info.html_url="ttttttt"
//                 reject(error)
//             }
//         )
//     })

//     return promise
//   }

// ngOnInit() {
// }
// }