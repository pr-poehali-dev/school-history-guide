import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const HistoryChapters = () => {
  const navigate = useNavigate();

  const chapters = [
    {
      id: "chapter-1",
      number: "I",
      title: "Мир накануне и в годы Первой мировой войны",
      description: "Политическая карта мира, причины и ход Первой мировой войны",
      available: true,
      emoji: "🌍",
    },
    {
      id: "chapter-2",
      number: "II",
      title: "Мир в 1918-1938 годы",
      description: "Версальско-Вашингтонская система, революции и кризисы",
      available: false,
      emoji: "📜",
    },
    {
      id: "chapter-3",
      number: "III",
      title: "Вторая мировая война 1939-1945 годы",
      description: "Причины, ход и итоги крупнейшей войны в истории",
      available: false,
      emoji: "⚔️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-pink-50/40 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(30%, -30%)", animationDuration: "5s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(-30%, 30%)", animationDuration: "4s" }}
      />
      <div className="absolute top-1/3 right-1/4 text-9xl opacity-[0.03] pointer-events-none filter grayscale">
        📖
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-9xl opacity-[0.03] pointer-events-none filter grayscale">
        🏛️
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/class/10/history")}
              className="gap-2 hover:bg-pink-100"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад к разделам
            </Button>
            <div className="flex items-center gap-3 ml-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <Icon name="BookOpen" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Темы • История</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="gap-2 hover:bg-blue-100"
              onClick={() => navigate("/")}
            >
              <Icon name="Home" size={18} />
            </Button>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="text-base px-6 py-2 border-pink-300/50 text-pink-700 bg-pink-50/50 mb-6"
            >
              <Icon name="BookOpen" size={16} className="mr-2" />
              Всеобщая история • 10 класс
            </Badge>

            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              Главы курса 📚
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери главу для изучения
            </p>
          </div>

          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <Card
                key={chapter.id}
                className={`group relative overflow-hidden border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                  chapter.available
                    ? "border-pink-200/50 hover:border-pink-400 cursor-pointer hover:shadow-2xl hover:-translate-y-1"
                    : "border-gray-200/50 opacity-60"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fade-in 0.6s ease-out forwards",
                  opacity: 0,
                }}
                onClick={() =>
                  chapter.available && navigate(`/class/10/history/chapter-1`)
                }
              >
                <div className="absolute top-0 right-0 text-8xl opacity-[0.03] pointer-events-none p-8 filter grayscale">
                  {chapter.emoji}
                </div>

                <div className="p-8 relative">
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold transition-transform ${
                        chapter.available
                          ? "bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600 group-hover:scale-110"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {chapter.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className={`text-2xl font-bold ${
                            chapter.available
                              ? "group-hover:text-pink-600 transition-colors"
                              : "text-gray-600"
                          }`}
                        >
                          {chapter.title}
                        </h3>
                        {!chapter.available && (
                          <Badge
                            variant="outline"
                            className="border-gray-300 text-gray-500"
                          >
                            <Icon name="Lock" size={14} className="mr-1" />
                            Скоро
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {chapter.description}
                      </p>

                      {chapter.available && (
                        <div className="flex items-center gap-2 mt-4 text-pink-600 font-medium">
                          <span>Перейти к темам</span>
                          <Icon
                            name="ArrowRight"
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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

export default HistoryChapters;