import Ember from 'ember';

export function formatNumber([value, ...rest]) {
  let className;

  if (value[0] == '-') {
    className = 'negative';
  } else if (value === '0') {
    className = 'zero';
    value = '•'
  } else {
    className = 'positive';
  }


  return `<span class="${className}">${value.replace('-', '')}</span>`;
}

export default Ember.Helper.helper(formatNumber);
