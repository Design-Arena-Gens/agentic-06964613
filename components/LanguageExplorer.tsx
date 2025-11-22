"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { difficultyLabels, languages, type Language } from "@/lib/languages";
import classNames from "classnames";

const continents = ["الجميع", "Asia", "Europe", "Africa", "Americas", "Oceania"];

type FilterState = {
  search: string;
  continent: string;
  difficulty: Language["difficulty"] | "all";
};

const initialFilter: FilterState = {
  search: "",
  continent: "الجميع",
  difficulty: "all"
};

export function LanguageExplorer() {
  const [filters, setFilters] = useState<FilterState>(initialFilter);

  const visibleLanguages = useMemo(() => {
    return languages.filter((lang) => {
      const matchesSearch =
        filters.search.trim().length === 0 ||
        `${lang.name} ${lang.nativeName}`.toLowerCase().includes(filters.search.toLowerCase());

      const matchesContinent =
        filters.continent === "الجميع" || lang.continent.toLowerCase().includes(filters.continent.toLowerCase());

      const matchesDifficulty = filters.difficulty === "all" || lang.difficulty === filters.difficulty;

      return matchesSearch && matchesContinent && matchesDifficulty;
    });
  }, [filters]);

  return (
    <section id="languages" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <h2 className="section-title">لغة لكل حلم</h2>
          <p className="section-subtitle">
            اكتشف اللغات بحسب القارة، مستوى الصعوبة، أو ببساطة عبر البحث عن لغتك المفضلة. كل بطاقة
            تضم روابط للتحديات، الدروس الثقافية، ومهام التحدث الفورية.
          </p>
        </div>
        <div className="mt-8 grid gap-6 rounded-3xl border border-slate-100 bg-slate-50/60 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="col-span-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-600">ابحث عن لغة</label>
              <input
                type="search"
                placeholder="مثال: Spanish, العربية"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                value={filters.search}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    search: event.target.value
                  }))
                }
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-600">اختر قارة</label>
              <div className="flex flex-wrap gap-2">
                {continents.map((continent) => (
                  <button
                    key={continent}
                    type="button"
                    onClick={() => setFilters((prev) => ({ ...prev, continent }))}
                    className={classNames(
                      "rounded-full px-4 py-2 text-xs font-semibold transition",
                      filters.continent === continent
                        ? "bg-primary text-white shadow shadow-primary/30"
                        : "bg-white text-slate-500 hover:bg-primary/10"
                    )}
                  >
                    {continent === "Americas" ? "الأمريكتان" : continent === "Asia" ? "آسيا" : continent === "Europe" ? "أوروبا" : continent === "Africa" ? "أفريقيا" : continent === "Oceania" ? "أوقيانوسيا" : "كل القارات"}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-600">مستوى المغامرة</label>
              <div className="flex flex-wrap gap-2">
                {["all", "beginner", "intermediate", "advanced"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        difficulty: level as FilterState["difficulty"]
                      }))
                    }
                    className={classNames(
                      "rounded-full px-4 py-2 text-xs font-semibold transition",
                      filters.difficulty === level
                        ? "bg-secondary text-white shadow shadow-secondary/20"
                        : "bg-white text-slate-500 hover:bg-secondary/10"
                    )}
                  >
                    {level === "all" ? "كل المستويات" : difficultyLabels[level as keyof typeof difficultyLabels]}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {visibleLanguages.map((lang) => (
              <motion.article
                key={lang.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="card-glass flex flex-col gap-4 rounded-3xl border border-white/50 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{lang.emoji}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{lang.nativeName}</h3>
                      <p className="text-xs text-slate-500">{lang.name} · {lang.family}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-600">
                    {lang.speakers} متحدث
                  </span>
                </div>
                <p className="text-sm text-slate-600">{lang.highlight}</p>
                <div className="grid gap-3 rounded-2xl bg-white/70 p-4 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>القارة</span>
                    <strong className="text-slate-700">{lang.continent}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>مستوى التحدي</span>
                    <strong className="text-secondary">
                      {difficultyLabels[lang.difficulty]}
                    </strong>
                  </div>
                </div>
                <div className="grid gap-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-primary">🎯 تحدٍ ممتع:</span> {lang.learningHook}
                  </p>
                  <p>
                    <span className="font-semibold text-secondary">🌍 لمحة ثقافية:</span> {lang.culturalTidbit}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2 text-xs">
                  <a
                    href="#journey"
                    className="rounded-full bg-primary/10 px-4 py-2 font-semibold text-primary transition hover:bg-primary/20"
                  >
                    انطلق في رحلة اللغة
                  </a>
                  <a
                    href="#community"
                    className="rounded-full bg-secondary/10 px-4 py-2 font-semibold text-secondary transition hover:bg-secondary/20"
                  >
                    انضم إلى النادي الثقافي
                  </a>
                </div>
              </motion.article>
            ))}
            {visibleLanguages.length === 0 && (
              <div className="col-span-full rounded-3xl border border-dashed border-slate-200 bg-white/70 p-8 text-center text-sm text-slate-500">
                لم نجد لغة مطابقة، حاول تعديل عوامل التصفية.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
