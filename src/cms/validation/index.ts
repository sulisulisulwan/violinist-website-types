import { initialFormStates } from "../states"

interface validationObjIF {
  isValid: boolean
  errorMessage: null | string
}

type validator = (form: initialFormStates) => validationObjIF

export {
  validator,
  validationObjIF
}