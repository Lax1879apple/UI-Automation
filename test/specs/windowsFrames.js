const expectChai = require("chai").expect;

describe("Windows and Frames concept validation", () => {

    it('Performing window handles and switching back and forth to multiple windows', async() => {

        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        await $("//a[@class='blinkingText']").click(); //clicking this locator opens another window (so now we have parent window and second child window)
        const handles = await browser.getWindowHandles(); // returns array of windows
        await browser.switchToWindow(handles[1]); // picks second window, child window with index 1
        console.log(("Text from child window is ----------------------------------------->>> ") + await $("h1").getText());

        //switch back to parent window
        await browser.switchToWindow(handles[0]);
        const title = await browser.getTitle();
        await expectChai(await title).to.be.equal("LoginPage Practise | Rahul Shetty Academy");



    })
});