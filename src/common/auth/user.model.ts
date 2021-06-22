export class User {
    constructor(
        public userid: string,
        public username: string,
        private _tokenExpirationDate: Date) { }
}