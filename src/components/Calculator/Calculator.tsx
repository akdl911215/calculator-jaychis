// src/components/Calculator/Calculator.tsx
"use client"
import Display     from "./Display"
import ButtonPanel from "./ButtonPanel"
import { useCalculator } from "@/hooks/useCalculator"

export default function Calculator() {
  const {
    display,
    inputDigit,
    inputDecimal,
    clearAll,
    clearDisplay,
    handleOperator,
    calculateResult,
    handlePercent,
    handleGT,         
  } = useCalculator()

  return (
    <div className="w-full max-w-md">
      <div className="bg-[#2a1a0a] rounded-t-lg p-6 shadow-[0_0_15px_rgba(0,0,0,0.3)] border-b-4 border-[#8B4513]">
        <div className="text-right font-serif text-3xl text-amber-100 mb-2 opacity-70">
          Vintage Jaychis Calculator
        </div>

        <Display value={display} />

        <ButtonPanel
          inputDigit={inputDigit}
          inputDecimal={inputDecimal}
          clearAll={clearAll}
          clearDisplay={clearDisplay}
          handleOperator={handleOperator}
          calculateResult={calculateResult}
          handlePercent={handlePercent}    // ← pass it in
          handleGT={handleGT}              // ← and it here
        />
      </div>
      <div className="h-6 bg-[#2a1a0a] rounded-b-lg opacity-80 shadow-[0_5px_15px_rgba(0,0,0,0.3)] border-t border-[#8B4513]"></div>
    </div>
  )
}
