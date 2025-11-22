export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white" id="download">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span>🌍</span>
            <span>LinguaQuest</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            منصة تعليم عالمية تمزج بين اللعب، الذكاء الاصطناعي، والرحلات الثقافية لتقرب العالم إليك
            كلمة كلمة.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white/80">حمل التطبيق وابدأ المغامرة</h3>
          <div className="flex flex-wrap gap-3 text-xs">
            <a className="rounded-full bg-white px-4 py-3 font-semibold text-slate-900" href="#">
              تحميل للأجهزة الذكية
            </a>
            <a className="rounded-full border border-white/30 px-4 py-3 font-semibold text-white" href="#">
              استخدم نسخة المتصفح
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} LinguaQuest · رحلة عالمية لتعلم اللغات.
          </p>
        </div>
      </div>
    </footer>
  );
}
