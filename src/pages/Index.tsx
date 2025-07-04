import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
              <img
                src="/img/892e879e-0507-4a87-ba7d-46ae17fadf47.jpg"
                alt="Анна Петрова - маркетолог и SMM-специалист"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-['Source_Sans_Pro']">
              Анна Петрова
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Маркетолог • СММ-специалист • Преподаватель
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                5+ лет опыта
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                50+ проектов
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Сертифицированный специалист
              </Badge>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Обсудить проект
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            О моем опыте
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <Icon
                  name="TrendingUp"
                  size={32}
                  className="text-blue-600 mb-2"
                />
                <CardTitle className="text-xl">Маркетинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Разработка маркетинговых стратегий, анализ рынка, запуск
                  рекламных кампаний с ROI до 300%
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <Icon name="Share2" size={32} className="text-blue-600 mb-2" />
                <CardTitle className="text-xl">SMM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ведение соцсетей, контент-стратегия, увеличение охватов и
                  конверсий
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <Icon
                  name="GraduationCap"
                  size={32}
                  className="text-blue-600 mb-2"
                />
                <CardTitle className="text-xl">Обучение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Авторские курсы, мастер-классы, индивидуальные консультации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Мои услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      Консультация по маркетингу
                    </CardTitle>
                    <CardDescription>
                      Аудит текущей стратегии и рекомендации
                    </CardDescription>
                  </div>
                  <Icon name="Target" size={32} className="text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Анализ конкурентов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Стратегия продвижения
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Оптимизация бюджета
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  от 15 000 ₽
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      Ведение соцсетей
                    </CardTitle>
                    <CardDescription>
                      Комплексное SMM-продвижение
                    </CardDescription>
                  </div>
                  <Icon name="Smartphone" size={32} className="text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Контент-план
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Создание контента
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Аналитика и отчеты
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  от 25 000 ₽/мес
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      Обучающий курс
                    </CardTitle>
                    <CardDescription>
                      Интенсив по digital-маркетингу
                    </CardDescription>
                  </div>
                  <Icon name="BookOpen" size={32} className="text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    20 видеоуроков
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Практические задания
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Сертификат
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  12 000 ₽
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      Индивидуальный коучинг
                    </CardTitle>
                    <CardDescription>
                      Персональное развитие в маркетинге
                    </CardDescription>
                  </div>
                  <Icon name="Users" size={32} className="text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Персональный план
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Еженедельные сессии
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Поддержка в чате
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  от 8 000 ₽/час
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Анна помогла нам увеличить продажи на 200% за 3 месяца.
                  Профессиональный подход и отличное понимание рынка."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Михаил Иванов
                    </div>
                    <div className="text-sm text-gray-500">
                      Директор, ООО "Альфа"
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Курс по SMM превзошел все ожидания. Много практики, четкие
                  объяснения, реальные кейсы. Рекомендую!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Елена Смирнова
                    </div>
                    <div className="text-sm text-gray-500">Маркетолог, ИП</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Свяжитесь со мной для обсуждения вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              anna@example.com
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-100 hover:text-white hover:bg-blue-700"
            >
              <Icon name="Instagram" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-100 hover:text-white hover:bg-blue-700"
            >
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-100 hover:text-white hover:bg-blue-700"
            >
              <Icon name="MessageSquare" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
