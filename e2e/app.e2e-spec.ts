import { FirebasePicsPage } from './app.po';

describe('firebase-pics App', () => {
  let page: FirebasePicsPage;

  beforeEach(() => {
    page = new FirebasePicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
