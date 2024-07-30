import React from 'react'
import css from './CalculatorButtons.module.css'


function CalculatorButtons({onButtonClick}) {
  let calcbutton = ['C', '1', '2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={css.calculatorButtons}> 
      { calcbutton.map((button) =>
          <button key={button} className={css.calculatorButton} onClick={()=>onButtonClick(button)}>{button}</button>
      ) }
    </div>
  )
}

export default CalculatorButtons;
