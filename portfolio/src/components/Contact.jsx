import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import {FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub} from 'react-icons/fa';

const Contact = () => {
    const { language } = useContext(LanguageContext);
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const labels = {
        pt: { title: "Entre em Contato", name: "Seu Nome", email: "Seu Email", msg: "Sua Mensagem", send: "Enviar Mensagem", sending: "Enviando...", success: "Mensagem enviada!", error: "Erro ao enviar." },
        en: { title: "Get in Touch", name: "Your Name", email: "Your Email", msg: "Your Message", send: "Send Message", sending: "Sending...", success: "Message sent!", error: "Error sending." }
    };

    const text = labels[language];

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // O Vite usa import.meta.env para acessar as variáveis
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-20 bg-dark-lighter relative">
            <div className="container mx-auto px-6 max-w-4xl">

                <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-12 text-center">
                    {text.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Informações de Contato */}
                    <div className="space-y-8">
                        <p className="text-gray-400 text-lg">
                            {language === 'pt'
                                ? "Estou disponível para novas oportunidades e colaborações. Sinta-se à vontade para me chamar!"
                                : "I am available for new opportunities and collaborations. Feel free to reach out!"}
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:aliceshikida12@gmail.com" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                                <FaEnvelope size={24} className="group-hover:drop-shadow-neon" />
                                <span>aliceshikida12@gmail.com</span>
                            </a>
                            <a href="https://wa.me/5522997342358" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                                <FaWhatsapp size={24} className="group-hover:drop-shadow-neon" />
                                <span>(22) 99734-2358</span>
                            </a>
                            <a href="https://www.linkedin.com/in/alice-shikida/?locale=en" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                                <FaLinkedin size={24} className="group-hover:drop-shadow-neon" />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/aliceshikida" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                                <FaGithub size={24} className="group-hover:drop-shadow-neon" />
                                <span>Github</span>
                            </a>
                        </div>
                    </div>

                    {/* Formulário */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="user_name"
                                placeholder={text.name}
                                required
                                className="w-full p-4 bg-dark border border-gray-800 rounded-lg focus:border-primary focus:outline-none text-white transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="user_email"
                                placeholder={text.email}
                                required
                                className="w-full p-4 bg-dark border border-gray-800 rounded-lg focus:border-primary focus:outline-none text-white transition-colors"
                            />
                        </div>
                        <div>
              <textarea
                  name="message"
                  rows="5"
                  placeholder={text.msg}
                  required
                  className="w-full p-4 bg-dark border border-gray-800 rounded-lg focus:border-primary focus:outline-none text-white transition-colors resize-none"
              ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full p-4 font-bold rounded-lg transition-all duration-300 ${
                                status === 'success' ? 'bg-green-600 text-white' :
                                    status === 'error' ? 'bg-red-600 text-white' :
                                        'bg-primary text-dark hover:bg-white hover:shadow-neon'
                            }`}
                        >
                            {status === 'sending' ? text.sending :
                                status === 'success' ? text.success :
                                    status === 'error' ? text.error :
                                        text.send}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;