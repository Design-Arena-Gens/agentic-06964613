const pillars = [
  {
    label: "Playful Learning",
    labelAr: "تعلم باللعب",
    description:
      "نمزج عناصر الألعاب كالنقاط، المستويات، والشارات لتبقى متحفزًا في كل خطوة.",
    icon: "🎮"
  },
  {
    label: "Cultural Immersion",
    labelAr: "غمر ثقافي",
    description:
      "ندمجك في قصص ومشاهد واقعية تفتح لك أبواب العادات والتقاليد المحلية.",
    icon: "🧭"
  },
  {
    label: "Smart Coaching",
    labelAr: "مدرب ذكي",
    description:
      "ذكاء اصطناعي يتابع تقدمك، يصحح نطقك، ويرشح محتوى يناسب شخصيتك وأهدافك.",
    icon: "🧠"
  }
];

export function Methodology() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="section-title">منهجية تجعل العالم ملعبك</h2>
            <p className="section-subtitle">
              صممنا LinguaQuest ليكون رفيقك المرح، من خلال مزيج من الألعاب، القصص التفاعلية، وتقييمات
              النطق الذكية. كل جلسة تعلم تمنحك هدفًا واضحًا، مكافآت فورية، وحافزًا للعودة.
            </p>
          </div>
          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="card-glass rounded-3xl border border-white/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{pillar.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{pillar.labelAr}</h3>
                    <p className="text-xs uppercase tracking-wide text-slate-400">{pillar.label}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
