import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

import { contacts } from "@/data/contacts";

export default function Contacts() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        Контакты
      </h3>

      <div className="space-y-5">

        {/* Телефон */}

        <Link
          href={contacts.phoneHref}
          className="group flex items-start gap-4"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 transition-colors duration-300 group-hover:bg-cyan-500/20">
            <Phone className="h-5 w-5 text-cyan-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Телефон
            </p>

            <p className="transition-colors duration-300 group-hover:text-cyan-400">
              {contacts.phone}
            </p>
          </div>
        </Link>

        {/* Email */}

        <Link
          href={`mailto:${contacts.email}`}
          className="group flex items-start gap-4"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 transition-colors duration-300 group-hover:bg-cyan-500/20">
            <Mail className="h-5 w-5 text-cyan-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Email
            </p>

            <p className="transition-colors duration-300 group-hover:text-cyan-400">
              {contacts.email}
            </p>
          </div>
        </Link>

        {/* Регион */}

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
            <MapPin className="h-5 w-5 text-cyan-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Регион работы
            </p>

            <p>{contacts.address}</p>
          </div>
        </div>

        {/* MAX и WhatsApp */}

        <div className="flex gap-3 pt-3">

          <Link
            href={contacts.max}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            MAX
          </Link>

          <Link
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-cyan-500 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            <MessageCircle size={16} />
            WhatsApp
          </Link>

        </div>

      </div>
    </div>
  );
}
