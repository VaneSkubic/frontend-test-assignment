import Ember from 'ember';

export function formatNumber([value, ...rest]) {
  if (value == null) {
    value = '-';
  } else if (value == '/') {
    value = '/ (index)';
  }

  return value;
}

export default Ember.Helper.helper(formatNumber);
