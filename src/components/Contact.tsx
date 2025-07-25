import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 bg-black text-white max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Get in Touch with Our Mining Experts
        </h2>
        <p className="mt-4 text-gray-300">
          Have questions or want to learn more about our mining solutions? Contact us today and let's discuss how we can help your mining operations thrive.
        </p>

        <form className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-black text-white border-yellow-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-black text-white border-yellow-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-black text-white border-yellow-500"
          />
          <button
            type="submit"
            className="w-full py-3 text-black transition bg-yellow-500 rounded-md hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

