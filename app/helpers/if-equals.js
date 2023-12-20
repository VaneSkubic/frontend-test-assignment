import Ember from 'ember';

export function ifEquals([string1, string2]) {
  return string1 === string2;
}

export default Ember.Helper.helper(ifEquals);
