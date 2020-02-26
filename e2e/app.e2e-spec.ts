import { AngularCrashTodolistPage } from './app.po';

describe('angular-crash-todolist App', function() {
  let page: AngularCrashTodolistPage;

  beforeEach(() => {
    page = new AngularCrashTodolistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
