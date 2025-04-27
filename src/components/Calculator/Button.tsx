// src/components/Button.tsx

import React from "react";

// ① Variant 타입만 따로 선언
type Variant = "primary" | "operator" | "digit" | "equal" | "danger";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant; // undefined 허용하되, 내부에선 디폴트 처리
};

export default function Button({
  variant = "digit", // ② default 지정
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "font-serif py-4 rounded-md shadow-md border border-amber-900 transition-colors transition-transform duration-150 active:scale-95 flex items-center justify-center";

  // ③ Record 키로 Variant만 사용
  const variants: Record<Variant, string> = {
    primary: "bg-[#8B4513] text-amber-100 hover:bg-[#6d3710]",
    operator: "bg-[#a67c52] text-amber-100 hover:bg-[#8d6a46]",
    digit: "bg-[#d4b483] text-[#2a1a0a] hover:bg-[#c0a475]",
    equal: "bg-[#8B4513] text-amber-100 hover:bg-[#6d3710]",
    danger:
      "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 active:scale-95", // ★ 추가
  };

  return (
    <button
      className={[base, variants[variant], className].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
