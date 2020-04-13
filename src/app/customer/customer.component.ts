import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
import { UserserviceService } from '../userservice.service';
import { Repository } from '../repository';
import { environment } from "../../environments/environment";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [UserserviceService],
})
export class CustomerComponent implements OnInit {
  username: User;
  repos: Repository;
  check(rep) {
    interface ApiResponse {
      login: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
      html_url: string;
      avatar_url: string;
    }
    this.http
      .get<ApiResponse>(
        "https://api.github.com/users/" +
          rep.username +
          "?access_token=" +
          "c0fc3aef51046a48ee8f2e0ac69fb9546670937e"
      )
      .subscribe(data => {
        this.repos.login = data.login;
        this.repos.public_repos = data.public_repos;
        this.repos.followers = data.followers;
        this.repos.created_at = data.created_at;
        this.repos.html_url = data.html_url;
        this.repos.avatar_url = data.avatar_url;
      });
    console.log(this.repos);
  }
  constructor(private http: HttpClient)  //dependency to be consumed//
  { 
    this.repos = new Repository("", 0, 0, 0, new Date(), "", "");
  }

  ngOnInit(){
  }

}
