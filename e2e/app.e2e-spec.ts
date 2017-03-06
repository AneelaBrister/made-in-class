import { MadeInClassPage } from './app.po';

describe('made-in-class App', () => {
  let page: MadeInClassPage;

  beforeEach(() => {
    page = new MadeInClassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
