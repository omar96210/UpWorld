import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
declare var $ : any;

@Injectable({
    providedIn: 'root'
})

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})
export class ComponentsComponent implements OnInit {
    artForm: FormGroup;
    mathForm: FormGroup;
    robotForm: FormGroup;
    arabicForm: FormGroup;
    baseUrl: string = "https://code5up.000webhostapp.com";
    constructor(
        private renderer: Renderer2,
        private fb: FormBuilder,
        private router: Router,
        private httpClient: HttpClient,
    ) {

        this.artForm = this.fb.group({
            artname: new FormControl(''),
            artphone: new FormControl(''),
            artage: new FormControl(''),

        });
        this.mathForm = this.fb.group({
            mathname: new FormControl(''),
            mathphone: new FormControl(''),
            mathage: new FormControl(''),
            inlineRadio1: new FormControl(''),

        });
        this.robotForm = this.fb.group({
            robotname: new FormControl(''),
            robotphone: new FormControl(''),
            robotage: new FormControl(''),

        });
        this.arabicForm = this.fb.group({
            arabicname: new FormControl(''),
            arabicphone: new FormControl(''),
            arabicage: new FormControl(''),

        });
    }

    ngOnInit() {
    }

    close(){
        $('#art').modal('hide'); 
        $('#math').modal('hide'); 
        $('#arabicfont').modal('hide'); 
        $('#robotics').modal('hide'); 
        $('#mathprices').modal('hide'); 
        $('#artprices').modal('hide'); 
        $('#roboticsprices').modal('hide'); 
        $('#fontprices').modal('hide'); 


        
    }

    artdata(artForm) {
        if(artForm.value.artname==""||artForm.value.artphone==""||artForm.value.artage==""){
            alert("الرجاء إدخال جميع البيانات");
        }else{

            this.artregistration(artForm.value.artname, artForm.value.artphone, artForm.value.artage)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('done2 ');
                },
                error => {
                    console.log('not done2 ');
                });
                $('#art').modal('hide'); 
        }
    }
    public artregistration(artname, artphone, artage) {
        return this.httpClient.post<any>(this.baseUrl + '/php/dbart.php', { artname, artphone, artage })
            .pipe(map(user => {
                return user;
            }));
    }



    mathdata(mathForm) {
        if(mathForm.value.mathname==""||mathForm.value.mathphone==""||mathForm.value.mathage==""||mathForm.value.inlineRadio1==""){
            alert("الرجاء إدخال جميع البيانات");
        }else{
            this.mathregistration(mathForm.value.mathname, mathForm.value.mathphone, mathForm.value.mathage, mathForm.value.inlineRadio1)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('done2 ');
                },
                error => {
                    console.log('not done2 ');
                });
                $('#math').modal('hide'); 
        }
    }
    public mathregistration(mathname, mathphone, mathage, inlineRadio1) {
        return this.httpClient.post<any>(this.baseUrl + '/php/dbmath.php', { mathname, mathphone, mathage, inlineRadio1 })
            .pipe(map(user => {
                return user;
            }));
    }


    
    robotdata(robotForm) {
        if(robotForm.value.robotname==""||robotForm.value.robotphone==""||robotForm.value.robotage==""){
            alert("الرجاء إدخال جميع البيانات");
        }else{
            this.robotregistration(robotForm.value.robotname, robotForm.value.robotphone, robotForm.value.robotage)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('done2 ');


                },
                error => {

                    console.log('not done2 ');
                });
                $('#robotics').modal('hide');
        }
      
    }

    public robotregistration(robotname, robotphone, robotage) {
        return this.httpClient.post<any>(this.baseUrl + '/php/dbrobottics.php', { robotname, robotphone, robotage })
            .pipe(map(user => {
                return user;
            }));
    }


   
    arabicdata(arabicForm) {
        if(arabicForm.value.arabicname==""||arabicForm.value.arabicphone==""||arabicForm.value.arabicage==""){
            alert("الرجاء إدخال جميع البيانات");
        }else{
            this.arabicregistration(arabicForm.value.arabicname,arabicForm.value.arabicphone, arabicForm.value.arabicage)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('done2 ');


                },
                error => {

                    console.log('not done2 ');
                });
                $('#arabicfont').modal('hide');
        }
      
    }

    public arabicregistration(arabicname, arabicphone, arabicage) {
        return this.httpClient.post<any>(this.baseUrl + '/php/dbarabic.php', { arabicname, arabicphone, arabicage })
            .pipe(map(user => {
                return user;
            }));
    }



}
