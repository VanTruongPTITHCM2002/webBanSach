import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import registerRequest from '../../request/registerRequest';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(private http:HttpClient, private router:Router,private cookieService:CookieService){}
  ngOnInit(): void {
    //this.cookieService.set('isFormLogin',String(false));
  }
  @Output() toggleMode = new EventEmitter<void>(); // Khai báo EventEmitter
  isRegisterMode = false;
  isContinue:boolean = false;
  formData: registerRequest = {
    username: '',
    password: '',
    repassword: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: ''
  }; // Khởi tạo formData với giá trị mặc định
  onRegisterMode(form:NgForm) {
    if(form.invalid){
      this.isContinue = true;
      return;
    }
    this.isRegisterMode = !this.isRegisterMode;
   
  }
  onToggleMode() {
    this.toggleMode.emit(); // Gửi sự kiện để chuyển đổi chế độ
  }
  onSubmitRegister(form: NgForm) {
   
    if(form.valid){
      console.log(this.isRegisterMode)
      const forms = form.value as registerRequest;
      this.formData = { ...this.formData, ...forms };
      if(!this.isRegisterMode){
      
        this.http.post('http://localhost:5000/auth/signup',this.formData)
        .subscribe({
          next: (v)=> console.log(v),
          error: (e) => alert(e.error.message),
          complete: ()=>{alert('Đăng ký thành công'); this.router.navigate(['/'])},
        })
      }
      }
     
    else{
      console.log('Form is invalid');
    }

  }
}
