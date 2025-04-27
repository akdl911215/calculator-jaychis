import { useState } from "react";

export function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<number[]>([]);

  const performCalculation = (a: number, b: number, op: string) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return b;
    }
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay((prev) => (prev === "0" ? digit : prev + digit));
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (!display.includes(".")) {
      setDisplay((prev) => prev + ".");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setWaitingForOperand(false);
  };

  const clearAll = () => {
    setDisplay("0");
    setStoredValue(null);
    setOperator(null);
    setWaitingForOperand(false);
    setHistory([]); // 전체 초기화할 때 history도 초기화
  };

  const handleOperator = (nextOp: string) => {
    const value = parseFloat(display);
    if (storedValue === null) {
      setStoredValue(value);
    } else if (operator) {
      const result = performCalculation(storedValue, value, operator);
      setDisplay(String(result));
      setStoredValue(result);
    }
    setWaitingForOperand(true);
    setOperator(nextOp);
  };

  const calculateResult = () => {
    if (history.length > 0) {
      // ★ GT 기능: history 합산
      const total = history.reduce((sum, x) => sum + x, 0);
      setDisplay(String(total));
      setHistory([]); // 합산 끝나면 history 초기화
      setStoredValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    } else if (storedValue !== null && operator) {
      const value = parseFloat(display);
      const result = performCalculation(storedValue, value, operator);
      setDisplay(String(result));
      setStoredValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const handleGT = () => {
    let value = parseFloat(display);

    if (storedValue !== null && operator) {
      // 연산이 남아있으면 미리 계산해서 결과를 저장
      value = performCalculation(storedValue, value, operator);
      setStoredValue(null);
      setOperator(null);
    }

    setHistory((prev) => [...prev, value]); // 계산된 값을 history에 추가
    setDisplay(String(value)); // display를 계산된 값으로 업데이트
    setWaitingForOperand(true);
  };

  const clearGT = () => {
    setHistory([]); // GT 저장된 값만 초기화
  };

  const handlePercent = () => {
    const current = parseFloat(display);
    if (operator && storedValue !== null) {
      const result = performCalculation(
        storedValue,
        storedValue * (current / 100),
        operator
      );
      setDisplay(String(result));
      setStoredValue(result);
    } else {
      setDisplay(String(current / 100));
    }
    setWaitingForOperand(true);
  };

  return {
    display,
    inputDigit,
    inputDecimal,
    clearAll,
    clearDisplay,
    handleOperator,
    calculateResult,
    handlePercent,
    handleGT,
    clearGT,
  };
}
