import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <section
      id="analytics"
      className="relative px-6 py-24 mx-auto text-white max-w-7xl"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="max-w-3xl mb-12"
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold"
        >
          Driving Innovation in Mining
        </motion.h2>
        <div className="w-24 h-1 mb-4 bg-yellow-600 rounded"></div>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg"
        >
          Don’t wait—partner with us for cutting-edge mining solutions today!
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-6 mt-6"
        >
          <button className="px-6 py-2 text-yellow-600 transition border border-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white">
            MAKE APPOINTMENT
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h1l2 3 3-3 4 4 5-5 2 2v5h1"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase">GET A FREE CONSULTATION</p>
              <p className="text-xl font-bold">0507091754</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
          hidden: {},
        }}
        className="grid grid-cols-2 gap-8 text-center md:grid-cols-4"
      >
        {[
          { number: "100+", label: "Happy Customers" },
          { number: "10+", label: "Impact Industries" },
          { number: "98%", label: "Satisfaction Rate" },
          { number: "50+", label: "Completed Projects" },
        ].map(({ number, label }, index) => (
          <motion.div
            key={index}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            className="flex flex-col items-center"
          >
            <p className="text-5xl font-bold text-yellow-600">{number}</p>
            <p>{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Analytics;
