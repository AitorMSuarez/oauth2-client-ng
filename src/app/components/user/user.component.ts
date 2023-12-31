import { Component } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  message = '';

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resourceService.user().subscribe(
      (data) => {
        this.message = data.message;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
