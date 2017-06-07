import { PrimeiroProjetoPage } from './app.po';

describe('primeiro-projeto App', () => {
  let page: PrimeiroProjetoPage;

  beforeEach(() => {
    page = new PrimeiroProjetoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
