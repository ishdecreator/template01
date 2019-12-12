const buttonAb = document.querySelector('#showabout');
const buttonServ = document.querySelector('#showservices');
const buttonCtn = document.querySelector('#showcontactus');
const buttonhead = document.querySelector('#logo');
const showabt = document.querySelector('#seeaboutus');
const showservs = document.querySelector('#seeservices');
const showcont = document.querySelector('#seectn');
const header = document.querySelector('#home');
const allB = document.querySelector("body");

const showAboutus = () => {
    buttonAb.style.backgroundColor= 'mediumturquoise';
    showabt.style.display = 'flex';
    showservs.style.display= 'none';
    showcont.style.display= 'none';
    header.style.display = 'none';
    allB.style.backgroundColor = 'mediumturquoise';
}
const showServices = () => {
    buttonServ.style.backgroundColor= 'moccasin';
    showservs.style.display = 'flex';
    showabt.style.display= 'none';
    showcont.style.display= 'none';
    header.style.display = 'none';
    allB.style.backgroundColor = 'moccasin';
}
const showContact = () => {
    buttonCtn.style.backgroundColor = 'darkorange';
    showcont.style.display = 'grid';
    showabt.style.display= 'none';
    header.style.display = 'none';
    showservs.style.display= 'none';
    allB.style.backgroundColor = 'darkorange';
}
const showHome = () => {
    showabt.style.display = 'none';
    showcont.style.display = 'none';
    showservs.style.display = 'none';
    header.style.display = 'block';
    allB.style.backgroundColor= 'whitesmoke';
}
buttonAb.onmousedown = showAboutus;
buttonServ.onmousedown = showServices;
buttonCtn.onmousedown = showContact;
buttonhead.onmousedown = showHome;