// eslint-disable-next-line no-undef
Feature('XForce Intel Table');

// eslint-disable-next-line no-undef
Scenario('navigating to /input a valid value and x-force feed table shows', I => {
  I.amOnPage('/');
  I.waitForElement('.bx--text-input', 10);
  I.see('Central Threat Intelligence App');
  I.fillField('.bx--text-input', '1.2.3.4');
  I.waitForText('X-Force Exhange Feed', 10);
  I.see('IP Address');
  I.see('Risk Score');
  I.see('Reason');
  I.see('Reason Description');
  I.see('Country');
});
