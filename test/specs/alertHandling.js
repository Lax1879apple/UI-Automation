const expectChai = require('chai').expect;
describe('Handling UI application javaScript based alerts', async() => {

    it('Handeling JavaScripts based alerts', async() => {
        await browser.url("http://only-testing-blog.blogspot.com/");
        await browser.pause(2000);
        await $("button[ondblclick='myFunction()']").scrollIntoView(); // will scroll object to window view port
        await browser.pause(2000);
        await $("button[ondblclick='myFunction()']").doubleClick(); //double click on element will open js window alert
        await browser.isAlertOpen(); // if alert open, will return true
        //comparing alert open which is true to be true for assertion, if alert not opened, test will fail and returns false by below code
        await expectChai(await browser.isAlertOpen()).to.be.true;
        expectChai(await browser.getAlertText()).to.equal("Press 'OK' or 'Cancel' button!");
        await browser.pause(3000)
        await browser.acceptAlert();
        await browser.pause(3000)
        await $("button[ondblclick='myFunction()']").scrollIntoView(); // will scroll object to window view port
        await browser.pause(2000);
        await $("button[ondblclick='myFunction()']").doubleClick();
        await browser.pause(3000)
        await browser.dismissAlert();


    })
})