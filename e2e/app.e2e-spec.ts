import { BurritoBudgetPage } from './app.po';

describe('burrito-budget App', () => {
  let page: BurritoBudgetPage;

  beforeEach(() => {
    page = new BurritoBudgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
