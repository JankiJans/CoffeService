import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
    constructor(element) {
        const thisProduct = this;

        thisProduct.render(element);
    }

    render(){
        const thisProduct = this;
        
        const generatedHTML = templates.productWidget();
        const generatedDom = utils.createDOMFromHTML(generatedHTML);
        const productWrapper = document.querySelector(select.containerOf.productPage);

        productWrapper.appendChild(generatedDom);

        thisProduct.dom = {};
    }
}

export default Product;