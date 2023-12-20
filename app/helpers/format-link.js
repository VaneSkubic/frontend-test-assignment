import { helper as buildHelper } from '@ember/component/helper';

export function formatLink([value]) {
  if (value == null) {
    value = '-';
  } else if (value == '/') {
    value = '/ (index)';
  }

  return value;
}

export default buildHelper(formatLink);
