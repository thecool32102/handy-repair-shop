"use client"; // Muss ganz oben stehen, damit useState in Next.js App Router funktioniert

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5zozeed", // deine Service ID
        "template_6rhroeu", // deine Template ID
        e.currentTarget,
        "eLl7U9F8ZD0kLLejq" // dein Public Key (API Key)
      )
      .then(
        () => setStatus("✅ Danke. Wir melden uns zeitnah."),
        () => setStatus("❌ Fehler beim Senden, bitte erneut versuchen.")
      );

    e.currentTarget.reset();
  };

  return (
    <div className="bg-[#0b1320] text-[#e5e7eb] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0b1320]/70 backdrop-blur border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 shadow-md" />
            FixMobil
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#leistungen">Leistungen</a>
            <a href="#preise">Preise</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a
            href="#kontakt"
            className="px-4 py-2 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-[#081018] font-bold shadow-md"
          >
            Jetzt Termin sichern
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Handy kaputt? Wir machen es wieder fit.
            </h1>
            <p className="text-lg text-[#cdd6e3] max-w-2xl">
              Display gebrochen, Akku schwach, Ladebuchse locker, Wasserschaden. Wir
              reparieren iPhone, Samsung, Xiaomi und mehr – schnell und unkompliziert.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                className="px-5 py-3 rounded-xl font-bold bg-gradient-to-br from-sky-500 to-cyan-400 text-[#081018] shadow-md"
                href="#preise"
              >
                Preise ansehen
              </a>
              <a
                className="px-5 py-3 rounded-xl font-bold border border-white/20"
                href="#kontakt"
              >
                Kostenlose Diagnose
              </a>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow">
                <h3 className="font-bold mb-2">Display Reparatur</h3>
                <p>Kratzer, Risse oder kein Bild. Wir verbauen hochwertige Ersatzteile.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow">
                <h3 className="font-bold mb-2">Akkutausch</h3>
                <p>
                  Neuer Akku für volle Laufzeit. Mit Kapazitätstest und Entsorgung des
                  Altakkus.
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow">
                <h3 className="font-bold mb-2">Ladebuchse & Audio</h3>
                <p>
                  Reinigung und Tausch von Ports und Lautsprechern. Viele Probleme sind in
                  20 Minuten gelöst.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preise */}
        <section id="preise" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Beispielpreise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow">
                <h3 className="font-bold">iPhone 11 Display</h3>
                <p className="font-extrabold text-xl">ab 89 €</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow">
                <h3 className="font-bold">Samsung S20 Akku</h3>
                <p className="font-extrabold text-xl">ab 49 €</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow">
                <h3 className="font-bold">USB-C Ladebuchse</h3>
                <p className="font-extrabold text-xl">ab 59 €</p>
              </div>
            </div>
            <p className="text-sm text-[#9fb0c7] mt-3">
              Preise variieren je nach Modell. Endpreis nach Diagnose.
            </p>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">So läuft es ab</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-sky-500/30 font-bold grid place-items-center">
                  1
                </div>
                <div>
                  <strong>Kontakt</strong>
                  <p>Schreib uns per WhatsApp oder nutze das Formular und beschreibe kurz dein Problem.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-sky-500/30 font-bold grid place-items-center">
                  2
                </div>
                <div>
                  <strong>Diagnose</strong>
                  <p>Du erhältst ein Festpreisangebot.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-sky-500/30 font-bold grid place-items-center">
                  3
                </div>
                <div>
                  <strong>Reparatur</strong>
                  <p>Meist am selben Tag. Mit Garantie und Rechnung.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Kontakt aufnehmen</h2>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Max Mustermann"
                      className="w-full p-3 rounded-xl bg-[#0a1220] border border-white/20"
                    />
                            <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="max@example.com"
            className="w-full p-3 rounded-xl bg-[#0a1220] border border-white/20"
          />
        </div>
                  </div>
                  <div>
                    <label htmlFor="phone">Telefon</label>
                    <input
                      id="phone"
                      name="phone"
                      placeholder="0151 1234567"
                      className="w-full p-3 rounded-xl bg-[#0a1220] border border-white/20"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="device">Gerät</label>
                    <input
                      id="device"
                      name="device"
                      required
                      placeholder="z. B. iPhone 12"
                      className="w-full p-3 rounded-xl bg-[#0a1220] border border-white/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="issue">Problem</label>
                    <select
                      id="issue"
                      name="issue"
                      required
                      className="w-full p-3 rounded-xl bg-[#0a1220] border border-white/20"
                    >
                      <option value="">Bitte wählen</option>
                      <option>Display</option>
                      <option>Akkutausch</option>
                      <option>Ladebuchse</option>
                      <option>Wasserschaden</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Beschreibe kurz das Problem und wie es geschehen ist."
                    rows={4}
                    className="w-full p-3 rounded-xl bg-[#0a1220] border border-white/20"
                  />
                </div>
                <label className="text-sm flex gap-2">
                  <input type="checkbox" required /> Ich akzeptiere die
                  Datenschutzhinweise
                </label>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl font-bold bg-gradient-to-br from-sky-500 to-cyan-400 text-[#081018] shadow-md"
                >
                  Anfrage senden
                </button>
                {status && <p className="text-sm mt-2">{status}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-[#a7b2c4] text-sm">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <strong>FixMobil Handy Reparatur</strong>
            <p>© {new Date().getFullYear()} FixMobil. Alle Rechte vorbehalten.</p>
          </div>
          <div>
            <strong>Rechtliches</strong>
            <p>
              <a href="#">Impressum</a> • <a href="#">Datenschutz</a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/4915787931836"
        target="_blank"
        className="fixed right-4 bottom-4 bg-[#25D366] text-[#081018] px-4 py-3 rounded-full font-bold shadow-md"
      >
        WhatsApp
      </a>
    </div>
  );
}
