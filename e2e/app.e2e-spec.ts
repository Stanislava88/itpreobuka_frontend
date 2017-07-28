import { MojProbniProjekatPage } from './app.po';

describe('moj-probni-projekat App', () => {
  let page: MojProbniProjekatPage;

  beforeEach(() => {
    page = new MojProbniProjekatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
