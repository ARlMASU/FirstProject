const header = document.querySelector('header');

const bothButtonAds = document.querySelectorAll('button');

// const buttonAds = document.querySelector('button');

bothButtonAds.forEach(button => button.addEventListener('click', () => {
    header.style.height = '0%';
//    bothButtonAds.forEach(button => button.style.display = 'none');
}));

