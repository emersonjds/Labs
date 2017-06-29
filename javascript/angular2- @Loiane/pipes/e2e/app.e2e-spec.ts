import { PipesPage } from './app.po';

describe('pipes App', () => {
  let page: PipesPage;

  beforeEach(() => {
    page = new PipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
