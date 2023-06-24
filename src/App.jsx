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
  const [data, setData] = useState({});
  const {
    loading,
    error,
    data: apolloData,
  } = useQuery(fetchHygraphQuery);

  if (error) console.log(`Error: ${error.message}`);

  useEffect(() => {
    console.log(apolloData);
    setData(apolloData);
  }, [apolloData]);

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero heroInfo={data} />
        </div>
        <About aboutInfo={data} />
        <Works projectsInfo={data} />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
