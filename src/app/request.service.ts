
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { User } from "./user";
import { Repository } from "./repository";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
@Injectable({
  providedIn: "root"
})
export class ServiceRequestService {
  user: User;
  repos: Repository;
  private username: string;
  items;
  constructor(private http: HttpClient) {
    console.log("service can be accessed");
    this.username = "kelvinjoshua";
    this.user = new User("");
    this.repos = new Repository("", 0, 0, 0, new Date(), "", "");
  }
  getProfileInfo(username) {
    console.log(username);
    interface ApiResponse {
      login: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
      html_url: string;
      avatar_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            username +
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
          resolve();
        });
    });
    return promise;
  }
  getRepoInfo(username) {
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
          username +
          "?access_token=" +
          "c0fc3aef51046a48ee8f2e0ac69fb9546670937e"
      )
      .subscribe(data => {
        this.items = Response;
      });
  }
}
 