import { ExternalLibsPage } from './app.po';

describe('external-libs App', () => {
  let page: ExternalLibsPage;

  beforeEach(() => {
    page = new ExternalLibsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
