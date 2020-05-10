import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../Services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  @ViewChild('user') userInput: ElementRef;
  @ViewChild('pass') passInput: ElementRef;
  mandatoryFieldsMissing = true;
  authenticationError = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async authenticate(userFromInput,passFromInput) {
    const userName = userFromInput.value;
    const passWord = passFromInput.value;
    this.authService.SignIn(userName,passWord);
    
    this.authService.authenticationFailed.subscribe((data) => {
      if(data === true) {
        this.authenticationError = true;
      }
    });
  }

  inputFieldChange(event) {
    const userValue = this.userInput.nativeElement.value;
    const passValue = this.passInput.nativeElement.value;

    if(userValue && userValue.length > 0 && passValue && passValue.length> 0) {
      this.mandatoryFieldsMissing = false;
    } else {
      this.mandatoryFieldsMissing = true;
    }
  }

  googleAuth() {
    this.authService.GoogleAuth();
  }

  gitHubAuth() {
    this.authService.GitHubAuth();
  }

}
