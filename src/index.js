import _ from "lodash";
import './common_1.css';
import './common_2.css';
import myImg from './IMG_1497.JPG';

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

    return myImage;
}

document.body.appendChild(component());
document.body.appendChild(eleImage());
