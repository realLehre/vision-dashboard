import { Injectable } from '@angular/core';

export interface Author {
  img: string;
  name: string;
  email: string;
  function: string;
  role: string;
  employed: string;
  status: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  authors: Author[] = [
    {
      img: 'assets/images/authors/esthera.png',
      name: 'Esthera Jackson',
      email: 'esthera@simmmple.com',
      function: 'manager',
      role: 'organization',
      employed: this.getDate(),
      status: 'online',
    },
    {
      img: 'assets/images/authors/alexa.png',
      name: 'Alexa Liras',
      email: 'alexa@simmmple.com',
      function: 'programmer',
      role: 'developer',
      employed: this.getDate(),
      status: 'offline',
    },
    {
      img: 'assets/images/authors/laurent.png',
      name: 'Laurent Michael',
      email: 'laurent@simmmple.com',
      function: 'executive',
      role: 'projects',
      employed: this.getDate(),
      status: 'online',
    },
    {
      img: 'assets/images/authors/esthera.png',
      name: 'Esthera Jackson',
      email: 'esthera@simmmple.com',
      function: 'manager',
      role: 'organization',
      employed: this.getDate(),
      status: 'online',
    },
    {
      img: 'assets/images/authors/alexa.png',
      name: 'Alexa Liras',
      email: 'alexa@simmmple.com',
      function: 'programmer',
      role: 'developer',
      employed: this.getDate(),
      status: 'offline',
    },
    {
      img: 'assets/images/authors/laurent.png',
      name: 'Laurent Michael',
      email: 'laurent@simmmple.com',
      function: 'executive',
      role: 'projects',
      employed: this.getDate(),
      status: 'online',
    },
  ];
  constructor() {}

  getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(today.getDate()).padStart(2, '0');

    return `${day}/${month}/${year}`;
  }
}
