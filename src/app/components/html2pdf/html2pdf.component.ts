import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2Canvas from 'jspdf';

@Component({
  selector: 'app-html2pdf',
  templateUrl: './html2pdf.component.html',
  styleUrls: ['./html2pdf.component.scss']
})
export class Html2pdfComponent {
  @ViewChild('content') content: any;

  Html2Canvas = new html2Canvas();
  convert2pdf(){
    // const content = this.content.nativeElement;
    // this.Html2Canvas(content).then((canvas:{ toDataURL:(arg0:string)=>any; height:number;width:number;}) => {
    //   const pdf = new jsPDF('p','mm','a4');
    //   const imgData = canvas.toDataURL('image/png');
    //   const imgWidth = 190;
    //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

    //   pdf.addImage(imgData, 'PNG', 10,10,imgWidth, imgHeight);
    //   pdf.save('html2pdf.pdf')
    // })
  }
}
