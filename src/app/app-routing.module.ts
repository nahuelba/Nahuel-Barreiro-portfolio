import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [

    {
      path:'',
      component: IndexComponent
    },
    {
      path:'about',
      component: AboutComponent
    },
    {
      path:'portfolio',
      component: PortfolioComponent
    },
    {
      path:'contact',
      component: ContactComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
