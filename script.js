// Custom Element: SmartSlider
class SmartSlider extends HTMLElement {
  constructor() {
    super();
    this.config = JSON.parse(this.querySelector('.swiper-config').textContent);
    this.swiper = new Swiper(this, this.config);
  }
}
customElements.define('smart-slider', SmartSlider);
