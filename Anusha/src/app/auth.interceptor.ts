import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenStorageService } from "./_services/token-storage.service";
const TOKEN_HEADER_KEY='Authorization';

export class AuthInterceptor implements HttpInterceptor{
    constructor(private token :TokenStorageService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq=req;
    const token=this.token.getToken();
    if(token!=null){
        authReq=req.clone({headers:req.headers.set(TOKEN_HEADER_KEY,'Bearer'+token)})
    }
    return next.handle(authReq);
    }
}
export const AuthInterceptorProviders=[
    {provide:HTTP_INTERCEPTORS,multi:true}
]


