import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validate to ensure all values do not include null, undefined, Nan or ''
 * In cases of json objects or arrays ensure non-empty and all values non-empty
 */
export function NoEmptyValuesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as any[];
    const isValid = validate(value);
    console.log('validate', value, isValid);
    const errors: ValidationErrors = { NoEmptyValuesValidator: true };
    return isValid ? null : errors;
  };
}

function validate(v: any): boolean {
  // Handle missing data types
  if ([null, undefined, '', NaN].includes(v)) return false;

  // Case arrays - ensure non-empty and every value non-empty
  if (Array.isArray(v)) {
    return v.length > 0 && v.every((el) => validate(el));
  }

  // Case json object - ensure non-empty and every value non-empty
  if (v.constructor == {}.constructor) {
    const values = Object.values(v);
    return values.length > 0 && values.every((el) => validate(el));
  }
  return true;
}
