let timeleft = 1800;
const timer = () => {
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById('time').innerText = `${minutes}:${seconds}`;
    timeleft--;
    timeleft < 0 ? clearInterval(intervalId) : timeleft;
}   
timer();
let intervalId = setInterval(timer, 1000);


  const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (e) => {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

const formBtn = document.getElementById('form-btn');
formBtn.addEventListener('click', (e) => {
    e.preventDefault();
})
const handleChange = (e) => {
    const value = e.value;
    e.value = value.replace(/\D/g, '');
}
let phoneInput = document.querySelector('.phone-input');
let phone = document.getElementById('phone');
phone.addEventListener('focus', ()=>{
    phoneInput.style.visibility = 'visible'
})
phone.addEventListener('blur', ()=>{
    phoneInput.style.visibility = 'hidden'
})

let firstnameInput = document.querySelector('.firstname-input');
let firstname = document.getElementById('firstname');
firstname.addEventListener('focus', ()=>{
    firstnameInput.style.visibility = 'visible'
})
firstname.addEventListener('blur', ()=>{
    firstnameInput.style.visibility = 'hidden'
})
let lastnameInput = document.querySelector('.lastname-input');
let lastname = document.getElementById('lastname');
lastname.addEventListener('focus', ()=>{
    lastnameInput.style.visibility = 'visible'
})
lastname.addEventListener('blur', ()=>{
    lastnameInput.style.visibility = 'hidden'
})