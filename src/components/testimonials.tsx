import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Smith",
    title: "CEO, Global Mining Corp",
    feedback:
      "The mining solutions provided have significantly improved our operational efficiency and safety standards. Their expertise in the mining industry is unparalleled.",
  },
  {
    name: "Maria Lopez",
    title: "Operations Manager, Terra Minerals",
    feedback:
      "Their innovative approach to mining technology has helped us reduce costs and increase productivity. Highly recommended for any mining business looking to modernize.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 py-24 text-white bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="mx-auto text-center max-w-7xl"
      >
        <p className="mb-2 text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          CLIENT'S TESTIMONIAL
        </p>
        <h2 className="mb-10 text-4xl font-bold">
          Reviews From Our Mining Clients
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: false }}
              className="relative p-8 text-left bg-gray-900 rounded-lg shadow-lg"
            >
              <p className="mb-6">{t.feedback}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <p className="text-yellow-600">{t.title}</p>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.17 6.17a4 4 0 015.66 0l1.41 1.41a4 4 0 010 5.66l-1.41 1.41a4 4 0 01-5.66 0l-1.41-1.41a4 4 0 010-5.66l1.41-1.41z" />
                  </svg>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
