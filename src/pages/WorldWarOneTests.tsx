import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const WorldWarOneTests = () => {
  const navigate = useNavigate();
  const [testMode, setTestMode] = useState<"menu" | "dates" | "questions">("menu");
  const [currentDateCard, setCurrentDateCard] = useState(0);
  const [showDateAnswer, setShowDateAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const dateCards = [
    { date: "28 июня 1914 г.", event: "Убийство эрцгерцога Франца Фердинанда в Сараево" },
    { date: "28 июля 1914 г.", event: "Австро-Венгрия объявила войну Сербии" },
    { date: "1 августа 1914 г.", event: "Германия объявила войну России" },
    { date: "4 августа 1914 г.", event: "Великобритания вступила в войну" },
    { date: "Сентябрь 1914 г.", event: "Битва на Марне" },
    { date: "1915 г.", event: "Горлицкий прорыв, Германия атакует Россию" },
    { date: "Весна 1915 г.", event: "Геноцид армян в Османской империи" },
    { date: "Февраль 1916 г.", event: "Начало Верденской битвы" },
    { date: "Июнь 1916 г.", event: "Брусиловский прорыв" },
    { date: "Апрель 1917 г.", event: "США вступили в войну на стороне Антанты" },
    { date: "11 ноября 1918 г.", event: "Компьенское перемирие — окончание войны" },
    { date: "28 июня 1919 г.", event: "Подписание Версальского мирного договора" }
  ];

  const questions = [
    {
      question: "Какие два военно-политических блока противостояли друг другу накануне Первой мировой войны?",
      options: [
        "Антанта и Тройственный союз",
        "НАТО и Варшавский договор",
        "Ось и Союзники",
        "Священный союз и Коминтерн"
      ],
      correct: 0
    },
    {
      question: "Что стало непосредственным поводом к началу Первой мировой войны?",
      options: [
        "Захват Германией польских территорий",
        "Убийство Франца Фердинанда в Сараево",
        "Торпедирование Лузитании",
        "Революция в России"
      ],
      correct: 1
    },
    {
      question: "Когда произошла битва на Марне, остановившая наступление немцев на Париж?",
      options: [
        "Июль 1914 г.",
        "Август 1914 г.",
        "Сентябрь 1914 г.",
        "Октябрь 1914 г."
      ],
      correct: 2
    },
    {
      question: "Что такое позиционная война?",
      options: [
        "Война с использованием авиации",
        "Война, характеризующаяся переходом к длительной обороне",
        "Война на море",
        "Партизанская война"
      ],
      correct: 1
    },
    {
      question: "Какая страна вступила в войну в апреле 1917 года на стороне Антанты?",
      options: [
        "Япония",
        "Китай",
        "США",
        "Бразилия"
      ],
      correct: 2
    },
    {
      question: "Когда было подписано Компьенское перемирие, завершившее Первую мировую войну?",
      options: [
        "1 января 1918 г.",
        "9 мая 1918 г.",
        "11 ноября 1918 г.",
        "28 июня 1919 г."
      ],
      correct: 2
    }
  ];

  const handleNextDateCard = () => {
    setShowDateAnswer(false);
    if (currentDateCard < dateCards.length - 1) {
      setCurrentDateCard(currentDateCard + 1);
    } else {
      setCurrentDateCard(0);
    }
  };

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
    setTestMode("menu");
  };

  const resetDatesTest = () => {
    setCurrentDateCard(0);
    setShowDateAnswer(false);
    setTestMode("menu");
  };

  if (testMode === "dates") {
    const card = dateCards[currentDateCard];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-pink-50/40">
        <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={resetDatesTest}
                className="hover:bg-pink-100"
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div className="flex-1">
                <h1 className="text-lg sm:text-xl font-bold text-slate-800">
                  Тест: Важные даты
                </h1>
                <p className="text-sm text-slate-600">Карточка {currentDateCard + 1} из {dateCards.length}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-12">
          <Card className="p-8 text-center space-y-6">
            <div className="text-sm text-muted-foreground">
              {showDateAnswer ? "Событие:" : "Дата:"}
            </div>
            
            <div className="min-h-[200px] flex items-center justify-center">
              <h2 className="text-3xl font-bold">
                {showDateAnswer ? card.event : card.date}
              </h2>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowDateAnswer(!showDateAnswer)}
                className="flex-1"
              >
                <Icon name="RotateCcw" size={18} className="mr-2" />
                {showDateAnswer ? "Показать дату" : "Показать событие"}
              </Button>
              <Button
                onClick={handleNextDateCard}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                Следующая карточка
                <Icon name="ChevronRight" size={18} className="ml-2" />
              </Button>
            </div>

            <div className="flex justify-center gap-1 mt-4">
              {dateCards.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentDateCard ? "bg-pink-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </Card>
        </main>
      </div>
    );
  }

  if (testMode === "questions") {
    if (quizFinished) {
      const percentage = Math.round((score / questions.length) * 100);
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-pink-50/40">
          <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={resetQuiz}
                  className="hover:bg-pink-100"
                >
                  <Icon name="ArrowLeft" size={20} />
                </Button>
                <div className="flex-1">
                  <h1 className="text-lg sm:text-xl font-bold text-slate-800">
                    Результаты теста
                  </h1>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-2xl mx-auto px-4 py-12">
            <Card className="p-8 text-center space-y-6">
              <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center ${
                percentage >= 80 ? "bg-green-100" :
                percentage >= 60 ? "bg-yellow-100" : "bg-red-100"
              }`}>
                <Icon 
                  name={percentage >= 80 ? "Trophy" : percentage >= 60 ? "ThumbsUp" : "BookOpen"} 
                  size={64} 
                  className={
                    percentage >= 80 ? "text-green-600" :
                    percentage >= 60 ? "text-yellow-600" : "text-red-600"
                  }
                />
              </div>

              <h2 className="text-3xl font-bold">
                {percentage >= 80 ? "Отлично!" : percentage >= 60 ? "Хорошо!" : "Попробуй еще раз!"}
              </h2>

              <div className="space-y-2">
                <p className="text-5xl font-bold text-slate-800">{score}/{questions.length}</p>
                <p className="text-xl text-muted-foreground">Правильных ответов</p>
                <p className="text-3xl font-semibold text-blue-600">{percentage}%</p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={resetQuiz}
                  className="flex-1"
                >
                  <Icon name="Home" size={18} className="mr-2" />
                  К списку тестов
                </Button>
                <Button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setSelectedAnswer(null);
                    setScore(0);
                    setQuizFinished(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                >
                  <Icon name="RotateCcw" size={18} className="mr-2" />
                  Пройти снова
                </Button>
              </div>
            </Card>
          </main>
        </div>
      );
    }

    const question = questions[currentQuestion];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-pink-50/40">
        <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={resetQuiz}
                className="hover:bg-pink-100"
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div className="flex-1">
                <h1 className="text-lg sm:text-xl font-bold text-slate-800">
                  Тест по материалу
                </h1>
                <p className="text-sm text-slate-600">Вопрос {currentQuestion + 1} из {questions.length}</p>
              </div>
              <div className="text-sm font-semibold text-blue-600">
                Счет: {score}
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-12">
          <Card className="p-8 space-y-6">
            <h2 className="text-xl font-bold leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correct;
                const showResult = selectedAnswer !== null;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      !showResult
                        ? "border-gray-200 hover:border-pink-400 hover:bg-blue-50"
                        : isSelected && isCorrect
                        ? "border-green-500 bg-green-50"
                        : isSelected && !isCorrect
                        ? "border-red-500 bg-red-50"
                        : isCorrect
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 opacity-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold ${
                        !showResult
                          ? "bg-gray-100 text-gray-600"
                          : isSelected && isCorrect
                          ? "bg-green-500 text-white"
                          : isSelected && !isCorrect
                          ? "bg-red-500 text-white"
                          : isCorrect
                          ? "bg-green-500 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}>
                        {showResult && ((isSelected && isCorrect) || isCorrect) ? (
                          <Icon name="Check" size={18} />
                        ) : showResult && isSelected && !isCorrect ? (
                          <Icon name="X" size={18} />
                        ) : (
                          String.fromCharCode(65 + index)
                        )}
                      </div>
                      <span className="flex-1">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <Button
                onClick={handleNextQuestion}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                {currentQuestion < questions.length - 1 ? "Следующий вопрос" : "Завершить тест"}
                <Icon name="ChevronRight" size={18} className="ml-2" />
              </Button>
            )}

            <div className="flex justify-center gap-1">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentQuestion 
                      ? "bg-pink-500" 
                      : index < currentQuestion
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-pink-50/40">
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/class/10/history/chapter-1/world-war-one")}
              className="hover:bg-pink-100"
            >
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl font-bold text-slate-800">
                Тесты: Первая мировая война
              </h1>
              <p className="text-sm text-slate-600">Проверь свои знания</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="p-8 space-y-4 hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-pink-400"
            onClick={() => setTestMode("dates")}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Calendar" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold">Тест по датам</h3>
            <p className="text-muted-foreground">
              Карточки с важными датами Первой мировой войны. Проверь, как хорошо ты их запомнил!
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
              <span>{dateCards.length} карточек</span>
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>

          <Card 
            className="p-8 space-y-4 hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-purple-400"
            onClick={() => setTestMode("questions")}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="HelpCircle" size={32} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold">Тест по материалу</h3>
            <p className="text-muted-foreground">
              Вопросы по причинам, ходу и итогам Первой мировой войны. Проверь глубину знаний!
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
              <span>{questions.length} вопросов</span>
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WorldWarOneTests;