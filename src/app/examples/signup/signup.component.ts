import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,

    ) { 


        this.loginForm = this.fb.group({
            loginname: new FormControl(''),
            loginpass: new FormControl(''),
    
        });
    
    }

    ngOnInit() {}



    logindata(loginForm) {
        if(loginForm.value.loginname==="admin"&&loginForm.value.loginpass==="admin2242"){
            this.router.navigate(['/Dashboard']);
        }else{
            alert("الرجاء إدخال البيانات الصحيحة ");

        }
      
    }



}
