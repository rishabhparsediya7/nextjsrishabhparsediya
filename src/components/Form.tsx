'use client'
import { SendHorizontal } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './ui/loader';

type ErrorFields = {
    name: string, message: string
}

export function Form() {

    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('')
    const [errors, setErrors] = useState<ErrorFields>({ name: "", message: "" })
    const [loading, setLoading] = useState(false);
    const notify = () => toast("✈ Message sent to Rishabh!");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name) {
            setErrors({ ...errors, name: "Name must be there!" });
            return;
        }
        if (!message) {
            setErrors({ ...errors, message: "Message should contain something!" });
            return;
        }
        setLoading(true);
        setErrors({ ...errors, name: "", message: "" });
        const formData = new FormData()
        formData.append('name', name);
        formData.append('message', message)
        try {
            const response = await fetch('/api/mailer', {
                method: 'POST',
                body: formData,
                headers: {
                    content: 'application/json'
                }
            });
            setLoading(false)
            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            else {
                notify()
                setMessage('')
                setName('')
            }
        } catch (err) {
            alert("Error, please try resubmitting the form");
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className="w-full sm:w-[60rem] glassmorphism p-4 sm:p-10 flex">
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-y-6">
                <div className="w-full flex flex-col gap-y-2">
                    <label htmlFor="name">Your name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full bg-zinc-700 rounded-md sm:rounded-xl p-2 outline-none text-white" id="subject" name="subject" placeholder="Enter the name" />
                    {errors.name && <p className='text-red-500'>{errors.name}</p>}
                </div>
                <div className="w-full flex flex-col flex-grow gap-y-2">
                    <label htmlFor="message">Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="w-full p-2 bg-zinc-700 rounded-md sm:rounded-xl outline-none text-white" id="subject" name="subject" placeholder="Enter the Message" />
                    {errors.message && <p className='text-red-500'>{errors.message}</p>}
                </div>
                <div className="w-full items-start flex flex-col">

                    <button type='submit' className="bg-zinc-800 py-2 w-full flex px-6 hover:border-b hover:border-b-indigo-500 justify-center rounded-md">{loading ? <Loader /> : <div className='flex'>Send Message <SendHorizontal size={20} className='text-right ml-5 -mr-4' /></div>}</button>
                </div>
            </form>
            <div className="flex-1 hidden sm:flex flex-col items-center">
                <Image src="/bgcont.png" alt="share your message" className='m-auto' width={300} height={300} />
            </div>
        </div>
    )
}