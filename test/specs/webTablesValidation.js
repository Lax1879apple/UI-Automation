const expectChai = require("chai").expect;

describe("Functional Testing web tables validation", () => {

    it('Performing sorting in give web table to see items in sorted order', async() => {

        await browser.url("https://www.rahulshettyacademy.com/seleniumPractise/#/offers");
        await $("tr th:nth-child(1)").click(); //tr th:nth-child(1) is for the first table column heading where we are performing click()
        await browser.pause(3000);
        const vaggieslocators = await $$("tr td:nth-child(1)"); //tr td:nth-child(1), will return all elements on 1st column which is a collectin, so make it []
        await browser.pause(3000);

        /*This below commented code is recurrecive function using array map function to print same thing as from below for loop */

        /* const vaggiesNames = await vaggieslocators.map(async vaggie => await vaggie.getText());
         const vaggies = await vaggiesNames.slice();
         const sortedVaggies = await vaggiesNames.sort();
         console.log(sortedVaggies);
         expectChai(vaggiesNames).to.equal(sortedVaggies);
          */

        // doing same sorting using for loop, but it is not properly sorting in order.

        for (let i = 0; i < vaggieslocators.length; i++) {
            const vaggiesNames = await vaggieslocators[i].getText();
            const sortedVaggies = await vaggiesNames.sort;
            console.log(sortedVaggies);
        }

    })
});