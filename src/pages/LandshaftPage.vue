<template>
  <header class="landshaft__header">
    <div class="landshaft__header-content">
      <img
        src="../assets/images/Vector 17.png"
        alt=""
        class="vector"
        ref="vector"
      />
      <h1 class="landshaft__header-title" ref="landshaftTitle">Ландшафт</h1>
    </div>
  </header>
  <main class="main">
    <section class="nature">
      <div class="container nature__content">
        <img src="../assets/images/leaf.png" alt="" class="leaf" />
        <div class="nature__img">
          <h3 class="nature__descr" ref="natureDescr">
            Гармония природы и искусства
            <span>
              ландшафтный дизайн - где искусство встречает природу, а красота
              становится частью окружающего мира
            </span>
          </h3>
          <a href="#!" ref="plus">
            <img
              src="../assets/images/brown plus.png"
              alt=""
              class="landshaft__plus"
            />
          </a>
          <h4 class="nature__title" ref="natureTitle">Ландшафт</h4>
        </div>
        <div class="nature__img">
          <img
            src="../assets/images/oval nature.png"
            alt=""
            class="nature__oval"
          />
          <img
            src="../assets/images/black vector.png"
            alt=""
            class="black__vector"
          />
          <p class="nature__subdescr" ref="natureSubdescr">
            ландшафтный дизайн - где искусство встречает природу, а красота
            становится частью окружающего мира
          </p>
        </div>
        <img
          src="../assets/images/rotate leaf.png"
          alt=""
          class="rotate__leaf"
        />
      </div>
    </section>
    <section class="project1">
      <div class="container project1__content">
        <img src="../assets/images/pic.png" alt="" />
        <a href="#!" class="project1__title"> Все проекты </a>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container footer__content">
      <h3 class="footer__title" ref="footerTitle">
        Расскажите о доме своей мечты, и мы составим для вас эксклюзивное
        коммерческое предложение.
      </h3>
      <form action="" ref="footerForm">
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="Номер телефона" />
        <input type="text" placeholder="Получить консультацию" />
      </form>
      <p class="footer__descr">Art Building studiio</p>
      <div class="footer__lists" ref="footerLink">
        <ul class="footer__list">
          <li class="footer__list-title">Офис</li>
          <li class="footer__list-text">г. Москва, Береговой проезд, 5А, к1</li>
          <li class="footer__list-text">mail@mail.com</li>
        </ul>
        <ul class="footer__list">
          <li class="footer__list-title">Телефон</li>
          <li class="footer__list-text">+7 (495) 189-68-13</li>
        </ul>
        <ul class="footer__list">
          <li class="footer__list-title">Мессенджеры</li>
          <li>
            <a href="#!" class="footer__list-text"> WhatsApp </a>
          </li>
          <li>
            <a href="#!" class="footer__list-text"> Telegram </a>
          </li>
        </ul>
        <ul class="footer__list">
          <li class="footer__list-title">Соц. сети</li>
          <ul class="icon">
            <li>
              <a href="#!" class="footer__list-text">
                <img src="../assets/images/vk.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#!" class="footer__list-text">
                <img src="../assets/images/youtube.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#!" class="footer__list-text">
                <img src="../assets/images/ok.svg" alt="" />
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div class="footer__end" ref="footerLicen">
        <p class="footer__end-descr">Политика конфиденциальности</p>
        <p class="footer__end-descr">© Art Building Studio 2023</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const natureTitle = ref();
const vector = ref();
const landshaftTitle = ref();
const natureDescr = ref();
const natureSubdescr = ref();
const plus = ref();
const footerTitle = ref();
const footerForm = ref();
const footerLink = ref();
const footerLicen = ref();
useMotion(footerTitle, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(footerForm, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(footerLink, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(footerLicen, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});

useMotion(vector, {
  initial: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});

useMotion(natureTitle, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});

useMotion(plus, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});

useMotion(landshaftTitle, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(natureDescr, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(natureSubdescr, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
</script>

<style>
@media (max-width: 1418px) {
  .nature__content {
    flex-wrap: wrap;
    gap: 200px;
  }

  .rotate__leaf {
    right: 55%;
  }

  .leaf {
    left: 3%;
    top: 44%;
  }
}

@media (max-width: 1400.99px) {
  .landshaft__header-title {
    font-size: 200px;
    letter-spacing: 0;
  }
}

@media (max-width: 1200.99px) {
  .nature {
    height: 1700px;
  }
}

@media (max-width: 1075.99px) {
  .landshaft__header-title {
    font-size: 150px;
  }

  .nature__title {
    font-size: 150px;
  }

  .project1 img {
    width: 150%;
  }

  .rotate__leaf {
    right: 40%;
  }
}

@media (max-width: 880.99px) {
  .landshaft__header-title {
    font-size: 120px;
  }

  .nature__title {
    font-size: 120px;
  }
}

@media (max-width: 840.99px) {
  .leaf {
    display: none;
  }

  .rotate__leaf {
    display: none;
  }
  .nature__title {
    display: none;
  }
}

@media (max-width: 720.99px) {
  .nature__content {
    flex-direction: column;
    gap: 30px;
  }

  .nature__descr span {
    display: none;
  }

  .nature__subdescr {
    display: block;
  }

  .black__vector {
    display: block;
  }

  .nature__img {
    gap: 30px;
  }

  .nature__descr {
    width: 95%;
  }
}

@media (max-width: 660.99px) {
  .landshaft__header-title {
    font-size: 90px;
  }

  .landshaft__header .vector {
    bottom: 200px;
  }

  .nature__subdescr {
    width: 80%;
  }
  
  .project1 img {
    width: 300px;
  }
}

@media (max-width: 550.99px) {
  .nature__oval {
    width: 100%;
  }

  .landshaft__header-title {
    font-size: 65px;
  }

  .project1 img {
    width: 300px;
  }

  .project1 {
    padding: 150px 20px;
  }
}

@media (max-width: 400.99px) {
  .nature__descr {
    font-size: 40px;
  }

  .landshaft__header-title {
    font-size: 55px;
  }
}
</style>