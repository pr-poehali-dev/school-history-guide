import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 relative overflow-hidden flex items-center justify-center">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(30%, -30%)", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(-30%, 30%)", animationDuration: "3s" }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
              <Icon name="Construction" size={64} className="text-purple-600" />
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Скоро будет! 🚧
          </h1>

          <p className="text-2xl text-foreground/80 mb-4 font-medium">
            Этот материал пока не готов,
          </p>
          <p className="text-2xl text-foreground/80 mb-8 font-medium">
            но не переживай — мы это так не оставим! 💪
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Наша команда усердно работает над тем, чтобы этот раздел стал
            доступным. Следи за обновлениями!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate(-1)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться назад
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/")}
              className="px-8 py-6 text-lg rounded-2xl border-2 hover:border-purple-500"
            >
              <Icon name="Home" size={20} className="mr-2" />
              На главную
            </Button>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-border/50">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Lightbulb" size={28} className="text-purple-500" />
              <h3 className="text-xl font-semibold">А пока...</h3>
            </div>
            <p className="text-muted-foreground">
              Попробуй раздел <strong>История для 10 класса</strong> — он уже
              полностью готов и ждёт тебя! 📚
            </p>
            <Button
              onClick={() => navigate("/class/10/history")}
              className="mt-4 bg-purple-100 text-purple-700 hover:bg-purple-200"
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
