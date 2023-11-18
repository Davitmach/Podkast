const social = document.querySelector('.social-box')
const spotfy = document.querySelector('#spotify')
window.addEventListener('scroll',()=> {
    if(window.pageYOffset >500) {
        social.style.cssText = 'width:35px;overflow:hidden;transition:.4s;'
        spotfy.style.cssText = 'transform:rotate(30deg);transition:.4s;'
    }
    else {
        social.style.cssText = 'width:255px;overflow:hidden;transition:.4s;'
        spotfy.style.cssText = 'transform:rotate(0deg);transition:.4s;'
    }
})
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const episodes = document.querySelector('#episodes')
home.style.color = '#118da8'
window.addEventListener('scroll' ,()=>{
    if(window.pageYOffset >= 0 && window.pageYOffset < 900) {
        home.style.color = '#118da8'
        episodes.style.color = '#fff'
        about.style.color = '#fff'
        contact.style.color = '#fff'
    }
    else if(window.pageYOffset > 900 && window.pageYOffset < 2500) {
        home.style.color = '#fff'
        episodes.style.color = '#118da8'
        about.style.color = '#fff'
        contact.style.color = '#fff'
    }
    else if(window.pageYOffset > 2500 && window.pageYOffset < 3300) {
        episodes.style.color = '#fff'
        about.style.color = '#118da8'
        contact.style.color = '#fff'
    }
    else if(window.pageYOffset > 3300) {
        contact.style.color = '#118da8'
        home.style.color = '#fff '
        episodes.style.color = '#fff '
        about.style.color = '#fff'
    }
    else {
        home.style.color = '#118da8'

    }
})



const scrollButton = document.querySelector(".scroll-box");
const targetElement = document.body; // Можно изменить на другой элемент, например, document.getElementById('someElement')

scrollButton.addEventListener("click", () => {
  // Получаем текущую позицию прокрутки
  const start = window.scrollY;
  // Получаем позицию элемента, к которому хотим прокрутить
  const end = targetElement.getBoundingClientRect().top + window.scrollY;

  // Задаем длительность анимации (в миллисекундах)
  const duration = 1000;

  // Запускаем анимацию
  animateScroll(start, end, duration);
});

function animateScroll(start, end, duration) {
  const startTime = performance.now();

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime < duration) {
      const position = easeInOutQuad(elapsedTime, start, end - start, duration);
      window.scrollTo(0, position);
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, end);
    }
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  window.requestAnimationFrame(step);
}
