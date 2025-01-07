import { Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';




export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent , title:"home"},
  { path: "about", component: AboutComponent ,title:"about"},
  { path: "portfolio", component: PortfolioComponent ,title:"portfolio"},
  { path: "contact", component: ContactComponent ,title:"contact"},
  { path: "footer", component: FooterComponent },
  { path: "**", component: NotfoundComponent ,title:"notfound"},
];
