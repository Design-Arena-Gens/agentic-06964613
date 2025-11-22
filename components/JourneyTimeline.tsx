"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "الإقلاع",
    description: "ابدأ باختبار ممتع يحدد مستواك، ثم صمم خارطة تعلم مخصصة لأهدافك اليومية.",
    icon: "🚀",
    artifacts: ["أهداف أسبوعية", "شخصيتك اللغوية"]
  },
  {
    title: "المغامرة",
    description: "ادخل المدن الافتراضية، تحدث مع السكان المحليين، وافتح تحديات صوتية وحسية.",
    icon: "🏙️",
    artifacts: ["محادثات تكيفية", "ألعاب الواقع الممتع"]
  },
  {
    title: "الإتقان",
    description: "شارك في دروس مباشرة، احصل على تقييمات فورية، وابدأ مشاريع ثقافية مع أصدقاء عالميين.",
    icon: "🏆",
    artifacts: ["شهادات مميزة", "نادي المتحدثين"]
  }
];

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">رحلتك من اليوم الأول حتى الطلاقة</h2>
          <p className="section-subtitle mx-auto">
            يبدأ التعلم بتحدي ممتع ويستمر عبر مغامرات متتابعة تبني ثقتك في التحدث، الاستماع، والكتابة.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary/40 via-accent/40 to-secondary/40 md:block" />
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-2 md:items-center md:gap-12"
              >
                <div className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                  <div className="card-glass rounded-3xl border border-white/50 p-6 shadow-lg shadow-slate-900/5">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{phase.icon}</span>
                      <h3 className="text-xl font-semibold text-slate-900">{phase.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{phase.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {phase.artifacts.map((artifact) => (
                        <span
                          key={artifact}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        >
                          {artifact}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
