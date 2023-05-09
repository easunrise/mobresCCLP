'use strict';

//DOM OBJECTS
function cardButtonCreator(countryId) {
  const cardButtonList = document.querySelectorAll(
    `.country-card__list--button--${countryId}`
  );

  //EVENT LISTENER
  let i = 0;
  let cardArr = [];

  cardButtonList.forEach(btn => {
    const cardWrap = btn.parentElement.parentElement.parentElement;

    cardArr.push(cardWrap);

    btn.addEventListener('click', function (e) {
      i === 2 ? (i = 0) : i++;

      if (i == 0) {
        cardArr.forEach(card =>
          card.classList.remove('top-dissapear-animation')
        );
      }

      i === 0
        ? cardArr[2].classList.add('top-dissapear-animation')
        : cardArr[i - 1].classList.add('top-dissapear-animation');

      setTimeout(() => {
        if (i === 0) {
          cardArr.forEach(card => card.classList.remove('dissapear-card'));
        }

        if (i === 0) {
          cardArr.forEach(card =>
            card.classList.remove('top-dissapear-animation')
          );
        }

        cardArr.forEach(card => {
          cardArr[i - 1].classList.add('dissapear-card');
        });
      }, 300);
    });
  });
}

cardButtonCreator('guat');
cardButtonCreator('ethp');
cardButtonCreator('oasis');
cardButtonCreator('ltn');
cardButtonCreator('ymn');

//DOM OBJECTS
const navLinks = document.querySelectorAll('.navigation__link');
const navBtn = document.getElementById('navi-toggle');
console.log(navLinks);

navLinks.forEach(nav => {
  nav.addEventListener('click', function () {
    navBtn.checked = !navBtn.checked;
  });
});
