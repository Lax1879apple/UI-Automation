const expectChai = require("chai").expect;

describe("Functional Testing web tables filter validation", () => {

    it('Performing filter on the web table', async() => {

        await browser.url("https://www.rahulshettyacademy.com/seleniumPractise/#/offers");

        const locator = await $("//input[@id='search-field']");
        await locator.setValue("Tomato");

        const vaggiesLocators = await $$("tr td:nth-child(1)"); // This will return array of elements, we only have one in this case
        console.log(await vaggiesLocators[0].getText());
        await expectChai(await vaggiesLocators[0].getText()).to.be.equal("Tomato"); //assertion, using chai








    })
});