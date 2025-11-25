import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GuideDialog from "@/components/GuideDialog";
import SearchDialog from "@/components/SearchDialog";
import FavoritesDialog from "@/components/FavoritesDialog";

const Index = () => {
  const navigate = useNavigate();
  const classes = Array.from({ length: 11 }, (_, i) => i + 1);
  const [guideOpen, setGuideOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-pink-50/40 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(30%, -30%)", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: "translate(-30%, 30%)", animationDuration: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/30 rounded-full blur-3xl animate-pulse"
        style={{
          transform: "translate(-50%, -50%)",
          animationDuration: "5s",
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="BookOpen" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              МнеЯсно
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="gap-2" onClick={() => setSearchOpen(true)}>
              <Icon name="Search" size={18} />
              Поиск
            </Button>
            <Button variant="ghost" className="gap-2" onClick={() => setFavoritesOpen(true)}>
              <Icon name="Star" size={18} />
              Избранное
            </Button>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto text-center mb-20">
          <div className="mb-8 animate-fade-in">
            <Badge
              variant="outline"
              className="text-base px-6 py-2 border-primary/30 text-primary mb-6 inline-flex items-center gap-2"
            >
              <Icon name="Sparkles" size={16} />
              Твой умный помощник
            </Badge>
          </div>

          <h1
            className="text-7xl font-bold mb-6 tracking-tight leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Привет, ученик!
          </h1>

          <p className="text-2xl mb-12 text-foreground/80 font-medium max-w-3xl mx-auto leading-relaxed">
            Справочник по всем предметам с 1 по 11 класс. Учись легко и становись лучшим в классе!
          </p>

          <div className="flex items-center justify-center gap-4 mb-20">
            <Button
              size="lg"
              onClick={() => setGuideOpen(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает?
            </Button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-3">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              Выбери свой класс
            </h2>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3 max-w-6xl mx-auto">
            {classes.map((classNum, index) => (
              <button
                key={classNum}
                onClick={() =>
                  classNum === 10
                    ? navigate("/class/10")
                    : navigate("/coming-soon")
                }
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
                  classNum === 10
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50 hover:border-primary"
                    : "bg-white/60 backdrop-blur-sm border-border hover:border-primary/30"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: "fade-in 0.5s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div className="text-3xl font-bold mb-1">{classNum}</div>
                <div className="text-xs text-muted-foreground">класс</div>
                {classNum === 10 && (
                  <div className="absolute -top-2 -right-2">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center animate-bounce">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </main>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Lightbulb" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Понятно и просто</h3>
            <p className="text-muted-foreground text-sm">
              Сложные темы объясняем простым языком
            </p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Zap" size={32} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстрый поиск</h3>
            <p className="text-muted-foreground text-sm">
              Найди нужную тему за секунды
            </p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Trophy" size={32} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Стань лучшим</h3>
            <p className="text-muted-foreground text-sm">
              Проверяй знания тестами и получай награды
            </p>
          </div>
        </div>
      </div>

      <GuideDialog open={guideOpen} onOpenChange={setGuideOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <FavoritesDialog open={favoritesOpen} onOpenChange={setFavoritesOpen} />

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

export default Index;