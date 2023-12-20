import Ember from 'ember';

export function formatNumber([value, ...rest]) {
  if (value === null || value === undefined || value === '') {
    return '/';
  }

  if (value == 'appeared') {
    value = '∞'
  } else if (value == 'disappeared') {
    value = '-∞'
  }
  else if (!Number.isInteger(value)) {
    value = parseFloat(value.toFixed(1));
  }

  if (value >= 1000000000) {
    return formatLargeNumber(value, 1e9, 'B');
  }

  if (value >= 1000000) {
    return formatLargeNumber(value, 1e6, 'M');
  }

  if (value >= 1000) {
    return formatLargeNumber(value, 1000, 'K');
  }

  return value.toString();
}

function formatLargeNumber(value, divisor, suffix) {
  let formattedValue = (value / divisor).toFixed(1);
  if (formattedValue.endsWith('.0')) {
    formattedValue = Math.round(formattedValue).toString();
  }
  return `${formattedValue}${suffix}`;
}

export default Ember.Helper.helper(formatNumber);
