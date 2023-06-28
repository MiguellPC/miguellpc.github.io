import { useEffect, useState, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AtomSpinner } from 'react-epic-spinners';

import { useQuery } from '@apollo/client';
import { fetchHygraphQuery } from './querys';

import {
  About,
  Contact,
  Hero,
  Loader,
  Navbar,
  StarsCanvas,
  Works,
} from './components';

const App = () => {
  const [heroInfo, setHeroInfo] = useState({});
  const [aboutInfo, setAboutInfo] = useState({});
  const [projectsInfo, setProjectsInfo] = useState({});
  const { error, data } = useQuery(fetchHygraphQuery);
  const [isLoading, setIsLoading] = useState(true);

  if (error) console.log(`Error: ${error.message}`);

  useEffect(() => {
    setHeroInfo(data?.hero);
    setAboutInfo(data?.about);
    setProjectsInfo(data?.about.projects);
    setTimeout(() => setIsLoading(false), 1000);
  }, [data]);

  return (
    <>
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
    </>
  );
};

export default App;
