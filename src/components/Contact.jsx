import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { firm } from '../data/content';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

const socialIcons = [
  { key: 'facebook', Icon: FaFacebookF, href: firm.social.facebook },
  { key: 'youtube', Icon: FaYoutube, href: firm.social.youtube },
  { key: 'instagram', Icon: FaInstagram, href: firm.social.instagram },
  { key: 'linkedin', Icon: FaLinkedinIn, href: firm.social.linkedin },
  { key: 'whatsapp', Icon: FaWhatsapp, href: firm.social.whatsapp },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || 'Portfolio Inquiry');
    window.location.href = `mailto:${firm.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'bg-arch-charcoal border border-arch-charcoal/50 focus:border-arch-gold focus:outline-none rounded-sm px-4 py-3 text-arch-text w-full transition-colors';

  return (
    <SectionWrapper id="contact" className="bg-arch-dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <h2 className="font-display text-4xl text-white mb-3">Get In Touch</h2>
          <p className="text-arch-muted mb-8 md:mb-10">
            We are always ready to collaborate with your new ideas &amp; projects
          </p>

          <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            <li className="flex items-start gap-4">
              <HiPhone className="text-arch-gold text-xl mt-0.5 flex-shrink-0" />
              <a href={`tel:${firm.phone.replace(/\s/g, '')}`} className="text-arch-text hover:text-arch-gold transition-colors">
                {firm.phone}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <HiMail className="text-arch-gold text-xl mt-0.5 flex-shrink-0" />
              <a href={`mailto:${firm.email}`} className="text-arch-text hover:text-arch-gold transition-colors">
                {firm.email}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <HiLocationMarker className="text-arch-gold text-xl mt-0.5 flex-shrink-0" />
              <span className="text-arch-text">{firm.address}</span>
            </li>
          </ul>

          <div className="flex gap-4 mb-8 md:mb-10">
            {socialIcons.map(({ key, Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-arch-muted hover:text-arch-gold transition-colors text-lg"
                aria-label={key}
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="rounded-sm overflow-hidden w-full h-48 md:h-64">
            <iframe
              src={firm.mapEmbed}
              title="ZVDW office location"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-arch-gold text-arch-black font-mono uppercase tracking-widest py-4 hover:bg-white transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
