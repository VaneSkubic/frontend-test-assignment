import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function colorNumber([value]) {
  let className;

  if (value[0] == '-') {
    className = 'negative';
  } else if (value === '0') {
    className = 'zero';
    value = '•';
  } else {
    className = 'positive';
  }

  return htmlSafe(`<span class="${className}">${value.replace('-', '')}</span>`);
}

export default buildHelper(colorNumber);
