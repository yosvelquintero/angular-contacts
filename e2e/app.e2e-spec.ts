import { AppPage } from './app.po';

describe('angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app name', () => {
    page.navigateTo();
    expect(page.getAppNameText()).toEqual('Contacts!');
  });
});
