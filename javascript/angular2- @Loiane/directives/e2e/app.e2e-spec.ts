import { DirectivesPage } from './app.po';

describe('directives App', () => {
  let page: DirectivesPage;

  beforeEach(() => {
    page = new DirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
