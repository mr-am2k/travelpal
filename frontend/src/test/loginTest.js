const { Builder, By, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000/login");

    await driver.findElement(By.id("login_username")).sendKeys("sinanovicah");
    await driver.findElement(By.id("login_password")).sendKeys("1Sinanovic1$");

    const loginButton = await driver.findElement(By.id("login_button"));

    await loginButton.click();

    await driver.wait(until.urlIs("http://localhost:3000/userfeed"), 8000);
  } finally {
    await driver.quit();
  }
})();
