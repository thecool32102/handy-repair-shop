"use client";

import React from "react";

export default function Impressum() {
  return (
    <div className="bg-[#0b1320] text-[#e5e7eb] min-h-screen font-sans">
    <a href="/">
      <header className="sticky top-0 z-50 bg-[#0b1320]/70 backdrop-blur border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 shadow-md" />
            FixMobil
          </div>
        </div>
      </header>
    </a>

      <main className="container mx-auto py-16 px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>FixMobil Handy Reparatur</p>
          <p>Inhaber: Paul Hinrichs</p>
          <p>Adresse: Musterstraße 1, 12345 Berlin</p>
          <p>Telefon: 0151 1234567</p>
          <p>E-Mail: info@fixmobil.de</p>
          <p>Umsatzsteuer-ID: DE123456789</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>Paul Hinrichs</p>
        </section>

        <section>
          <p className="text-sm text-[#9fb0c7] mt-4">
            Hinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 px-4 text-[#a7b2c4] text-sm">
        <div className="container mx-auto flex justify-between">
          <p>© {new Date().getFullYear()} FixMobil. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:underline">Datenschutz</a>
            <a href="/agb" className="hover:underline">AGB</a>
            <a href="/impressum" className="hover:underline">Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
