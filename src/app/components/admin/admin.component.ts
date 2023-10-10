import { Component } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  message = '';

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resourceService.admin().subscribe({
      next: (data) => {
        this.message = data.message;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
