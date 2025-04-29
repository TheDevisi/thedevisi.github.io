import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="src/img/welcome.png"
              alt="place"
              className="w-full h-auto scale-x-[-1]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ̶М̶ы̶ ̶к̶о̶м̶а̶н̶д̶а̶.̶.̶  Кому я вру? Я один.<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> ̶Н̶а̶в̶с̶е̶г̶д̶а̶</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Бла, бла, бла. Очень умный чебупель, работаю с докером, кубером, постгресом, и тп. Вы поняли.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Самый главный енот на районе',
                'Умеет в новомодный Go, бэкэндер',
                'Умеет думать',
                'Использует Arch Linux. (btw)',
                'Если вас что-то не устраивает, перечитайте пункт первый.'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="https://vk.com/video807566_169118280" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 shadow-md hover:shadow-lg"
              >
                НИХУЯ СЕБЕ!
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;