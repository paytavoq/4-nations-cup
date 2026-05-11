import { ShieldCheck, Trophy, UserCheck } from 'lucide-react';

export default function RulesScreen() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-12">
      <header className="max-w-3xl">
        <h1 className="font-anybody text-3xl md:text-5xl font-extrabold text-primary uppercase mb-4 tracking-tight">Rules & Points Structure</h1>
        <p className="text-on-surface-variant text-lg">
          Detailed scoring rules and point distribution for the 4 Nations Cup. Understand how teams and individuals earn their standing.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Team Scoring */}
        <div className="bg-white border border-outline-variant p-8 border-l-4 border-tertiary flex flex-col gap-6 group hover:border-primary transition-colors shadow-sm">
          <div className="flex items-center gap-3 text-primary">
            <ShieldCheck size={32} />
            <h2 className="font-anybody text-2xl font-bold uppercase">Team Scoring</h2>
          </div>
          <p className="text-sm font-medium leading-relaxed">
            The four best scores per team are summed up. The best team score determines the overall point distribution for the event.
          </p>
          <div className="mt-auto grid grid-cols-4 gap-2 pt-6 border-t border-outline-variant">
            {[
              { rank: '1st', pts: 100, active: true },
              { rank: '2nd', pts: 75 },
              { rank: '3rd', pts: 50 },
              { rank: '4th', pts: 25 },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <p className={`text-[10px] font-bold uppercase mb-1 ${p.active ? 'text-tertiary' : 'text-outline'}`}>{p.rank}</p>
                <p className="font-anybody text-xl font-extrabold text-primary">{p.pts}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Division Podium */}
        <div className="bg-white border border-outline-variant p-8 border-l-4 border-secondary flex flex-col gap-6 group hover:border-secondary transition-colors shadow-sm">
          <div className="flex items-center gap-3 text-primary">
            <Trophy size={32} className="text-secondary" />
            <h2 className="font-anybody text-2xl font-bold uppercase">Division Podium</h2>
          </div>
          <p className="text-sm font-medium leading-relaxed">
            Podium places in each offered division will be awarded with points to their respective teams, adding critical weight.
          </p>
          <div className="mt-auto flex flex-col gap-2 pt-6 border-t border-outline-variant">
            {[
              { label: 'Gold', pts: '30 pts', color: 'text-secondary' },
              { label: 'Silver', pts: '20 pts', color: 'text-primary' },
              { label: 'Bronze', pts: '10 pts', color: 'text-primary' },
            ].map((pod, i) => (
              <div key={i} className={`flex justify-between items-center p-3 rounded ${i === 0 ? 'bg-surface-container-low' : 'bg-transparent border-b border-outline-variant/30'}`}>
                <span className="font-bold text-xs uppercase">{pod.label}</span>
                <span className={`font-anybody font-extrabold ${pod.color}`}>{pod.pts}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Solo Competition */}
        <div className="bg-white border border-outline-variant p-8 border-l-4 border-primary flex flex-col gap-6 group hover:border-primary transition-colors shadow-sm lg:col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 text-primary">
            <UserCheck size={32} />
            <h2 className="font-anybody text-2xl font-bold uppercase">Solo Competition</h2>
          </div>
          <p className="text-sm font-medium leading-relaxed">
            Overall ranking for all divisions. Seven best 4NC players per event are awarded points based on their finish.
          </p>
          <div className="mt-auto grid grid-cols-7 gap-1 pt-6 border-t border-outline-variant bg-surface-container-low p-2 rounded">
            {[
              { r: '1st', p: 10 }, { r: '2nd', p: 7 }, { r: '3rd', p: 5 }, { r: '4th', p: 4 }, { r: '5th', p: 3 }, { r: '6th', p: 2 }, { r: '7th', p: 1 }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <p className="text-[8px] font-bold uppercase text-outline">{p.r}</p>
                <p className="font-anybody font-bold text-primary">{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Visual Section */}
      <section className="relative h-[400px] w-full rounded-lg overflow-hidden border border-outline-variant">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaUdy3mK8lGPJH2KcBkjlWEGzap0JZwh9l8LZv5UfWAnRSg-H2KVoisok0Iu4Liif7cP675xfMV_VPcDGsV8t4-TDDWs5i-QALD5BwNkW6q0q5Rek59Y9uuLrxMJywZFfcZlZovD33rS2Uld2fFNNjxpKjQ6GFUocsnrDV4IZqomieDCS4mxYmYIGr4lxpCb_hq7xVfE0eHTcMo0BuUNpcaGdEyTWcrciqYGkbDKDWpc_vtGBVvkADW5Bb5aboTs2m9yEccLuRykA" 
          alt="Disc Golf Basket"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
        <div className="absolute bottom-12 left-12 max-w-xl text-white">
          <h3 className="font-anybody text-4xl font-bold uppercase mb-2">Every Throw Counts</h3>
          <p className="text-lg opacity-90">The 4 Nations Cup point system is designed to reward both exceptional team consistency and individual performance under pressure.</p>
        </div>
      </section>
    </div>
  );
}
