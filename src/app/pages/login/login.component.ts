import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const sign_in_btn = document.querySelector('#sign-in-btn');
    const sign_up_btn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.container');

    sign_up_btn?.addEventListener('click', () => {
      container?.classList.add('sign-up-mode');
    });

    sign_in_btn?.addEventListener('click', () => {
      container?.classList.remove('sign-up-mode');
    });
  }

}
