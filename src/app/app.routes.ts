import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';
import { AuthComponent } from './auth/auth.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:"Trang chủ"},
    {path:'auth/login',component:AuthComponent,title:"Đăng nhập"},
    {path:'auth/signup',component:AuthComponent,title:"Đăng ký"},
    {path:'detail',component:DetailComponent,title:"Chi tiết sách"}
    // { path: 'contact', redirectTo: '/lien-he', pathMatch: 'full' },
    // { path: 'category/:id', component:CategoryComponent },
    // { path: '**', component: NotFoundComponent }
];
