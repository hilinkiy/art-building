<template>
  <main class="main">
    <section class="induvidual">
      <div class="container induvidual__content">
        <p class="induvidual__content-title" ref="target">
          Индивидуальное проектирование: где креативность встречает
          уникальность, а архитектура становится персональным воплощением идеи
        </p>
      </div>
    </section>
    <section class="architecture">
      <div class="container architecture__content">
        <img
          src="../assets/images/Vector 17.png"
          alt=""
          class="vector"
          ref="vector"
        />
        <h1 class="architecture__title" ref="architectTitle">архитектура</h1>
      </div>
    </section>
    <section class="architect">
      <div class="container architect__content">
        <div class="architect__img">
          <img
            src="../assets/images/black vector.png"
            alt=""
            class="black__vector"
          />
          <img
            src="../assets/images/Mask group.png"
            alt=""
            class="architect__oval"
            ref="ovalImg"
          />
          <img
            src="../assets/images/Rectangle 762.png"
            alt=""
            class="architect__rectangle"
            ref="img"
          />
          <p class="architect__descr" ref="architectDescr">
            Дизайн, который говорит с вами
          </p>
        </div>
        <div class="architect__text">
          <h3 class="architect__title" ref="architectureTitle">Архитектура</h3>
          <p class="architect__description" ref="architectSubDescr">
            познакомьтесь с удивительными деталями и конструкциями
          </p>
        </div>
        <img src="../assets/images/deco-2-lg 1.png" alt="" class="deco1" />
        <img src="../assets/images/deco-2-lg 3.png" alt="" class="deco2" />
        <button>
          <img
            src="../assets/images/Group 45.png"
            alt=""
            class="plus__btn"
            ref="plus"
          />
        </button>
      </div>
    </section>
    <section class="project">
      <div class="container project__content">
        <img src="../assets/images/pic.png" alt="" />
        <a href="#!" class="project__title"> Все проекты </a>
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

const target = ref();
const vector = ref();
const architectTitle = ref();
const architectureTitle = ref();
const architectDescr = ref();
const architectSubDescr = ref();
const img = ref();
const ovalImg = ref();
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

useMotion(target, {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
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

useMotion(architectTitle, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});

useMotion(architectDescr, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});

useMotion(architectureTitle, {
  initial: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
});

useMotion(architectSubDescr, {
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


<style lang="scss">
@media (max-width: 1500.99px) {
  .architecture__title {
    font-size: 180px;
    letter-spacing: 0;
  }
}

@media (max-width: 1420.99px) {
  .deco1 {
    display: none;
  }

  .deco2 {
    display: none;
  }

  .architect__rectangle {
    display: none;
  }

  .architect__text {
    transform: translateY(0);
    flex-direction: column;
    align-items: center;
  }

  .architect__img {
    flex-direction: row-reverse;
    margin-bottom: 100px;
  }

  .architect button {
    right: 100%;
    transform: translateX(100%);
  }
}

@media (max-width: 1130.99px) {
  .architecture__title {
    font-size: 130px;
  }

  .architecture .vector {
    bottom: 240px;
  }

  .architect__title {
    font-size: 130px;
  }
}

@media (max-width: 1000.99px) {
  .project img {
    width: 150%;
  }
}

@media (max-width: 850.99px) {
  .architect__img {
    flex-direction: column-reverse;
    align-items: center;
  }

  .architect__descr {
    text-align: center;
  }

  .architect__title {
    display: none;
  }

  .architect {
    padding: 100px 20px 250px 20px;
  }

  .architect button {
    right: 50%;
    transform: translateX(50%);
    bottom: -200px;
  }

  .architect__description {
    text-align: center;
  }

  .architect__img {
    margin-bottom: 30px;
  }

  .architecture__title {
    font-size: 100px;
  }
}

@media (max-width: 630.99px) {
  .architecture__title {
    font-size: 70px;
  }

  .architecture .vector {
    bottom: 180px;
  }

  .architect__oval {
    width: 100%;
  }

  .induvidual__content-title {
    font-size: 45px;
    width: 100%;
    text-align: center;
  }

  .architect__descr {
    width: 100%;
  }

  .architect__description {
    width: 100%;
  }

  .project img {
    width: 300px;
  }
}

@media (max-width: 450.99px) {
  .architecture__title {
    font-size: 50px;
  }

  .project {
    padding: 150px 20px;
  }

  .induvidual__content-title {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 320.99px) {
  .architecture__title {
    font-size: 47px;
  }
}
</style>