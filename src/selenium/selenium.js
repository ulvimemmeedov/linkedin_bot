const {Builder,By} = require('selenium-webdriver');
const dotenv = require('dotenv');
dotenv.config();

async function RunSelenium() {
    const {email,password} = process.env;
    let driver = new Builder().forBrowser('chrome').build();
    driver.get('https://linkedin.com/');
    driver.findElement(By.id("session_key")).sendKeys(email);
    driver.findElement(By.id("session_password")).sendKeys(password);
    driver.findElement(By.className("sign-in-form__submit-button")).click();
    await driver.sleep(5000);
    setInterval(async ()=>{
        await driver.executeScript("window.scrollBy(0,1200)");
        await driver.executeScript(`
        Array.from(document.getElementsByClassName('artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger')).forEach(e=>e.click())
        `).then(() => console.log("post liked"))
    },5000)    
}

module.exports = RunSelenium;