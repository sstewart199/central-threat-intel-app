// eslint-disable-next-line no-undef
Feature('Map');

// eslint-disable-next-line no-undef
Scenario('navigating to /input a valid value and confirm the map shows`', I => {
  I.amOnPage('/');
  I.waitForElement('.bx--text-input', 10);
  I.see('Central Threat Intelligence App');
  I.fillField('.bx--text-input', '1.2.3.4');
  I.waitForElement('.js-plotly-plot', 10);
  I.see('Country: Australia');
});
