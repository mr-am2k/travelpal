const { Builder, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000/login");

    await driver.findElement(By.id("login_username")).sendKeys("sinanovicah");
    await driver.findElement(By.id("login_password")).sendKeys("1Sinanovic1$");
    const loginButton = await driver.findElement(By.id("login_button"));
    await loginButton.click();

    await driver.wait(until.urlIs("http://localhost:3000/userfeed"), 8000);

    const profileImage = await driver.findElement(By.css(".cursor-pointer"));
    await profileImage.click();

    await driver.wait(async () => {
      const dropdown = await driver.findElement(By.css(".drop-shadow-md"));
      return dropdown.isDisplayed();
    }, 3000);

    const logoutLink = await driver.findElement(By.linkText("Log out"));
    await logoutLink.click();
    await driver.wait(until.urlIs("http://localhost:3000/login"), 5000);

    console.log("Logout test passed");
  } catch (error) {
    console.error("Logout test failed:", error);
  } finally {
    await driver.quit();
  }
})();
