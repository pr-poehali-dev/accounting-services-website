import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Calculator" size={24} className="text-blue-900" />
            <span className="text-xl font-bold text-blue-900">БухПрофи</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-900 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-blue-900 transition-colors"
            >
              Опыт работы
            </a>
            <a
              href="#documents"
              className="text-gray-600 hover:text-blue-900 transition-colors"
            >
              Документы
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-900 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-blue-900 hover:bg-blue-800 text-white">
            Получить консультацию
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
