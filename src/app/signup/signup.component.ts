import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupDetails:any;
  showWarning:any;
  warningMessage:any
  constructor() { 

    this.signupDetails = {
      firstName: '',
      secondName: '',
      email:'',
      password:'',
      confirmPassword:'',
    }

  }

  ngOnInit(): void {
  }

  classifiedSignup = () => {
    debugger
    if(!this.signupDetails.firstName) {
      this.warningMessage = 'Please Enter FirstName';
      this.showWarning = true
    }
    else if(!this.signupDetails.email) {
      this.warningMessage = 'Please Enter Email';
      this.showWarning = true
    }
    else if(!this.signupDetails.password) {
      this.warningMessage = 'Please Enter Password';
      this.showWarning = true
    } 
    else if(!this.signupDetails.confirmPassword) {
      this.warningMessage = 'Please Enter Confirm Password';
      this.showWarning = true
    } 
    else if(this.signupDetails.password !== this.signupDetails.confirmPassword ) {
      this.warningMessage = 'Please Enter Password & Confirm Password Same';
      this.showWarning = true
    }
    if(this.showWarning) {
      setTimeout(() => {
        this.showWarning = false
      }, 1000);
    }
  }
}
