<template>
  <header class="header">
    <nav class="nav">
      <div class="container nav__content">
        <a href="#" class="nav__btn"> Заказать звонок </a>
        <h2 class="nav__title">AB STUDIO</h2>
        <img
          src="../assets/images/menu.png"
          alt=""
          class="menu"
          @click="showDropdown = !showDropdown"
        />
      </div>
    </nav>
    <div class="header__content">
      <img
        src="../assets/images/Rectangle 447.png"
        alt=""
        class="background__img"
      />
      <div class="header__text">
        <h1 class="header__title" ref="targetEl">Art building STUDIO</h1>
        <p class="header__descr">Строим мечты, создаем пространство</p>
      </div>
    </div>
    <div class="dropdown" v-show="!showDropdown">
      <div class="dropdown__content">
        <div class="dropdown__lists">
          <ul class="dropdown__list">
            <li v-for="(link, i) in links" :key="i">
              <router-link
                class="dropdown__list-link"
                :to="link.url"
                @click="showDropdown = true"
              >
                {{ link.title }}
              </router-link>
            </li>
          </ul>
          <ul class="dropdown__altList">
            <li>
              <a href="#!" class="dropdown__altList-altLink"> о нас </a>
            </li>
            <li>
              <a href="#!" class="dropdown__altList-altLink"> новости </a>
            </li>
          </ul>
        </div>
        <img src="../assets/images/Group 1.png" alt="" class="rolling__img" />
        <img
          src="../assets/images/Vector 17.png"
          alt=""
          class="dropdown__vector"
        />
        <div class="dropdown__contacts">
          <h4 class="dropdown__title">контакты</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.3602271273166!2d37.61187211245071!3d55.73486979325992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b069f337b7b%3A0x348de6a04399bc4e!2z0YPQuy4g0JHQvtC70YzRiNCw0Y8g0K_QutC40LzQsNC90LrQsCwgMzMvMTMg0YHRgtGA0L7QtdC90LjQtSAyLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE5MTgw!5e0!3m2!1sru!2s!4v1705164765725!5m2!1sru!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="map"
          ></iframe>
          <p class="dropdown__location dropdown__info">
            москва, <br />
            ул. Большая Якиманка, 33/13с2
          </p>
          <ul class="dropdown__contacts-list">
            <li>
              <p class="dropdown__phone dropdown__info">+7 (495) 189-68-13</p>
            </li>
            <li>
              <a href="#!" class="dropdown__link dropdown__info">WhatsApp</a>
            </li>
            <li>
              <a href="#!" class="dropdown__link dropdown__info">Telegram</a>
            </li>
            <li>
              <p class="dropdown__mail dropdown__info">mail@mail.com</p>
            </li>
            <ul class="icon">
              <li>
                <a href="#!"
                  ><img src="../assets/images/black vk.png" alt=""
                /></a>
              </li>
              <li>
                <a href="#!"
                  ><img src="../assets/images/black yt.png" alt=""
                /></a>
              </li>
              <li>
                <a href="#!"
                  ><img src="../assets/images/black ok.png" alt=""
                /></a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
const links = ref([
  { title: "индивидуальное проектирование", url: "/architecture" },
  { title: "ландшафтный дизайн", url: "/landshaft" },
  { title: "дизайн интерьера ", url: "/interior" },
  { title: "строительство", url: "/building" },
]);

const targetEl = ref();

useMotion(targetEl, {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
});

const showDropdown = ref([false]);
</script>

<style lang="scss">
.menu {
  padding: 20px;
}

.dropdown {
  position: fixed;
  top: 0;
  transition: 0.5s;
  left: 0;
  z-index: 1;
}

@media (max-width: 1520.99px) {
  .header__title {
    font-size: 130px;
    width: 60%;
  }
}

@media (max-width: 1240.99px) {
  .background__img {
    width: 100%;
  }

  .header__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header__title {
    font-size: 200px;
    width: 60%;
  }
}

@media (max-width: 825.99px) {
  .header__title {
    font-size: 100px;
  }
}

@media (max-width: 500.99px) {
  .header__title {
    font-size: 60px;
  }

  .header__descr {
    font-size: 20px;
  }

  .menu {
    width: 70px;
    padding: 10px;
  }
}

@media (max-width: 1600.99px) {
  .dropdown__link {
    font-size: 30px;
  }

  .dropdown__content {
    gap: 0;
  }

  .dropdown__list-link {
    font-size: 40px;
  }

  .dropdown__altList-altLink {
    font-size: 40px;
  }

  .rolling__img {
    width: 30%;
  }
}

@media (max-width: 1350.99px) {
  .dropdown__info {
    font-size: 25px;
  }

  .map {
    width: 100%;
  }
}

@media (max-width: 1100.99px) {
  .rolling__img {
    display: none;
  }
}

@media (max-width: 800.99px) {
  .dropdown__list-link {
    color: #121212;
    font-family: Sofia Sans;
    font-size: 30px;
    width: 50%;
    font-style: normal;
    font-weight: 300;
    line-height: 110%;
    letter-spacing: -2.56px;
    text-transform: uppercase;
  }
}

@media (max-width: 550.99px) {
  .dropdown__content {
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
  }
  
  .dropdown__contacts {
    display: none;
  }

  .dropdown {
    height: 900px;
  }

  .dropdown__vector {
    width: 100%;
    display: block;
  }
}
</style>