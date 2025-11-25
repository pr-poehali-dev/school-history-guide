import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const allTopics = [
    {
      title: "Первая мировая война 1914-1918",
      path: "/class/10/history/chapter-1/world-war-one",
      subject: "История",
      class: "10 класс",
      chapter: "Глава I"
    },
    {
      title: "Мир накануне Первой мировой войны",
      path: "/coming-soon",
      subject: "История",
      class: "10 класс",
      chapter: "Глава I"
    }
  ];

  const filteredTopics = query.trim() 
    ? allTopics.filter(topic => 
        topic.title.toLowerCase().includes(query.toLowerCase()) ||
        topic.subject.toLowerCase().includes(query.toLowerCase())
      )
    : allTopics;

  const handleTopicClick = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Поиск по материалам</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Введите название темы или предмета..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>

          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => handleTopicClick(topic.path)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="BookOpen" size={20} className="text-pink-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 group-hover:text-pink-600 transition-colors">
                        {topic.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{topic.subject}</span>
                        <span>•</span>
                        <span>{topic.class}</span>
                        <span>•</span>
                        <span>{topic.chapter}</span>
                      </div>
                    </div>
                    <Icon 
                      name="ChevronRight" 
                      size={18} 
                      className="text-muted-foreground group-hover:text-pink-600 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-3 opacity-30" />
                <p className="text-muted-foreground">
                  {query.trim() ? "Ничего не найдено" : "Начните вводить для поиска"}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
