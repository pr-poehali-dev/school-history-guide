import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface FavoritesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FavoriteItem {
  id: string;
  title: string;
  path: string;
  subject: string;
  class: string;
}

const FavoritesDialog = ({ open, onOpenChange }: FavoritesDialogProps) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, [open]);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter(fav => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const handleTopicClick = (path: string) => {
    navigate(path);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="Star" size={24} className="text-yellow-500" />
            Избранное
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          {favorites.length > 0 ? (
            favorites.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 transition-all group"
              >
                <button
                  onClick={() => handleTopicClick(item.path)}
                  className="flex-1 text-left flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name="BookOpen" size={20} className="text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{item.subject}</span>
                      <span>•</span>
                      <span>{item.class}</span>
                    </div>
                  </div>
                </button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFavorite(item.id)}
                  className="flex-shrink-0 hover:bg-red-50 hover:text-red-600"
                >
                  <Icon name="Trash2" size={16} />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Icon name="Star" size={48} className="mx-auto text-muted-foreground mb-3 opacity-30" />
              <p className="text-muted-foreground mb-4">
                У тебя пока нет избранных материалов
              </p>
              <p className="text-sm text-muted-foreground">
                Добавляй интересные темы в избранное, чтобы быстро к ним возвращаться!
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FavoritesDialog;
