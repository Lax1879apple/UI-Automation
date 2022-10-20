const expectChai = require("chai").expect;

describe("UI Contorls on login screen", async() => {

    xit("UI controls to select user radio button and when cancel on popup should select default user radio button", async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        //sending username and password page on login page
        await $("#username").setValue("rahulshettyacademy");
        await browser.pause(2000);
        const pwd = await $("//input[@type='password']");
        await pwd.setValue("learning"); // "Learning" is the actual pwd but to fail the login, we are passing wrong pwd

        await $("(//span[@class='checkmark'])[2]").click();
        //doing assertion to make sure modal content is displayed so other click or cancel operation can be done without using browser wait/pause
        const modalContent = await $("div[class='modal-content']");
        await modalContent.waitForDisplayed();
        // below to validate the text content on the modal-content
        await expect($(".modal-body").$("p")).toHaveTextContaining("You will be limited to only fewer functionalities of the app. Proceed?");
        //to click cancel so it return to default "Admin" as selected
        await $("#cancelBtn").click();
        await $("(//span[@class='checkmark'])[1]").waitForExist({ timeout: 6000 });
        //capturing multiple elements, then capturing by index and moving to child locator
        const AdminSelected = await $$(".customradio")[0].$("span").isSelected();
        //const AdminSelected = await $("(//span[@class='checkmark'])[1]").isSelected();
        const modalDisplayed = expect(await $("div[class='modal-content']")).not.toBeDisplayed(); // Assertion==>Making sure when Admin is selected, modal(popup) should not display
        console.log("Is modal displayed ----------------------------->" + modalDisplayed);
        console.log("Is Admin is selected or not ----------> " + AdminSelected);

        //Again select user and have popup window displayed, so we can select okay button this time.

        const userRadioButton = await $("(//span[@class='checkmark'])[2]"); // "$$" is used to select multiple elements with the ".checkmark" selector which return array
        await userRadioButton.click();
        //handle popup
        await $("#okayBtn").click();

        //handling dropdown
        const dropdown = await $("select.form-control");
        await dropdown.selectByAttribute("value", "teach");
        await browser.pause(3000);
        await dropdown.selectByVisibleText("Consultant");
        await browser.pause(3000);
        await dropdown.selectByIndex([0]);
        await browser.pause(3000);
        console.log(await dropdown.getValue());
        //chai assertions==> for this install chai dependencie using "npm install chai"
        expectChai(await dropdown.getValue()).to.equal("stud");

    });

    it('Dynamic Dropdown Controls', async() => {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $(".inputs.ui-autocomplete-input").setValue("us");
        await browser.pause(3000);

        let countryList = await $$("//li[@class='ui-menu-item']");
        for (let i = 0; i < countryList.length; i++) {
            if (await countryList[i].getText() === "United States (USA)") {
                await browser.pause(2000)
                await countryList[i].click()
                await browser.pause(2000)
            }
        }
    })

    it('Performing actions on check boxes', async() => {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        const checkBoxes = await $$("input[type='checkbox']");
        await browser.pause(3000);
        await checkBoxes[1].click()
        await checkBoxes[1].isSelected() //doing assertion by using .isSelected(), which return boolean value
        await browser.pause(3000);
        await checkBoxes[2].isSelected(); // this should return false, since this is not selected.
        await browser.saveScreenshot("img.png");

    })
});