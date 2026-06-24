import { inject, Injectable } from "@angular/core";
import { LoginData } from "../models/model";
import { HttpClient } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

const BASE_URL = 'http://localhost:8000'

@Injectable({providedIn: 'root'})
export class DataService {

    private http = inject(HttpClient)

    validate(payload: LoginData) {
        const URL = `${BASE_URL}/login`
        return this.http.post(URL, payload)
        .pipe(
            catchError((err: any) => throwError(() => err))
        )
    }
}