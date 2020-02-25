import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';




const routes: Routes = [

  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component: HomeComponent },
  {path:'about', component: AboutComponent },
  {path: 'contact_us', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
