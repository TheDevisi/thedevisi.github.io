import { motion } from 'framer-motion';
import { Zap, Shield, BarChart, RefreshCw, Smartphone, Layout } from 'lucide-react';

const features = [
  {
    icon: <Layout className="w-6 h-6 text-blue-600" />,
    title: 'Ужасную адаптивность',
    description: 'Помните прошлую версию сайта? А помните каким пиздецом она была на мобиле?'
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: 'Хуевую скорость',
    description: 'FБудьте уверены, что проект упадет еще и до прода, а утечки памяти будут как родные!'
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: 'Хуевая безопасность',
    description: 'Пароль от админки этого сайта - 1234'
  },
  {
    icon: <BarChart className="w-6 h-6 text-blue-600" />,
    title: 'Че такое гугл',
    description: 'Я пишу URL вручную, я же еблан'
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: 'Современность',
    description: 'У меня последний Sony Ericsson E1000!'
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
    title: 'Обновления',
    description: 'Я отрубил обновления Windows. Windows XP. 2007 будет с вами всегда!'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Что я умею?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Я предлагаю настолько ужасные решения, что даже бомж за водяру сделает лучше.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 w-12 h-12 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;