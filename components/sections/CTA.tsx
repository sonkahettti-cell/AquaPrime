"use client";

import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { contacts } from "@/data/contacts";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formStartedAt] = useState(Date.now());

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot
    const honeypot = formData.get("website");

    if (honeypot) {
      setLoading(false);
      return;
    }

    // Проверка времени заполнения
    const fillTime = Date.now() - formStartedAt;

    if (fillTime < 3000) {
      setStatus("Слишком быстро. Попробуйте ещё раз.");
      setLoading(false);
      return;
    }

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      startedAt: formStartedAt,
    };

    try {
      const response = await fetch(
  "https://aquaprime-telegram.sonkahettti.workers.dev/",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
);

const result = await response.json();

if (!response.ok) {
  console.error(result);
  throw new Error(result.error || "Worker error");
}

      setStatus(
        "Спасибо! Мы получили заявку и свяжемся с вами в ближайшее время."
      );

      form.reset();
    } catch {
      setStatus("Ошибка отправки. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contacts" background="dark">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <FadeIn>
            <div>

              <span className="inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
                Бесплатная консультация
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Подберём систему
                <br />
                именно для вашей воды
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Оставьте заявку — мы свяжемся с вами,
                ответим на все вопросы и предложим
                оптимальное решение именно под вашу воду.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                  <Phone
                    size={22}
                    className="text-cyan-400"
                  />

                  <span className="font-medium text-white">
                    {contacts.phone}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <MessageCircle
                    size={22}
                    className="text-cyan-400"
                  />

                  <div className="flex gap-5">

                    <a
                      href={contacts.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white transition hover:text-cyan-400"
                    >
                      WhatsApp
                    </a>

                    <a
                      href={contacts.max}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white transition hover:text-cyan-400"
                    >
                      MAX
                    </a>

                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Send
                    size={22}
                    className="text-cyan-400"
                  />

                  <span className="font-medium text-white">
                    Обычно отвечаем в течение 15 минут
                  </span>
                </div>

              </div>

            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Card className="rounded-3xl border-0 bg-white p-8 shadow-2xl lg:p-10">

              <h3 className="text-3xl font-bold text-[#0B2E59]">
                Получить консультацию
              </h3>

              <p className="mt-3 text-slate-600">
                Заполните форму — мы свяжемся с вами,
                проконсультируем и бесплатно подберём
                подходящую систему очистки воды.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                <input
                  name="name"
                  required
                  placeholder="Ваше имя"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
                />

                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Телефон"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Комментарий (необязательно)"
                  className="w-full resize-none rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
                />

                <input
                  name="website"
                  type="text"
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {loading
                    ? "Отправка..."
                    : "Получить консультацию"}
                </Button>

              </form>

              {status && (
                <p className="mt-6 text-center text-sm font-medium text-cyan-700">
                  {status}
                </p>
              )}

            </Card>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
}
