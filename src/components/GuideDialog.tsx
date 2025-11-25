import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface GuideDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GuideDialog = ({ open, onOpenChange }: GuideDialogProps) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Добро пожаловать в МнеЯсно! 👋",
      description: "Это твой личный помощник по учебе с 1 по 11 класс. Давай покажу, как всё работает!",
      icon: "BookOpen",
      color: "text-blue-500"
    },
    {
      title: "Выбери класс 🎓",
      description: "На главной странице выбери свой класс — увидишь все доступные предметы и материалы для изучения.",
      icon: "GraduationCap",
      color: "text-purple-500"
    },
    {
      title: "Изучай темы 📚",
      description: "Каждая тема разбита на понятные разделы с определениями, датами и примерами. Читай в удобном темпе!",
      icon: "BookMarked",
      color: "text-green-500"
    },
    {
      title: "Проходи тесты ✅",
      description: "После изучения материала проверь свои знания тестами — это поможет лучше запомнить информацию.",
      icon: "CheckCircle",
      color: "text-amber-500"
    },
    {
      title: "Используй поиск 🔍",
      description: "Нужно быстро найти конкретную тему? Используй поиск в шапке сайта — найдешь всё за секунды!",
      icon: "Search",
      color: "text-pink-500"
    },
    {
      title: "Добавляй в избранное ⭐",
      description: "Понравилась тема или хочешь вернуться к ней позже? Добавь в избранное — всё важное будет под рукой!",
      icon: "Star",
      color: "text-yellow-500"
    }
  ];

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onOpenChange(false);
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Гайд по сайту</DialogTitle>
        </DialogHeader>
        
        <div className="py-6 space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center ${currentStep.color}`}>
              <Icon name={currentStep.icon as any} size={40} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{currentStep.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentStep.description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === step 
                    ? "w-8 bg-pink-500" 
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {step > 0 && (
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex-1"
            >
              <Icon name="ChevronLeft" size={18} className="mr-2" />
              Назад
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            {isLastStep ? "Понятно!" : "Далее"}
            {!isLastStep && <Icon name="ChevronRight" size={18} className="ml-2" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuideDialog;
