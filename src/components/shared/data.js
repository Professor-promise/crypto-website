import svg_2 from '../../images/svg-2.svg';
import svg_1 from '../../images/svg-1.svg';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: 'about',
    text: 'About',
  },
  {
    id: 3,
    url: 'discover',
    text: 'Discover',
  },
  {
    id: 4,
    url: 'services',
    text: 'Services',
  },
  {
    id: 5,
    url: 'signup',
    text: 'Sign Up',
  },
];

export const homeContent = [
  {
    id: 'about',
    lightText: true,
    lightTextDesc: true,
    lightBg: false,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description:
      'Get access to our exclusive app that allows you to send unlimited transactiosn without getting charge any fees ',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: svg_2,
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false,
  },
  {
    id: 'discover',
    lightText: false,
    lightTextDesc: false,
    lightBg: true,
    topLine: 'Premium Bank',
    headLine: 'Login to your account at anytime',
    description:
      'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    darkText: true,
    buttonLabel: 'Learn More',
    imgStart: true,
    img: svg_1,
    alt: 'piggyest',
    dark: false,
    primary: false,
  },
];

export const signupInfo = {
  id: 'signup',
  lightText: false,
  lightTextDesc: true,
  lightBg: true,
  topLine: 'Join Our Team',
  headLine: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  darkText: true,
  buttonLabel: 'Start Now',
  imgStart: false,
  img: svg_2,
  alt: 'paper',
  dark: false,
  primary: false,
};

export const servicesCardContent = [
  {
    id: 1,
    heading: 'Reduce Expenses',
    text: 'We help reduce your fees and increase your revenue',
    Icon: svg_1,
  },
  {
    id: 2,
    heading: 'Virtual Offices',
    text: 'You can access our platform online anywhere in the world',
    Icon: svg_2,
  },
  {
    id: 3,
    heading: 'Premium Benefits',
    text: 'Unlock our special membership care that returns 5% cash back',
    Icon: svg_1,
  },
];
