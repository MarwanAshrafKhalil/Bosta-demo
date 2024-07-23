import { Link } from 'react-router-dom';
import logo from '../assets/bosta-en.png';

export default function Footer() {
  return (
    <footer className=" w-full bg-secondary  h-20 ">
      <div className="flex flex-col justify-center items-center  w-full h-full">
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" className="object-contain w-28  " />
        </Link>
      </div>
    </footer>
  );
}
