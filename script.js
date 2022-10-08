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
