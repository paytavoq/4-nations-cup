import { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

export default function GalleryScreen() {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', 'STRASBOURG', 'TRIER', 'BELVAL', 'NAMUR'];

  const images = [
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGEXjrdQ3Nrn1aEa_WFlAgH9onHg447kF3RcIRlpn8qusZoGekJ_QvZJrk-1356DUZvnAPD81ZxFwBjaA-T3h_sEyr26KHYRYd9lFqsklhvyegJh5KUTZdtpkvWCge9T2oja_vQqQQiSi-1NqNgzSBI_wGCh1CXgMqr7S7ZYi7mG7THbVIPlhZutbT5n1IwwuYUt-Mbw2hmKN3UNWF1RYxLM-s8oh7hejaC2lMpI2pjQ-KwQKCT0Ho3ybcVjXPgoUkArTAmpOGYrE',
      title: 'Power Drive - Hole 14',
      venue: 'Strasbourg 2024',
      size: 'large'
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUI1JeTy4lAOY6f2usNipBX60Nvh5ZismnJJtfLfoKPhWv2w1X4PSq95_josrMOsY_T_0qMzSobMiV4_MB9Rx-CMi2Q0OaJ7Dxlgm0SeOtcfYa-I4WYtClLuw34ZK0uf4Bt91JKVY68Ot4KYhloTRk5x8D6Ooxo3JbcZLcDNEEBxCcl1MN9txeI8ehrjac6tbFQOdf7QOysVUz6_b-CC7oVVbvhRXCy8rpCQPUWqGT08spxsC0Uqc3gVFAg76RxdtPYCRvMZmyOwo',
      title: 'The Winning Putt',
      venue: 'Namur Classic',
      size: 'medium'
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYNLBkjtNkCmGhPHrEqzNscdCXoCPrIl3RPQJECrPtSNnksUCDGjZ6UeGUrbHKcHSoPE_4ws9s1tHJX6eSlwQ3G5vJwiC_9rCG79sOdSTosTATn9k_T-kbB109Bmw_A26CuOAmU1zcvX5xtBd5p9bjm3z6RO6xUB-kRDlAkaFDDYJrEFF1T8z7Xx_QNBuoCM87p_eVe47UGRb1Xi9pW67AsDnG6gpAngTP5imJb0CUCTMvSsIXOtv_QawBpB5-LsBq1FbObB2JzQ4',
      title: 'Belval Woods Morning',
      venue: 'Belval',
      size: 'small'
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn4STfyNyIfbHZ7cAV-pi60grShvPm02-8QoJX0Tnn__IpKZgBMLPgSgRFnMT0x0m8RlmAUX6ORNSxQ1dheIwJnBVWO4dm1NKu7qPVKevzrYVXovXL30C5ItPhVauCKnREaaol2FrOkNgZhag5Erp6PnrsTVweiZAuyu28ixL29E2b8It7RRjPc5JS6j5OdXmjkFyGUaZnNEcG8kUmK5oI87GdkcRbtadQYjy8T5mTx1Ql701lTCrO2vFPhX7ASRj4xVnOJsp4sNc',
      title: 'Podium Celebration',
      venue: 'Grand Finale',
      size: 'medium'
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcNxIEkVrDpqUjAeZ7bVCZ5yPkaLH-ImeoVcOygbRh7rfQsVJvFKa_3WDVK2KH1jN6uxe26T3EapiIgbu2wNd10v7djWYIJKtfUfD_byWn2UeoHCO2loTQ8J2Hj-r76vVSVLyIEfTTGrllIonm5D5MNxEPFmbIvDTTuoUy2_yBQ6S2YLMrIAJJ-WfbA4vR3Ygar0wMz7662x1Y3dNW0gMQY5TL0GrDLLtO0Umy3FhD-YK3fWfY8tbg90Y0r-v_WowRDpVq6OGHZ3w',
      title: 'Technical Bag Check',
      venue: 'Trier Masters',
      size: 'small'
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTepDX5gaIpxhgumTA6CjOjrLvDJ3BI2vHmA9a9YtZRKY9BAWMSh8tThAofwNs96s27xiRURezeV5tl7Dxud9o5LtEvfc77cnc_ygz-8jCr7en6zo2DUSzybDK8G5MbDBOyi2693z_Fmm4z9ST6e_EKv4RAOFKXUBTUfXM9f1eyYxdOGW4IAHSDh0dS29Fj1kD9_cxzrukkjjrSMDBn56DxsxEpRF9D1VtIzlndLV0c_k-0fJF295JX5QF_10KuBSdwblLhOikT1g',
      title: 'Technical Lines',
      venue: 'Trier Woods',
      size: 'wide'
    }
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      <header className="mb-12 border-l-8 border-secondary pl-6 md:pl-8 flex flex-col gap-4">
        <h1 className="font-anybody text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary uppercase leading-tight">Tournament Gallery</h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl font-medium">
          Relive the highlights and intensity of the 4 Nations Cup events across Europe. From the rolling hills of Namur to the technical woods of Trier.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 md:px-8 py-2 font-anybody font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all border ${
              filter === cat 
                ? 'bg-primary text-white border-primary' 
                : 'bg-surface-container-high text-primary border-outline-variant hover:bg-primary hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-like Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`group relative overflow-hidden border border-outline-variant shadow-sm aspect-video ${
              img.size === 'large' ? 'lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto' : 
              img.size === 'wide' ? 'lg:col-span-2 aspect-[21/9]' : ''
            }`}
          >
            <img 
              src={img.src} 
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              <span className="text-tertiary-fixed font-bold text-xs uppercase mb-1">{img.venue}</span>
              <h3 className="text-white font-anybody text-2xl font-bold uppercase">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-section-gap bg-primary-container p-12 text-center rounded-lg border-t-8 border-secondary">
        <Camera className="mx-auto text-secondary mb-6" size={48} />
        <h2 className="font-anybody text-3xl font-extrabold text-white uppercase mb-4">Capture the Moment</h2>
        <p className="text-on-primary-container text-lg max-w-xl mx-auto mb-8 font-medium">
          Want to feature your own tournament photos? Use #4NationsCup on social media or send them to our media team.
        </p>
        <button className="bg-secondary text-white px-12 py-4 font-anybody font-bold uppercase tracking-widest hover:bg-secondary-container transition-all">
          Submit Photos
        </button>
      </div>
    </div>
  );
}
