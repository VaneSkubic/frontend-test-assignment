import { helper as buildHelper } from '@ember/component/helper';

export function ifEquals([string1, string2]) {
  return string1 === string2;
}

export default buildHelper(ifEquals);
