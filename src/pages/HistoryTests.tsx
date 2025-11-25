import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface TestResult {
  testId: string;
  score: number;
  total: number;
  date: string;
}

const HistoryTests = () => {
  const navigate = useNavigate();
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("testResults");
    if (stored) {
      setTestResults(JSON.parse(stored));
    }
  }, []);

  const tests = [
    {
      id: "ww1-dates",
      title: "Первая мировая война: Даты",
      description: "12 карточек с важными датами войны 1914-1918",
      chapter: "Глава I",
      icon: "Calendar",
      path: "/class/10/history/chapter-1/world-war-one/tests",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600",
      available: true
    },
    {
      id: "ww1-questions",
      title: "Первая мировая война: Материал",
      description: "6 вопросов по причинам, ходу и итогам войны",
      chapter: "Глава I",
      icon: "HelpCircle",
      path: "/class/10/history/chapter-1/world-war-one/tests",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600",
      available: true
    }
  ];

  const getTestResult = (testId: string) => {
    return testResults.find(result => result.testId === testId);
  };

  const getResultColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-pink-50/40 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(30%, -30%)", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(-30%, 30%)", animationDuration: "3s" }}
      />
      <div className="absolute top-1/3 right-1/4 text-9xl opacity-[0.03] pointer-events-none filter grayscale">
        ✅
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-9xl opacity-[0.03] pointer-events-none filter grayscale">
        📝
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
              К разделам
            </Button>
            <div className="flex items-center gap-3 ml-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <Icon name="CheckCircle" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Тесты • 10 класс</span>
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
              <Icon name="CheckCircle" size={16} className="mr-2" />
              Тесты по истории
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Проверь свои знания
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери тест и узнай, как хорошо ты знаешь материал
            </p>
          </div>

          <div className="space-y-6">
            {tests.map((test, index) => {
              const result = getTestResult(test.id);
              const percentage = result ? Math.round((result.score / result.total) * 100) : null;

              return (
                <Card
                  key={test.id}
                  className={`group relative overflow-hidden border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                    test.available
                      ? "border-pink-200/50 hover:border-pink-400 cursor-pointer hover:shadow-2xl hover:-translate-y-1"
                      : "border-gray-200/50 opacity-60"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fade-in 0.6s ease-out forwards",
                    opacity: 0,
                  }}
                  onClick={() => test.available && navigate(test.path)}
                >
                  <div className="absolute top-0 right-0 text-8xl opacity-[0.03] pointer-events-none p-8 filter grayscale">
                    {test.id.includes("dates") ? "📅" : "❓"}
                  </div>

                  <div className="p-8 relative">
                    <div className="flex items-start gap-6">
                      <div
                        className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center transition-transform ${
                          test.available
                            ? `bg-gradient-to-br ${test.color} group-hover:scale-110 group-hover:rotate-6`
                            : "bg-gray-100"
                        }`}
                      >
                        <Icon name={test.icon as any} size={32} className={test.iconColor} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3
                            className={`text-2xl font-bold ${
                              test.available
                                ? "group-hover:text-pink-600 transition-colors"
                                : "text-gray-600"
                            }`}
                          >
                            {test.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className="border-blue-200 text-blue-700 bg-blue-50"
                          >
                            {test.chapter}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {test.description}
                        </p>

                        <div className="flex items-center gap-4 flex-wrap">
                          {test.available && (
                            <>
                              {percentage !== null ? (
                                <div className="flex items-center gap-3">
                                  <Badge
                                    variant="outline"
                                    className={`border-pink-200 bg-pink-50 ${getResultColor(percentage)}`}
                                  >
                                    <Icon name="Trophy" size={14} className="mr-1" />
                                    Результат: {result?.score}/{result?.total} ({percentage}%)
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {new Date(result?.date || "").toLocaleDateString("ru-RU")}
                                  </span>
                                </div>
                              ) : (
                                <Badge
                                  variant="outline"
                                  className="border-gray-200 text-gray-600 bg-gray-50"
                                >
                                  <Icon name="Clock" size={14} className="mr-1" />
                                  Не пройден
                                </Badge>
                              )}
                              <div className="flex items-center gap-2 text-pink-600 font-medium">
                                <span>{percentage !== null ? "Пройти снова" : "Начать тест"}</span>
                                <Icon
                                  name="ArrowRight"
                                  size={18}
                                  className="transition-transform group-hover:translate-x-1"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-12 border-2 border-blue-200 bg-blue-50/50 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-blue-900">
                    Совет для подготовки
                  </h4>
                  <p className="text-blue-700 leading-relaxed">
                    Сначала изучи материал темы, затем пройди тест по датам для запоминания хронологии, 
                    и в конце проверь общее понимание темы основным тестом
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

export default HistoryTests;
