import { NgVstsAzureCiExamplePage } from './app.po';

describe('ng-vsts-azure-ci-example App', () => {
  let page: NgVstsAzureCiExamplePage;

  beforeEach(() => {
    page = new NgVstsAzureCiExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
