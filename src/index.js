import firstLoad from './components/firstLoad.js';
import Contact from './contact/contact.js';
import './css/style.css';
import loadHome from './home/home.js';

firstLoad();

const content = document.querySelector("#content");
content.addEventListener("click", clickHandlerTab);

function clickHandlerTab(e) {
    // clear page contents
    content.textContent = "";

    switch (e.target.className) {
        case 'homeBtn':
            loadHome();
            break;
        case 'menuBtn':
            break;
        case 'contactBtn':
            const contact = new Contact;
            contact.loadContact();
            break;
        default:
            break;
    }
}
