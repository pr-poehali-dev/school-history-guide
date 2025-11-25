import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const WorldWarOne = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/class/10/history/chapter-1")}
              className="hover:bg-blue-100"
            >
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl font-bold text-slate-800">
                Первая мировая война 1914-1918
              </h1>
              <p className="text-sm text-slate-600">Глава I • Всеобщая история</p>
            </div>
            <Button
              onClick={() => navigate("/class/10/history/chapter-1/world-war-one/tests")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Icon name="CheckCircle" size={18} className="mr-2" />
              Тесты
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-8">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-blue-600">1.</span>
              Военно-политическая обстановка накануне войны
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>В Европе сложились два враждебных военно-политических блока: Антанта (Россия, Франция, Великобритания) и Тройственный союз (Германия, Австро-Венгрия, Италия).</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Развитые страны активно наращивали военное производство, готовясь к грядущей войне: например, тоннаж военных кораблей Великобритании с 1884 по 1914 г. вырос в 3 раза, а Германии — в 15 раз.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>В обществе усиливались влияние военных кругов и монополий, осуществлявших военное производство, и воинственные настроения (милитаризм).</span>
              </p>
              
              {/* Definitions */}
              <div className="space-y-3 mt-4 pl-6 border-l-4 border-amber-400 bg-amber-50/50 p-4 rounded-r-lg">
                <div>
                  <p className="font-semibold text-amber-900">Монополизм</p>
                  <p className="text-sm text-slate-700">слияние капиталов и образование крупных финансовых и промышленных монополий.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Монополия</p>
                  <p className="text-sm text-slate-700">ситуация на рынке, когда одна компания или группа компаний контролирует большую часть или весь объем предложения определенного товара или услуги.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Милитаризм</p>
                  <p className="text-sm text-slate-700">система политических, экономический и идеологических средств, используемых правящими кругами с целью наращивания военной мощи.</p>
                </div>
              </div>

              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Несмотря на усилия некоторых государственных лидеров по ограничению военной угрозы и гуманизации методов ведения войны, большинство соглашений, принятых на Гаагских конференциях, остались на бумаге, когда дело дошло до реального конфликта.</span>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-blue-600">2.</span>
              Причины войны
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Борьба за передел колониальных владений и рынков сбыта.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Франция желала вернуть территории, утраченные в франко-прусской войне.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Италия стремилась присоединить италоговорящие Триест и Трентино, находившиеся под властью Австро-Венгрии.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Россия стремилась получить контроль над проливами и присоединить Галицию.</span>
              </p>
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-slate-800 font-medium">Основной причиной стало желание ряда стран пересмотреть границы.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-blue-600">3.</span>
              Начало войны
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>28 июня 1914 г.</strong> — убийство эрцгерцога Франца Фердинанда (наследника Австро-Венгерского престола) в Сараево членом тайной революционной организации «Молодая Босния». Это событие стало непосредственным поводом к началу войны.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>28 июля 1914 г.</strong> — Австро-Венгрия предъявила Сербии ультиматум и объявила войну.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>1 августа 1914 г.</strong> — Германия объявила войну России, а затем Франции.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>4 августа 1914 г.</strong> — Великобритания вступает в войну.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>План Шлиффена (обход Франции через Бельгию и разгром французских войск) проваливается.</span>
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-blue-600">4.</span>
              Первый год войны
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Сентябрь 1914 г.</strong> — битва на Марне, которая остановила быстрое наступление немецких войск на Париж ("Чудо на Марне").</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>1915 г.</strong> — Германия атакует Россию (Горлицкий прорыв), но Восточный фрот выдерживает нападение.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Весна 1915 г.</strong> — геноцид армян в Османской империи, который приводит к восстаниям армян против турок при поддержке России.</span>
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-blue-600">5.</span>
              Переход к позиционной войне
            </h2>
            
            {/* Definition */}
            <div className="pl-6 border-l-4 border-amber-400 bg-amber-50/50 p-4 rounded-r-lg">
              <p className="font-semibold text-amber-900">Позиционная война</p>
              <p className="text-sm text-slate-700">война, когда преобладающим видом боевых действий являются попытки прорвать глубоко эшелонированную оборону на сплошном фронте большой протяженности.</p>
            </div>

            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>В связи с тем, что средства наступления стали слабее средств обороны, армии стали укрываться в защищенных окопах, перейдя к позиционной войне.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Апрель 1915 г.</strong> — первое применение газовой атаки. Это сделали немцы, прорывая оборону под городом Ипром.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Болгария вступает в войну против Сербии, образование Четвертного союза.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Сентябрь 1916 г.</strong> — первое применение танков. Это сделали британцы в битве с немецкой армией на реке Сомме.</span>
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-blue-600">6.</span>
              Борьба на истощение
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Германия ограничивает масштабы атак подводными лодками после того, как США пригрозили вступить в войну.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>31 мая — 1 июня 1916 г.</strong> — Ютландское морское сражение между флотами Германии и Великобритании, которое не принесло решающего преимущества ни одной из сторон.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Карточная система (граждане пользовались талонами, чтобы получить какой либо товар).</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Пандемия болезни "испанки".</span>
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-blue-600">7.</span>
              Изменение соотношения сил
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Май — июнь 1916 г.</strong> — Брусиловский прорыв, успешное наступление русских войск в Галиции, которое поставило Австро-Венгрию на грань катастрофы и вынудило германское командование перебрасывать войска с Западного фронта.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>1916 г.</strong> — Румыния вступает в войну на стороне Антанты.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>1917 г.</strong> — Греция вступает в войну на стороне Антанты.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>1917 г.</strong> — Германия объявляет войну США.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Февраль — март 1917 г.</strong> — Февральская революция в России, падение монархии.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>25–26 октября 1917 г.</strong> — взятие власти большевиками в России.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>3 марта 1918 г.</strong> — подписание Брестского мира, по которому Россия вышла из войны, потеряв значительные территории.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>1918 г.</strong> — последнее наступление Германии проваливается.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>11 ноября 1918 г.</strong> — подписание Компьенского перемирия, фактически означавшее поражение Германии и завершение Первой мировой войны.</span>
              </p>
            </div>
          </section>

        </div>

        {/* Navigation */}
        <div className="mt-6 flex gap-3">
          <Button
            onClick={() => navigate("/class/10/history/chapter-1")}
            variant="outline"
            className="flex-1"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            К темам главы
          </Button>
        </div>
      </main>
    </div>
  );
};

export default WorldWarOne;