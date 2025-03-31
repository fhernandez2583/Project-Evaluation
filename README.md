# Project-Evaluation

The evaluation will have the user input the cashflows for a project to receive the NPV and MIRR

## The rating is taking into account the NPV and MIRR the calculate the rating:

* NPV will be calculated:
  * By using the cash flow of project revenue and expense
  * Initial expense to start the project
  * Discount rate or WACC (weighted average cost of capital)
    * If no WACC the discount rate of 4.5% will be used
      
* MIRR will be calculated:
  * By using the cash flow of project revenue and expense
  * Initial expense to start the project
  * Discount rate or WACC
  * Reinvest rate of 2% from a treasury bond

## Validating Data

* When validating the NPV in excel use the put the cashflow data in the NPV formula then subtract the initial expense
    * NPV(cashflow by years) - Initial Investment
* The formula for the Modified IRR is
    * MIRR(cashflow by years, Discount rate or WACC, treasury bond)
