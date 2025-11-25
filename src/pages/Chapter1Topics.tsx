import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Chapter1Topics = () => {
  const navigate = useNavigate();

  const topics = [
    {
      id: "topic-1",
      title: "Мир накануне Первой мировой войны",
      description:
        "Политическая карта мира, колониальные империи, противоречия между державами",
      available: false,
      emoji: "🌐",
      duration: "45 мин",
    },
    {
      id: "topic-2",
      title: "Первая мировая война 1914-1918 годы",
      description:
        "Причины войны, основные этапы, итоги и последствия для мира",
      available: true,
      emoji: "⚔️",
      duration: "25 мин",
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
        🌍
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-9xl opacity-[0.03] pointer-events-none filter grayscale">
        📜
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/class/10/history/chapters")}
              className="gap-2 hover:bg-pink-100"
            >
              <Icon name="ArrowLeft" size={20} />
              К главам
            </Button>
            <div className="flex items-center gap-3 ml-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                I
              </div>
              <span className="text-xl font-bold">Глава I</span>
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
              Глава I • Всеобщая история
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Мир накануне и в годы Первой мировой войны
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери тему для изучения
            </p>
          </div>

          <div className="space-y-6">
            {topics.map((topic, index) => (
              <Card
                key={topic.id}
                className={`group relative overflow-hidden border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                  topic.available
                    ? "border-pink-200/50 hover:border-pink-400 cursor-pointer hover:shadow-2xl hover:-translate-y-1"
                    : "border-gray-200/50 opacity-60"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fade-in 0.6s ease-out forwards",
                  opacity: 0,
                }}
                onClick={() =>
                  topic.available && navigate(`/class/10/history/chapter-1/world-war-one`)
                }
              >
                <div className="absolute top-0 right-0 text-8xl opacity-[0.03] pointer-events-none p-8 filter grayscale">
                  {topic.emoji}
                </div>

                <div className="p-8 relative">
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transition-transform ${
                        topic.available
                          ? "bg-gradient-to-br from-pink-100 to-purple-100 group-hover:scale-110 group-hover:rotate-6"
                          : "bg-gray-100"
                      }`}
                    >
                      {topic.emoji}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3
                          className={`text-2xl font-bold ${
                            topic.available
                              ? "group-hover:text-pink-600 transition-colors"
                              : "text-gray-600"
                          }`}
                        >
                          {topic.title}
                        </h3>
                        {!topic.available && (
                          <Badge
                            variant="outline"
                            className="border-gray-300 text-gray-500"
                          >
                            <Icon name="Lock" size={14} className="mr-1" />
                            Скоро
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {topic.description}
                      </p>

                      <div className="flex items-center gap-4">
                        {topic.available && (
                          <>
                            <Badge
                              variant="outline"
                              className="border-pink-200 text-pink-700 bg-pink-50"
                            >
                              <Icon name="Clock" size={14} className="mr-1" />
                              {topic.duration}
                            </Badge>
                            <div className="flex items-center gap-2 text-pink-600 font-medium">
                              <span>Начать изучение</span>
                              <Icon
                                name="ArrowRight"
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </div>
                          </>
                        )}
                        {!topic.available && (
                          <Badge
                            variant="outline"
                            className="border-gray-200 text-gray-500"
                          >
                            <Icon name="Clock" size={14} className="mr-1" />
                            {topic.duration}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-2 border-blue-200 bg-blue-50/50 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-blue-900">
                    Совет для изучения
                  </h4>
                  <p className="text-blue-700 leading-relaxed">
                    Рекомендуем изучать темы последовательно — это поможет
                    лучше понять причинно-следственные связи исторических
                    событий
                  </p>
                </div>
              </div>
            </div>
          </Card>
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

export default Chapter1Topics;