// eslint-disable-next-line no-undef
Feature('Abuse IP Table');

// eslint-disable-next-line no-undef
Scenario('navigating to /input a valid value and Abuse IP feed table shows', I => {
  I.amOnPage('/');
  I.waitForElement('.bx--text-input', 10);
  I.see('Central Threat Intelligence App');
  I.fillField('.bx--text-input', '1.2.3.4');
  I.waitForText('AbuseIP Feed', 10);
  I.see('IP Address');
  I.see('Public?');
  I.see('Version');
  I.see('Whitelisted?');
  I.see('Abuse Confidence Score');
  I.see('Usage Type');
  I.see('Domain');
});
