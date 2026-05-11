import { Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import Flag from '../ui/Flag';

export default function ContactScreen() {
  return (
    <div className="flex flex-col">
      <header className="bg-surface py-section-gap flex flex-col items-center text-center px-margin-mobile border-b border-outline-variant">
        <h1 className="font-anybody text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter mb-4">Contact Us</h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl font-medium">
          Have questions about the tournament? Reach out for general inquiries, media requests, or sponsorship opportunities. Our team is here to help.
        </p>
      </header>

      <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Form */}
        <section className="lg:col-span-7 bg-white border border-outline-variant p-10 shadow-lg">
          <div className="mb-10">
            <h2 className="font-anybody text-3xl font-bold text-primary uppercase mb-2">Send a Message</h2>
            <div className="w-20 h-1.5 bg-secondary" />
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full border-b-2 border-outline-variant focus:border-secondary outline-none py-3 transition-colors font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full border-b-2 border-outline-variant focus:border-secondary outline-none py-3 transition-colors font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">Inquiry Type</label>
              <select className="w-full border-b-2 border-outline-variant focus:border-secondary outline-none py-3 transition-colors font-medium bg-transparent">
                <option>General Inquiry</option>
                <option>Registration Support</option>
                <option>Sponsorship Opportunities</option>
                <option>Media Requests</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">Message</label>
              <textarea 
                rows={5} 
                placeholder="How can we help you?"
                className="w-full border-2 border-outline-variant focus:border-secondary outline-none p-4 transition-colors font-medium"
              />
            </div>

            <button className="bg-primary text-white font-anybody font-bold text-sm px-12 py-5 uppercase tracking-widest hover:bg-primary-container transition-all shadow-md">
              Send Message
            </button>
          </form>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-5 space-y-gutter">
          {/* Info Card */}
          <div className="bg-surface-container border border-outline-variant p-8 border-l-8 border-primary flex flex-col gap-8 shadow-sm">
            <h3 className="font-anybody text-2xl font-bold text-primary uppercase">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="text-secondary shrink-0" size={24} />
                <div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Official Email</p>
                  <a href="mailto:contact@4nationscup.com" className="font-bold text-primary hover:text-secondary transition-colors">contact@4nationscup.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-secondary shrink-0" size={24} />
                <div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Tournament HQ</p>
                  <p className="font-bold text-on-surface leading-tight">Strasbourg, France<br/>European Disc Golf Circuit</p>
                </div>
              </div>
            </div>
          </div>

          {/* Host Nations Card */}
          <div className="bg-surface-container border border-outline-variant p-8 border-l-8 border-tertiary shadow-sm">
            <h3 className="font-anybody text-2xl font-bold text-primary uppercase mb-6">Host Nations</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'France', country: 'France' as const },
                { name: 'Germany', country: 'Germany' as const },
                { name: 'Luxembourg', country: 'Luxembourg' as const },
                { name: 'Belgium', country: 'Belgium' as const },
              ].map((n, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Flag country={n.country} className="w-6 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{n.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Card */}
          <div className="bg-surface-container border border-outline-variant p-8 border-l-8 border-secondary shadow-sm">
            <h3 className="font-anybody text-2xl font-bold text-primary uppercase mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <button key={idx} className="w-12 h-12 flex items-center justify-center border-2 border-outline-variant hover:bg-primary hover:text-white transition-all">
                  <Icon size={24} />
                </button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 w-full rounded overflow-hidden shadow-md">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9iGUSRrfL1Na7lzm2t37JmAb-IHUbSYHu9P-UCX6PrvMzrE50imhQfmYa1gB1YpHfBlFrWLk3YSWq4VQcsM0A466GS7mVWDaBnpCrvVSdYizzoNuI4GnCTPlgkhqmPHwoyCD_S6yQhKlIDlbGBU5sv101AVsI4J9RkvqjADVRnGdbi5kb_zu8cK_hiom2THA3h9dFQNBgx8PCywJcKMhoVJu6PJgBYJc-6OaxRsJt2R_Wjf03rNntcqDlPNwExIcz880xn3xzDIg" 
              className="w-full h-full object-cover"
              alt="Tournament Scene"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
        </aside>
      </div>
    </div>
  );
}
