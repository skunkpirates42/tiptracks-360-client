export const required = value => value ? undefined : 'Required';
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value => value.trim() === value ? undefined : 'Cannot start or end with a whitespace';
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} chatachers long`
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} chatachers long`
  }
};
export const matches = field => (value, allValues) => 
  field in allValues && value.trim() === allValues[field].trim()
  ? undefined
  : 'Does not match';
