import { ScreenId } from '../../App';
import { Target, Users, Share2, ArrowRight, Gavel, LayoutDashboard } from 'lucide-react';
import Flag from '../ui/Flag';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-surface py-section-gap flex flex-col items-center text-center px-margin-mobile">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl bg-white flex items-center justify-center p-6 mb-8 group hover:scale-105 transition-transform duration-500">
          <img 
            alt="4 Nations Cup Logo" 
            className="w-full h-full object-contain" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhSvhtYaU5iA-ZtIXASsKbz21DozzbgJILHC8u7UqHASXMrvngidvkSIjzNU4ENwgDKXPQ6FCfe6zGfiYHXQ7OpyBYH7vGcOY16KwYznUDSV7R4IYKCiT2ykN2pPL27TaaP5pPd6U4w34ILcglwI5ltWBF8pRwhnwUIQr7ZeBYWJngg-XlP5doLLIQ6ZP_Ie5lVF05qjSyD3poFt8kOwWku37sUMUlHacTjeySQSy5KqwR-Hx1_YenZN10bhzK7WfUVhxq161UA" 
          />
        </div>
        <h1 className="font-anybody text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary uppercase tracking-tighter mb-4 leading-none">
          4 NATIONS CUP
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl font-medium px-4">
          The premier international disc golf competition uniting four nations in pursuit of sporting excellence.
        </p>
      </section>

      {/* Tour Schedule */}
      <section className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex items-center gap-4 border-b border-outline-variant pb-4 mb-8">
          <h2 className="font-anybody text-2xl md:text-3xl font-bold text-primary uppercase whitespace-nowrap">Tour Schedule</h2>
          <div className="flex-grow h-px bg-outline-variant" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { date: '28.03', city: 'Strasbourg', country: 'France' as const, status: 'Completed', color: '#0055A4' },
            { date: '11.04', city: 'Trier', country: 'Germany' as const, status: 'Completed', color: '#000000' },
            { date: '07.06', city: 'Belval', country: 'Luxembourg' as const, status: 'Upcoming', color: '#00A1DE' },
            { date: '04.10', city: 'Namur', country: 'Belgium' as const, status: 'Upcoming', color: '#ED2939' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-outline-variant p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-primary transition-all shadow-sm"
              style={{ borderLeft: `4px solid ${item.color}` }}
            >
              <div className="flex justify-between items-start">
                <span className="font-anybody text-2xl font-bold text-primary">{item.date}</span>
                <Flag country={item.country} className="opacity-80" />
              </div>
              <div>
                <h3 className="font-anybody text-xl font-semibold text-on-surface uppercase tracking-tight">{item.city}</h3>
                <p className="text-xs font-bold text-outline uppercase">{item.country}</p>
              </div>
              <div className="mt-auto">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                  item.status === 'Completed' ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Dual Layout */}
      <section className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="flex flex-col gap-gutter">
          {/* Rules Card */}
          <div className="bg-white border border-outline-variant p-6 md:p-8 border-l-4 border-primary shadow-sm h-full flex flex-col gap-6">
            <div className="flex items-center gap-3 text-primary">
              <Gavel size={32} />
              <h2 className="font-anybody text-2xl font-bold uppercase">Basic Rules</h2>
            </div>
            <ul className="space-y-4">
              {[
                '1 tournament per country in the annual series.',
                '16 spots reserved specifically for designated 4 Nations Cup players per event.',
                'Players must complete a requirement of playing two rounds to be eligible for team points.'
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container shrink-0">
                    <Target size={12} strokeWidth={3} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Standings Mini Card */}
          <div className="bg-white border border-outline-variant p-6 md:p-8 border-l-4 border-tertiary shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-3 text-primary">
              <LayoutDashboard size={32} />
              <h2 className="font-anybody text-2xl font-bold uppercase">Overall Standings</h2>
            </div>
            <div className="space-y-3">
              {[
                { rank: '1.', nation: 'Germany', pts: '275 pts', active: true },
                { rank: '2.', nation: 'France', pts: '250 pts' },
                { rank: '3.', nation: 'Luxembourg & Belgium', pts: '200 pts' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-surface rounded border border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <span className={`font-anybody font-bold ${item.active ? 'text-tertiary' : 'text-outline'}`}>{item.rank}</span>
                    <span className="font-bold text-sm md:text-base">{item.nation}</span>
                  </div>
                  <span className="font-anybody font-bold text-primary text-sm md:text-base">{item.pts}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals Highlight Card */}
        <div className="bg-primary text-white border-l-4 border-secondary p-8 md:p-12 relative overflow-hidden flex flex-col gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full opacity-50 -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container rounded-full opacity-50 -ml-16 -mb-16" />
          
          <div className="relative z-10 flex items-center gap-4">
            <Target size={40} className="text-secondary" />
            <h2 className="font-anybody text-3xl md:text-4xl font-extrabold uppercase">Aims & Goals</h2>
          </div>

          <div className="relative z-10 space-y-8">
            {[
              { icon: <Target />, title: 'Spectacular International Event', desc: 'Create a premier, highly organized tournament series that elevates competitive standards.' },
              { icon: <Users />, title: 'Grow the Sport', desc: 'Actively work to attract more women and kids through inclusive practices.' },
              { icon: <Share2 />, title: 'Building Networks', desc: 'Foster strong, lasting Disc Golf networks across borders through collaboration.' },
            ].map((goal, idx) => (
              <div key={idx} className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 bg-primary-container border border-on-primary-fixed-variant rounded flex items-center justify-center shrink-0">
                  {goal.icon}
                </div>
                <div>
                  <h3 className="font-anybody text-lg md:text-xl font-bold mb-1">{goal.title}</h3>
                  <p className="text-on-primary-container text-xs md:text-sm">{goal.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onNavigate('goals')}
            className="relative z-10 w-full bg-secondary text-white font-anybody font-bold uppercase py-4 group hover:bg-secondary-container transition-all flex items-center justify-center gap-2"
          >
            Get Involved
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
