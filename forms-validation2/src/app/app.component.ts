import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
//  @ViewChild('myForm') form: NgForm;
 reactForm: FormGroup;

//  submitFlag: boolean = false;
//  existForm: {};

 answers =[{
    type: 'yes',
    text: 'Yes'
   },
   {
     type:'no',
     text:'No'
   }
  ]
  // defAnsw: string = 'yes';
  // defCountry: string = 'ua';

 

  // submit(myForm: NgForm){
  //   console.log('Submited!');
  //   console.log(myForm);
  //   this.submitFlag = true;
  //   this.existForm = this.form.value;
  // }
 
  // addRandEmail(){
  //   this.form.form.patchValue({
  //     user:{email: 'wfm@com'}
  //   })
  // }
  ngOnInit(){
    this.reactForm = new FormGroup({
      user: new FormGroup({
        emailR: new FormControl("", [Validators.required, Validators.email]),
        passwordR: new FormControl('', [Validators.required])
      }),
      countryR: new FormControl(""),
      answerR: new FormControl(""),
    })
  }
  submitR (){
    console.log('Submited!', this.reactForm);
  }
}
