const timer = () => {
    let timeOnPage = 0;

    function addAndShow() {
        document.body.textContent = `Czas na stronie to ${timeOnPage++} sekund`;
    }

    return addAndShow
}

const start = timer();
setInterval(start, 1000)