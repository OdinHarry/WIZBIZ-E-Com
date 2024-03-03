const { Builder, By, Key, until } = require('selenium-webdriver');

async function validatePassword() {
    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open the web page
        await driver.get('file:///C:/Users/Lenovo/OneDrive/Desktop/anon-ecommerce-website/login.html');
        // Wait for the password input field to be located
        const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 10000);

        // Enter the password to validate
        const password = 'YourPassword123!'; // Replace with the password you want to validate
        await passwordInput.sendKeys(password);

        // Click on the submit button
        const submitButton = await driver.findElement(By.id('loginbtn'));
        await submitButton.click();

        // Wait for the error message to appear
        const errorMessageElement = await driver.wait(until.elementLocated(By.id('error-message')), 10000);

        // Get the error message text
        const errorMessage = await errorMessageElement.getText();

        // Print the error message
        console.log('Error message:', errorMessage);

    } catch (error) {
        // Handle any errors
        console.error('An error occurred:', error);
    } finally {
        // Quit the driver
       
    }
}

// Call the function to execute the script
validatePassword();


