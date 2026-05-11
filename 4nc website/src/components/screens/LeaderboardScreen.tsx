import { Trophy, Award } from 'lucide-react';
import Flag from '../ui/Flag';

export default function LeaderboardScreen() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-16">
      <header className="border-b border-outline-variant pb-8 max-w-2xl">
        <h1 className="font-anybody text-3xl md:text-5xl font-extrabold text-primary uppercase mb-4">Leaderboard</h1>
        <p className="text-on-surface-variant text-lg">
          Current standings and points distribution for the 4 Nations Cup. Competition results are updated following the conclusion of each official round.
        </p>
      </header>

      {/* Round Results Cards */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Trophy className="text-secondary" />
          <h2 className="font-anybody text-2xl font-bold text-primary uppercase">2. Runde des 4 Nations Cup</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { rank: '1ST', nation: 'Germany', pts: 205, country: 'Germany' as const, color: 'primary' },
            { rank: '2ND', nation: 'Belgium', pts: 200, country: 'Belgium' as const, color: 'outline' },
            { rank: '3RD', nation: 'France', pts: 90, country: 'France' as const, color: 'outline' },
            { rank: '4TH', nation: 'Luxembourg', pts: 45, country: 'Luxembourg' as const, color: 'outline' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-outline-variant border-l-4 rounded-r-lg p-6 shadow-sm hover:border-primary transition-all"
              style={{ borderLeftColor: idx === 0 ? 'var(--color-primary)' : 'var(--color-outline-variant)' }}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${idx === 0 ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant'}`}>
                  {item.rank}
                </span>
                <Flag country={item.country} className="w-10 h-7" />
              </div>
              <h3 className="font-anybody text-xl font-bold uppercase tracking-tight mb-1">{item.nation}</h3>
              <div className="font-anybody text-2xl font-extrabold text-primary">
                {item.pts} <span className="text-sm font-inter font-normal text-outline">Punkte</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overall Table */}
      <section className="space-y-6 pb-section-gap">
        <div className="flex items-center gap-3">
          <Award className="text-primary" />
          <h2 className="font-anybody text-2xl font-bold text-primary uppercase">Gesamt nach 2 Runden</h2>
        </div>

        <div className="overflow-x-auto border border-outline-variant bg-white shadow-sm rounded-lg">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-primary text-white font-anybody font-bold text-xs uppercase tracking-widest">
              <tr>
                <th className="px-8 py-5 w-24 text-center">Rank</th>
                <th className="px-8 py-5">Nation</th>
                <th className="px-8 py-5 text-right">Total Points</th>
                <th className="px-8 py-5 text-center w-32">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {[
                { rank: 1, nation: 'Germany', country: 'Germany' as const, pts: 275, status: 'Leader', statusColor: 'bg-tertiary-container text-on-tertiary-container' },
                { rank: 2, nation: 'France', country: 'France' as const, pts: 250, status: 'Active', statusColor: 'bg-surface-container-high text-on-surface-variant' },
                { rank: 3, nation: 'Luxembourg', country: 'Luxembourg' as const, pts: 200, status: 'Tied', statusColor: 'bg-surface-container text-outline' },
                { rank: 3, nation: 'Belgium', country: 'Belgium' as const, pts: 200, status: 'Tied', statusColor: 'bg-surface-container text-outline' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-surface transition-colors">
                  <td className={`px-8 py-6 text-center font-anybody text-xl font-bold ${row.rank === 1 ? 'text-secondary' : 'text-outline-variant'}`}>
                    {row.rank}
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <Flag country={row.country} />
                      <span className="font-anybody text-lg font-bold uppercase tracking-tight">{row.nation}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right font-anybody text-3xl font-extrabold text-primary">{row.pts}</td>
                  <td className="px-8 py-6 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
