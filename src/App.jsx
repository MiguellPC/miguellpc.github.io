import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { fetchHygraphQuery } from './querys';

import {
  About,
  Contact,
  Hero,
  Navbar,
  StarsCanvas,
  Works,
} from './components';

const App = () => {
  const [heroInfo, setHeroInfo] = useState({});
  const [aboutInfo, setAboutInfo] = useState({});
  const [projectsInfo, setProjectsInfo] = useState({});
  const { loading, error, data } = useQuery(fetchHygraphQuery);

  if (error) console.log(`Error: ${error.message}`);

  useEffect(() => {
    setHeroInfo(data?.hero);
    setAboutInfo(data?.about);
    setProjectsInfo(data?.about.projects);
  }, [data]);

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero heroInfo={heroInfo} />
        </div>
        <About aboutInfo={aboutInfo} />
        <Works projectsInfo={projectsInfo} />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
