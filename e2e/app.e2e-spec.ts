import { BedrizerPage } from './app.po';

describe('bedrizer App', function() {
  let page: BedrizerPage;

  beforeEach(() => {
    page = new BedrizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
