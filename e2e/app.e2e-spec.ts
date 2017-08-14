import { ConciliaFrontPage } from './app.po';

describe('concilia-front App', () => {
  let page: ConciliaFrontPage;

  beforeEach(() => {
    page = new ConciliaFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
