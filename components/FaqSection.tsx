"use client";

import { useState } from "react";

type Question = {
  question: string;
  answer: string;
};

const faqs: Question[] = [
  {
    question: "كيف يجعل LinguaQuest التعلم ممتعًا؟",
    answer:
      "نمزج بين الألعاب التفاعلية، القصص المصورة، والمهام الثقافية الحية. كل درس يأخذك إلى مدينة أو مهرجان عالمي حيث تتعلم المفردات والسياق في آن واحد."
  },
  {
    question: "هل يمكنني تعلم أكثر من لغة في نفس الوقت؟",
    answer:
      "نعم، يمكنك فتح مسارات متعددة وإدارة جدولك الذكي الذي يقترح وقت المراجعة المناسب لكل لغة لضمان استيعاب دائم."
  },
  {
    question: "هل هناك محتوى مناسب للأطفال؟",
    answer:
      "يتضمن التطبيق وضعًا عائليًا بواجهات ملونة وشخصيات كرتونية تساعد الأطفال على التعلم عبر اللعب، مع لوحة متابعة لأولياء الأمور."
  },
  {
    question: "هل تدعمون المتعلمين المتقدمين؟",
    answer:
      "لدينا تحديات مناظرات، نوادي ترجمة فورية، وجلسات مع معلمين ناطقين أصليين لمساعدتك في الوصول إلى طلاقة عالية."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="section-title text-center">أسئلة شائعة</h2>
        <p className="section-subtitle mx-auto text-center">
          كل ما تحتاج إلى معرفته للانطلاق في رحلتك اللغوية بطريقة ممتعة وسلسة.
        </p>
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="card-glass rounded-3xl border border-slate-100 p-5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-right"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold text-slate-800">{item.question}</span>
                  <span className="text-2xl text-primary">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="mt-4 text-sm text-slate-600">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
