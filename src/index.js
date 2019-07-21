import _ from "lodash";
import './common_1.css';
import './common_2.css';
import myImg from './IMG_1497.JPG';
import data from './data.xml';
import datajson from './data2';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('color_red','size_big');

    return element;
}

function eleImage() {
    var myImage = new Image();
    myImage.src = myImg;
    myImage.classList.add('size_img');
    console.log(data);
    console.log(datajson);

    return myImage;
}

function eleHeader() {
    var headerHTML = require('./header.html');
    console.log(headerHTML);
    var element = document.createElement('div');
    element.innerHTML = headerHTML;
    return element;
}

function eleButton() {
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    return btn;
}

document.body.appendChild(eleHeader());
document.body.appendChild(component());
document.body.appendChild(eleImage());
document.body.appendChild(eleButton());
