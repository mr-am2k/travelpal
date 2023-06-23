const { Builder, By, until } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

try {
  await driver.get("http://localhost:3000/login");

  await driver.findElement(By.id("login_username")).sendKeys("sinanovicah");
  await driver.findElement(By.id("login_password")).sendKeys("1Sinanovic1$");
  const loginButton = await driver.findElement(By.id("login_button"));
  await loginButton.click();

  await driver.wait(until.urlIs("http://localhost:3000/userfeed"), 8000);
  await driver.get("http://localhost:3000/travelfeed");

  await driver.findElement(By.id("open_modal")).click();
  await driver.wait(until.elementLocated(By.id("post_modal")), 5000);
  const titleInput = await driver.findElement(By.id("title"));
  const descriptionInput = await driver.findElement(By.id("description"));
  const departureInput = await driver.findElement(By.id("departure"));
  const destinationInput = await driver.findElement(By.id("destination"));
  const departureDateInput = await driver.findElement(By.id("departure_date"));
  const returnDateInput = await driver.findElement(By.id("return_date"));
  await titleInput.sendKeys("Example Title");
  await descriptionInput.sendKeys("Example Description");
  await departureInput.sendKeys("Example Departure");
  await destinationInput.sendKeys("Example Destination");
  await departureDateInput.sendKeys("2023-06-19");
  await returnDateInput.sendKeys("2023-06-20");

  await driver.findElement(By.id("submit_button")).click();
  await driver.wait(until.elementLocated(By.id("success_msg")), 3000);
  const successMsgDiv = await driver.findElement(By.id("success-msg"));
  if (successMsgDiv) {
    console.log("Test Passed");
  } else {
    console.log("Test Failed");
  }
} finally {
  await driver.quit();
}
