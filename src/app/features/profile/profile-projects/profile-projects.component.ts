import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profile-projects',
  standalone: true,
  imports: [NgClass],
  templateUrl: './profile-projects.component.html',
  styleUrl: './profile-projects.component.scss',
})
export class ProfileProjectsComponent {
  imgs: string[] = [
    'assets/images/members/member-1.png',
    'assets/images/members/member-2.png',
    'assets/images/members/member-3.png',
    'assets/images/members/member-4.png',
  ];

  projects: { title: string; text: string; img: string }[] = [
    {
      title: 'Modern',
      text: 'As Uber works through a huge amount of internal management turmoil.',
      img: 'assets/images/profile/car-1.png',
    },
    {
      title: 'Scandinavian',
      text: 'Music is something that every person has his or her own specific opinion about.',
      img: 'assets/images/profile/car-2.png',
    },
    {
      title: 'Minimalist',
      text: 'Different people have different taste, and various types of music.',
      img: 'assets/images/profile/car-3.png',
    },
  ];
}
