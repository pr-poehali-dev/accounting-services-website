import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "FileText",
      title: "Ведение учета для ИП и малого бизнеса",
      description:
        "Полное ведение учетных документов, подготовка отчетности и взаимодействие с контролирующими органами",
      features: [
        "Ведение КУДиР",
        "Подготовка деклараций",
        "Расчет налогов",
        "Консультации по НК РФ",
      ],
    },
    {
      icon: "Building2",
      title: "Полный бухгалтерский аутсорсинг",
      description:
        "Комплексное ведение бухгалтерского учета для компаний любого размера с полной ответственностью",
      features: [
        "Ведение баланса",
        "Управленческая отчетность",
        "Кадровый учет",
        "Налоговое планирование",
      ],
    },
    {
      icon: "Calculator",
      title: "Налоговое консультирование",
      description:
        "Профессиональные консультации по налогообложению, оптимизация налоговых платежей",
      features: [
        "Налоговые консультации",
        "Представительство в ИФНС",
        "Аудит налоговых рисков",
        "Смена налогового режима",
      ],
    },
    {
      icon: "RefreshCw",
      title: "Восстановление учета",
      description:
        "Устранение нарушений в учете, работа с проблемными ситуациями и налоговыми доначислениями",
      features: [
        "Восстановление документов",
        "Исправление ошибок",
        "Работа с доначислениями",
        "Урегулирование споров",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр бухгалтерских услуг для ИП и компаний.
            Индивидуальный подход к каждому клиенту и гарантия качества.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-blue-900"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-50"
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
