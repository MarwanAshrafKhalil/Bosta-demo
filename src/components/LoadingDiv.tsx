import { ClipLoader } from 'react-spinners';

export default function LoadingDiv() {
  return (
    <div className="flex  flex-col gap-y-5 h-screen mx-auto items-center justify-center mb-10 py-5">
      <ClipLoader
        color={'#d00d19'}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
