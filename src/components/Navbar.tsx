import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/bosta-en.png';
import { useTranslation } from 'react-i18next';
import { IoIosSearch } from 'react-icons/io';

export default function Navbar() {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  const [trackingId, setTrackingId] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (trackingId) {
      navigate(`/track/${trackingId}`);
    }
  };
  return (
    <div id="navbar" className="navbar bg-white border-b-2  ">
      <div className=" flex-1 justify-center text-xl font-bold lg:justify-between mx-5 gap-16 xl:mx-16">
        <div className=" items-center">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="logo" className="object-contain w-28  " />
          </Link>
        </div>

        <ul className=" hidden lg:flex px-1 text-xl sm:gap-10">
          <li>
            <Link to="/">{t('Home')}</Link>
          </li>
          <li>
            <Link to="/">{t('Pricing')}</Link>
          </li>
          <li>
            <Link to="/">{t('Contact Us')}</Link>
          </li>
        </ul>
        <ul className=" flex flex-row px-1 shrink text-lg sm:text-xl gap-2 sm:gap-10">
          <li>
            {/* <Link to="/track/84043113">Track Shipment</Link> */}
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" ">
                {t('Track Shipment')}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content gap-0 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <form
                  action="submit "
                  onSubmit={onSubmit}
                  className="absolute bg-white flex flex-col items-center rounded-xl justify-center gap-5 border h-auto w-auto end-0 p-5 me-10"
                >
                  <p className="text-gray-500">{t('Track your Shipment')}</p>
                  <div className="flex flex-row">
                    <input
                      type="number"
                      className=" border p-5 rounded-s-lg"
                      placeholder="Traking ID"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-primary rounded-e-lg w-auto p-2 "
                    >
                      <IoIosSearch className="w-8 h-8 text-white" />
                    </button>
                  </div>
                </form>
              </ul>
            </div>
          </li>
          <li>
            {i18n.language == 'en' && (
              <button
                onClick={() => {
                  i18n.changeLanguage('ar');
                }}
              >
                AR
              </button>
            )}
            {i18n.language == 'ar' && (
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                }}
              >
                EN
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
