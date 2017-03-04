import { MyDWalletPage } from './app.po';

describe('my-dwallet App', () => {
  let page: MyDWalletPage;

  beforeEach(() => {
    page = new MyDWalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
