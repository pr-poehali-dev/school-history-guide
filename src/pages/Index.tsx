import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const navigate = useNavigate();
  const classes = Array.from({ length: 11 }, (_, i) => i + 1);
  const classesRef = useRef<HTMLDivElement>(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);

  const scrollToClasses = () => {
    classesRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const tutorialSteps = [
    {
      title: "Добро пожаловать на ЯсенПень! 🌳",
      description:
        "Привет! Я — Ясен Пень, твой помощник в учёбе. Раньше я был просто пень и ничего не знал, но теперь я учусь вместе с тобой, и всё становится ясно!",
      emoji: "🪵",
    },
    {
      title: "Шаг 1: Выбери класс 🎓",
      description:
        "Сначала выбери свой класс — от 1 до 11. Сейчас доступен 10 класс, остальные скоро появятся!",
      emoji: "📚",
    },
    {
      title: "Шаг 2: Выбери предмет 📖",
      description:
        "После выбора класса увидишь все предметы. Нажми на нужный, чтобы открыть материалы!",
      emoji: "🔍",
    },
    {
      title: "Шаг 3: Изучай темы 💡",
      description:
        "Внутри предмета найдёшь темы, карты, термины и тесты. Всё для того, чтобы учиться было легко и интересно!",
      emoji: "✨",
    },
    {
      title: "Готово! Учись вместе со мной! 🚀",
      description:
        "Теперь ты знаешь, как пользоваться сайтом. Давай учиться вместе — из пня в ясного ученика!",
      emoji: "🌟",
    },
  ];

  const nextStep = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setShowTutorial(false);
      setTutorialStep(0);
    }
  };

  const prevStep = () => {
    if (tutorialStep > 0) {
      setTutorialStep(tutorialStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50" />

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <nav className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-sm">
              <span className="text-xl">🪵</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">ЯсенПень</span>
              <p className="text-xs text-gray-500">Из пня в ясного ученика</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900"
            >
              <Icon name="Star" size={18} className="mr-2" />
              Избранное
            </Button>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <Badge
              variant="outline"
              className="mb-8 px-5 py-2 border-primary/20 text-primary bg-primary/5 text-sm font-medium"
            >
              <span className="mr-2">🌳</span>
              Учись вместе с Ясен Пнём
            </Badge>

            <h1 className="text-7xl font-bold mb-6 text-gray-900 tracking-tight">
              Привет, ученик! 👋
            </h1>

            <p className="text-2xl mb-3 text-gray-700 font-medium">
              Был пень — стал ясен!
            </p>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Справочник по всем предметам с 1 по 11 класс
            </p>

            <div className="mt-8 inline-flex items-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-200">
              <div className="text-4xl">🪵</div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">
                  Привет! Я — Ясен Пень
                </p>
                <p className="text-xs text-gray-600">
                  Раньше был пень, теперь учусь вместе с тобой! 🌟
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-24">
            <Button
              size="lg"
              onClick={scrollToClasses}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать учиться
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowTutorial(true)}
              className="px-8 h-14 text-base font-medium rounded-xl border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает?
            </Button>
          </div>

          <div ref={classesRef} className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-semibold text-gray-900 mb-8 flex items-center justify-center gap-3">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              Выбери свой класс
            </h2>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3 mb-20">
            {classes.map((classNum) => (
              <button
                key={classNum}
                onClick={() =>
                  classNum === 10
                    ? navigate("/class/10")
                    : navigate("/coming-soon")
                }
                className={`group relative p-5 rounded-2xl border-2 transition-all duration-200 ${
                  classNum === 10
                    ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {classNum}
                </div>
                <div className="text-xs text-gray-500 font-medium">класс</div>
                {classNum === 10 && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="Lightbulb" size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Понятно и просто
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Сложные темы объясняем простым языком
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Icon name="Zap" size={28} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Быстрый поиск
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Найди нужную тему за секунды
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Icon name="Trophy" size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Стань лучшим
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Проверяй знания тестами и получай награды
              </p>
            </div>
          </div>
        </main>

        <footer className="mt-20 text-center text-sm text-gray-400">
          <p>
            Учись вместе с ЯсенПень • <span className="text-amber-600">🪵</span>{" "}
            → <span className="text-primary">✨</span>
          </p>
        </footer>
      </div>

      <Dialog open={showTutorial} onOpenChange={setShowTutorial}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <span className="text-4xl">
                {tutorialSteps[tutorialStep].emoji}
              </span>
              {tutorialSteps[tutorialStep].title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <p className="text-base text-gray-600 leading-relaxed">
              {tutorialSteps[tutorialStep].description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === tutorialStep
                      ? "bg-primary w-6"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {tutorialStep > 0 && (
                <Button variant="outline" size="sm" onClick={prevStep}>
                  Назад
                </Button>
              )}
              <Button size="sm" onClick={nextStep}>
                {tutorialStep < tutorialSteps.length - 1
                  ? "Далее"
                  : "Понятно!"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
