/* appClassic dummy data list :-
- Navbar
- Client
- Key Feature section
- App Slider
- Features section
- Design and built
- Feature tab
- Pricing policy
- Testimonial section
- Faq section
- Join slack
- Footer
  - widget
  - logo
  - menu
  - copyright 
*/

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/src/assets/image/appClassic/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [{
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Key Features',
      path: '#keyFeatures',
      offset: '84',
    },
    {
      id: 3,
      label: 'Pricing',
      path: '#pricing',
      offset: '84',
    },
    {
      id: 4,
      label: 'Testimonial',
      path: '#testimonial',
      offset: '80',
    },
    {
      id: 5,
      label: 'Faq',
      path: '#faq',
      offset: '80',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/src/assets/image/appClassic/client1.svg';
import client2 from 'common/src/assets/image/appClassic/client2.svg';
import client3 from 'common/src/assets/image/appClassic/client3.svg';
import client4 from 'common/src/assets/image/appClassic/client4.svg';

export const client = [{
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from 'common/src/assets/image/appClassic/keyFeature-1.svg';
import keyFeature2 from 'common/src/assets/image/appClassic/keyFeature-2.svg';
import keyFeature3 from 'common/src/assets/image/appClassic/keyFeature-3.svg';

export const keyFeatures = {
  slogan: 'SHARE UNIQUE PLACES',
  title: 'Collect more than likes',
  features: [{
      id: 1,
      color: '#F55767',
      icon: keyFeature1,
      title: 'Upvote button',
      description: 'We turn upvotes into a token transfer. In-app purchase of LTL branded tokens with Apple Pay.',
    },
    {
      id: 2,
      color: '#2563FF',
      icon: keyFeature2,
      title: 'Plant Trees',
      description: 'Each upvote earns you LTL Tokens. These tokens are used to donate to #onetreeplanted.org',
    },
    {
      id: 3,
      color: '#40975F',
      icon: keyFeature3,
      title: 'Unique content',
      description: 'Add unique places and earn additional tokens with every booking driven from your unique content.',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/src/assets/image/appClassic/appSlider1.png';
import appSlide2 from 'common/src/assets/image/appClassic/appSlider2.png';
import appSlide3 from 'common/src/assets/image/appClassic/appSlider3.png';

export const appSlider = {
  carousel: [{
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title: 'Capture the spirit, the very essence of the destination.',
  description: "Ambassadors let you explore the exceptional places they love most, and if their content gets featured they receive LTL tokens.",
  features: [{
      id: 1,
      icon: 'flaticon-bitcoin',
      title: 'Capture the Spirit',
      description: 'What if photos aren’t doing a good job at reflecting the vibe?',
    },
    {
      id: 2,
      icon: 'flaticon-atom',
      title: 'Upload a Photo',
      description: 'If you`ve found something unique or your trip was so unforgettable, capture it and share it.',
    },
    {
      id: 3,
      icon: 'flaticon-money-bag',
      title: 'Unforgettable places',
      description: 'Change the user experience by surfacing content on your timeline, based on your location, friends and tag-based filters.',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/src/assets/image/appClassic/featureIcon-1.svg';
import featureIcon2 from 'common/src/assets/image/appClassic/featureIcon-2.svg';
import featureIcon3 from 'common/src/assets/image/appClassic/featureIcon-3.svg';
import featureIcon4 from 'common/src/assets/image/appClassic/featureIcon-4.svg';
import featureIcon5 from 'common/src/assets/image/appClassic/featureIcon-5.svg';
import featureIcon6 from 'common/src/assets/image/appClassic/featureIcon-6.svg';

export const features = {
  slogan: 'LTL MAPS REINVENTED',
  title: 'Why you choose our App',
  items: [{
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'App Development',
      description: 'Get your proof tests delivered home collect a sample from the news get design.',
    },
    {
      id: 2,
      color: '#3DABDD',
      icon: featureIcon2,
      title: '10 Times Award',
      description: 'Get your proof tests delivered home collect a sample from the news get design.',
    },
    {
      id: 3,
      color: '#D6AB00',
      icon: featureIcon3,
      title: 'Cloud Storage',
      description: 'Get your proof tests delivered home collect a sample from the news get design.',
    },
    {
      id: 4,
      color: '#40975F',
      icon: featureIcon4,
      title: 'Customization',
      description: 'Get your proof tests delivered home collect a sample from the news get design.',
    },
    {
      id: 5,
      color: '#5856D6',
      icon: featureIcon5,
      title: 'UX Planning',
      description: 'Get your proof tests delivered home collect a sample from the news get design.',
    },
    {
      id: 6,
      color: '#E97325',
      icon: featureIcon6,
      title: 'Customer Support',
      description: 'Get your proof tests delivered home collect a sample from the news get design.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import builtLogo from 'common/src/assets/image/appClassic/appAndMap.png';

export const designAndBuilt = {
  image: builtLogo,
  title: 'The wallet is automatically created with a pincode.',
  description: 'You will receive a warm welcome and you can buy more tokens with Apple Pay. The first travel app that allows in-app purchase of tokens, approved by App Store.',
};

/* ------------------------------------ */
// Feature tab data section
/* ------------------------------------ */
import appTabIcon1 from 'common/src/assets/image/appClassic/appTabIcon1.svg';
import appTabIcon2 from 'common/src/assets/image/appClassic/appTabIcon2.svg';
import appTabIcon3 from 'common/src/assets/image/appClassic/appTabIcon3.svg';
import appTabIcon4 from 'common/src/assets/image/appClassic/appTabIcon4.svg';
import appTabIcon5 from 'common/src/assets/image/appClassic/appTabIcon5.svg';
import appTabIcon6 from 'common/src/assets/image/appClassic/appTabIcon6.svg';
// image
import appTabImg1 from 'common/src/assets/image/appClassic/appTabImg1.png';
import appTabImg2 from 'common/src/assets/image/appClassic/appTabImg2.png';
import appTabImg3 from 'common/src/assets/image/appClassic/appTabImg3.png';
import appTabImg4 from 'common/src/assets/image/appClassic/appTabImg4.png';
import appTabImg5 from 'common/src/assets/image/appClassic/appTabImg5.png';
import appTabImg6 from 'common/src/assets/image/appClassic/appTabImg6.png';

export const featuresTab = {
  slogan: 'LIVE THE LIFE',
  title: 'Create a trip & invite friends.',
  tab: [{
      id: 1,
      color: '#F55767',
      icon: appTabIcon1,
      title: 'Create Trip',
      description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg1,
    },
    {
      id: 2,
      color: '#40975F',
      icon: appTabIcon2,
      title: 'Destination',
      // description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg2,
    },
    {
      id: 3,
      color: '#5856D6',
      icon: appTabIcon3,
      title: 'Dates',
      // description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg3,
    },
    {
      id: 4,
      color: '#D6AB00',
      icon: appTabIcon4,
      title: 'Routes',
      // description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg4,
    },
    {
      id: 5,
      color: '#E97325',
      icon: appTabIcon5,
      title: 'Day by Day',
      // description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg5,
    },
    {
      id: 6,
      color: '#3DABDD',
      icon: appTabIcon6,
      title: 'Add People',
      // description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg6,
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [{
      id: 1,
      title: 'Business Class',
      description: 'For Small teams or office',
      suggested: false,
      price: 0,
      features: [{
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Pro Master',
      description: 'For Best opportunities',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [{
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
  annualy: [{
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [{
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [{
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'TESTIMONIAL',
  title: 'Meet Client Satisfaction by using product',
  reviews: [{
      id: 1,
      title: 'Modern look & trending design',
      description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'CEO of RedQ Inc.',
      review: 4,
    },
    {
      id: 2,
      title: 'User friendly & Customizable',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jeny Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
      name: 'Jon Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Faq data section
/* ------------------------------------ */
export const faq = {
  slogan: 'FREQUENT QUESTION',
  title: 'Do you have any question',
  faqs: [{
      id: 1,
      question: 'How to contact with riders emergency?',
      answer: 'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 2,
      question: 'App installation failed, how to update system information?',
      answer: 'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 3,
      question: 'Website reponse taking time, how to improve?',
      answer: 'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 4,
      question: 'New update fixed all bug and issues',
      answer: 'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
  ],
};

/* ------------------------------------ */
// Join Slack data section
/* ------------------------------------ */
import slackLogo from 'common/src/assets/image/appClassic/slack.png';

export const joinSlack = {
  logo: slackLogo,
  title: 'The beta invitation waiting list ...',
  description: 'Are you an early adopter? One of those who actually like products in beta? Sign up for the LTL Maps Invitation.',
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/src/assets/image/appClassic/chat.svg';
import group from 'common/src/assets/image/appClassic/group.svg';
import github from 'common/src/assets/image/appClassic/github.svg';
import footerLogo from 'common/src/assets/image/appClassic/logoWhite.png';

export const footer = {
  widgets: [{
      id: 1,
      icon: chat,
      title: 'Join the Community',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 2,
      icon: group,
      title: 'Join in Chat Community',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 3,
      icon: github,
      title: 'Github Access',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
  ],
  logo: footerLogo,
  menu: [{
      id: 1,
      text: 'Home',
      link: '#',
    },
    {
      id: 2,
      text: 'Adversite',
      link: '#',
    },
    {
      id: 3,
      text: 'Supports',
      link: '#',
    },
    {
      id: 4,
      text: 'Marketing',
      link: '#',
    },
    {
      id: 5,
      text: 'Contact',
      link: '#',
    },
  ],
};