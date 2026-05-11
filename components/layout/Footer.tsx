import { ScreenId } from '../../App';
import pdgaLogo from '../../assets/images/regenerated_image_1778451867536.png';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary border-t-4 border-secondary py-12">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <span className="font-anybody text-2xl font-extrabold uppercase tracking-tighter text-white">4 NATIONS CUP</span>
          <p className="text-white/70 max-w-sm text-sm">
            Bringing together the best of European disc golf in a premier four-nation tournament series.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <div className="h-14 w-36 bg-white rounded-sm flex items-center justify-center p-2 shadow-inner overflow-hidden">
              <img 
                src={pdgaLogo} 
                alt="PDGA Europe Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-white/60 text-xs font-bold uppercase max-w-[120px] leading-tight">Official Partner PDGA Europe</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase">
            <button onClick={() => onNavigate('leaderboard')} className="text-white/60 hover:text-secondary transition-colors underline decoration-2 underline-offset-4">PDGA Europe</button>
            <button className="text-white/60 hover:text-secondary transition-colors underline decoration-2 underline-offset-4">Privacy Policy</button>
            <button className="text-white/60 hover:text-secondary transition-colors underline decoration-2 underline-offset-4">Terms of Service</button>
            <button onClick={() => onNavigate('contact')} className="text-white/60 hover:text-secondary transition-colors underline decoration-2 underline-offset-4">Imprint</button>
          </div>
          <p className="text-white/40 text-[10px] uppercase tracking-widest">
            © 2024 4 Nations Cup Disc Golf. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
