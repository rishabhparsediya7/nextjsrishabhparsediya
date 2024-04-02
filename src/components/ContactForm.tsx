import { Form } from "./Form";

export function ContactForm() {
    return (
        <div id="contact" className="w-full h-[40rem] flex gap-y-10 flex-col py-20 px-6 sm:px-0 items-center justify-center relative">
            <div className="text-center space-y-2">
                <h1 className="text-4xl sm:text-6xl font-bold">Get in Touch</h1>
                <p>Share your email or number. I will be reaching out to you!</p>
            </div>
            <Form />
        </div>)
}