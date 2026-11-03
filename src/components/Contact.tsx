"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTACT_EMAIL = "parraprietodavid87@gmail.com";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'es' ? "El nombre es requerido" : "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'es' ? "El correo es requerido" : "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = language === 'es' ? "Correo inválido" : "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'es' ? "El mensaje es requerido" : "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    const subject =
      language === 'es'
        ? `Mensaje de portafolio - ${formData.name}`
        : `Portfolio message - ${formData.name}`;
    const body =
      (language === 'es'
        ? `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n`
        : `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n`) +
      formData.message;

    setStatus("success");
    setTimeout(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }, 500);
  };

  const getFieldClass = (hasError: boolean) =>
    `h-14 rounded-none border-2 bg-black px-4 text-base text-white placeholder:text-zinc-600 focus:ring-0 ${
      hasError
        ? 'border-red-500 focus:border-red-500'
        : 'border-zinc-700 focus:border-[#ffd400]'
    }`;

  return (
    <section id="contact" className="scroll-mt-20 border-t-2 border-[#ffd400] bg-[#0a0a0c] py-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[9rem] leading-none text-white/[0.04] md:text-[12rem]"
          >
            07
          </span>
          <p className="eyebrow">{"// "}{t('nav.contact')}</p>
          <h2 className="display-hover relative mt-3 font-display text-5xl uppercase leading-none tracking-tight text-white md:text-7xl">
            {t('contact.title')}
          </h2>
          <span className="rule-gold mt-5" />
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Formulario */}
          <div className="lg:col-span-3">
            <Card className="rounded-none border-2 border-zinc-800 bg-[#0e0e12] p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]"
                    >
                      {t('contact.name')}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t('contact.name')}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      required
                      className={getFieldClass(!!errors.name)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-red-400" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]"
                    >
                      {t('contact.email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('contact.email')}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      required
                      className={getFieldClass(!!errors.email)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-red-400" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]"
                  >
                    {t('contact.message')}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.message')}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    required
                    className={`min-h-[180px] rounded-none border-2 bg-black px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:ring-0 ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-zinc-700 focus:border-[#ffd400]'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="h-14 w-full rounded-none border-2 border-[#ffd400] bg-[#ffd400] text-sm font-black uppercase tracking-widest text-black transition-all hover:-translate-y-1 hover:bg-black hover:text-[#ffd400]"
                >
                  {t('contact.send')} →
                </Button>

                <p className="text-center font-mono text-xs text-zinc-500">
                  {t('contact.emailNotice')}
                </p>

                {status === "success" && (
                  <p
                    className="border border-green-500 bg-green-500/10 p-3 text-center font-mono text-xs font-bold uppercase tracking-widest text-green-400"
                    role="status"
                  >
                    {language === 'es'
                      ? "Abriendo cliente de correo..."
                      : "Opening email client..."}
                  </p>
                )}
              </form>
            </Card>
          </div>

          {/* Contacto directo */}
          <div className="lg:col-span-2">
            <div className="border-2 border-[#ffd400] bg-[#ffd400] p-6 text-black md:p-8">
              <h3 className="font-display text-2xl uppercase tracking-wide md:text-3xl">
                {t('contact.directContact')}
              </h3>
              <span className="mt-3 block h-1 w-20 bg-black" />

              <div className="mt-8 space-y-6">
                <a href={`mailto:${CONTACT_EMAIL}`} className="block group">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-black/60">
                    Email
                  </p>
                  <p className="mt-1 break-all font-bold underline decoration-2 underline-offset-4 group-hover:decoration-black md:text-lg">
                    {CONTACT_EMAIL}
                  </p>
                </a>

                <a href="tel:+573026047592" className="block group">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-black/60">
                    Phone
                  </p>
                  <p className="mt-1 font-bold underline decoration-2 underline-offset-4 group-hover:decoration-black md:text-lg">
                    +57 302 604 7592
                  </p>
                </a>

                <a
                  href="https://github.com/dphack1987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-black/60">
                    GitHub
                  </p>
                  <p className="mt-1 font-bold underline decoration-2 underline-offset-4 group-hover:decoration-black md:text-lg">
                    @dphack1987
                  </p>
                </a>
              </div>

              <p className="mt-10 border-t-2 border-black/20 pt-4 font-mono text-[11px] font-bold uppercase tracking-widest text-black/70">
                {language === 'es'
                  ? "Respuesta habitual en menos de 24 horas."
                  : "Typical reply in under 24 hours."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
