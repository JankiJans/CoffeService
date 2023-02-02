export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    productWidget: '#template-product-list',
    contactWidget: '#template-contact-widget',
  },

  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    productPage: '.product-wrapper',
    contact: '.contact-wrapper',
  },

  navLinks: {
    links: '.navbar-nav a',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    data: 'products',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },

  nav: {
    active: 'active',
  },
};

export const templates = {
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
  productWidget: Handlebars.compile(document.querySelector(select.templateOf.productWidget).innerHTML),
  contactWidget: Handlebars.compile(document.querySelector(select.templateOf.contactWidget).innerHTML),
};
