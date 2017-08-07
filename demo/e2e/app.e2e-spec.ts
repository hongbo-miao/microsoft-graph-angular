import { MicrosoftGraphAngularPage } from './app.po';

describe('microsoft-graph-angular App', () => {
  let page: MicrosoftGraphAngularPage;

  beforeEach(() => {
    page = new MicrosoftGraphAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
