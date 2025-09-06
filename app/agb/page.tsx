"use client";

import React from "react";

export default function AgbPage() {
  return (
    <div className="bg-[#0b1320] text-[#e5e7eb] min-h-screen font-sans">
      <link />
        <header className="sticky top-0 z-50 bg-[#0b1320]/70 backdrop-blur border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <div className="flex items-center gap-2 font-extrabold text-lg">
            
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 shadow-md" />
            FixMobil
          </div>
          
        </div>
        
      </header>

      <main className="container mx-auto py-16 px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen FixMobil Handy Reparatur und Kunden im Bereich Handy-Reparatur abgeschlossen werden.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Leistungen</h2>
        <p>
          Wir bieten Reparaturen von Smartphones, Tablets und Kleinelektronik nach bestem Wissen und Gewissen an. Alle Preise werden vor Beginn der Reparatur mitgeteilt.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Preise und Zahlung</h2>
        <p>
          Alle angegebenen Preise sind Endpreise in Euro. Die Zahlung erfolgt per Überweisung oder nach Vereinbarung.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Haftung</h2>
        <p>
          Wir übernehmen keine Haftung für Datenverlust. Kunden sind selbst dafür verantwortlich, ihre Daten vor der Reparatur zu sichern.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Gewährleistung</h2>
        <p>Auf durchgeführte Reparaturen geben wir eine Garantie von 6 Monaten, soweit nicht anders vereinbart. Die Garantie gilt ausschließlich für die durchgeführten Reparaturen. Schäden, die durch äußere Einflüsse wie Stürze, Wasserschäden oder unsachgemäße Nutzung entstanden sind, fallen nicht unter die Garantie.
</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Widerrufsrecht</h2>
        <p>
          Da es sich bei Reparaturen um Dienstleistungen handelt, beginnt die Ausführung mit ausdrücklicher Zustimmung des Kunden. Ein Widerrufsrecht erlischt, sobald die Dienstleistung vollständig erbracht wurde.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Gerichtsstand</h2>
        <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Berlin.</p>
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
