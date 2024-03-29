import { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { fetchHygraphQuery } from './querys';

import i18n from './i18n';

import LocaleContext from './Context/LocaleContext';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Hero = lazy(() => import('./components/Hero'));
const Loader = lazy(() => import('./components/Loader'));
const Navbar = lazy(() => import('./components/Navbar'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));
const Works = lazy(() => import('./components/Works'));

const App = () => {
  const [heroInfo, setHeroInfo] = useState({});
  const [aboutInfo, setAboutInfo] = useState({});
  const [projectsInfo, setProjectsInfo] = useState({});

  const [locale, setLocale] = useState(i18n.language);

  const { error, data } = useQuery(fetchHygraphQuery, {
    variables: { locale: [locale] },
  });

  if (error) console.log(`Error: ${error.message}`);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  useEffect(() => {
    setHeroInfo(data?.hero);
    setAboutInfo(data?.about);
    setProjectsInfo(data?.about.projects);
  }, [data]);

  return (
    <>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <div className={`relative z-0 bg-primary`}>
              <Navbar />
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero heroInfo={heroInfo} />
              </div>
              <About aboutInfo={aboutInfo} />
              <Works projectsInfo={projectsInfo} />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </Suspense>
        </BrowserRouter>
      </LocaleContext.Provider>
    </>
  );
};

export default App;
