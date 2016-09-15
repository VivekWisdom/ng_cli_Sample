import { NGCLISamplePage } from './app.po';

describe('ng-cli-sample App', function() {
  let page: NGCLISamplePage;

  beforeEach(() => {
    page = new NGCLISamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
