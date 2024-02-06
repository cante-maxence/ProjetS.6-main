
<template>
    <body>
    <div class="">
      <div class="menu__wrapper mb-16">
        <div class="menu__bar">
          <div class="nav-but-wrap">
            <div class="logo-wrap">

            <a class="text-black m-5 font-bold text-2xl title " href="/">Stupid Love</a>
            </div>
          </div>
          <img class="menu-icon" src="../public/burger-menu.svg" title='Burger Menu' alt='Burger Menu'
            @click="toggleMenu">
          <ul class="navigation">
            <li>
              <router-link to="/Podcasts" @click="toggleMenu" title="Podcasts">
                Podcasts
              </router-link>
            </li>

            <li>
              <router-link to="/Articles" @click="toggleMenu" title="Articles">
                Articles
              </router-link>
            </li>
            <li>
              <router-link to="/Contact" @click="toggleMenu" title="Contact">
                Contactez-moi
              </router-link>
            </li>
            <li>
              <router-link to="/Test" @click="toggleMenu" title="Test d'amour">
                Test d'Amour
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <RouterView />
    </div>
  
  </body>


<!-- 
  <footer class="p-4 bg-black md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center mb-10 text-2xl font-semibold text-white ">

        Maxence Cante
      </a>

      <ul class="flex flex-wrap justify-center items-center mb-6 text-white ">
        <li>
          <router-link class="mr-4 hover:underline md:mr-6" to="/Podcasts" title="Podcasts">
            Podcasts
          </router-link>
        </li>


      </ul>
  
      <ul class="social-media-buttons">
        <li>
          <a href="#instagram" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </li>
        <li>
          <a href="#twitter" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 
                                    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5
                                    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
              </path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#Behance" title="Behance">

            <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485 485" xml:space="preserve">
              <g>
                <path
                  d="M204.235,334.302c8.256-2.17,15.627-5.503,22.044-10.048c6.366-4.505,11.532-10.343,15.326-17.546
		c3.758-7.113,5.64-15.574,5.64-25.399c0-12.122-2.881-22.46-8.766-31.101c-5.856-8.583-14.686-14.618-26.613-18.045
		c8.759-4.142,15.312-9.477,19.773-15.98c4.426-6.513,6.639-14.661,6.639-24.414c0-9.017-1.48-16.644-4.434-22.734
		c-3.025-6.182-7.249-11.09-12.645-14.78c-5.482-3.689-11.971-6.38-19.572-7.993c-7.645-1.656-16.008-2.458-25.277-2.458H85v193.759
		h93.915C187.595,337.564,196.074,336.472,204.235,334.302z M127.665,176.809h39.913c3.772,0,7.458,0.269,10.972,0.956
		c3.578,0.614,6.661,1.753,9.391,3.402c2.752,1.584,4.929,3.847,6.574,6.739c1.589,2.892,2.379,6.618,2.379,11.126
		c0,8.119-2.379,14.04-7.286,17.621c-4.957,3.639-11.216,5.432-18.774,5.432h-43.168V176.809z M127.665,304.563v-53.356h46.379
		c9.183,0,16.648,2.112,22.245,6.358c5.59,4.308,8.399,11.396,8.399,21.383c0,5.094-0.826,9.312-2.55,12.559
		c-1.717,3.276-4.081,5.852-6.934,7.731c-2.853,1.954-6.237,3.276-10.052,4.11c-3.758,0.841-7.753,1.214-11.963,1.214H127.665z" />
                <path d="M279.111,320.797c6.272,6.517,13.73,11.518,22.654,15.085c8.931,3.524,18.875,5.313,29.926,5.313
		c15.857,0,29.466-3.632,40.624-10.921c11.287-7.257,19.564-19.313,25.018-36.202h-33.935c-1.315,4.343-4.713,8.525-10.296,12.437
		c-5.633,3.916-12.351,5.881-20.125,5.881c-10.807,0-19.148-2.834-24.917-8.471c-5.792-5.636-9.542-16.137-9.542-27.227h101.237
		c0.726-10.885-0.157-21.282-2.68-31.234c-2.544-9.969-6.611-18.857-12.33-26.628c-5.719-7.785-12.998-14.004-21.878-18.592
		c-8.91-4.652-19.307-6.937-31.176-6.937c-10.749,0-20.456,1.911-29.258,5.709c-8.802,3.811-16.36,9.031-22.733,15.645
		c-6.359,6.578-11.194,14.421-14.694,23.509c-3.427,9.057-5.18,18.857-5.18,29.348c0,10.849,1.689,20.861,5.037,29.905
		C268.247,306.51,272.996,314.249,279.111,320.797z M300.278,243.159c0.984-3.502,2.68-6.778,5.166-9.883
		c2.5-3.054,5.77-5.648,9.757-7.731c4.081-2.112,9.175-3.147,15.332-3.147c9.463,0,17.223,2.741,21.8,7.81
		c4.598,5.108,7.961,12.372,8.881,22.198h-62.697C298.697,249.669,299.287,246.572,300.278,243.159z" />
                <rect x="290.636" y="156.802" width="78.54" height="19.12" />
                <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="#linkedin" title="Linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 
                                      2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />#
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </li>
      </ul>

    </div>
  </footer> -->

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

@keyframes lights {
  0% {
    color: hsl(0, 0%, 100%);
    text-shadow:
      0 0 1em hsla(0, 100%, 50%, 0.2),
      0 0 0.125em hsla(0, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(0, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(0, 100%, 60%, 0);
  }
  
  30% { 
    color: hsl(0, 0%, 100%);
    text-shadow:
      0 0 1em hsla(0, 100%, 50%, 0.5),
      0 0 0.125em hsla(0, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(0, 100%, 60%, 0.4);
  }
  
  40% { 
    color: hsl(0, 0%, 100%);
    text-shadow:
      0 0 1em hsla(0, 100%, 50%, 0.5),
      0 0 0.125em hsla(0, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(0, 100%, 60%, 0.4);
  }
  
  70% {
    color: hsl(0, 0%, 100%);
    text-shadow:
      0 0 1em hsla(0, 100%, 50%, 0.5),
      0 0 0.125em hsla(0, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(0, 100%, 60%, 0.4);
  }
  
  100% {
    color: hsl(0, 0%, 100%);
    text-shadow:
      0 0 1em hsla(0, 100%, 50%, 0.2),
      0 0 0.125em hsla(0, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
}

body {
  margin: 0;
  font: 100% / 1.5 Raleway, sans-serif;
  color: hsl(0, 0%, 0%);

  height: 100vh;
  display: flex;
}





.title{
  font-family: 'Courgette', cursive;
  margin: auto;
  font-size: 3.5rem;
  font-weight: 300;
  animation: lights 5s 750ms linear infinite;
};

a{
  animation: lights 5s 750ms linear infinite;
}

.logo-wrap {

  display: block;
  left: 0;
  right: 0;
  /* Ajoutez cette ligne pour centrer horizontalement */
  top: 0;
  bottom: 0;
  /* Ajoutez cette ligne pour centrer verticalement */
  margin: auto;
  /* Ajoutez cette ligne pour centrer horizontalement et verticalement */
  cursor: pointer;
}

.logo-wrap a {
  cursor: pointer;

  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #000;
  transition: all 0.3s ease-out;
}

.logo-wrap a span {
  color: #000000;
}

.logo-wrap a:hover {
  opacity: 0.9;
}

:root {
  --primary: #240000;
  --primary-hover: #f00000;
  --navbar-height: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins;
}

.background {
  display: block;
  width: 100%;
  height: 100vh;

  opacity: 1;
  z-index: 1;
}

.menu__wrapper {
  display: flex;
  position: relative;
  flex-direction: row;
  z-index: 2;
}

.menu__bar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 24px;
  gap: 32px;
  height: 60px;
  opacity: 0.9;
  background: linear-gradient(175deg, rgb(0, 0, 0) 100%, rgb(255, 255, 255) 0%);
}

.menu-icon {
  cursor: pointer;
  display: flex;
  height: 32px;
  width: 32px;
}

.navigation {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  gap: 24px;
  padding: 0px;
  background-color: var(--background);
}

.logo {
  margin-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50px;
  height: 80px;
  cursor: pointer;
}

.navigation>li {
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.25rem;
}

.navigation>li>a {
  color: rgb(0, 0, 0);
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  background-image: linear-gradient(to right,
      var(--primary-hover),
      var(--primary-hover) 50%,
      white 50%);
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 3px 0;
  position: relative;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-in-out;
}

.navigation>li>a:before {
  content: '';
  background: var(--primary-hover);
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  transition: all 0.2s ease-in-out;
}

.navigation>li>a:hover {
  background-position: 0;
}


.navigation>li>a:hover::before {
  width: 100%;
}

@media (min-width: 600px) {
  .menu-icon {
    display: none;
  }
}

@media (max-width: 600px) {

  .navigation {
    display: none;
  }

  .menu-icon {
    display: block;
  }

  .navigation--mobile {
    top: var(--navbar-height);
    position: absolute;
    right: 0px;
    display: flex;
    padding: 80px 60px;
    min-height: 100%;
    background-color: black;
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0.95;
    animation: fadein 0.3s forwards;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      width: 0;
      height: 0;
    }

    100% {
      opacity: 1;
      width: 100%;
      height: calc(100vh - var(--navbar-height));
    }
  }

  .navigation--mobile--fadeout {
    animation: fadeout 300ms forwards;
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
      width: 100%;
      height: calc(100vh - var(--navbar-height));
    }

    100% {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

}

.footer {
  padding: 100px 0px 0px;
  background-color: #030a16;
  bottom: 0px;
}





.footer h5 {
  font-weight: 500;
  margin-bottom: 28px;
  text-transform: capitalize;
  font-weight: 600;
  color: #fff;
  font-size: 21px
}



body {

  display: block;
  width: 100%;
  height: 100vh;
  opacity: 1;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
}

/* test icon */
.social-media-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
}

.social-media-buttons li {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  background-color: white;
  place-items: center;
  transition: all 0.3s;
  border: 1px solid red;
}

.social-media-buttons li a {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  color: var(red);
}

.social-media-buttons li:hover {
  background-color: var(red);
  border: 1px solid var(white);
  border-radius: 8px;
}

.social-media-buttons li a svg {
  height: 24px;
  width: 24px;
  stroke: var(red);
  stroke-width: 1.75;
  transition: 0.8s;
}

.social-media-buttons li:hover svg {
  stroke: var(white);
  transform: rotateY(360deg);
  stroke-width: 1.75;
}



</style>

<script setup>

const toggleMenu = () => {
  const navigation = document.querySelector('.navigation');
  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute('src');
  const isBurger = src === 'burger-menu.svg';

  if (isBurger) {
    // Si le menu est actuellement fermé (icône hamburger affichée)
    navigation.classList.add("navigation--mobile");
    burgerMenu.setAttribute('src', 'close.svg');
  } else {
    // Si le menu est actuellement ouvert (icône de fermeture affichée)
    navigation.classList.remove("navigation--mobile");
    burgerMenu.setAttribute('src', 'burger-menu.svg');
  }
};

/*cursor*/


let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
})


</script>