// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-portfolio',
//   imports: [],
//   templateUrl: './portfolio.component.html',
//   styleUrl: './portfolio.component.css'
// })
// export class PortfolioComponent {
// }



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true, // تأكيد أنه standalone component
  imports: [CommonModule], // إضافة CommonModule هنا
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioImages: string[] = [
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png',
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png',

 
  ];

  
}

