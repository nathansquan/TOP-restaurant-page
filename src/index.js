import firstLoad from './components/firstLoad.js';
import './css/style.css';
import Home from './home/home.js';
import Menu from './menu/menu.js';
import Contact from './contact/contact.js';

firstLoad();

const btns = document.querySelectorAll(".tabBar > button");
btns.forEach(btn => btn.addEventListener("click", clickHandlerTab));

function clickHandlerTab(e) {
    // clear page contents
    content.textContent = "";

    switch (e.target.className) {
        case 'homeBtn': {
            const home = new Home;
            home.loadHome();
            const btns = document.querySelectorAll(".tabBar > button");
            btns.forEach(btn => btn.addEventListener("click", clickHandlerTab));
            break;
        }
        case 'menuBtn': {
            const menu = new Menu;
            menu.loadMenu();
            const btns = document.querySelectorAll(".tabBar > button");
            btns.forEach(btn => btn.addEventListener("click", clickHandlerTab));
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
