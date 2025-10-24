import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeFavorites, setActiveFavorites] = useState<string[]>([]);

  const sections = [
    {
      id: "topics",
      title: "Темы",
      description: "Основные периоды и события",
      icon: "BookOpen",
      color: "primary",
    },
    {
      id: "timeline",
      title: "Хронология",
      description: "Временная шкала истории",
      icon: "Clock",
      color: "secondary",
    },
    {
      id: "maps",
      title: "Карты",
      description: "Исторические территории",
      icon: "Map",
      color: "primary",
    },
    {
      id: "terms",
      title: "Термины",
      description: "Важные понятия и определения",
      icon: "FileText",
      color: "secondary",
    },
    {
      id: "tests",
      title: "Тесты",
      description: "Проверь свои знания",
      icon: "CheckCircle",
      color: "primary",
    },
    {
      id: "people",
      title: "Личности",
      description: "Биографии исторических деятелей",
      icon: "Users",
      color: "secondary",
    },
    {
      id: "favorites",
      title: "Избранное",
      description: "Сохраненные материалы",
      icon: "Star",
      color: "accent",
    },
  ];

  const toggleFavorite = (id: string) => {
    setActiveFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30">
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10"
        style={{ transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"
        style={{ transform: "translate(-30%, 30%)" }}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge
              variant="outline"
              className="text-lg px-6 py-2 border-primary/30 text-primary"
            >
              #87CEEB
            </Badge>
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-tight">
            ИСТОРИЯ 10
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Основные периоды и события
          </p>
          <p className="text-sm text-foreground/60 mt-6 max-w-3xl mx-auto leading-relaxed">
            В данном разделе представлены ключевые факты, биографии известных
            деятелей и важные даты, необходимые для углубленного изучения
            истории 10 класса.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fade-in 0.5s ease-out forwards",
                opacity: 0,
              }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      section.color === "primary"
                        ? "bg-primary/10"
                        : section.color === "secondary"
                        ? "bg-secondary/10"
                        : "bg-accent/50"
                    }`}
                  >
                    <Icon
                      name={section.icon as any}
                      className={
                        section.color === "primary"
                          ? "text-primary"
                          : section.color === "secondary"
                          ? "text-secondary"
                          : "text-secondary"
                      }
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
                      size={20}
                      className={
                        activeFavorites.includes(section.id)
                          ? "fill-secondary text-secondary"
                          : "text-muted-foreground hover:text-secondary"
                      }
                    />
                  </button>
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <footer className="text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-border/50">
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-2xl font-semibold hover:scale-105 transition-transform">
              Berigns Designs
            </button>
            <button className="px-8 py-3 bg-white border-2 border-border rounded-2xl font-medium hover:border-primary transition-colors">
              'Segoe UI', Resigns
            </button>
          </div>
        </footer>
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

export default Index;
