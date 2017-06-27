import { ServicesPage } from './app.po';

describe('services App', () => {
  let page: ServicesPage;

  beforeEach(() => {
    page = new ServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
