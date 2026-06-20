import React, { useState } from 'react';

interface VaultItem {
  id: string;
  type: 'Audio' | 'Foto' | 'Documento' | 'Video';
  category: 'Audios' | 'Fotos' | 'Documentos' | 'Videos';
  icon: string;
  title: string;
  date: string;
  duration?: string;
  location?: string;
  imgUrl?: string;
  snippet?: string;
  tags?: string[];
  volume?: string;
}

export const VaultDashboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const vaultItems: VaultItem[] = [
    {
      id: '1',
      type: 'Audio',
      category: 'Audios',
      icon: 'mic',
      title: 'Entrevista con Abuelo Juan',
      date: '12 Oct 2021',
      duration: '45:20',
    },
    {
      id: '2',
      type: 'Foto',
      category: 'Fotos',
      icon: 'photo_camera',
      title: 'Boda en Veracruz, 1950',
      date: '1950',
      location: 'Veracruz, MX',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9EuoPkkr2U5zHLVcZO4CDIlOiTyXAD48_bfkUK6p6hSUrTIi3gBU-T1kxkliFI9U_MPpAJgUWqOKfFyq75Vwt7XhfW83r1Bup8C9OEfWvVN2L4mub7HYpU7CP-d9_is5wy8O_MQh27qm6Kp9YXUQJsK97iiu-gZFsey8R7ylw07vh04K9ISktCa_odlRspg3uo3WqvHrFZmtiDpk9O1Qc_7h3uMaPhl-LZQqqlo_i0k_l6pfl7-7ZcPxMRuS3oJb7K92evhUfFt0',
      snippet: 'Ceremonia en la catedral principal. Familia extendida presente en la plaza.',
    },
    {
      id: '3',
      type: 'Documento',
      category: 'Documentos',
      icon: 'description',
      title: 'Títulos de Propiedad',
      date: '14 May 1965',
      volume: 'Caja Fuerte A',
      snippet: '"Por el presente instrumento legal, se hace constar la transferencia de los terrenos ubicados en..."',
      tags: ['Legal', 'Herencia'],
    },
    {
      id: '4',
      type: 'Video',
      category: 'Videos',
      icon: 'videocam',
      title: 'Viaje a Madrid',
      date: 'Verano 1982',
      duration: '12:04',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9EuoPkkr2U5zHLVcZO4CDIlOiTyXAD48_bfkUK6p6hSUrTIi3gBU-T1kxkliFI9U_MPpAJgUWqOKfFyq75Vwt7XhfW83r1Bup8C9OEfWvVN2L4mub7HYpU7CP-d9_is5wy8O_MQh27qm6Kp9YXUQJsK97iiu-gZFsey8R7ylw07vh04K9ISktCa_odlRspg3uo3WqvHrFZmtiDpk9O1Qc_7h3uMaPhl-LZQqqlo_i0k_l6pfl7-7ZcPxMRuS3oJb7K92evhUfFt0',
    },
  ];

  const categories = [
    { name: 'Todos', icon: null },
    { name: 'Fotos', icon: 'photo_camera' },
    { name: 'Videos', icon: 'videocam' },
    { name: 'Audios', icon: 'mic' },
    { name: 'Documentos', icon: 'description' },
  ];

  const filteredItems = vaultItems.filter(
    (item) => selectedCategory === 'Todos' || item.category === selectedCategory
  );

  return (
    <>
      {/* Header Section */}
      <div className="mb-stack-md">
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-2">Human Vault</h1>
        <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">A curated archive of personal history, preserving artifacts, memories, and voices for future generations.</p>
      </div>

      {/* Filters / Categories */}
      <div className="flex flex-wrap gap-2 mb-stack-lg border-b border-border-subtle pb-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 font-label-md text-label-md rounded border transition-colors flex items-center gap-2 ${
                isActive
                  ? 'bg-ink-text text-white border-ink-text'
                  : 'bg-paper-surface text-ink-text border-border-subtle hover:bg-surface-container-low'
              }`}
            >
              {cat.icon && <span className="material-symbols-outlined text-sm">{cat.icon}</span>}
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {filteredItems.map((item) => {
          if (item.type === 'Audio') {
            const isPlaying = playingId === item.id;
            return (
              <article key={item.id} className="bg-paper-surface border border-border-subtle rounded-lg p-6 hover:border-outline transition-colors group cursor-pointer flex flex-col gap-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-surface-container text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider flex items-center gap-1 w-max">
                    <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>{item.icon}</span>
                    {item.type}
                  </span>
                  <button className="text-muted-ink hover:text-ink-text"><span className="material-symbols-outlined">more_horiz</span></button>
                </div>
                <h3 className="font-headline-md text-headline-md text-ink-text group-hover:text-heritage-gold transition-colors">{item.title}</h3>
                <div className="h-16 w-full bg-surface-container-low border border-border-subtle rounded flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-50 px-4">
                    {[3, 6, 10, 4, 8, 12, 5, 9, 3, 7, 2, 8, 11, 4, 6].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all ${
                          isPlaying ? 'bg-heritage-gold animate-pulse' : 'bg-muted-ink'
                        }`}
                        style={{ height: `${isPlaying ? h * 1.3 : h}px` }}
                      ></div>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlayingId(isPlaying ? null : item.id);
                    }}
                    className="w-10 h-10 rounded-full bg-ink-text text-white flex items-center justify-center z-10 hover:bg-surface-tint transition-colors"
                  >
                    <span className="material-symbols-outlined ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-subtle">
                  <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
                    {item.date}
                  </div>
                  {item.duration && (
                    <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
                      {item.duration}
                    </div>
                  )}
                </div>
              </article>
            );
          }

          if (item.type === 'Foto') {
            return (
              <article key={item.id} className="bg-paper-surface border border-border-subtle rounded-lg overflow-hidden hover:border-outline transition-colors group cursor-pointer flex flex-col shadow-sm">
                <div className="relative h-64 w-full bg-surface-container">
                  {item.imgUrl && <img alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.imgUrl} />}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-paper-surface/90 backdrop-blur text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider flex items-center gap-1 w-max">
                      <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>{item.icon}</span>
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-headline-md text-headline-md text-ink-text group-hover:text-heritage-gold transition-colors">{item.title}</h3>
                  {item.snippet && <p className="font-body-md text-body-md text-muted-ink line-clamp-2">{item.snippet}</p>}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-subtle">
                    {item.location && (
                      <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>location_on</span>
                        {item.location}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          }

          if (item.type === 'Documento') {
            return (
              <article key={item.id} className="bg-paper-surface border border-border-subtle rounded-lg p-6 hover:border-outline transition-colors group cursor-pointer flex flex-col gap-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-surface-container text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider flex items-center gap-1 w-max">
                    <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>{item.icon}</span>
                    {item.type}
                  </span>
                  <button className="text-muted-ink hover:text-ink-text"><span className="material-symbols-outlined">more_horiz</span></button>
                </div>
                <h3 className="font-headline-md text-headline-md text-ink-text group-hover:text-heritage-gold transition-colors">{item.title}</h3>
                {item.snippet && (
                  <div className="p-4 bg-surface-container-low border border-border-subtle rounded font-body-md text-body-md text-muted-ink italic border-l-4 border-l-heritage-gold relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>format_quote</span>
                    </div>
                    {item.snippet}
                  </div>
                )}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-surface border border-border-subtle text-muted-ink font-label-sm text-label-sm rounded">{tag}</span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-subtle">
                  <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
                    {item.date}
                  </div>
                  {item.volume && (
                    <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>inventory_2</span>
                      {item.volume}
                    </div>
                  )}
                </div>
              </article>
            );
          }

          if (item.type === 'Video') {
            return (
              <article key={item.id} className="bg-paper-surface border border-border-subtle rounded-lg overflow-hidden hover:border-outline transition-colors group cursor-pointer flex flex-col shadow-sm">
                <div className="relative h-48 w-full bg-surface-container flex items-center justify-center">
                  {item.imgUrl && <img alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.imgUrl} />}
                  <div className="absolute inset-0 bg-ink-text/20 group-hover:bg-ink-text/10 transition-colors"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-1 bg-paper-surface/90 backdrop-blur text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider flex items-center gap-1 w-max">
                      <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>{item.icon}</span>
                      {item.type}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-sm">
                    <span className="material-symbols-outlined text-ink-text ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-headline-md text-headline-md text-ink-text group-hover:text-heritage-gold transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-subtle">
                    <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
                      {item.date}
                    </div>
                    {item.duration && (
                      <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
                        {item.duration}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          }

          return null;
        })}
      </div>

      {/* Empty Space at bottom for scrolling */}
      <div className="h-32 w-full flex items-center justify-center text-muted-ink font-label-sm text-label-sm uppercase tracking-widest mt-8">
        Fin del Archivo
      </div>
    </>
  );
};
