import React, { useState } from 'react';

export const SettingsPage: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('profile');
  const dbStatus = 'CONECTADO';
  const minioStatus = 'CONECTADO';

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="font-headline-xl text-headline-xl text-ink-text mb-2">Configuración</h1>
        <p className="font-body-lg text-body-lg text-muted-ink">
          Configura tus credenciales de curador, opciones de idioma, integraciones de base de datos y nodos de almacenamiento para permanencia digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Sub-navigation Tabs */}
        <div className="md:col-span-3 flex flex-col gap-1">
          {[
            { id: 'profile', name: 'Perfil', icon: 'account_circle' },
            { id: 'language', name: 'Idioma y Región', icon: 'language' },
            { id: 'storage', name: 'Almacenamiento', icon: 'database' },
            { id: 'security', name: 'Seguridad y Llaves', icon: 'shield' },
            { id: 'integrations', name: 'Estado de Bases de Datos', icon: 'network_ping' },
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
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Detalles del Perfil</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Nombre</label>
                  <input
                    type="text"
                    defaultValue="Mateo García"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md font-body-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Rol</label>
                  <input
                    type="text"
                    defaultValue="Curador Principal"
                    disabled
                    className="p-3 border border-border-subtle rounded bg-surface-container text-muted-ink text-body-md font-body-md cursor-not-allowed"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Correo Electrónico</label>
                  <input
                    type="email"
                    defaultValue="mateo@legado.com"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md font-body-md"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Biografía de Curador</label>
                  <textarea
                    rows={4}
                    defaultValue="Especializado en registro transgeneracional, verificación genealógica y preservación de la memoria familiar."
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md font-body-md resize-none"
                  />
                </div>
              </div>
              <button className="bg-ink-text text-white px-6 py-3 rounded font-label-md text-label-md hover:bg-opacity-90 transition-opacity self-end mt-4">
                Guardar Cambios
              </button>
            </div>
          )}

          {activeSubTab === 'language' && (
            <div className="flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Idioma y Región</h2>
              <p className="font-body-md text-body-md text-muted-ink mb-4">
                Esta configuración ajusta el idioma de la interfaz (menús, botones y opciones). El contenido de cada legado mantendrá su propio idioma principal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Idioma de la Plataforma</label>
                  <select
                    defaultValue="es-MX"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md font-body-md appearance-none"
                  >
                    <option value="es-MX">Español (México)</option>
                    <option value="es-ES">Español (España)</option>
                    <option value="en-US">English (US)</option>
                    <option value="pt-BR">Português (Brasil)</option>
                    <option value="fr-FR">Français</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Región</label>
                  <select
                    defaultValue="MX"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md font-body-md appearance-none"
                  >
                    <option value="MX">México</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                    <option value="CO">Colombia</option>
                    <option value="AR">Argentina</option>
                    <option value="CL">Chile</option>
                    <option value="PE">Perú</option>
                    <option value="BR">Brasil</option>
                    <option value="OTHER">Otro</option>
                  </select>
                </div>
              </div>
              <button className="bg-ink-text text-white px-6 py-3 rounded font-label-md text-label-md hover:bg-opacity-90 transition-opacity self-end mt-4">
                Actualizar Preferencias
              </button>
            </div>
          )}

          {activeSubTab === 'storage' && (
            <div className="flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Configuraciones de Almacenamiento</h2>
              <div className="flex items-center justify-between p-4 border border-border-subtle rounded-lg bg-surface">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-600 text-3xl">cloud_queue</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold">Almacén de Objetos MinIO</span>
                    <span className="text-sm text-muted-ink">Utilizado para alojar fotografías de alta resolución, grabaciones de audio y transcripciones en PDF.</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">{minioStatus}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Punto de Acceso (Endpoint)</label>
                  <input
                    type="text"
                    defaultValue="localhost:9000"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Cubo por Defecto (Bucket)</label>
                  <input
                    type="text"
                    defaultValue="boveda-legado"
                    className="p-3 border border-border-subtle rounded bg-surface focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'security' && (
            <div className="flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Seguridad y Llaves de Acceso</h2>
              <p className="font-body-md text-body-md text-muted-ink">
                Llaves de cifrado y credenciales para acceder a entradas históricas.
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <label className="font-label-sm text-label-sm text-muted-ink uppercase">Firma de Llave Pública</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDCB5Zz3yB8..."
                    className="flex-1 p-3 border border-border-subtle rounded bg-surface-container font-mono text-xs text-muted-ink cursor-default"
                  />
                  <button className="px-4 py-2 border border-ink-text text-ink-text rounded font-label-md text-label-md hover:bg-surface-container-low transition-colors">
                    Copiar
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'integrations' && (
            <div className="flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-3">Estado de Conexión de Base de Datos</h2>
              <div className="flex items-center justify-between p-4 border border-border-subtle rounded-lg bg-surface">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-600 text-3xl">dns</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold">Motor PostgreSQL</span>
                    <span className="text-sm text-muted-ink">Conexión activa con extensión pgvector para embeddings de IA.</span>
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
