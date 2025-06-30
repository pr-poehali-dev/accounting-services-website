import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Надежные
              <span className="text-blue-900"> бухгалтерские услуги</span>
              для вашего бизнеса
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональное ведение учета, налоговое консультирование и
              полный бухгалтерский аутсорсинг. Более 10 лет опыта работы с ИП и
              малым бизнесом.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-50"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Узнать стоимость
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="mr-1 text-green-600" />
                Официально
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-1 text-green-600" />
                Быстро
              </div>
              <div className="flex items-center">
                <Icon name="Star" size={16} className="mr-1 text-green-600" />
                Надежно
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="p-8 bg-white shadow-lg border-0">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <Icon name="TrendingUp" size={32} className="text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Экономия времени до 90%
                </h3>
                <p className="text-gray-600">
                  Полностью берем на себя ведение бухгалтерского учета и
                  взаимодействие с налоговой
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">500+</div>
                  <div className="text-sm text-gray-600">
                    довольных клиентов
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">10+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
