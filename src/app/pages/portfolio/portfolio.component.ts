import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from 'src/app/components/modal-proyecto/modal-proyecto.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openProyect(proyecto:string){
    console.log(proyecto)
    const modalRef = this.modalService.open(ModalProyectoComponent, { centered:true });
  }

}
