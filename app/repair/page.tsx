"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function RepairForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5zozeed", // deine Service ID
        "template_6rhroeu", // deine Template ID
        e.currentTarget,
        "eLl7U9F8ZD0kLLejq" // Public Key
      )
      .then(
        () => setStatus("✅ Reparaturauftrag wurde gesendet."),
        () => setStatus("❌ Fehler beim Senden, bitte erneut versuchen.")
      );

    e.currentTarget.reset();
  };

  return (
<main className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md my-10 text-black">
      <h1 className="text-2xl font-bold mb-6">Reparaturauftrag</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Kundendaten */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Max Mustermann"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="max@example.com"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="0151 1234567"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Straße, PLZ, Stadt"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Geräteinformationen */}
        <div>
          <label htmlFor="device">Gerät*</label>
          <input
            type="text"
            id="device"
            name="device"
            required
            placeholder="z. B. iPhone 12"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="serial">Seriennummer / Modell</label>
          <input
            type="text"
            id="serial"
            name="serial"
            placeholder="Optional"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="problem">Problembeschreibung*</label>
          <textarea
            id="problem"
            name="problem"
            rows={4}
            required
            placeholder="Bitte kurz das Problem beschreiben"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="price">Vereinbarter Preis</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Optional"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Einverständnisse */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" required />
            Ich akzeptiere die{" "}
            <a href="/privacy" className="text-blue-600 underline">
              Datenschutzhinweise
            </a>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" required />
            Ich habe den Haftungsausschluss gelesen und akzeptiere, dass die Garantie erlischt,
            wenn Schäden nicht durch FixMobil verursacht wurden (z. B. Sturz, Wasserschaden).
          </label>
        </div>

        {/* Digitale Unterschrift */}
        <div>
          <label htmlFor="signature">Name zur Bestätigung*</label>
          <input
            type="text"
            id="signature"
            name="signature"
            required
            placeholder="Ihr Name als digitale Unterschrift"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Absenden */}
        <button
          type="submit"
          className="px-5 py-3 bg-blue-600 text-white rounded font-bold shadow"
        >
          Reparaturauftrag senden
        </button>

        {status && <p className="mt-2 text-sm">{status}</p>}
      </form>
    </main>
  );
}
