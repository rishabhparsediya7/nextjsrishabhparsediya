import Image from "next/image";
import { CusButton } from "./ui/custombuttoncomponent";

export function ContactForm() {
    return (
        <div className="w-full h-[30rem] flex flex-col gap-y-7 items-center justify-center relative">
            <h1 className="text-4xl z-50 ">Get in touch with me</h1>
            {/* <Image src='/bgcontact.jpg' className="absolute" fill={true} alt="contactform" /> */}
            <div className="w-[40rem] glassmorphism p-6 flex flex-col gap-y-6">
                <div className="w-full flex flex-col gap-y-2">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="w-full bg-transparent rounded-md p-2 border border-white text-white" id="subject" name="subject" placeholder="Enter the subject" />
                </div>
                <div className="w-full flex flex-col gap-y-2">
                    <label htmlFor="message">Message</label>
                    <textarea className="w-full p-2 border bg-transparent rounded-md border-white text-white" id="subject" name="subject" placeholder="Enter the Message" />
                </div>
                <div className="w-full items-start flex flex-col">
                    <button>Send </button>
                </div>
            </div>
        </div>)
}