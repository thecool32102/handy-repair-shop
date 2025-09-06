"use client";

import React from "react";

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <p>Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns wichtig.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Verantwortlicher</h2>
        <p>
          Firma: FixMobil Handy Reparatur <br />
          Inhaber: Paul Hinrichs <br />
          Adresse: Lupsteiner Weg 16, 14165 Berlin <br />
          E-Mail: fixmobilerepairs@gmail.com
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Wir verarbeiten personenbezogene Daten, die Sie uns im Rahmen einer Anfrage über das Kontaktformular (z. B. Name, Telefonnummer, E-Mail, Gerät, Problem) mitteilen. Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Nutzung von EmailJS</h2>
        <p>
          Wir verwenden EmailJS, um Kontaktformulare zu verarbeiten. Dabei werden die von Ihnen eingegebenen Daten an die Server von EmailJS übertragen. EmailJS hat seinen Sitz in den USA. Wir haben mit EmailJS einen Auftragsverarbeitungsvertrag abgeschlossen.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Rechte der Betroffenen</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an die oben angegebene Adresse.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Speicherung</h2>
        <p>Ihre Daten werden nur solange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist und darüber hinaus für die Dauer der Garantie auf die durchgeführten Reparaturen.
</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Sicherheit</h2>
        <p>
          Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust, Missbrauch oder unberechtigtem Zugriff zu schützen.
        </p>
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
