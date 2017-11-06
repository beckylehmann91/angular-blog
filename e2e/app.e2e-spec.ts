import { Ng2BlogFePage } from './app.po';

describe('ng2-blog-fe App', () => {
  let page: Ng2BlogFePage;

  beforeEach(() => {
    page = new Ng2BlogFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
