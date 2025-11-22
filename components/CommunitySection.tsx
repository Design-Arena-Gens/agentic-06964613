"use client";

import { motion } from "framer-motion";

const clubs = [
  {
    name: "نادي القصص العالمية",
    description: "شارك قصصك القصيرة بلغات متعددة مع دعم من مرشدين أدبيين.",
    members: "23K",
    schedule: "كل ثلاثاء وخميس",
    color: "from-secondary/90 to-primary/80"
  },
  {
    name: "مختبر النطق الفوري",
    description: "جلسات صوتية مع خبراء نطق لتطوير مخارج الحروف في دقائق يومية.",
    members: "41K",
    schedule: "يوميًا",
    color: "from-primary/80 to-accent/80"
  },
  {
    name: "ورشة الترجمة الإبداعية",
    description: "تعاون على ترجمة أغانٍ وقصص أطفال مع متعلمين من 60 دولة.",
    members: "18K",
    schedule: "نهاية الأسبوع",
    color: "from-rose-500/90 to-orange-400/80"
  }
];

export function CommunitySection() {
  return (
    <section id="community" className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold sm:text-4xl">مجتمع عالمي يتعلم معك</h2>
          <p className="max-w-2xl text-sm text-slate-300">
            تواصل مع متعلمين ومدربين من أنحاء العالم. انضم إلى النوادي الأسبوعية، شارك في التحديات
            الجماعية، وصمم فعالياتك الخاصة بدعم فريق LinguaQuest.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl bg-gradient-to-br ${club.color} p-6 shadow-xl shadow-black/30`}
            >
              <h3 className="text-xl font-semibold">{club.name}</h3>
              <p className="mt-3 text-sm text-white/80">{club.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1">{club.members} عضو</span>
                <span className="rounded-full bg-white/10 px-3 py-1">{club.schedule}</span>
              </div>
              <a
                href="#download"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900"
              >
                انضم الآن ↗
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
