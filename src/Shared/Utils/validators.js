import Validator from 'validator';
import { validate as RutValidator } from 'rut.js';

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_NUMERIC = 'NUMERIC';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';
const VALIDATOR_TYPE_MOBILE_PHONE = 'MOBILE_PHONE';
const VALIDATOR_TYPE_RUT = 'RUT';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_NUMERIC = () => ({ type: VALIDATOR_TYPE_NUMERIC });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val) => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = (val) => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_MOBILE_PHONE = () => ({ type: VALIDATOR_TYPE_MOBILE_PHONE });
export const VALIDATOR_RUT = () => ({ type: VALIDATOR_TYPE_RUT });

export const validate = (value, validators) => {
  let isValid = true;

  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.length !== 0;
      if (validator.type === VALIDATOR_NUMERIC) {
        isValid = isValid && Validator.isNumeric(value);
      }
      if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
        isValid = isValid && value.trim().length >= validator.val;
      }
      if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
        isValid = isValid && value.trim().length <= validator.val;
      }
      if (validator.type === VALIDATOR_TYPE_MIN) {
        isValid = isValid && +value >= validator.val;
      }
      if (validator.type === VALIDATOR_TYPE_MAX) {
        isValid = isValid && +value <= validator.val;
      }
      if (validator.type === VALIDATOR_TYPE_EMAIL) {
        isValid = isValid && Validator.isEmail(value);
      }
      if (validator.type === VALIDATOR_TYPE_MOBILE_PHONE) {
        isValid = isValid && Validator.isMobilePhone(value.trim(), ['es-CL']);
      }
      if (validator.type === VALIDATOR_TYPE_RUT) {
        isValid = isValid && RutValidator(value);
      }
    } else {
      if (value.length !== 0) {
        if (validator.type === VALIDATOR_NUMERIC) {
          isValid = isValid && Validator.isNumeric(value);
        }
        if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
          isValid = isValid && value.trim().length >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
          isValid = isValid && value.trim().length <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MIN) {
          isValid = isValid && +value >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAX) {
          isValid = isValid && +value <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
          isValid = isValid && Validator.isEmail(value);
        }
        if (validator.type === VALIDATOR_TYPE_MOBILE_PHONE) {
          isValid = isValid && Validator.isMobilePhone(value.trim(), ['es-CL']);
        }
        if (validator.type === VALIDATOR_TYPE_RUT) {
          isValid = isValid && RutValidator(value);
        }
      }
    }
  }
  return isValid;
};
