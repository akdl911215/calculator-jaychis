import { Divide, X, Minus, Plus } from "lucide-react"
import Display from "@/components/Calculator/Display"
import Button from "@/components/Calculator/Button"
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
  } = useCalculator()

  return (
    <div className="w-full max-w-md">
      <div className="bg-[#2a1a0a] rounded-t-lg p-6 shadow-[0_0_15px_rgba(0,0,0,0.3)] border-b-4 border-[#8B4513]">
        <div className="text-right font-serif text-3xl text-amber-100 mb-2 opacity-70">Vintage Calculator</div>
        <Display value={display} />
        <div className="grid grid-cols-4 gap-3">
          <Button variant="primary" onClick={clearAll} className="col-span-2">AC</Button>
          <Button variant="primary" onClick={clearDisplay}>C</Button>
          <Button variant="operator" onClick={() => handleOperator("/")}><Divide className="h-5 w-5" /></Button>

          {[7,8,9].map(n => <Button key={n} variant="digit" onClick={() => inputDigit(n.toString())}>{n}</Button>)}
          <Button variant="operator" onClick={() => handleOperator("*")}><X className="h-5 w-5" /></Button>

          {[4,5,6].map(n => <Button key={n} variant="digit" onClick={() => inputDigit(n.toString())}>{n}</Button>)}
          <Button variant="operator" onClick={() => handleOperator("-")}><Minus className="h-5 w-5" /></Button>

          {[1,2,3].map(n => <Button key={n} variant="digit" onClick={() => inputDigit(n.toString())}>{n}</Button>)}
          <Button variant="operator" onClick={() => handleOperator("+")}><Plus className="h-5 w-5" /></Button>

          <Button variant="digit" onClick={() => inputDigit("0")} className="col-span-2">0</Button>
          <Button variant="digit" onClick={inputDecimal}>.</Button>
          <Button variant="equal" onClick={calculateResult}>=</Button>
        </div>
      </div>
      <div className="h-6 bg-[#2a1a0a] rounded-b-lg opacity-80 shadow-[0_5px_15px_rgba(0,0,0,0.3)] border-t border-[#8B4513]"></div>
    </div>
  )
}