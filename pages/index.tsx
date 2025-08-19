import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'

const Navbar = () => (
  <nav className="bg-transparent p-4">
    <div className="container mx-auto flex items-center justify-start">
      <img src="/idc_nav.png" alt="IDC Logo" className="h-10 w-auto" style={{ aspectRatio: 'auto', filter: 'brightness(0)' }} />
    </div>
  </nav>
)

interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  emailUrl?: string;
  linkedinUrl?: string;
  projectsOpen: boolean;
  onToggleProjects: () => void;
}

const ProfileActions = ({ portfolioUrl, resumeUrl }: { portfolioUrl?: string; resumeUrl?: string }) => (
  <div className="flex space-x-4 mt-3 w-full">
    {portfolioUrl && <a href={portfolioUrl} className="text-black text-sm font-normal">Portfolio &rarr;</a>}
    {resumeUrl && <a href={resumeUrl} className="text-sm font-normal">Resume &rarr;</a>}
  </div>
)

const ProjectGallery = ({ expanded }: { expanded: boolean }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (expanded && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight + 'px');
    } else {
      setMaxHeight('0px');
    }
  }, [expanded]);

  return (
    <div
      ref={contentRef}
      style={{ maxHeight, opacity: expanded ? 1 : 0, transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s' }}
      className="overflow-hidden w-full"
    >
      <div className="mt-8 bg-gray-100 border border-black rounded-3xl p-8 w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <a
              key={i}
              href="#"
              className="block border border-black rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden transition-shadow hover:shadow-lg bg-white"
            >
              <img
                src={`https://placehold.co/600x400?text=Project+${i}`}
                alt={`Project ${i}`}
                className="object-cover w-full h-full"
              />
            </a>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {[1, 2].map((i) => (
            <a
              key={i}
              href="#"
              className="block border border-black rounded-2xl px-6 py-3 text-base mt-0 text-center bg-white"
            >
              Emergency Response Support System &rarr;
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsButtonPanel = ({ expanded, onClick, children }: { expanded: boolean; onClick: () => void; children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('48px'); // button height

  useEffect(() => {
    if (expanded && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight + 48 + 'px'); // button + content
    } else {
      setMaxHeight('48px');
    }
  }, [expanded]);

  return (
    <div
      style={{
        maxHeight,
        transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
        background: expanded ? '#f3f4f6' : '#fff',
        border: '1px solid #000',
        overflow: 'hidden',
        width: '100%',
        marginTop: '0.5rem',
      }}
      className="w-full max-w-2xl mx-auto rounded-3xl"
    >
      <div
        className="flex items-center cursor-pointer select-none px-6 py-2"
        onClick={onClick}
        style={{ minHeight: 48 }}
      >
        <span className="text-xl font-semibold flex-1 text-left">Projects</span>
        <svg className={`w-6 h-6 ml-2 transition-transform duration-300`} style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      <div ref={contentRef} className={expanded ? 'px-8 pb-8 pt-0' : 'px-8 py-0'}>
        {expanded && children}
      </div>
    </div>
  );
};

const ProjectGalleryContent = () => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1, 2].map((i) => (
        <a
          key={i}
          href="#"
          className="block border border-black rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden transition-shadow hover:shadow-lg bg-white"
        >
          <img
            src={`https://placehold.co/600x400?text=Project+${i}`}
            alt={`Project ${i}`}
            className="object-cover w-full h-full"
          />
        </a>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
      {[1, 2].map((i) => (
        <a
          key={i}
          href="#"
          className="block border border-black rounded-2xl px-6 py-3 text-xs mt-0 text-center bg-white"
        >
          Emergency Response Support System &rarr;
        </a>
      ))}
    </div>
  </div>
);

const ProfileCard = ({ image, name, title, description, portfolioUrl, resumeUrl, emailUrl, linkedinUrl, projectsOpen, onToggleProjects }: ProfileCardProps) => (
  <div className="w-full bg-gray-50 rounded-3xl border border-black mt-10 p-6 flex flex-col md:flex-row items-stretch gap-6 relative">
    {/* Left Side */}
    <div className="flex flex-col items-start md:w-1/2">
      <img src={image} alt="Profile" className="w-28 h-28 rounded-full object-cover mb-3 mx-auto md:mx-0" />
      <h2 className="text-2xl font-semibold mb-2 mt-1">{name}</h2>
      <div className="text-sm text-gray-800 mb-2">{title}</div>
      <div className="flex items-center space-x-3 mb-3 mt-1">
        {emailUrl && <a href={emailUrl} className="bg-black text-white rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v.75A2.25 2.25 0 0 1 19.5 20.25h-15A2.25 2.25 0 0 1 2.25 18v-.75m19.5 0V6A2.25 2.25 0 0 0 19.5 3.75h-15A2.25 2.25 0 0 0 2.25 6v11.25m19.5 0a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25" /></svg></a>}
        {linkedinUrl && <a href={linkedinUrl} className="bg-black text-white rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z"/></svg></a>}
      </div>
      <ProfileActions portfolioUrl={portfolioUrl} resumeUrl={resumeUrl} />
    </div>
    {/* Divider Line */}
    <div className="w-px bg-black"></div>
    {/* Right Side */}
    <div className="md:w-1/2 pl-6 flex items-center">
      <div className="text-sm text-gray-900 font-light">{description}</div>
    </div>
  </div>
)

const HomePage: NextPage = () => {
  const [projectsOpen1, setProjectsOpen1] = useState(false);
  return (
    <div>
      <Head>
        <title>IXD 2025</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ProfileCard
              image="IXD/abhishek.png"
              name="Abhishek Benny"
              title="Interaction Designer | Architect | Winner of XO Symposium 25"
              description={`Abhishek is an architect from Calicut University, has an experience of 2 years. He’s is very good with people and can organise elaborate events very easily. He organised art shows.\n\nHe has a knack for Service Design and works with products a lot. His porfolio projects like puppet and his fellowship with barath Digital reflect the same.`}
              portfolioUrl="#"
              resumeUrl="#"
              emailUrl="#"
              linkedinUrl="#"
              projectsOpen={projectsOpen1}
              onToggleProjects={() => setProjectsOpen1(v => !v)}
            />
            <ProjectsButtonPanel expanded={projectsOpen1} onClick={() => setProjectsOpen1(v => !v)}>
              <ProjectGalleryContent />
            </ProjectsButtonPanel>
          </div>
        </div>
      </div>
      <div className="h-64" /> {/* Spacer for dropdown */}
    </div>
  )
}

export default HomePage
