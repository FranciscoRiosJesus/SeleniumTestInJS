const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
let should = require('chai').should();

//Mocha
describe('Google Search', function () {
  it('Google Search', async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q'))
        .sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Buscar con Google'), 1000);
      let text = await driver.findElement(By.id('result-stats')).getText();
      
      //assert using chai
      text.should.contains('Cerca de', 'resultados');
    } finally {
      await driver.quit();
    }
  })
})

/* Using assert and chai
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q'))
        .sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Buscar con Google'), 1000);
    let text = await driver.findElement(By.id('result-stats')).getText();
    console.log(text)

    //assert using node assertion
    //assert.strictEqual(text, 'Cerca de 11,500,000 resultados (0.20 segundos) ');

    //assert using chai
    text.should.equal('Cerca de 11,500,000 resultados (0.20 segundos) ');

  } finally {
    await driver.quit();
  }
})();
*/