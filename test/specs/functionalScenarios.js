const expectChai = require("chai").expect;

describe("Functional Testing on Application", async() => {

    it('Performing page scroll to view and mouse hover actions', async() => {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $("#mousehover").scrollIntoView();
        await browser.pause(3000);
        await $("#mousehover").moveTo();
        await browser.pause(3000);
        await $("=Reload").click();
        await browser.pause(3000);
        await browser.saveScreenshot("img.png");

    })
});