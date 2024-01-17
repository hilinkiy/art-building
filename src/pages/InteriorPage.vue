<template>
  <header class="interior__header">
    <div class="interior__header-content">
      <img
        src="../assets/images/Vector 17.png"
        alt=""
        class="vector"
        ref="vector"
      />
      <h1 class="interior__header-title base__title" ref="headerTitle">
        Интерьер
      </h1>
    </div>
  </header>
  <section class="interior">
    <div class="container interior__content">
      <div class="interior__text">
        <p class="interior__descr" ref="interiorDescr">Интерьер определяет сознание</p>
        <p class="interior__subdescr" ref="interiorSubdescr">
          Когда не нужно выбирать между красотой и комфортом
        </p>
        <a href="#!">
          <img src="../assets/images/interior plus.png" alt="" ref="plus" />
        </a>
        <h2 class="interior__title" ref="interiorTitle">Интерьер</h2>
      </div>
      <img
        src="../assets/images/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash 1.png"
        alt=""
        class="lamps"
        ref="lamps"
      />
      <img
        src="../assets/images/ART-10_Photo - 2 1.png"
        alt=""
        class="interior__room"
      />
    </div>
  </section>
  <section class="project2">
    <div class="container project2__content">
      <img src="../assets/images/pic.png" alt="" />
      <a href="#!" class="project2__title"> Все проекты </a>
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

const lamps = ref();
const vector = ref();
const headerTitle = ref();
const interiorDescr = ref();
const interiorSubdescr = ref();
const interiorTitle = ref();
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

useMotion(interiorTitle, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(interiorDescr, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});
useMotion(interiorSubdescr, {
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

useMotion(lamps, {
  initial: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});
</script>

<style>
@media (max-width: 1545.99px) {
  .interior__content {
    flex-direction: column-reverse;
    align-items: center;
  }

  .lamps {
    left: 50%;
  }
}

@media (max-width: 1435.99px) {
  .interior__content {
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
  }

  

  .lamps {
    transform: translateX(-50%);
  }

  .interior__text {
    align-items: center;
  }

  .interior__descr {
    text-align: center;
  }

  .interior__subdescr {
    text-align: center;
  }

  .interior__header-title {
    font-size: 200px;
    letter-spacing: 0;
  }
}

@media (max-width: 1000.99px) {
  .project2 img {
    width: 150%;
  }

  .interior__header-title {
    font-size: 150px;
  }

  .lamps {
    width: 50%;
  }

  .interior__room {
    width: 100%;
    margin-bottom: 30px;
  }
}

@media (max-width: 800.99px) {
  .interior__title {
    display: none;
  }

  .interior {
    height: 1480px;
  }

  .lamps {
    display: none;
  }
}

@media (max-width: 700.99px) {
  .interior__header-title {
    font-size: 120px;
  }

  .vector {
    bottom: 220px;
  }
}

@media (max-width: 600.99px) {
  .interior__header-title {
    font-size: 80px;
  }

  .interior__descr {
    width: 100%;
  }

  .interior__subdescr {
    width: 100%;
  }
  
  .project2 img {
    width: 300px;
  }
}

@media (max-width: 450.99px) {
  .project2 {
    padding: 150px 20px;
  }

  .project2 img {
    width: 300px;
  }

  .interior__header-title {
    font-size: 60px;
  }

  .vector {
    bottom: 200px;
  }

  .interior__descr {
    font-size: 50px;
  }
}
</style>