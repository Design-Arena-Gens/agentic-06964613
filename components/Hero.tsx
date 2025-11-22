"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute left-20 top-40 hidden h-64 w-64 rounded-full bg-secondary/10 blur-3xl sm:block" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 md:grid-cols-2 md:pb-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700 shadow-sm">
            ✨ رحلة ممتعة لتعلم لغات العالم
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            اكتشف{` `}
            <span className="text-primary">LinguaQuest</span>
            {` `}
            وتعلم لغات العالم عبر الألعاب والمغامرات التفاعلية
          </h1>
          <p className="text-lg text-slate-600">
            منصة تعليمية تجمع بين المتعة والمعرفة لتقودك في رحلات افتراضية، محادثات نابضة
            بالحياة، وألعاب لغوية ملهمة تغطي أكثر من 190 لغة من حول العالم.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#languages"
              className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
            >
              استكشف اللغات
            </a>
            <a
              href="#features"
              className="rounded-full border border-primary/20 px-6 py-3 text-center text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
            >
              كيف ندمج المتعة
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div>
              <span className="text-2xl font-bold text-primary">+190</span>
              <span className="ml-2">لغة متاحة</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-secondary">+12K</span>
              <span className="ml-2">درس تفاعلي</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-accent">+2M</span>
              <span className="ml-2">مغامر لغوي سعيد</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="gradient-border">
            <div className="card-glass rounded-[26px] p-6">
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white shadow-lg">
                  <p className="text-xs text-slate-300">تحدي اليوم</p>
                  <p className="mt-1 text-lg font-semibold">هل تستطيع تقديم نفسك بخمس لغات؟</p>
                </div>
                <div className="grid gap-3">
                  {["مرحبا، أنا أميرة", "Hola, soy Amira", "Bonjour, je suis Amira", "Ciao, sono Amira"].map(
                    (sentence, index) => (
                      <div
                        key={sentence}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600"
                      >
                        <span>{sentence}</span>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {index === 0 ? "مثال" : `خطوة ${index}`}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-primary/90 via-primary to-secondary px-5 py-6 text-white shadow-lg shadow-primary/40">
                  <p className="text-sm font-medium text-white/80">مكافأة اليوم</p>
                  <p className="mt-2 text-lg font-semibold">فتح خريطة مهرجان اللغات العالمي</p>
                  <p className="mt-1 text-sm text-white/80">
                    شارك تقدمك مع أصدقائك وادعهم في مغامرة لغوية مشتركة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
