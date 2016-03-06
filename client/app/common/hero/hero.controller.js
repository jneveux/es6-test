class HeroController {
  constructor() {
    this.name = 'hero ES6';
  }

  clickButton() {
    this.youClickedMe = true;
  }

  unClick() {
    this.youClickedMe = false;
  }
}

export default HeroController;
