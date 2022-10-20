describe("Ecommerce Application landing page", async() => {

    it("Login Fail page", async() => {
        // webdeiverio javaScript is Async (Meaning, it will not wait to complete the execution of launding url)
        // Before it launches completely, it won't for is promise to finish(launch completely)
        //Thus it may move to next code execution, thus to prevent that we use "await" so that it will only move to next execution 
        //after returning promise to first execution, when we pass "await", we pass "async" in the method including main one on the top method too
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
        pageTitle = await browser.getTitle();
        console.log("Page Title is ==============================> " + pageTitle);

        //assertion with webdriverio
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

        //sending username and password page on login page
        await $("input[name='username']").setValue("Whatever"); // types user name "Whatever"
        await browser.pause(2000);
        await $("#username").setValue("rahulshettyacademy");
        await browser.pause(2000);
        const pwd = await $("//input[@type='password']");
        await pwd.setValue("learning-llkn"); // "learning" is the actual pwd but to fail the login, we are passing wrong pwd

        await $("#signInBtn").click(); // clicking on "signin" button
        //await browser.pause(3000); // making execution wait so that error message is displayed and the alert is captured. If not waiting, blank erro message may be displayed
        // below code to dynamically wait for text and once text is displayed, execution happens
        await browser.waitUntil(async() => await $("#signInBtn").getAttribute("value") === "Sign In", {
            timeout: 5000,
            timeoutMsg: "Error message not displayed"
        })
        const loginErrorText = await $(".alert-danger").getText();
        console.log("Loing Error Message ----------->> " + loginErrorText);

        //Below to do assertion on the text displayed on login page
        await expect($("//p[@class ='text-center text-white']")).toHaveText("(username is rahulshettyacademy and Password is learning)");


    });

    it("Login success page", async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        //sending username and password page on login page
        await $("#username").setValue("rahulshettyacademy");
        await browser.pause(2000);
        const pwd = await $("//input[@type='password']");
        await pwd.setValue("learning"); // "Learning" is the actual pwd but to fail the login, we are passing wrong pwd
        await $("#signInBtn").click(); // clicking on "signin" button
        //since after clicking "sign in" button, next page is not immediately loading, due to which if we are performing another action
        //immediately, testcase may fail so we need to tell webdriverio to dynamically wait, so to do that, we will grab one locator from 
        //"shoping" page and validate against it


        //await $(".btn-primary").waitForExist(); // will wait until is displayed 
        await $("//a[text()='ProtoCommerce']").waitForExist();
        await expect(browser).toHaveUrlContaining("shop");
        await expect(browser).toHaveTitle("ProtoCommerce");


    });
});