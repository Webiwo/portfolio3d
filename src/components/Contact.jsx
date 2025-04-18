import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const emailjsConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    serviceId: import.meta.env.VITE_APP_SERVICE_ID,
    templateId: import.meta.env.VITE_APP_TEMPLATE_ID,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          to_name: "Webiwo",
          from_email: form.email,
          to_email: "slawpiwo@wp.pl",
          message: form.message,
        },
        emailjsConfig.apiKey
      )
      .then(
        () => {
          setSending(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setSending(false);
          console.error(error);

          alert("Upss, something went wrong. Please, try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-16 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-[rgb(15,11,34)] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="I'd love to know your name"
              className="bg-[#151030] py-3 px-4 placeholder:text-[#aaa6c3] text-white rounded-lg border-3 border-violet-950 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email address?"
              className="bg-[#151030] py-3 px-4 placeholder:text-[#aaa6c3] text-white rounded-lg border-3 border-violet-950 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to tell me?"
              className="bg-[#151030] py-3 px-4 placeholder:text-[#aaa6c3] text-white rounded-lg border-3 border-violet-950 font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#151030] py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md shadow-black border-3 border-violet-950"
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
