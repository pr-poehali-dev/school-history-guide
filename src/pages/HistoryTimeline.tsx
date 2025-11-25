import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const HistoryTimeline = () => {
  const navigate = useNavigate();

  const events = [
    { year: "1914", month: "28 июня", title: "Начало Первой мировой войны", description: "Убийство эрцгерцога Франца Фердинанда в Сараево" },
    { year: "1917", month: "февраль", title: "Февральская революция в России", description: "Свержение царского режима, отречение Николая II" },
    { year: "1917", month: "октябрь", title: "Октябрьская революция", description: "Приход большевиков к власти в России" },
    { year: "1918", month: "11 ноября", title: "Окончание Первой мировой войны", description: "Подписание Компьенского перемирия" },
    { year: "1919", month: "28 июня", title: "Версальский мирный договор", description: "Официальное окончание войны, создание новой системы международных отношений" },
    { year: "1922", month: "30 декабря", title: "Образование СССР", description: "Объединение советских республик в единое государство" },
    { year: "1929", month: "октябрь", title: "Великая депрессия", description: "Крах Нью-Йоркской фондовой биржи, начало мирового экономического кризиса" },
    { year: "1933", month: "30 января", title: "Приход Гитлера к власти", description: "Назначение Адольфа Гитлера рейхсканцлером Германии" },
    { year: "1939", month: "1 сентября", title: "Начало Второй мировой войны", description: "Нападение Германии на Польшу" },
    { year: "1941", month: "22 июня", title: "Начало Великой Отечественной войны", description: "Нападение нацистской Германии на СССР" },
    { year: "1941", month: "декабрь", title: "Битва за Москву", description: "Первое крупное поражение немецких войск во Второй мировой войне" },
    { year: "1942-1943", month: "", title: "Сталинградская битва", description: "Коренной перелом в ходе Великой Отечественной войны" },
    { year: "1943", month: "июль-август", title: "Курская битва", description: "Крупнейшее танковое сражение в истории" },
    { year: "1944", month: "6 июня", title: "Высадка в Нормандии", description: "Открытие второго фронта в Европе союзниками" },
    { year: "1945", month: "8 мая", title: "Капитуляция Германии", description: "Окончание Великой Отечественной и войны в Европе" },
    { year: "1945", month: "6 августа", title: "Атомная бомбардировка Хиросимы", description: "Первое применение ядерного оружия" },
    { year: "1945", month: "2 сентября", title: "Окончание Второй мировой войны", description: "Капитуляция Японии" },
    { year: "1945", month: "октябрь", title: "Создание ООН", description: "Организация Объединённых Наций начала свою работу" },
    { year: "1949", month: "апрель", title: "Создание НАТО", description: "Образование военно-политического блока западных стран" },
    { year: "1949", month: "1 октября", title: "Образование КНР", description: "Провозглашение Китайской Народной Республики" },
    { year: "1961", month: "12 апреля", title: "Первый полёт человека в космос", description: "Юрий Гагарин совершил орбитальный полёт вокруг Земли" },
    { year: "1962", month: "октябрь", title: "Карибский кризис", description: "Пик холодной войны, мир на грани ядерной войны" },
    { year: "1991", month: "25 декабря", title: "Распад СССР", description: "Прекращение существования Советского Союза" }
  ];

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
                <Icon name="Clock" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Хронология • 10 класс</span>
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
              <Icon name="Clock" size={16} className="mr-2" />
              Временная шкала истории
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Ключевые события XX века
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Важнейшие даты и события, которые изменили ход истории
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 transform -translate-x-1/2" />

            <div className="space-y-12">
              {events.map((event, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: "fade-in 0.6s ease-out forwards",
                      opacity: 0,
                    }}
                  >
                    {/* Year badge in center */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-white font-bold text-sm text-center leading-tight">
                          {event.year}
                        </span>
                      </div>
                    </div>

                    {/* Branch line */}
                    <div
                      className={`absolute top-8 w-16 h-0.5 bg-gradient-to-r ${
                        isLeft 
                          ? "right-1/2 from-pink-300 to-transparent" 
                          : "left-1/2 from-transparent to-purple-300"
                      }`}
                    />

                    {/* Content card */}
                    <div
                      className={`relative ${
                        isLeft ? "pr-[calc(50%+5rem)]" : "pl-[calc(50%+5rem)]"
                      }`}
                    >
                      <div
                        className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all group ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        {event.month && (
                          <Badge
                            variant="outline"
                            className="mb-3 border-pink-200 text-pink-700 bg-pink-50"
                          >
                            <Icon name="Calendar" size={14} className="mr-1" />
                            {event.month}
                          </Badge>
                        )}
                        <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* End marker */}
            <div className="relative mt-12">
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg border-4 border-white">
                  <Icon name="Flag" size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200">
              <Icon name="Info" size={16} />
              <span>Показаны ключевые события программы 10 класса</span>
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

export default HistoryTimeline;
