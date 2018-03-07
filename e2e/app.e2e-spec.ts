import { JsonMonkeesPage } from './app.po';

describe('json-monkees App', () => {
  let page: JsonMonkeesPage;

  beforeEach(() => {
    page = new JsonMonkeesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
