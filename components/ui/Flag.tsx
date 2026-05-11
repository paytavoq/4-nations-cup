
interface FlagProps {
  country: 'Germany' | 'France' | 'Luxembourg' | 'Belgium';
  className?: string;
}

export default function Flag({ country, className = "" }: FlagProps) {
  const baseClasses = `w-8 h-6 rounded overflow-hidden flex border border-outline-variant/30 shrink-0 ${className}`;

  switch (country) {
    case 'France':
      return (
        <div className={baseClasses}>
          <div className="w-1/3 h-full bg-[#0055A4]" />
          <div className="w-1/3 h-full bg-white" />
          <div className="w-1/3 h-full bg-[#EF4135]" />
        </div>
      );
    case 'Germany':
      return (
        <div className={baseClasses + " flex-col"}>
          <div className="h-1/3 w-full bg-black" />
          <div className="h-1/3 w-full bg-[#DD0000]" />
          <div className="h-1/3 w-full bg-[#FFCE00]" />
        </div>
      );
    case 'Luxembourg':
      return (
        <div className={baseClasses + " flex-col"}>
          <div className="h-1/3 w-full bg-[#ED2939]" />
          <div className="h-1/3 w-full bg-white" />
          <div className="h-1/3 w-full bg-[#00A1DE]" />
        </div>
      );
    case 'Belgium':
      return (
        <div className={baseClasses}>
          <div className="w-1/3 h-full bg-black" />
          <div className="w-1/3 h-full bg-[#FDDA24]" />
          <div className="w-1/3 h-full bg-[#EF3340]" />
        </div>
      );
    default:
      return null;
  }
}
