import assert from 'assert';

describe('Apolitical home page', () => {
 it('should have the right title', () => {
  browser.url("https://apolitical.co/home");
  const title = browser.getTitle();
  console.log("title: ", title);
  
  assert.strictEqual(title, "Home | Apolitical");
 });
})
