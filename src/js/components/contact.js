import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Contact {
    constructor(element) {
        const thisContact = this;

        thisContact.render(element);
    }

    render(){
        const thisContact = this;
        
        const generatedHTML = templates.contactWidget();
        const generatedDom = utils.createDOMFromHTML(generatedHTML);
        const contactWrapper = document.querySelector(select.containerOf.contact);

        contactWrapper.appendChild(generatedDom);

        thisContact.dom = {};
    }
}

export default Contact;