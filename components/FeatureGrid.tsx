"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "ألعاب لغوية غامرة",
    description:
      "استكشف المدن العالمية عبر ألعاب الواقع المعزز، حل الألغاز اللغوية، واجمع نقاط الخبرة لتفتح عوالم جديدة.",
    icon: "🧩",
    accent: "from-primary/80 via-primary to-primary/60"
  },
  {
    title: "محادثات مع شخصيات تفاعلية",
    description:
      "تعرّف على مرشدين رقميين يمثلون ثقافات متنوعة، وتعلم من خلال محادثات صوتية ومرئية واقعية.",
    icon: "🗣️",
    accent: "from-secondary/80 via-secondary to-secondary/60"
  },
  {
    title: "رحلات ثقافية غنية",
    description:
      "انضم إلى جولات افتراضية في الأسواق، المهرجانات، والمطاعم المحلية، حيث تتعلم اللغة في سياقها الحي.",
    icon: "🎒",
    accent: "from-accent/80 via-accent to-accent/60"
  },
  {
    title: "ذكاء اصطناعي مرشد",
    description:
      "ذكاء اصطناعي يصمم خط تعلم شخصي، يصحح النطق، ويقترح تحديات تناسب مستواك وأهدافك.",
    icon: "🤖",
    accent: "from-fuchsia-500 via-purple-500 to-sky-500"
  }
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title">متعة بقدر ما هي تعلم</h2>
          <p className="section-subtitle mx-auto">
            كل مغامرة في LinguaQuest تمزج بين الشغف والمعرفة لتقودك إلى طلاقة لغوية حقيقية. اكسب
            المكافآت، جمع الأصدقاء، وطور مهاراتك بثقة.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass relative overflow-hidden rounded-3xl border border-white/40 p-8 shadow-lg shadow-slate-900/5"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-10" style={{
                background: `linear-gradient(135deg, rgba(79,70,229,0.7), rgba(20,184,166,0.5))`
              }} />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/5 px-4 py-1 text-xs font-semibold text-slate-500">
                  اكتشف التحديات الأسبوعية ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
