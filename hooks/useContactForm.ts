"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

export function useContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  function updateField(
    field: keyof FormData,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Введите имя";
    }

    const digits = form.phone.replace(/\D/g, "");

    if (digits.length !== 11) {
      nextErrors.phone = "Введите корректный номер телефона";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function submit() {
    if (!validate()) {
      return false;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        message: "",
      });

      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    form,
    errors,
    loading,
    success,
    updateField,
    submit,
  };
}
