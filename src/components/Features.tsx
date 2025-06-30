import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Полная конфиденциальность",
      description:
        "Строгое соблюдение коммерческой тайны и защита персональных данных",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description:
        "Гарантируем своевременную подачу отчетности без нарушения сроков",
    },
    {
      icon: "Award",
      title: "Высокая квалификация",
      description: "Сертифицированные специалисты с опытом работы более 10 лет",
    },
    {
      icon: "HeadphonesIcon",
      title: "Постоянная поддержка",
      description:
        "Консультации и поддержка клиентов в рабочее время и по необходимости",
    },
    {
      icon: "TrendingDown",
      title: "Оптимизация расходов",
      description: "Помогаем снизить налоговую нагрузку законными способами",
    },
    {
      icon: "FileCheck",
      title: "Прозрачная отчетность",
      description: "Регулярные отчеты о проделанной работе и состоянии учета",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем не просто услуги, а долгосрочное партнерство для
            развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                  <Icon
                    name={feature.icon as any}
                    size={28}
                    className="text-blue-900"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Готовы начать сотрудничество?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как мы можем помочь
            вашему бизнесу развиваться эффективнее
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center bg-white bg-opacity-10 rounded-lg px-6 py-4">
              <Icon name="Phone" size={20} className="mr-3" />
              <span className="text-lg">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-10 rounded-lg px-6 py-4">
              <Icon name="Mail" size={20} className="mr-3" />
              <span className="text-lg">info@buhprofi.ru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
