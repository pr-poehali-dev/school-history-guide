import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const History = () => {
  const navigate = useNavigate();
  const [activeFavorites, setActiveFavorites] = useState<string[]>([]);

  const sections = [
    {
      id: "topics",
      title: "Темы",
      description: "Основные периоды и события истории",
      icon: "BookOpen",
      emoji: "📖",
    },
    {
      id: "timeline",
      title: "Хронология",
      description: "Временная шкала исторических событий",
      icon: "Clock",
      emoji: "⏰",
    },
    {
      id: "maps",
      title: "Карты",
      description: "Исторические территории и границы",
      icon: "Map",
      emoji: "🗺️",
    },
    {
      id: "terms",
      title: "Термины",
      description: "Важные понятия и определения",
      icon: "FileText",
      emoji: "📝",
    },
    {
      id: "tests",
      title: "Тесты",
      description: "Проверь свои знания по истории",
      icon: "CheckCircle",
      emoji: "✅",
    },
    {
      id: "people",
      title: "Личности",
      description: "Биографии исторических деятелей",
      icon: "Users",
      emoji: "👥",
    },
    {
      id: "favorites",
      title: "Избранное",
      description: "Твои сохранённые материалы",
      icon: "Star",
      emoji: "⭐",
    },
  ];

  const toggleFavorite = (id: string) => {
    setActiveFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/class/10")}
              className="gap-2"
            >
              <Icon name="ArrowLeft" size={20} />
              К предметам
            </Button>
            <div className="flex items-center gap-3 ml-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-sm">
                <span className="text-xl">🪵</span>
              </div>
              <span className="text-xl font-bold text-gray-900">История • 10 класс</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="gap-2">
              <Icon name="Star" size={18} />
              Избранное
            </Button>
            <Button variant="ghost" className="gap-2">
              <Icon name="Home" size={18} />
            </Button>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Badge
                variant="outline"
                className="text-base px-6 py-2 border-amber-500/30 text-amber-700 bg-amber-50/50"
              >
                <Icon name="Scroll" size={16} className="mr-2" />
                История России и мира
              </Badge>
            </div>

            <h1 className="text-6xl font-bold mb-4 tracking-tight">
              Сейчас разберёмся! 🔍
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Листай историю как Instagram — только пользы больше
            </p>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Icon
                  name="Search"
                  size={22}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-600"
                />
                <Input
                  placeholder="Найди любую тему по истории..."
                  className="pl-14 h-16 text-lg rounded-2xl border-2 border-amber-200 focus:border-amber-500 bg-white/80"
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl"
                >
                  Искать
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
              <Badge className="px-4 py-2 bg-amber-100 text-amber-800 hover:bg-amber-200 cursor-pointer">
                #древниймир
              </Badge>
              <Badge className="px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 cursor-pointer">
                #средневековье
              </Badge>
              <Badge className="px-4 py-2 bg-red-100 text-red-800 hover:bg-red-200 cursor-pointer">
                #революции
              </Badge>
              <Badge className="px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer">
                #войны
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sections.map((section, index) => (
              <Card
                key={section.id}
                className="group relative overflow-hidden border-2 border-amber-200/50 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 70}ms`,
                  animation: "fade-in 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div className="absolute top-0 right-0 text-6xl opacity-10 pointer-events-none p-4">
                  {section.emoji}
                </div>

                <div className="p-8 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <Icon
                        name={section.icon as any}
                        className="text-amber-600"
                        size={28}
                      />
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(section.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon
                        name="Heart"
                        size={22}
                        className={
                          activeFavorites.includes(section.id)
                            ? "fill-red-500 text-red-500"
                            : "text-muted-foreground hover:text-red-500"
                        }
                      />
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {section.description}
                  </p>

                  <div className="flex items-center gap-2 text-amber-600 font-medium text-sm">
                    <span>Открыть</span>
                    <Icon
                      name="ArrowRight"
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-100/60 to-orange-100/60 border-2 border-amber-200 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <Icon name="Flame" size={28} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Популярное сейчас 🔥
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Что изучают другие ученики
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium">
                      • Великая Отечественная война
                    </div>
                    <div className="text-sm font-medium">
                      • Петр I и его реформы
                    </div>
                    <div className="text-sm font-medium">
                      • Французская революция
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-100/60 to-indigo-100/60 border-2 border-blue-200 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <Icon name="TrendingUp" size={28} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Твой прогресс 📈
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Начни изучать темы
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-3 bg-white rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all" />
                    </div>
                    <span className="text-sm font-bold">0%</span>
                  </div>
                </div>
              </div>
            </div>
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

export default History;