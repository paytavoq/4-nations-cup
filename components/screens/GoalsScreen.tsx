import { Globe, TrendingUp, Users, Megaphone, Share2, HeartHandshake, PartyPopper } from 'lucide-react';

export default function GoalsScreen() {
  const goals = [
    { icon: <Globe />, title: 'Spectacular Event', desc: 'Create a spectacular and international Disc Golf event in our home town.', border: 'border-tertiary-container' },
    { icon: <TrendingUp />, title: 'Grow the Sport', desc: 'Get new people to play and love our sport.', border: 'border-secondary' },
    { icon: <Users />, title: 'Diversity', desc: 'Attract more women and kids for our sport.', border: 'border-primary' },
    { icon: <Megaphone />, title: 'Publicity & PR', desc: 'Get more publicity and PR in our regions.', border: 'border-tertiary' },
    { icon: <Share2 />, title: 'Cross-Border Networks', desc: 'Building up Disc Golf networks across borders.', border: 'border-secondary' },
    { icon: <HeartHandshake />, title: 'Mutual Support', desc: 'Supporting each other in our aim to grow our sport.', border: 'border-primary' },
    { icon: <PartyPopper />, title: 'Joyful Atmosphere', desc: 'Four more Disc Golf events in a joyful atmosphere.', border: 'border-tertiary', full: true },
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      <header className="text-center mb-16">
        <h1 className="font-anybody text-3xl md:text-6xl font-extrabold text-primary uppercase mb-6 tracking-tighter">Aim & Goals</h1>
        <p className="text-on-surface-variant text-lg max-w-3xl mx-auto font-medium">
          The driving forces behind the 4 Nations Cup. Our mission is to elevate the sport of Disc Golf through international collaboration, community building, and spectacular events.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {goals.map((goal, idx) => (
          <div 
            key={idx}
            className={`bg-white border border-outline-variant p-10 flex flex-col gap-6 relative overflow-hidden group hover:border-primary transition-all shadow-sm ${
              goal.full ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''
            }`}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${goal.border} bg-current opacity-100`} />
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-surface-container transition-colors group-hover:bg-primary group-hover:text-white`}>
              {goal.icon}
            </div>
            <h3 className="font-anybody text-2xl font-bold text-primary uppercase tracking-tight">{goal.title}</h3>
            <p className="font-inter text-on-surface-variant font-medium leading-relaxed">{goal.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
