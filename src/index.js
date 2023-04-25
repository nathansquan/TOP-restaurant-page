import firstLoad from './components/firstLoad.js';
import Contact from './contact/contact.js';
import './css/style.css';
import loadHome from './home/home.js';

firstLoad();

const btns = document.querySelectorAll(".tabBar > button");
btns.forEach(btn => btn.addEventListener("click", clickHandlerTab));

function clickHandlerTab(e) {
    // clear page contents
    content.textContent = "";

    switch (e.target.className) {
        case 'homeBtn': {
            loadHome();
            const btns = document.querySelectorAll(".tabBar > button");
            btns.forEach(btn => btn.addEventListener("click", clickHandlerTab));
            break;
        }
        case 'menuBtn': {
            break;
        }
        case 'contactBtn': {
            const contact = new Contact;
            contact.loadContact();
            const btns = document.querySelectorAll(".tabBar > button");
            btns.forEach(btn => btn.addEventListener("click", clickHandlerTab));
            break;
        }
        default:
            break;
    }
}
