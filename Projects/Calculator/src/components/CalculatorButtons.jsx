import React from 'react'
import css from './CalculatorButtons.module.css'


function CalculatorButtons({calitems}) {
  return (
    <div className={css.calculatorButtons}> 
      { calitems.map((button) =>
          <button key={button} className={css.calculatorButton}>{button}</button>
      ) }
    </div>
  )
}

export default CalculatorButtons;
