/*
https://codepen.io/suez/pen/JoWKKX
*/
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select:none;
}

html, body {
  height: 100%;
  overflow: hidden;
  background: black;
  --gl_dur: .5s;
}
@media (max-width: 767px) {
  html, body {
    font-size: 80%;
  }
}
@media (max-width: 640px) {
  html, body {
    font-size: 60%;
  }
}
@media (max-width: 480px) {
  html, body {
    font-size: 40%;
  }
}
.inner, .nav-panel ul .nav-btn:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
}

.scene {
  width: 100%;
  height: 100%;
  position:absolute;
}

.page {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform var(--gl_dur), opacity var(--gl_dur), z-index var(--gl_dur);
  will-change: transform, opacity;
}

.page:nth-child(1) .right img,
.page:nth-child(2) .right img,
.page:nth-child(3) .right img,
.page:nth-child(4) .right img,
.page:nth-child(5) .right img,
.page:nth-child(6) .right img,
.page:nth-child(7) .right img
{ 
  width:100%;
  height:auto;
  float:left;
}
.page:nth-child(1) .left img,
.page:nth-child(2) .left img,
.page:nth-child(3) .left img,
.page:nth-child(4) .left img,
.page:nth-child(5) .left img,
.page:nth-child(6) .left img,
.page:nth-child(7) .left img
{
  width:100%;
  height:auto;
  float:right;
}

.page.active {
  z-index: 5;
  transition: transform var(--gl_dur), opacity var(--gl_dur), z-index 0s var(--gl_dur);
}
.page.active .half {
  transform: translateX(0) !important;
  transition: transform var(--gl_dur) ease-out;
}
.page.previous {
  opacity: 0.4 !important;
  visibility: visible !important;
  transition: transform var(--gl_dur), opacity var(--gl_dur), z-index 0s;
}
.page.small {
  transform: scale(0.8);
  opacity: 0;
}
.page.small .half {
  transform: translateX(0) !important;
}
.page:nth-child(2) .left {
  transform: translateX(-100%);
}
.page:nth-child(2) .right {
  transform: translateX(100%);
}
.page:nth-child(3) .left {
  transform: translateX(-100%);
}
.page:nth-child(3) .right {
  transform: translateX(100%);
}
.page:nth-child(4) .left {
  transform: translateX(-100%);
}
.page:nth-child(4) .right {
  transform: translateX(100%);
}
.page:nth-child(5) .left {
  transform: translateX(-100%);
}
.page:nth-child(5) .right {
  transform: translateX(100%);
}
.page:nth-child(6) .left {
  transform: translateX(-100%);
}
.page:nth-child(6) .right {
  transform: translateX(100%);
}
.page:nth-child(7) .left {
  transform: translateX(-100%);
}
.page:nth-child(7) .right {
  transform: translateX(100%);
}
.page:nth-child(8) .left {
  transform: translateX(-100%);
}
.page:nth-child(8) .right {
  transform: translateX(100%);
}
.page:nth-child(9) .left {
  transform: translateX(-100%);
}
.page:nth-child(9) .right {
  transform: translateX(100%);
}
.page:nth-child(10) .left {
  transform: translateX(-100%);
}
.page:nth-child(10) .right {
  transform: translateX(100%);
}
.page:nth-child(11) .left {
    transform: translateX(-100%);
}
.page:nth-child(11) .right {
    transform: translateX(100%);
}
.page:nth-child(12) .left {
  transform: translateX(-100%);
}
.page:nth-child(12) .right {
  transform: translateX(100%);
}
.page:nth-child(13) .left {
  transform: translateX(-100%);
}
.page:nth-child(13) .right {
  transform: translateX(100%);
}
.page:nth-child(14) .left {
  transform: translateX(-100%);
}
.page:nth-child(14) .right {
  transform: translateX(100%);
}

.half {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  transition: transform var(--gl_dur) ease-in-out;
  will-change: transform;
}
.half.left {
  left: 0;
}
.half.right {
  right: 0;
}
.half.withText:after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.title {
  position: absolute;
  text-align: center;
  z-index: 500;
  bottom: 42%;
  left: 4%;
  font-size: 55px;
  color: black;
  font-family: 'Tajawal', sans-serif;
  text-shadow: -2px 5px 5px rgba(0, 0, 0, .6);
}

.heading {
  position: absolute;
  z-index: 500;
  bottom: 75%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 35px;
  color: black ;
  font-family: 'Tajawal', sans-serif;
  text-shadow: -2px 5px 5px rgba(0, 0, 0, .6);
}

.headingfat {
  position: absolute;
  z-index: 500;
  bottom: 80%;
  left: 50%;
  transform: translateX(-50%) translateY(-90%);
  font-size: 35px;
  color: black ;
  font-family: 'Tajawal', sans-serif;
  text-shadow: -2px 5px 5px rgba(0, 0, 0, .6);
}

.description {
  position: absolute;
  z-index: 500;
  bottom: 0%;
  left: 15%;
  transform: translateX(-10%) translateY(-90%);
  font-size: 22px;
  color: black;
  font-family: 'Tajawal', sans-serif;
}

.text1 {
  position: absolute;
  z-index: 500;
  bottom: -15%;
  left: 15%;
  transform: translateX(-10%) translateY(-90%);
  font-size: 22px;
  color: black;
  font-family: 'Tajawal', sans-serif;
}

.text2 {
  position: absolute;
  z-index: 500;
  bottom: -2%;
  left: 15%;
  transform: translateX(-7%) translateY(-27%);
  font-size: 22px;
  color: black;
  font-family: 'Tajawal', sans-serif;
}

.text3 {
  position: absolute;
  z-index: 500;
  bottom: -15%;
  left: 14%;
  transform: translateX(-1%) translateY(-90%);
  font-size: 22px;
  color: black;
  font-family: 'Tajawal', sans-serif;
}


.text4 {
  position: absolute;
  z-index: 500;
  bottom: 0%;
  left: 15%;
  transform: translateX(-10%) translateY(-90%);
  font-size: 22px;
  color: black;
  font-family: 'Tajawal', sans-serif;
}

.text5 {
  position: absolute;
  z-index: 500;
  bottom: -35%;
  left: 15%;
  transform: translateX(-10%) translateY(-90%);
  font-size: 20px;
  color: black;
  font-family: 'Tajawal', sans-serif;
}

.text6 {
  position: absolute;
  z-index: 500;
  bottom: -20%;
  left: 15%;
  transform: translateX(-10%) translateY(-30%);
  font-size: 20px;
  color: black;
  font-family: 'Tajawal', sans-serif;
}

img{
  width: fit-content;
  height: fit-content;
}


.nav-panel {
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  z-index: 1000;
  transition: opacity 1s, transform 0.5s 'easeInOutCubic';
  will-change: transform, opacity;
}
.nav-panel.invisible {
  opacity: 0;
  transform: translateY(-50%) scale(0.5);
}
.nav-panel ul {
  list-style-type: none;
}
.nav-panel ul .nav-btn {
  position: relative;
  overflow: hidden;
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.5rem;
  border: 0.12rem solid rgb(136, 136, 136);
  border-radius: 50%;
  cursor: pointer;
  transition: border-color, transform 0.3s;
  will-change: border-color, transform;
}
.nav-panel ul .nav-btn:after {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%) scale(0.3);
  background-color:rgb(136, 136, 136);
  opacity: 0;
  transition: transform, opacity 0.3s;
  will-change: transform, opacity;
}
.nav-panel ul .nav-btn.active:after, .nav-panel ul .nav-btn:hover:after {
  transform: translateX(-46%) translateY(-46%) scale(0.8);
  opacity: 1;
}
.nav-panel ul .nav-btn:hover {
  border-color: rgb(136, 136, 136);
  transform: scale(1.2);
}
.nav-panel ul .nav-btn:hover:after {
  background-color: rgb(9, 8, 9);
}
.nav-panel .scroll-btn {
  position: absolute;
  left: 0;
  width: 1rem;
  height: 1rem;
  border: 0.2rem solid rgb(136, 136, 136);
  border-left: none;
  border-bottom: none;
  cursor: pointer;
  transform-origin: 50% 50%;
  transition: border-color 0.3s;
}
.nav-panel .scroll-btn.up {
  top: -1.6rem;
  transform: rotate(-45deg);
}
.nav-panel .scroll-btn.down {
  bottom: -1.2rem;
  transform: rotate(135deg);
}
.nav-panel .scroll-btn:hover {
  border-color: rgb(9, 8, 9);
}

.rotation90 {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
