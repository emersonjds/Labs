import { browser, by, element } from 'protractor';

export class PrimeiroProjetoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
