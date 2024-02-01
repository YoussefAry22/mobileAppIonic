import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  deviceName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Use ActivatedRoute instead of ActivatedRouteSnapshot
    this.deviceName = this.route.snapshot.queryParams['name'] || this.route.snapshot.params['name'];
  }
}
