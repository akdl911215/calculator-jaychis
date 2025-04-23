// src/hooks/useCalculator.ts
import { useState } from "react"

export function useCalculator() {
  const [display, setDisplay] = useState("0")
  const [storedValue, setStoredValue] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const performCalculation = (a: number, b: number, op: string) => {
    switch (op) {
      case "+": return a + b
      case "-": return a - b
      case "*": return a * b
      case "/": return a / b
      default:  return b
    }
  }

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(prev => (prev === "0" ? digit : prev + digit))
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (!display.includes(".")) {
      setDisplay(prev => prev + ".")
    }
  }

  const clearDisplay = () => {
    setDisplay("0")
    setWaitingForOperand(false)
  }

  const clearAll = () => {
    setDisplay("0")
    setStoredValue(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  const handleOperator = (nextOp: string) => {
    const value = parseFloat(display)
    if (storedValue === null) {
      setStoredValue(value)
    } else if (operator) {
      const result = performCalculation(storedValue, value, operator)
      setDisplay(String(result))
      setStoredValue(result)
    }
    setWaitingForOperand(true)
    setOperator(nextOp)
  }

  const calculateResult = () => {
    if (storedValue !== null && operator) {
      const value = parseFloat(display)
      const result = performCalculation(storedValue, value, operator)
      setDisplay(String(result))
      setStoredValue(null)
      setOperator(null)
      setWaitingForOperand(true)
    }
  }

  return {
    display,
    inputDigit,
    inputDecimal,
    clearAll,
    clearDisplay,
    handleOperator,
    calculateResult,
  }
}
