import { SendHorizontal, PersonStanding, Building2, Laptop } from 'lucide-react';
import Image from 'next/image';

export function Form() {
    return (
        <div className="w-full sm:w-[60rem] glassmorphism p-4 sm:p-10 flex">
            <div className="flex flex-1 flex-col gap-y-6">
                <div className="w-full flex flex-col gap-y-2">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="w-full bg-zinc-700 rounded-md sm:rounded-xl p-2 outline-none text-white" id="subject" name="subject" placeholder="Enter the subject" />
                </div>
                <div className="w-full flex flex-col flex-grow gap-y-2">
                    <label htmlFor="message">Message</label>
                    <textarea rows={6} className="w-full p-2 bg-zinc-700 rounded-md sm:rounded-xl outline-none text-white" id="subject" name="subject" placeholder="Enter the Message" />
                </div>
                <div className="w-full items-start flex flex-col">
                    <button className="bg-zinc-800 py-2 w-full flex px-6 hover:border-b hover:border-b-indigo-500 justify-center rounded-md">Send Message <SendHorizontal size={20} className='text-right ml-5 -mr-4' /> </button>
                </div>
            </div>
            <div className="flex-1 hidden sm:flex flex-col items-center">
                <Image src="/bgcont.png" alt="share your message" className='m-auto' width={300} height={300} />
            </div>
        </div>
    )
}