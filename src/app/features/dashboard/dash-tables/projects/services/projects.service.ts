import { Injectable } from '@angular/core';

export interface Project {
  company: string;
  logo: string;
  members: string[];
  completion: number;
  budget: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      company: 'Chakra Soft UI Verson',
      completion: 60,
      logo: 'assets/images/project-icons/companies-logo.png',
      members: [
        'assets/images/members/member-1.png',
        'assets/images/members/member-2.png',
        'assets/images/members/member-3.png',
        'assets/images/members/member-4.png',
        'assets/images/members/member-5.png',
      ],
      budget: 10000,
    },
    {
      company: 'Add Progress Track',
      completion: 40,
      logo: ' assets/images/project-icons/online-shop.png',
      members: [
        'assets/images/members/member-1.png',
        'assets/images/members/member-2.png',
      ],
      budget: 15000,
    },
    {
      company: 'Fix Platform Errors',
      completion: 100,
      logo: ' assets/images/project-icons/pricing-page.png',
      members: [
        'assets/images/members/member-1.png',
        'assets/images/members/member-2.png',
        'assets/images/members/member-3.png',
        'assets/images/members/member-4.png',
      ],
      budget: 3400,
    },
    {
      company: 'Launch our Mobile App',
      completion: 80,
      logo: 'assets/images/project-icons/progress-track.png',
      members: [
        'assets/images/members/member-3.png',
        'assets/images/members/member-4.png',
        'assets/images/members/member-5.png',
      ],
      budget: 7200,
    },
    {
      company: 'Add the New Pricing Range',
      completion: 30,
      logo: '  assets/images/project-icons/slack.png',
      members: ['assets/images/members/member-3.png'],
      budget: 500,
    },
    {
      company: 'Redesign New Online Shop',
      completion: 20,
      logo: '  assets/images/project-icons/spotify.png',
      members: [
        'assets/images/members/member-3.png',
        'assets/images/members/member-4.png',
      ],
      budget: 2400,
    },
  ];

  constructor() {}
}
