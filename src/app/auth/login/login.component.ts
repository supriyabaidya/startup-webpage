import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.username;
    const password = form.value.password;
    // console.log('email ' + email + ' , pass ' + password);
    this.router.navigate(['/admin']);
    // console.log(email + password);
    // this.authService.signInUsers(email, password);
  }

}
