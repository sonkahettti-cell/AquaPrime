"use client";

import { CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import PhoneInput from "./PhoneInput";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactForm() {
  const {
    form,
    errors,
    loading,
    success,
    updateField,
    submit,
  } = useContactForm();

  if (success) {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-10 text-center">

        <CheckCircle2
          className="mx-auto text-green-500"
          size={56}
        />

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Спасибо!
        </h3>

        <p className="mt-3 text-slate-600">
          Ваша заявка успешно отправлена.
        </p>

        <p className="text-slate-600">
          Мы свяжемся с вами в ближайшее время.
        </p>

      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      {/* Name */}

      <div className="space-y-2">

        <input
          type="text"
          placeholder="Ваше имя"
          value={form.name}
          onChange={(e) =>
            updateField("name", e.target.value)
          }
          className={[
            "w-full rounded-2xl border bg-white px-5 py-4",
            "outline-none transition-all",
            errors.name
              ? "border-red-400"
              : "border-slate-300 focus:border-cyan-500",
          ].join(" ")}
        />

        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name}
          </p>
        )}

      </div>

      {/* Phone */}

      <PhoneInput
        value={form.phone}
        onChange={(value) =>
          updateField("phone", value)
        }
        error={errors.phone}
      />

      {/* Message */}

      <div className="space-y-2">

        <textarea
          rows={5}
          placeholder="Комментарий (необязательно)"
          value={form.message}
          onChange={(e) =>
            updateField("message", e.target.value)
          }
          className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-cyan-500"
        />

      </div>

      {/* Submit */}

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading
          ? "Отправка..."
          : "Получить консультацию"}
      </Button>

    </form>
  );
}
