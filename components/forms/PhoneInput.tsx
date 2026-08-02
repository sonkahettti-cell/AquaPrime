"use client";

import InputMask from "react-input-mask";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function PhoneInput({
  value,
  onChange,
  error,
}: PhoneInputProps) {
  return (
    <div className="space-y-2">

      <InputMask
        mask="+7 (999) 999-99-99"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {(inputProps: any) => (
          <input
            {...inputProps}
            type="tel"
            placeholder="+7 (___) ___-__-__"
            className={[
              "w-full rounded-2xl border bg-white px-5 py-4",
              "text-slate-900 placeholder:text-slate-400",
              "transition-all duration-300",
              "outline-none",
              error
                ? "border-red-400 focus:border-red-500"
                : "border-slate-300 focus:border-cyan-500",
            ].join(" ")}
          />
        )}
      </InputMask>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}
