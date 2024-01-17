<template>
  <header class="building__header">
    <div class="building__header-content">
      <img
        src="../assets/images/Vector 17.png"
        alt=""
        class="vector"
        ref="vector"
      />
      <h1 class="building__header-title base__title" ref="headerTitle">
        Строительство
      </h1>
    </div>
  </header>
  <section class="building">
    <div class="container building__content">
      <img
        src="../assets/images/bulding__img.png"
        alt=""
        class="building__rectangle"
        ref="img"
      />
      <div class="building__text">
        <p class="building__descr" ref="buildingDescr">
          Дома, в которых удобно
        </p>
        <p class="building__subdescr" ref="buildingSubdescr">
          философия, воплощенная в каждом проекте
        </p>
        <a href="#" class="building__plus">
          <img src="../assets/images/building__plus.png" alt="" ref="plus" />
        </a>
        <h2 class="building__title" ref="buildingTitle">Строительство</h2>
      </div>
      <div class="building__img">
        <img
          src="../assets/images/building__oval.png"
          alt=""
          class="building__oval"
          ref="ovalImg"
        />
        <img
          src="../assets/images/brown__brick.png"
          alt=""
          class="brown__brick"
        />
        <img
          src="../assets/images/grey__brick.png"
          alt=""
          class="grey__brick"
        />
      </div>
    </div>
  </section>
  <section class="project3">
    <div class="container project3__content">
      <img src="../assets/images/pic.png" alt="" />
      <a href="#" class="project3__title"> Все проекты </a>
    </div>
  </section>
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

const vector = ref();
const headerTitle = ref();
const buildingDescr = ref();
const buildingSubdescr = ref();
const buildingTitle = ref();
const plus = ref();
const img = ref();
const ovalImg = ref();
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
useMotion(img, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(ovalImg, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});

useMotion(buildingTitle, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(buildingDescr, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(buildingSubdescr, {
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

useMotion(headerTitle, {
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
@media (max-width: 1590.99px) {
  .building__header-title {
    font-size: 160px;
    letter-spacing: 0;
  }

  .building__header .vector {
    bottom: 250px;
    width: 90%;
  }

  .brown__brick {
    transform: translateX(50%);
    display: none;
  }

  .grey__brick {
    transform: translateX(50%);
    display: none;
  }

  .building__oval {
    display: none;
  }

  .building__content {
    justify-content: center;
  }

  .building__title {
    bottom: 0;
  }

  .building {
    height: 1100px;
  }
}

@media (max-width: 1300.99px) {
  .building__title {
    bottom: 0;
    font-size: 120px;
    letter-spacing: 0;
  }

  .building__header-title {
    font-size: 120px;
    letter-spacing: 0;
  }

  .building__content {
    flex-direction: column;
    align-items: center;
  }

  .building__text {
    align-items: center;
  }

  .building {
    height: 1700px;
  }

  .building__descr {
    text-align: center;
  }

  .building__subdescr {
    text-align: center;
  }
}

@media (max-width: 1000.99px) {
  .project3 img {
    width: 150%;
  }

  .building__header-title {
    font-size: 100px;
    letter-spacing: 0;
  }

  .building__title {
    bottom: 0;
    font-size: 100px;
    letter-spacing: 0;
  }
}

@media (max-width: 800.99px) {
  .building__title {
    display: none;
  }

  .building__header-title {
    font-size: 70px;
  }

  .building__header .vector {
    bottom: 220px;
  }
}

@media (max-width: 550.99px) {
  .building__rectangle {
    width: 100%;
  }

  .project3 {
    padding: 150px 20px;
  }

  .project3 img {
    width: 300px;
  }

  .building__header-title {
    font-size: 55px;
  }
}

@media (max-width: 430.99px) {
  .building__header-title {
    font-size: 45px;
  }

  .building__header .vector {
    bottom: 180px;
  }

  .building__subdescr {
    width: 100%;
  }

  .building__descr {
    width: 100%;
    font-size: 45px;
  }
}

@media (max-width: 350.99px) {
  .building__header-title {
    font-size: 38px;
  }
}
</style>