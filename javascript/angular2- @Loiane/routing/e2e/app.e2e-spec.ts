import { RoutingPage } from './app.po';

describe('routing App', () => {
  let page: RoutingPage;

  beforeEach(() => {
    page = new RoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
