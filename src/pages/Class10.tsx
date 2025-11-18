import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Class10 = () => {
  const navigate = useNavigate();

  const subjects = [
    { id: "algebra", name: "Алгебра", icon: "Calculator", available: false },
    { id: "biology", name: "Биология", icon: "Dna", available: false },
    { id: "geography", name: "География", icon: "Globe", available: false },
    { id: "geometry", name: "Геометрия", icon: "Triangle", available: false },
    { id: "english", name: "Английский язык", icon: "MessageCircle", available: false },
    { id: "informatics", name: "Информатика", icon: "Code", available: false },
    { id: "history", name: "История", icon: "Scroll", available: true },
    { id: "literature", name: "Литература", icon: "BookOpen", available: false },
    { id: "russian", name: "Русский язык", icon: "Pen", available: false },
    { id: "social", name: "Обществознание", icon: "Users", available: false },
    { id: "obzr", name: "ОБЗР", icon: "Shield", available: false },
    { id: "physics", name: "Физика", icon: "Atom", available: false },
    { id: "chemistry", name: "Химия", icon: "TestTube", available: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-pink-50/40 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(30%, -30%)", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(-30%, 30%)", animationDuration: "3s" }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад
            </Button>
            <div className="flex items-center gap-3 ml-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">10 класс</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="gap-2">
              <Icon name="Star" size={18} />
              Избранное
            </Button>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="text-base px-6 py-2 border-primary/30 text-primary mb-6 inline-flex items-center gap-2"
            >
              <Icon name="BookMarked" size={16} />
              Выбери предмет
            </Badge>

            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              Какую тему разберём? 🎯
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Выбери предмет и начни изучать материал прямо сейчас
            </p>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Поиск по предметам..."
                  className="pl-12 h-14 text-lg rounded-2xl border-2 focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {subjects.map((subject, index) => (
              <button
                key={subject.id}
                onClick={() =>
                  subject.available
                    ? navigate("/class/10/history")
                    : navigate("/coming-soon")
                }
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-left ${
                  subject.available
                    ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 hover:border-primary"
                    : "bg-white/60 backdrop-blur-sm border-border hover:border-primary/20"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: "fade-in 0.5s ease-out forwards",
                  opacity: 0,
                }}
              >
                {subject.available && (
                  <div className="absolute -top-3 -right-3">
                    <div className="px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full animate-bounce">
                      Доступно
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 ${
                      subject.available
                        ? "bg-primary/10"
                        : "bg-muted-foreground/10"
                    }`}
                  >
                    <Icon
                      name={subject.icon as any}
                      className={
                        subject.available
                          ? "text-primary"
                          : "text-muted-foreground"
                      }
                      size={26}
                    />
                  </div>
                </div>

                <h3
                  className={`text-xl font-semibold mb-2 ${
                    subject.available
                      ? "group-hover:text-primary"
                      : "text-muted-foreground"
                  } transition-colors`}
                >
                  {subject.name}
                </h3>

                {!subject.available && (
                  <p className="text-sm text-muted-foreground">
                    Скоро будет доступен
                  </p>
                )}

                {subject.available && (
                  <div className="flex items-center gap-2 mt-4 text-primary">
                    <span className="text-sm font-medium">
                      Начать изучение
                    </span>
                    <Icon
                      name="ArrowRight"
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl border border-primary/20">
            <Icon name="Info" size={24} className="text-primary" />
            <p className="text-lg">
              <strong>Подсказка:</strong> Начни с Истории — она уже готова для
              изучения! 📚
            </p>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Class10;
