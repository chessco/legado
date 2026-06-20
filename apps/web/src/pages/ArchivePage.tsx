import React, { useState } from 'react';

interface ArchiveItem {
  id: string;
  title: string;
  type: 'Book' | 'Document' | 'Journal' | 'Audio';
  createdDate: string;
  status: 'Published' | 'Draft' | 'Archived';
  volume: string;
  words?: number;
}

export const ArchivePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const archiveItems: ArchiveItem[] = [
    { id: '1', title: 'Memorias del Siglo XX', type: 'Book', createdDate: '12 Jan 2024', status: 'Published', volume: 'Vol. I', words: 45200 },
    { id: '2', title: 'Cartas familiares Veracruz', type: 'Document', createdDate: '25 Feb 2024', status: 'Published', volume: 'Carpeta A', words: 12400 },
    { id: '3', title: 'Diario de Viaje: Europa 1982', type: 'Journal', createdDate: '03 Mar 2024', status: 'Draft', volume: 'Vol. III', words: 8900 },
    { id: '4', title: 'Entrevista con Abuela Elena', type: 'Audio', createdDate: '18 Apr 2024', status: 'Published', volume: 'Cinta 2', words: 15300 },
    { id: '5', title: 'Registros de Propiedades antiguas', type: 'Document', createdDate: '30 Apr 2024', status: 'Archived', volume: 'Caja Fuerte', words: 4200 },
  ];

  const filteredItems = archiveItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.volume.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || item.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="font-headline-xl text-headline-xl text-ink-text mb-2">The Archive</h1>
        <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">
          Complete registry of digital assets, publications, and structured knowledge ready for cross-generational preservation.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center border-b border-border-subtle pb-6">
        <div className="flex flex-wrap gap-2">
          {['All', 'Book', 'Document', 'Journal', 'Audio'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 font-label-md text-label-md rounded border transition-colors ${
                filterType === type
                  ? 'bg-ink-text text-white border-ink-text'
                  : 'bg-paper-surface text-ink-text border-border-subtle hover:bg-surface-container-low'
              }`}
            >
              {type === 'All' ? 'Todos' : type}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-ink text-sm">search</span>
          <input
            type="text"
            placeholder="Search archive..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-border-subtle rounded bg-paper-surface focus:outline-none focus:border-outline text-label-md font-label-md w-full sm:w-64"
          />
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-paper-surface border border-border-subtle rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-border-subtle font-label-md text-label-md text-muted-ink">
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Type</th>
              <th className="p-4 font-semibold">Location / Vol</th>
              <th className="p-4 font-semibold">Words</th>
              <th className="p-4 font-semibold">Added Date</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <tr key={item.id} className="border-b border-border-subtle hover:bg-surface-container-lowest transition-colors font-body-md text-body-md text-ink-text">
                  <td className="p-4 font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-muted-ink text-lg">
                      {item.type === 'Book' && 'menu_book'}
                      {item.type === 'Document' && 'description'}
                      {item.type === 'Journal' && 'auto_stories'}
                      {item.type === 'Audio' && 'mic'}
                    </span>
                    {item.title}
                  </td>
                  <td className="p-4 text-muted-ink">{item.type}</td>
                  <td className="p-4 font-mono text-sm text-muted-ink">{item.volume}</td>
                  <td className="p-4 text-muted-ink">{item.words?.toLocaleString() || '-'}</td>
                  <td className="p-4 text-muted-ink">{item.createdDate}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.status === 'Published' && 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    } ${
                      item.status === 'Draft' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    } ${
                      item.status === 'Archived' && 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-heritage-gold hover:underline font-label-sm text-label-sm">Inspect</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-8 text-center text-muted-ink">
                  No items found matching the search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
