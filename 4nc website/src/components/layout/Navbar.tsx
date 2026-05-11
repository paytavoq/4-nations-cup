import { useState } from 'react';
import { ScreenId } from '../../App';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export default function Navbar({ currentScreen, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: ScreenId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'leaderboard', label: 'Leaderboard' },
    { id: 'rules', label: 'Rules & Points' },
    { id: 'goals', label: 'Aim and Goals' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (id: ScreenId) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-primary border-b-2 border-tertiary sticky top-0 z-50 h-20 shadow-md">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full flex justify-between items-center">
        <button 
          onClick={() => handleNavigate('home')}
          className="font-anybody text-xl md:text-2xl font-extrabold uppercase tracking-tighter text-white hover:text-tertiary transition-colors z-50"
        >
          4 NATIONS CUP
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`font-inter text-sm font-bold uppercase tracking-wider transition-all pb-1 border-b-2 flex flex-col ${
                currentScreen === item.id 
                  ? 'text-tertiary border-tertiary' 
                  : 'text-white border-transparent hover:text-tertiary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-secondary text-white font-anybody font-bold text-xs md:text-sm px-6 py-2 uppercase tracking-widest hover:bg-secondary-container transition-all scale-95 active:scale-90">
            LIVE SCORE
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors z-50"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary z-40 lg:hidden flex flex-col pt-24 px-margin-mobile"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left font-anybody text-3xl font-bold uppercase py-4 border-b border-white/10 transition-colors ${
                    currentScreen === item.id ? 'text-secondary' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <button className="w-full bg-secondary text-white font-anybody font-bold text-lg py-4 uppercase tracking-widest">
                LIVE SCORE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
