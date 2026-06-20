import React, { useState } from 'react';

export const SettingsPage: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('profile');
  const dbStatus = 'CONNECTED';
  const minioStatus = 'CONNECTED';

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="font-headline-xl text-headline-xl text-ink-text mb-2">Settings</h1>
        <p className="font-body-lg text-body-lg text-muted-ink">
          Configure curation credentials, database integrations, and digital permanence storage nodes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Sub-navigation Tabs */}
        <div className="md:col-span-3 flex flex-col gap-1">
          {[
            { id: 'profile', name: 'Profile Details', icon: 'account_circle' },
            { id: 'storage', name: 'Storage Caching', icon: 'database' },
            { id: 'security', name: 'Security & Keys', icon: 'shield' },
            { id: 'integrations', name: 'Database Status', icon: 'network_ping' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-colors ${
                activeSubTab === tab.id
                  ? 'bg-ink-text text-white font-semibold'
                  : 'text-muted-ink hover:bg-surface-container-low hover:text-ink-text'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Right Details Panel */}
        <div className="md:col-span-9 bg-paper-surface border border-border-subtle rounded-lg p-6 flex flex-col gap-6 shadow-sm">
          {activeSubTab === 'profile' && (
            <div className="flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Profile Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Name</label>
                  <input
                    type="text"
                    defaultValue="Eleanor Vance"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md font-body-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Role</label>
                  <input
                    type="text"
                    defaultValue="Chief Archivist"
                    disabled
                    className="p-3 border border-border-subtle rounded bg-surface-container text-muted-ink text-body-md font-body-md cursor-not-allowed"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Email Address</label>
                  <input
                    type="email"
                    defaultValue="eleanor@legado.io"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md font-body-md"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Curation Biography</label>
                  <textarea
                    rows={4}
                    defaultValue="Specialized in trans-generational recordkeeping, genealogical verification, and digital archiving metadata standards."
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md font-body-md resize-none"
                  />
                </div>
              </div>
              <button className="bg-ink-text text-white px-6 py-3 rounded font-label-md text-label-md hover:bg-opacity-90 transition-opacity self-end mt-4">
                Save Changes
              </button>
            </div>
          )}

          {activeSubTab === 'storage' && (
            <div className="flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Storage Configurations</h2>
              <div className="flex items-center justify-between p-4 border border-border-subtle rounded-lg bg-surface">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-600 text-3xl">cloud_queue</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold">MinIO Object Store</span>
                    <span className="text-sm text-muted-ink">Used for hosting high-fidelity photos, audio recordings, and pdf transcripts.</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">{minioStatus}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Endpoint</label>
                  <input
                    type="text"
                    defaultValue="localhost:9000"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Default Bucket</label>
                  <input
                    type="text"
                    defaultValue="legadobucket"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'security' && (
            <div className="flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Security and Access Keys</h2>
              <p className="font-body-md text-body-md text-muted-ink">
                Encryption keys and credentials to access historical entries.
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <label className="font-label-sm text-label-sm text-muted-ink uppercase">Public Key Signature</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDCB5Zz3yB8..."
                    className="flex-1 p-3 border border-border-subtle rounded bg-surface-container font-mono text-xs text-muted-ink cursor-default"
                  />
                  <button className="px-4 py-2 border border-ink-text text-ink-text rounded font-label-md text-label-md hover:bg-surface-container-low transition-colors">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'integrations' && (
            <div className="flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Database Connection Status</h2>
              <div className="flex items-center justify-between p-4 border border-border-subtle rounded-lg bg-surface">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-600 text-3xl">dns</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold">PostgreSQL Engine</span>
                    <span className="text-sm text-muted-ink">Active connection with extensions vector for embeddings.</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">{dbStatus}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
