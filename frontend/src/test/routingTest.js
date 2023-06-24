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

    const travelPalsLink = await driver.findElement(By.linkText("Find travel pals"));
    await travelPalsLink.click();
    await driver.wait(until.urlIs("http://localhost:3000/travelfeed"), 3000);

    const messagesLink = await driver.findElement(By.linkText("Messages"));
    await messagesLink.click();
    await driver.wait(until.urlIs("http://localhost:3000/messages"), 3000);

    const homeLink = await driver.findElement(By.linkText("Home"));
    await homeLink.click();
    await driver.wait(until.urlIs("http://localhost:3000/userfeed"), 3000);

    console.log("Routing test passed");
  } catch (error) {
    console.error("Routing test failed:", error);
  } finally {
    await driver.quit();
  }
})();
