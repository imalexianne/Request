import { Component, OnInit } from '@angular/core';

import {Repository} from '../repository';
import {RepositoryRequestService} from '../repository-http/repository-request.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[RepositoryRequestService],
})
export class UserComponent implements OnInit {
repository:Repository;
userName="";
submitInput(){
  // this.repositoryService
  console.log(this.userName)
}
  constructor(private repositoryService:RepositoryRequestService) { }

  ngOnInit() { 
    // interface ApiResponse{
    //   avatar_url :string;
    //      login:string;
    //      public_repos:number;
    //      followers:number;
    //      following:number;
    //      location:string;
    //     html_url:string;
    
    //    }
      // 
      
      this.repositoryService.repositoryRequest()
      this.repository=this.repositoryService.repository
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