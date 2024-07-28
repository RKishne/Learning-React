import React from 'react'
import css from './CalculatorInput.module.css'

function CalculatorInput() {
  return (
    <input className={`${css.calculatorInput} form-control`} type="text" name="calculationText" id="calculationText" />
  )
}

export default CalculatorInput
