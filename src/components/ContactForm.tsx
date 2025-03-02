import { Form } from "./Form";

export function ContactForm() {
  return (
    <div
      id="contact"
      className="w-full h-[40rem] flex gap-y-10 flex-col py-20 px-6 sm:px-0 
                items-center justify-center relative bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white">
          Get in Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Share your email or number. I will be reaching out to you!
        </p>
      </div>
      <Form />
    </div>
  );
}
