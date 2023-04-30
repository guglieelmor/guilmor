import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-secund-site',
  templateUrl: './secund-site.component.html',
  styleUrls: ['./secund-site.component.scss']
})
export class SecundSiteComponent {
  ngOnInit() {
    AOS.init();
  }
}