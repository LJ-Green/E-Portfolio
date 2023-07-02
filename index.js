let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

document.addEventListener('DOMContentLoaded', function () {
  function redirectToProject(url) {
    return function (event) {
      event.preventDefault();
      window.location.href = url;
    };
  }
  var project1Button = document.getElementById('project1-button');
  project1Button.addEventListener('click', redirectToProject('https://sweat-final-project.vercel.app/'));

  var project2Button = document.getElementById('project2-button');
  project2Button.addEventListener('click', redirectToProject('https://ultraverse-nft-market.vercel.app/'));

  var project3Button = document.getElementById('project3-button');
  project3Button.addEventListener('click', redirectToProject('https://barber-template-blond.vercel.app/'));

  var project4Button = document.getElementById('project4-button');
  project4Button.addEventListener('click', redirectToProject('https://twitter-clone-eta-olive.vercel.app/'));

  var project5Button = document.getElementById('project5-button');
  project5Button.addEventListener('click', redirectToProject('https://gerich-resturant-phi.vercel.app/'));

  var project6Button = document.getElementById('project6-button');
  project6Button.addEventListener('click', redirectToProject('https://book-library-roan.vercel.app/'));

  var project7Button = document.getElementById('project7-button');
  project7Button.addEventListener('click', redirectToProject('https://book-library-roan.vercel.app/'));

});

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor
  const y = event.clientY * scaleFactor

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible"

  emailjs
    .sendForm(
      'service_ec9idcn',
      'template_if27uvt',
      event.target,
      'ZyqqbD3tFD30zkvIO',
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible"
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly here:"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function showImage(event) {
  const image = event.target;
  image.classList.add('loaded');
  const loadingAnimation = image.parentElement.querySelector('.loading-animation');
  loadingAnimation.style.display = 'none';
}