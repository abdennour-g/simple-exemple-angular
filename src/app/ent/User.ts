import { Bean, Link_, Page } from "./link-class";

export class Embedded {
users: Users[] =[];
constructor() {  }
}
export class UserJson {
_embedded:Embedded=new Embedded();
page: Page =new Page();
constructor() {
}
}
export class Users {id:number=0;
username:string='';
email:string='';
password:string='';
_links: Link_ = new Link_();
User: User = new User();
constructor() {
}
}
export class User extends Bean {
constructor() {
super();
}
}