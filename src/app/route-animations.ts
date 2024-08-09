import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';
export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}',
  }),
  animate('{{ time }}'),
]);
// Routable animations
export const slideInAnimation = trigger('routeAnimations', [
  transition('dashboard <=> tables', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '20px',
        left: 0,
        width: '100%',
        'min-height': '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: '20px',
          left: 0,
          width: '100%',
          'min-height': '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))],
        {
          optional: true,
        },
      ),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
