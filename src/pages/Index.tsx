import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const classes = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <nav className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
              <Icon name="BookOpen" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">УчиЛегко</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
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
              <Icon name="Sparkles" size={14} className="mr-2" />
              Твой умный помощник в учёбе
            </Badge>
            
            <h1 className="text-7xl font-bold mb-6 text-gray-900 tracking-tight">
              Привет, ученик! 👋
            </h1>
            
            <p className="text-2xl mb-3 text-gray-700 font-medium">
              Поняли все — поймёшь и ты!
            </p>
            
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Справочник по всем предметам с 1 по 11 класс
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-24">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать учиться
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 h-14 text-base font-medium rounded-xl border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает?
            </Button>
          </div>

          <div className="mb-10">
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
          <p>Учись легко и достигай целей 🚀</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;