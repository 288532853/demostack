import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private notificationService: NotificationService) { 

    this.notificationService.success(':: Page load successfully');
  }

  ngOnInit() {
  }

}
