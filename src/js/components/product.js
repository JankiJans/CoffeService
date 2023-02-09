import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(data) {
    const thisProduct = this;

    thisProduct.render(data);
  }

  render(data){
    const thisProduct = this;
        
    const generatedHTML = templates.productWidget(data);
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    const productWrapper = document.querySelector(select.containerOf.productPage);

    productWrapper.appendChild(generatedDom);

    thisProduct.dom = {};
  }
}

export default Product;