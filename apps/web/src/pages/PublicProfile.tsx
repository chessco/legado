import React from 'react';
import { Link } from 'react-router-dom';

export const PublicProfile: React.FC = () => {
  return (
    <div className="bg-paper-surface text-ink-text antialiased selection:bg-heritage-gold selection:text-white min-h-screen">
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-inverse-surface text-primary dark:text-inverse-primary font-body-md tracking-tight docked full-width top-0 border-b border-border-subtle dark:border-on-surface-variant flat no shadows sticky z-50">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto w-full">
          <Link to="/" className="font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-inverse-primary hover:text-primary dark:hover:text-inverse-primary transition-all duration-300">Legado</Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/vault" className="text-muted-ink dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors cursor-pointer active:opacity-70">Human Vault</Link>
            <a className="text-muted-ink dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors cursor-pointer active:opacity-70" href="#">Legacy AI</a>
            <a className="text-muted-ink dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors cursor-pointer active:opacity-70" href="#">The Archive</a>
            <a className="text-primary dark:text-inverse-primary font-semibold border-b-2 border-heritage-gold pb-1 cursor-pointer active:opacity-70" href="#">Editorial</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block font-label-md text-label-md px-6 py-2 bg-ink-text text-white hover:bg-opacity-90 transition-all rounded">Sign In</button>
            <button className="md:hidden text-ink-text">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] flex items-end pb-stack-lg">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center opacity-20 mix-blend-multiply" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFkHhKh46UqsuRnuvGTZ0PWUZBPstoZ9syC-ouzYKvYbMzIzk9Or-lEHiyOws49BsdMBLIizjWzdSDEoJjWLQ-QNyq9eyzv7PLZGA4kHtQ5nIj-daXlsBgDOQR2g0P3JFX4VQfygYg6nUukx4r4IQljmgAhoVIZkm85zYR6kpL3mCeGDFxECL_3DN4ntvBjiqTshyHVRifRjMTzWBnpWXZPkKLiK2neUJtNfbsrY2KpUN0rB5iv0hwoeE3Up9kvWELjHF7I5dg008')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-paper-surface to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto w-full px-gutter flex flex-col md:flex-row md:items-end gap-stack-md">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-paper-surface overflow-hidden shadow-sm shrink-0 bg-white">
              <img alt="Profile Photo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgt8BVEUaZIc5yjH8aJ3Sy4zxTl7MA7twv6rEy-skmo4aWW6C4nj1Hf-VO1eOhyCEzBSJJ_m9LGxsjToEMlmN_PPgiVnacuDg1tvYTTj3hnjl8HTl0KABC1aCZxS8dJZt56mYcC8AZye0IEsxPlc7lwz5KA25-Srl2szPfXgSxRUxvE1E0O0Oph3_x1tRs_fcNFcYMHk5czC4pflW3xbVCiTuNQMgJPldsuwQCumcvNZhYk1UMCcvCu_9x9r5B__69Exrc5pCmN8" />
            </div>
            <div className="flex-1 pb-2">
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-2">Dr. Elias Thorne</h1>
              <p className="font-body-lg text-body-lg text-muted-ink mb-6 max-w-2xl">Historian, Archivist, and Pioneer in Digital Ethnography. Dedicated to preserving the human narrative through the curation of primary sources and the development of specialized AI curation models.</p>
              <div className="flex gap-4">
                <button className="bg-ink-text text-white px-8 py-3 font-label-md text-label-md rounded hover:bg-opacity-90 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">person_add</span> Follow
                </button>
                <button className="border border-border-subtle bg-white px-8 py-3 font-label-md text-label-md rounded hover:bg-surface-container transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">mail</span> Contact
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-container-max mx-auto w-full px-gutter py-stack-lg grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col gap-stack-lg">
            {/* Biography */}
            <section>
              <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-muted-ink mb-stack-sm border-b border-border-subtle pb-2">Biography</h2>
              <div className="prose prose-sm md:prose-base font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p className="mb-4">Dr. Thorne's work bridges the gap between traditional archival science and modern digital permanence. For over three decades, he has worked to ensure that the nuanced voices of marginalized historical figures are not lost to the digital void.</p>
                <p>His recent focus has shifted towards the ethical application of generative AI in historical reconstruction, ensuring that synthetic personas remain faithful to their primary source material.</p>
              </div>
            </section>
            {/* AI Agents */}
            <section>
              <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-muted-ink mb-stack-sm border-b border-border-subtle pb-2">Curated AI Agents</h2>
              <div className="flex flex-col gap-4">
                <div className="border border-border-subtle p-4 bg-white hover:border-heritage-gold transition-colors cursor-pointer group rounded">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-surface-container rounded flex items-center justify-center shrink-0 text-muted-ink group-hover:text-heritage-gold transition-colors">
                      <span className="material-symbols-outlined">history_edu</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-ink-text mb-1">19th Century Diarist</h3>
                      <p className="font-body-md text-body-md text-[13px] text-muted-ink">Trained on over 4,000 personal journals from 1850-1899.</p>
                    </div>
                  </div>
                </div>
                <div className="border border-border-subtle p-4 bg-white hover:border-heritage-gold transition-colors cursor-pointer group rounded">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-surface-container rounded flex items-center justify-center shrink-0 text-muted-ink group-hover:text-heritage-gold transition-colors">
                      <span className="material-symbols-outlined">account_tree</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-ink-text mb-1">Genealogy Bot (Beta)</h3>
                      <p className="font-body-md text-body-md text-[13px] text-muted-ink">Assists in cross-referencing census data with oral histories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Stats/Contributions */}
            <section>
              <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-muted-ink mb-stack-sm border-b border-border-subtle pb-2">Archive Contributions</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-border-subtle rounded">
                  <div className="font-headline-md text-headline-md text-heritage-gold mb-1">1,204</div>
                  <div className="font-label-sm text-label-sm text-muted-ink">Documents Indexed</div>
                </div>
                <div className="p-4 bg-white border border-border-subtle rounded">
                  <div className="font-headline-md text-headline-md text-heritage-gold mb-1">45</div>
                  <div className="font-label-sm text-label-sm text-muted-ink">Collections Curated</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 flex flex-col gap-stack-lg">
            {/* Published Works / Gallery */}
            <section>
              <div className="flex justify-between items-end mb-stack-sm border-b border-border-subtle pb-2">
                <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-muted-ink">Published Works & Archives</h2>
                <a className="font-label-sm text-label-sm text-heritage-gold hover:underline" href="#">View All</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {/* Book Card 1 */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] mb-4 bg-surface-container border border-border-subtle relative overflow-hidden rounded">
                    <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBDAnni9BthMDnrfD9npcjW1uGe9NEXc4hr9dFL7vCqRH5kY1PgkA-N-YHjtRBmvLmbFGMTPiRlm5u98xSqWUBFMTlBbHIj-hiir-yW7xiPq5hLdvY3c-tKc90nNNNo0d0Ifp0DfCQ3s5_bQ45zy4Nto384SORjt21X2VspwIl_sAVIOv6cqAy6WCnPpWd9dA4GxLpv-DqlBJp-woixJ-VzacR5GHp-m7ZJQQTB3xw-S1ARBVRuJHjuc2CPyZCm_RIbZklPCbu3fI" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-ink-text text-[20px] mb-1 group-hover:text-heritage-gold transition-colors">The Silent Centuries</h3>
                  <p className="font-label-md text-label-md text-muted-ink">Oxford University Press, 2021</p>
                </div>
                {/* Book Card 2 */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] mb-4 bg-surface-container border border-border-subtle relative overflow-hidden rounded">
                    <img alt="Archive Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl0w3aFXZH6AMZgcAEurMPGiYMyGyxcw9ivJsyNo1emtsYZ6gBzt3lbrgD_WMsdqcY2oAzXihj_EidNVX5u4xlQvsgQtJJhGTSQTDQTNBw2CY7KJC1ov5qNU8YGUIduq18YwDnVDiDy_tfRsK5KyqeJj1gniqSopWfLdC_7d-QbmeClaHqKmC9KylTuJKM-Ucr8D3rgGkz4CgJ5wp50PIKiYP3r812tWUqW5zw7DWXCzNcm_p9SpbrLAfokbrjDSHwmxs7ltceoSs" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-ink-text text-[20px] mb-1 group-hover:text-heritage-gold transition-colors">Letters from the Frontier</h3>
                  <p className="font-label-md text-label-md text-muted-ink">Curated Collection, 2018</p>
                </div>
              </div>
            </section>
            
            {/* Timeline */}
            <section>
              <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-muted-ink mb-stack-md border-b border-border-subtle pb-2">Life & Professional Milestones</h2>
              <div className="relative pl-8 border-l border-border-subtle space-y-8 pb-4">
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-3 h-3 bg-white border-2 border-heritage-gold rounded-full"></div>
                  <div className="font-label-sm text-label-sm text-heritage-gold mb-1">2023 - Present</div>
                  <h3 className="font-headline-md text-headline-md text-[18px] text-ink-text mb-2">Director of Digital Preservation, Legado</h3>
                  <p className="font-body-md text-body-md text-muted-ink">Leading the initiative to digitize and semantically link over 100,000 at-risk historical documents using proprietary AI models.</p>
                </div>
                {/* Timeline Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-3 h-3 bg-surface-container border-2 border-border-subtle rounded-full"></div>
                  <div className="font-label-sm text-label-sm text-muted-ink mb-1">2015 - 2023</div>
                  <h3 className="font-headline-md text-headline-md text-[18px] text-ink-text mb-2">Tenured Professor of History, Vanguard University</h3>
                  <p className="font-body-md text-body-md text-muted-ink">Taught advanced seminars on archival methodologies and the impact of the digital age on historical consensus.</p>
                </div>
                {/* Timeline Item 3 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-3 h-3 bg-surface-container border-2 border-border-subtle rounded-full"></div>
                  <div className="font-label-sm text-label-sm text-muted-ink mb-1">2008</div>
                  <h3 className="font-headline-md text-headline-md text-[18px] text-ink-text mb-2">Ph.D. in Comparative History</h3>
                  <p className="font-body-md text-body-md text-muted-ink">Dissertation: "The Ephemera of Empires: What is Left Behind."</p>
                </div>
              </div>
            </section>
            
            {/* Archival Index List */}
            <section>
              <div className="flex justify-between items-end mb-stack-sm border-b border-border-subtle pb-2">
                <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-muted-ink">Public Vault Access</h2>
              </div>
              <div className="bg-white border border-border-subtle rounded flex flex-col divide-y divide-border-subtle">
                <a className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors group" href="#">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-muted-ink group-hover:text-ink-text">description</span>
                    <span className="font-label-md text-label-md text-ink-text">The Maritime Trade Logs (1750-1800)</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-muted-ink">PDF / 4.2 MB</span>
                </a>
                <a className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors group" href="#">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-muted-ink group-hover:text-ink-text">audio_file</span>
                    <span className="font-label-md text-label-md text-ink-text">Oral History Project: The Dust Bowl</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-muted-ink">Audio / 12 Hours</span>
                </a>
                <a className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors group" href="#">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-muted-ink group-hover:text-ink-text">folder_shared</span>
                    <span className="font-label-md text-label-md text-ink-text">Syllabus Archive</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-muted-ink">Collection</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-inverse-surface text-primary dark:text-inverse-primary font-label-sm text-label-sm uppercase tracking-widest full-width bottom-0 border-t border-border-subtle dark:border-on-surface-variant flat no shadows cursor-default">
        <div className="flex flex-col md:flex-row justify-between items-center py-stack-md px-gutter max-w-container-max mx-auto w-full gap-4">
          <div className="font-headline-md text-headline-md text-primary dark:text-inverse-primary normal-case tracking-normal font-bold">Legado</div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-muted-ink dark:text-on-surface-variant hover:text-heritage-gold transition-colors duration-300" href="#">The Manifesto</a>
            <a className="text-muted-ink dark:text-on-surface-variant hover:text-heritage-gold transition-colors duration-300" href="#">Privacy Archive</a>
            <a className="text-muted-ink dark:text-on-surface-variant hover:text-heritage-gold transition-colors duration-300" href="#">Terms of Service</a>
            <a className="text-muted-ink dark:text-on-surface-variant hover:text-heritage-gold transition-colors duration-300" href="#">Curatorial Policy</a>
          </div>
          <div className="text-muted-ink dark:text-on-surface-variant tracking-normal">
            © 2024 Legado. Built for Digital Permanence.
          </div>
        </div>
      </footer>
    </div>
  );
};
