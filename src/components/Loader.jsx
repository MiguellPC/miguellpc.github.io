import { AtomSpinner } from 'react-epic-spinners';

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`absolute h-screen w-screen flex justify-center items-center bg-primary`}>
      <AtomSpinner size={100} />
    </div>
  );
};

export default Loader;
