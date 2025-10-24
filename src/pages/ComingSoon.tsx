import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container mx-auto px-6 py-16 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-9xl mb-4">🪵</div>
            <p className="text-xl text-gray-600 font-medium">Ясен Пень пока учится...</p>
          </div>

          <h1 className="text-6xl font-bold mb-6 tracking-tight text-gray-900">
            Скоро будет! 🚧
          </h1>

          <p className="text-2xl text-gray-700 mb-4 font-medium">
            Этот материал пока не готов,
          </p>
          <p className="text-2xl text-gray-700 mb-8 font-medium">
            но я учусь быстро — скоро всё будет ясно! 💪
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Команда ЯсенПень усердно работает над тем, чтобы этот раздел стал
            доступным. Следи за обновлениями!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate(-1)}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться назад
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/")}
              className="px-8 h-14 text-base font-medium rounded-xl border-gray-200 hover:border-gray-300"
            >
              <Icon name="Home" size={20} className="mr-2" />
              На главную
            </Button>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Lightbulb" size={28} className="text-primary" />
              <h3 className="text-xl font-semibold text-gray-900">А пока...</h3>
            </div>
            <p className="text-gray-600">
              Попробуй раздел <strong>История для 10 класса</strong> — он уже
              полностью готов и ждёт тебя! 📚
            </p>
            <Button
              onClick={() => navigate("/class/10/history")}
              className="mt-4 bg-primary text-white hover:opacity-90"
            >
              Перейти к Истории
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;