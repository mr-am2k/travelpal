const { Builder, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000/login");

    await driver.findElement(By.id("login_username")).sendKeys("sinanovicah");
    await driver.findElement(By.id("login_password")).sendKeys("1Sinanovic1$");

    const loginButton = await driver.findElement(By.id("login_button"));

    await loginButton.click();
    await loginButton.click();
    await loginButton.click();
    await loginButton.click();

    await driver.wait(until.urlIs("http://localhost:3000/userfeed"), 8000);
    await driver.get("http://localhost:3000/travelfeed");

    const initialContentItems = await driver.findElements(By.id("travelfeed_post"));
    const loadMoreButton = await driver.findElement(By.id("post_load_more_button"));
    await loadMoreButton.click();
    const updatedContentItems = await driver.findElements(By.id("travelfeed_post"));

    if (initialContentItems.length < updatedContentItems.length) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  } finally {
    await driver.quit();
  }
})();
