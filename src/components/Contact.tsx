import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600">
            Готовы ответить на ваши вопросы и предложить оптимальное решение
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                <Icon name="Phone" size={28} className="text-blue-900" />
              </div>
              <CardTitle className="text-xl text-gray-900">Телефон</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-blue-900 mb-2">
                +7 (999) 123-45-67
              </p>
              <p className="text-gray-600 mb-4">Ежедневно с 9:00 до 18:00</p>
              <Button className="w-full bg-blue-900 hover:bg-blue-800">
                Позвонить
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                <Icon name="Mail" size={28} className="text-blue-900" />
              </div>
              <CardTitle className="text-xl text-gray-900">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-bold text-blue-900 mb-2">
                info@buhprofi.ru
              </p>
              <p className="text-gray-600 mb-4">Ответим в течение 2 часов</p>
              <Button
                variant="outline"
                className="w-full border-blue-900 text-blue-900 hover:bg-blue-50"
              >
                Написать
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                <Icon name="MapPin" size={28} className="text-blue-900" />
              </div>
              <CardTitle className="text-xl text-gray-900">Офис</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                г. Москва
              </p>
              <p className="text-gray-600 mb-4">ул. Примерная, д. 1, оф. 101</p>
              <Button
                variant="outline"
                className="w-full border-blue-900 text-blue-900 hover:bg-blue-50"
              >
                Показать на карте
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Бесплатная консультация
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Обсудим ваши задачи, расскажем о наших возможностях и подберем
              оптимальный план сотрудничества
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white flex-1"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на встречу
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-50 flex-1"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
