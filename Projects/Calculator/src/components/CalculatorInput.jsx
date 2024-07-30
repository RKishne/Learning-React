import React from 'react'
import css from './CalculatorInput.module.css'

function CalculatorInput({displayValue}) {
  return (
    <input className={`${css.calculatorInput} form-control`} value={displayValue} type="text" name="calculationText" id="calculationText" readOnly/>
  )
}

export default CalculatorInput
