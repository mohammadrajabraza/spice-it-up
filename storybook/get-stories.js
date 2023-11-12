/* eslint-disable global-require */
export default function getStories() {
  return [
    require('../src/components/Button/button.stories'),
    require('../src/components/PhoneInput/phone-input.stories'),
    require('../src/components/Calendar/calendar.stories'),
    require('../src/components/Radio/radio.stories'),
    require('../src/components/Counter/counter.stories'),
    require('../src/components/Typography/typography.stories'),
    require('../src/components/Search/search.stories'),
  ];
}
