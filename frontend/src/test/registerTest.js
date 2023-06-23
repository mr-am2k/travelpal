const { Builder, By, Key, until } = require("selenium-webdriver");

async function testRegistration() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000/register");

    let nameInput = await driver.findElement(By.css("input[name='name']"));
    let usernameInput = await driver.findElement(By.css("input[name='username']"));
    let passwordInput = await driver.findElement(By.css("input[name='password']"));
    let emailInput = await driver.findElement(By.css("input[name='email']"));
    let countrySelect = await driver.findElement(By.css("select[name='country']"));
    let dateInput = await driver.findElement(By.css("input[name='dateOfBirth']"));
    let genderSelect = await driver.findElement(By.css("select[name='gender']"));
    let submitButton = await driver.findElement(By.css("button[type='submit']"));

    await nameInput.sendKeys("John Doe");
    await usernameInput.sendKeys("johndoe");
    await passwordInput.sendKeys("Password123$%");
    await emailInput.sendKeys("johndoe@example.com");
    await countrySelect.sendKeys("United States");
    await dateInput.sendKeys("2023-06-19");
    await genderSelect.sendKeys("Male");

    await submitButton.sendKeys(Key.ENTER);

    await driver.wait(until.elementLocated(By.id("success_msg")), 3000);
    let successMessage = await driver.findElement(By.id("success_msg"));

    let messageText = await successMessage.getText();
    if (messageText === "Registration successful!") {
      console.log("Registration test passed");
    } else {
      console.log("Registration test failed");
    }
  } finally {
    await driver.quit();
  }
}

// Run the registration test
testRegistration();
