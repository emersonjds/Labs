import { CaelumpicPage } from './app.po';

describe('caelumpic App', () => {
  let page: CaelumpicPage;

  beforeEach(() => {
    page = new CaelumpicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
