import { BeerWebsitePage } from './app.po';

describe('beer-website App', () => {
  let page: BeerWebsitePage;

  beforeEach(() => {
    page = new BeerWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
