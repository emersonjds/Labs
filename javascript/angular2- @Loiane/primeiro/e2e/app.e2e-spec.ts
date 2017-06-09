import { PrimeiroPage } from './app.po';

describe('primeiro App', () => {
  let page: PrimeiroPage;

  beforeEach(() => {
    page = new PrimeiroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
