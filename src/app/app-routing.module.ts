import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Html2pdfComponent } from './components/html2pdf/html2pdf.component';

const routes: Routes = [
  {
    path:'htm2pdf', 
    component: Html2pdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
