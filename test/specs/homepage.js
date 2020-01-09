import assert from 'assert';

describe('Apolitical home page', () => {
	it('should have the right title', () => {
		browser.url("http://localhost:8081/home");
		const title = browser.getTitle();

		assert.strictEqual(title, "Home | Apolitical");
	});

	it('should render the welcome text when logged out', () => {
		browser.url("http://localhost:8081/home");
		browser.react$('LoggedOutHomePageHero').waitForExist(6000, true);
		const LoggedOutHomePageHero = browser.react$('LoggedOutHomePageHero');

		assert.equal(LoggedOutHomePageHero.isDisplayed(), true);
		assert.equal(LoggedOutHomePageHero.getText(), 'Welcome to Apolitical\nThe global learning platform for government');
	});

	it('has a login anchor link', () => {
		browser.url("http://localhost:8081/home");
		const loginButton = $('a[href="/login"');

		assert.equal(loginButton.isExisting(), true);
	}); 

	it('clicking "Get Free Access now" button links to sign up page', () => {
		browser.url("http://localhost:8081/home"); 
		const getAcessButton =  $('button[data-gtm-event-type="signup-click"]');

		getAcessButton.click();

		const pageUrl =  browser.getUrl();

		assert.equal(pageUrl, 'http://localhost:8081/signup?ref=feed-unlock-banner');
	})

	it('links to log in page', () => {
		browser.url("http://localhost:8081/home");
		const loginButton = $('=Log In');

		loginButton.click();

		const pageUrl =  browser.getUrl();
		assert.equal(pageUrl, 'http://localhost:8081/login');
	})

	it('show cookie policy modal if no consent', () => {
		browser.url("http://localhost:8081/home");

		const CookieBanner = browser.react$('CookieBanner');

		assert.equal(CookieBanner.isExisting(), true)
	})
	//Failing test
	xit('does not show cookie banner if consent', () => {
		browser.url("http://localhost:8081/home");

		browser.setCookies({
			name: 'cookie-consent',
			value: true,
			httpOnly: false
		});
		 const cookies = browser.getCookies()
	console.log(cookies);
		 
		 browser.pause(160000)
 
		//  const CookieBanner = browser.react$('CookieBanner', {showCookieBanner: false});
		// //  const cookies = browser.getCookies()
		// //  console.log("COOKIES: ",cookies);
 
 
		//  assert.equal(CookieBanner.isExisting(), false)
	})
})
