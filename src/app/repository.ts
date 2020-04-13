export class Repository {
    //created properties from the api to be used//
    constructor(
        public login: string,
        public public_repos: number,
        public followers: number,
        public following: number,
        public created_at: Date,
        public html_url: string,
        public avatar_url
    ){}
}
