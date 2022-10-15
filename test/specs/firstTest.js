describe("Ecommerce Application landing page", async() => {

    it("Login Fail page", async() => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
        console.log(await browser.getTitle());

    });
});