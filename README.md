## 'CGV 메인페이지 리디자인'

---

<br>

### • 배포 주소: [https://cgv-main-redesign.netlify.app/](https://cgv-main-redesign.netlify.app/)

<br>

#### - 작업 기간: 2021.07

#### - 리팩토링: 2024.01

<br>

### 기술 스택

Development

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white" />
<img src="https://img.shields.io/badge/Jquery-0769AD?style=flat&logo=Jquery&logoColor=white">
</p>

Config

<p>
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/></a>
</p>

Environment

<p>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>
</p>
<br>

### 전체 페이지

<img src="https://github.com/azure0929/cgv-main-redesign/assets/128226527/c0a37891-62be-4cce-a0e3-3a2390cbab64" />

<br><br>

### 💻 주요 기능

---

- slick slider

```javascript
/* Movie-Chart : Slick Slider */
$(".intro-movies").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  loop: true,
});
```

```html
<div class="intro-movies">
  <div class="intro-content">
    <h1><em>“파티 깽판놓는게 내 전공이거든”</em></h1>
    <img src="images/intro-image-01.png" alt="intro01" />
  </div>
  <div class="intro-content">
    <h1><em>“이젠 절대 과거에서 도망 안쳐”</em></h1>
    <img src="images/intro-image-02.png" alt="intro02" />
  </div>
  <div class="intro-content">
    <h1><em>“장담컨대, 우린 분명 일을 망칠거야”</em></h1>
    <img src="images/intro-image-03.png" alt="intro03" />
  </div>
  <div class="intro-content">
    <h1><em>“사람들 마을에 가봤어?”</em></h1>
    <img src="images/intro-image-04.png" alt="intro04" />
  </div>
  <div class="intro-content">
    <h1><em>“나도 그 전화 받았어 너 지금 어디야?”</em></h1>
    <img src="images/intro-image-05.png" alt="intro05" />
  </div>
</div>
```
