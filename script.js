const ratingNumbers = document.querySelectorAll('.rate'),
submitBtn = document.querySelector('.btn'),
beforeSubmitContainer = document.querySelector('.before-submit');

let ratingVal = 5;

ratingNumbers.forEach(rate => {
    rate.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');

        document.querySelector(`[data-rateval = '${rate.dataset.rateval}']`).classList.add('active');

        ratingVal = document.querySelector('.active').dataset.rateval;
    });
});

submitBtn.addEventListener('click', () => {
    beforeSubmitContainer.remove();

    const afterSubmitHTML = `
    <div class="after-submit">
        <img src="images/illustration-thank-you.svg" alt="thank-you img">
        <div class="rating-status">
        <p>You selected ${ratingVal} out of 5</p>
        </div>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>`
    document.querySelector('.container').innerHTML = afterSubmitHTML;
});