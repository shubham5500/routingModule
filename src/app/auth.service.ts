
export class AuthGuardService {
    loggedIn = false;

    isAuthenticated(){
       let promise = new Promise(
           (resolve, reject)=>{
               setTimeout(() => {
                   resolve(this.loggedIn)
               }, 2000);
           }
       )
       return promise;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}