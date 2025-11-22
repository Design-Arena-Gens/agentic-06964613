"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "سارة من المغرب",
    story:
      "كنت أبحث عن طريقة ممتعة لتعلم اليابانية، ومع مغامرات LinguaQuest بدأت أتحدث بثقة مع أصدقائي اليابانيين خلال ثلاثة أشهر فقط!",
    language: "اليابانية",
    avatar: "🧕"
  },
  {
    name: "لي تشانغ من كوريا",
    story:
      "الرحلات الثقافية التفاعلية جعلتني أتقن العربية الفصحى والعامية المصرية عبر القصص والمحادثات.",
    language: "العربية",
    avatar: "🧑‍💻"
  },
  {
    name: "أليخاندرو من المكسيك",
    story:
      "تحديات النطق اليومية ساعدتني على تحسين الفرنسية بينما أستمتع بالألعاب الموسيقية والمطابخ الباريسية الافتراضية.",
    language: "الفرنسية",
    avatar: "🧑‍🎨"
  }
];

export function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-white via-white to-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">قصص نجاح من حول العالم</h2>
          <p className="section-subtitle mx-auto">
            ملايين المتعلمين وجدوا في LinguaQuest الشريك المثالي لرحلتهم. إليك بعض الحكايات الملهمة.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass flex h-full flex-col justify-between rounded-3xl border border-white/50 p-6"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.avatar}</span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-500">يتعلم {item.language}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{item.story}</p>
              </div>
              <div className="mt-6 text-xs text-primary">شاهد تجربة الفيديو ↗</div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
