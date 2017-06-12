import { DataBindingPage } from './app.po';

describe('data-binding App', () => {
  let page: DataBindingPage;

  beforeEach(() => {
    page = new DataBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
