<template>
  <div id="app">
    <h1>Лунёв Илья</h1>
    <h2 style="margin-top: 0">Frontend developer</h2>
    <div class="links">
      <div class="gh">
        <a href="https://github.com/xmadeit" target="_blank">
          <unicon name="github" fill=" #e3204a" width="27" height="27"></unicon>
          <b>github</b>
        </a>
      </div>
      <div class="email">
        <a href="mailto:xmlzprod@gmail.com">
          <unicon name="at" fill=" #e3204a" width="27" height="27"></unicon>
          <b>email</b>
        </a>
      </div>
    </div>
    <div class="about-me">
      <h2 style="text-align: center">Обо мне</h2>
      <p>
        Я начинающий frontend developer. Хорошо ориентируюсь в языке JavaScript,
        ежедневно занимаюсь разработкой собственных проектов или изучением новых
        фреймворков и возможностей языка. Могу работать как самостоятельная
        единица в команде. Многое знаю, чего не знаю - найду, что не найду -
        грамотно спрошу у коллег. Умею работать в коллективе и очень хочу
        профессионально развиваться.
        <br />
        Нахожусь в поиске работы или стажировки в Ростове-на-Дону для старта
        своего карьерного пути в IT.
      </p>
    </div>

    <div class="experience experience__body">
      <h2 style="text-align: center">Опыт работы</h2>

      <Splide>
        <SplideSlide>
          <div class="slider exp-slider">
            <div class="content">
              <div class="job-data">
                <div class="job-title">Агрохолдинг СТЕПЬ</div>
                <div class="job-position">Специалист по аналитике</div>
                <div class="start-date">01.08.2020</div>
                <p style="margin: 0">-</p>
                <div class="end-date">08.01.2021</div>
              </div>
              <div class="duties">
                <ul>
                  <li>SAS Base</li>
                  <li>Excel</li>
                  <li>Работа с данными</li>
                  <li>Работа над собственным кейсом</li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slider exp-slider">
            <div class="content">
              <div class="job-data">
                <div class="job-title">Skytecs</div>
                <div class="job-position">Junior frontend developer</div>
                <div class="start-date">01.03.2021</div>
                <p style="margin: 0">-</p>
                <div class="end-date">present</div>
              </div>
              <div class="duties">
                <ul>
                  <li>JavaScript</li>
                  <li>Angular</li>
                  <li>Vue</li>
                  <li>Cypress</li>
                  <li>Вёрстка по макетам</li>
                  <li>Разработка новых компонентов + внедрение в проект</li>
                  <li>Сквозные и нагрузочные тестирования</li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <div class="skills">
      <h2 style="text-align: center">Skills</h2>
      <Splide>
        <SplideSlide>
          <div class="slider">
            <div class="content">
              <div class="skill-data">
                <div class="skill-title">JavaScript</div>
                <div class="skill-during">1 год</div>
              </div>
              <div class="duties">
                <ul>
                  <li>JS Basics</li>
                  <li>Browser features</li>
                  <li>ОПП</li>
                  <li>2 курса на Stepik.org на отлично</li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slider">
            <div class="content">
              <div class="skill-data">
                <div class="skill-title">HTML & CSS</div>
                <div class="skill-during">1 год</div>
              </div>
              <div class="duties">
                <ul>
                  <li>
                    HTML: document heading, document heading, text tags, links,
                    container tags, semantics, forms, forms, images, audio &
                    video
                  </li>
                  <li>
                    CSS: box models, CSS units, position, layout, media query,
                    SASS
                  </li>
                  <li>Отзывчивая и адаптивная вёрстка</li>
                  <li>Курс на Stepik.org на отлично</li>
                  <li>Курс на freecodecamp.org</li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slider">
            <div class="content">
              <div class="skill-data">
                <div class="skill-title">Angular</div>
                <div class="skill-during">4 месяца</div>
              </div>
              <div class="duties">
                <ul>
                  <li>Маршрутизация</li>
                  <li>Реактивные формы и валидаторы</li>
                  <li>Односторонний поток данных и неизменяемость</li>
                  <li>Атрибутивные и структурные директивы</li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slider">
            <div class="content">
              <div class="skill-data">
                <div class="skill-title">Vue</div>
                <div class="skill-during">6 месяцев</div>
              </div>
              <div class="duties">
                <ul>
                  <li>Продвинутые компоненты</li>
                  <li>Переходы и анимации</li>
                  <li>Реактивность</li>
                  <li>Масштабируемость и доступность</li>
                  <li>Курс на Stepik.org на отлично</li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slider">
            <div class="content">
              <div class="skill-data">
                <div class="skill-title">Python</div>
                <div class="skill-during">2 года</div>
              </div>
              <div class="duties">
                <ul>
                  <li>
                    Полугодовой курс программирования на Python в университете
                  </li>
                  <li>Курс на Stepik.org</li>
                  <li>Курс по криптографии</li>
                  <li>ООП</li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slider">
            <div class="content">
              <div class="skill-data">
                <div class="skill-title">C++</div>
                <div class="skill-during">1 год</div>
              </div>
              <div class="duties">
                <ul>
                  <li>
                    Годовой курс программирования на C++ в университете
                  </li>
                  <li>
                    Чуть-чуть Razor
                  </li>
                  <li>
                    Пара задач на backend
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slider">
            <div class="content">
              <div class="skill-data">
                <div class="skill-title">C#</div>
                <div class="skill-during">Полгода</div>
              </div>
              <div class="duties">
                <ul>
                  <li>
                    Полугодовой курс программирования на C# в университете
                  </li>

                  <li>ООП</li>
                </ul>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  name: "App",
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style>
body {
  background-color: #5716fa;
}
#app {
  font-family: "Open Sans";
  margin: 50px auto;
  width: 900px;
}

h1 {
  font-size: 20pt;
  color: #fff;
  margin: 0;
}

h2 {
  font-size: 16pt;
  color: #fa9316;
  margin: 20px 0;
}

.links {
  display: flex;
}

.gh,
.email {
  display: flex;

  width: 94px;
  height: 30px;
  background-color: #c4c4c4;
  text-align: center;
  border-radius: 15px;
  margin-right: 50px;
  vertical-align: middle;
}

a {
  display: flex;
  font-size: 16pt;
  text-decoration: none;
  text-align: left;
}

p {
  color: #fff;
  font-size: 14pt;
}

.slider {
  display: flex;
  width: 828px;
  vertical-align: middle;
  margin: 10px auto;
}

.unicon {
  margin: auto auto;
}

.content {
  display: flex;
  background-color: #fa932f;
  width: 810px;
  color: #fff;
  vertical-align: middle;
  text-align: center;
  border-radius: 60px;
}

.job-data,
.skill-data {
  width: 240px;
  margin: auto 20px;
  padding: 15px 0px;
}

.job-title,
.skill-title {
  font-weight: bold;
}
li {
  width: 350px;
}

.duties {
  text-align: left;
}

button:hover {
  cursor: pointer;
}
.splide__pagination {
  display: none;
}
ul {
  margin: 10px 0px;
}
</style>

