import { Home, Trophy, FileText, Target, Image, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomeScreen from './components/screens/HomeScreen';
import LeaderboardScreen from './components/screens/LeaderboardScreen';
import RulesScreen from './components/screens/RulesScreen';
import GoalsScreen from './components/screens/GoalsScreen';
import GalleryScreen from './components/screens/GalleryScreen';
import ContactScreen from './components/screens/ContactScreen';

export type ScreenId = 'home' | 'leaderboard' | 'rules' | 'goals' | 'gallery' | 'contact';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'leaderboard': return <LeaderboardScreen />;
      case 'rules': return <RulesScreen />;
      case 'goals': return <GoalsScreen />;
      case 'gallery': return <GalleryScreen />;
      case 'contact': return <ContactScreen />;
      default: return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-secondary/20 selection:text-secondary">
      <Navbar currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentScreen} />
    </div>
  );
}
