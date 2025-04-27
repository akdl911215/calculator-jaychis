import { Divide, X, Minus, Plus } from "lucide-react";
import Button from "./Button";

type Props = {
  inputDigit(d: string): void;
  inputDecimal(): void;
  clearAll(): void;
  clearDisplay(): void;
  handleOperator(op: string): void;
  calculateResult(): void;
  handlePercent(): void;
  handleGT(): void;
  clearGT(): void;
};

export default function ButtonPanel({
  inputDigit,
  inputDecimal,
  clearAll,
  clearDisplay,
  handleOperator,
  calculateResult,
  handlePercent,
  handleGT,
  clearGT,
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {/* ─── GT 버튼과 GT Clear 버튼 ─── */}
      <Button variant="primary" className="col-span-3 mt-1" onClick={handleGT}>
        GT
      </Button>
      <Button variant="danger" className="mt-1" onClick={clearGT}>
        GT Clear
      </Button>

      {/* ─── Top row ─── */}
      <Button variant="primary" onClick={clearAll}>
        AC
      </Button>
      <Button variant="primary" onClick={clearDisplay}>
        C
      </Button>
      <Button variant="operator" onClick={handlePercent}>
        %
      </Button>
      <Button variant="operator" onClick={() => handleOperator("/")}>
        <Divide className="h-5 w-5" />
      </Button>

      {/* ─── Digit rows ─── */}
      {[7, 8, 9].map((n) => (
        <Button
          key={n}
          variant="digit"
          onClick={() => inputDigit(n.toString())}
        >
          {n}
        </Button>
      ))}
      <Button variant="operator" onClick={() => handleOperator("*")}>
        <X className="h-5 w-5" />
      </Button>

      {[4, 5, 6].map((n) => (
        <Button
          key={n}
          variant="digit"
          onClick={() => inputDigit(n.toString())}
        >
          {n}
        </Button>
      ))}
      <Button variant="operator" onClick={() => handleOperator("-")}>
        <Minus className="h-5 w-5" />
      </Button>

      {[1, 2, 3].map((n) => (
        <Button
          key={n}
          variant="digit"
          onClick={() => inputDigit(n.toString())}
        >
          {n}
        </Button>
      ))}
      <Button variant="operator" onClick={() => handleOperator("+")}>
        <Plus className="h-5 w-5" />
      </Button>

      {/* ─── Bottom row ─── */}
      <Button
        variant="digit"
        className="col-span-2"
        onClick={() => inputDigit("0")}
      >
        0
      </Button>
      <Button variant="digit" onClick={inputDecimal}>
        .
      </Button>
      <Button variant="equal" onClick={calculateResult}>
        =
      </Button>
    </div>
  );
}
