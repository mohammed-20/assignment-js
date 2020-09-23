const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here

/*************edit***************/


// add acontent in nav
const item1=document.querySelector('body > div > header > nav > a:nth-child(1)');
item1.textContent=siteContent.nav["nav-item-1"]

const item2=document.querySelector('body > div > header > nav > a:nth-child(2)');
item2.textContent=siteContent.nav["nav-item-2"];

const item3=document.querySelector('body > div > header > nav > a:nth-child(3)');
item3.textContent=siteContent.nav["nav-item-3"];

const item4=document.querySelector('body > div > header > nav > a:nth-child(4)');
item4.textContent=siteContent.nav["nav-item-4"];

const item5=document.querySelector('body > div > header > nav > a:nth-child(5)');
item5.textContent=siteContent.nav["nav-item-5"];

const item6=document.querySelector('body > div > header > nav > a:nth-child(6)');
item6.textContent=siteContent.nav["nav-item-6"];



//add img content in nav
const img_nav=document.querySelector('#logo-img');
img_nav.src=siteContent.nav['img-src'];

//add h1 content 
const h1_cta=document.querySelector('body > div > section.cta > div > h1');
h1_cta.textContent=siteContent.cta.h1;

// add button content 
const btn_cta=document.querySelector('body > div > section.cta > div > button');
btn_cta.textContent=siteContent.cta.button;

//add img content 
const img_cta= document.querySelector('#cta-img');
img_cta.src=siteContent.cta['img-src'];

//add content for main top

const h4_features=document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > h4');
h4_features.textContent=siteContent["main-content"]["features-h4"];

const p_features=document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > p');
p_features.textContent=siteContent["main-content"]["features-content"];

const h4_about=document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > h4');
h4_about.textContent=siteContent["main-content"]["about-h4"];

const p_about=document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > p');
p_about.textContent=siteContent["main-content"]["about-content"];


//add content for main middle

// add img content for main middle
const img_mid=document.querySelector('#middle-img');
img_mid.src=siteContent["main-content"]["middle-img-src"];

// add bottom text content 
//#1 services
const h4_services=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4');
h4_services.textContent=siteContent["main-content"]["services-h4"];

const p_services=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > p');
p_services.textContent=siteContent["main-content"]["services-content"];
//#2 product
const h4_product=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4');
h4_product.textContent=siteContent["main-content"]["product-h4"];

const p_product=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > p');
p_product.textContent=siteContent["main-content"]["product-content"];
//#3 vision
const h4_vision=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4');
h4_vision.textContent=siteContent["main-content"]["vision-h4"];

const p_vision=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > p');
p_vision.textContent=siteContent["main-content"]["vision-content"];

// add contact content
const h4_cont=document.querySelector('body > div > section.contact > h4');
h4_cont.textContent=siteContent.contact["contact-h4"];

const p_address=document.querySelector('body > div > section.contact > p:nth-child(2)');
p_address.textContent=siteContent.contact.address;

const p_phone=document.querySelector('body > div > section.contact > p:nth-child(3)');
p_phone.textContent=siteContent.contact.phone;

const p_email=document.querySelector('body > div > section.contact > p:nth-child(4)');
p_email.textContent=siteContent.contact.email;

/******footer******/
//add content footer

const p_footer=document.querySelector('body > div > footer > p');
p_footer.textContent=siteContent.footer.copyright;

// edit color of nav
const navbar_light=document.querySelector('body > div > header > nav');
navbar_light.style.backgroundColor="green";

// add item to nav system
const item7=document.createElement('a');
item7.textContent= 'News';
const item8=document.createElement('a');
item8.textContent='Tools';

const add=document.querySelector('body > div > header > nav');
add.appendChild(item7);
add.appendChild(item8);


