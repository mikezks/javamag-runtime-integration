import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-header">
        <img src="common/angular.png" class="logo-image" alt="Angular Logo" />
        <h2 class="card-title logo-title">Multi-Version / Multi-Framework</h2>
      </div>

      <div class="card-body">
        <ul>
          <li>Shell: Angular 18</li>
          <li>Micro Frontends</li>
          <ul>
            <li>Booking: Angular 18</li>
            <li>Checkin: React 18</li>
            <li>Boarding: Angular 17</li>
          </ul>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    code {
      color: blue;
    }
  `]
})
export class HomeComponent {
}
