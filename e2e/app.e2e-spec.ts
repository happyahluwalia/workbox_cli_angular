import { AngularShellPage } from './app.po';

describe('angular-shell App', () => {
  let page: AngularShellPage;

  beforeEach(() => {
    page = new AngularShellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ha works!');
  });
});
