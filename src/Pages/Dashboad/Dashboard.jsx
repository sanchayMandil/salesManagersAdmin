import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Analyis from '../../componests/Dashboard/Analyis';
import Peoples from '../../componests/Dashboard/People';
import SetUpProfile from '../../componests/Dashboard/SetUpProfile';
import Verify from '../../componests/Dashboard/Verify';
import Issues from '../../componests/Dashboard/Issues';
import Transaction from '../../componests/Dashboard/Transaction';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const nav = useNavigate();

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Analyis />;
      case 'peoples':
        return <Peoples />;
      case 'add-roles':
        return <SetUpProfile />;
      case 'verify':
        return <Verify />;
      case 'issues':
        return <Issues />;
      case 'transaction':
        return <Transaction />;
      default:
        return <Analyis />;
    }
  };

  return (
    <div className={`${!dropdownOpen ? 'bg-[#f1f1f1]' : 'bg-[#a9a2a2]'} min-h-screen`}>
      {/* top part */}
      <div className='w-full flex flex-col sm:flex-row justify-between items-center bg-white rounded-b-[4vw] sm:rounded-b-[1vw] relative px-4 py-2'>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden absolute left-2 top-5 z-20"
          onClick={() => setSideMenuOpen((prev) => !prev)}
        >
          <img className="h-6" src="https://img.icons8.com/?size=100&id=59822&format=png&color=000000" alt="menu" />
        </button>
        {/* right side */}
        <div className='flex items-center justify-start ml-0 sm:ml-[1vw] w-full sm:w-auto'>
          {/* name and pic container */}
          <div className=' max-md:ml-[5vw] flex items-center justify-start ml-0 sm:ml-[1vw] my-1 sm:my-[0.25vw] relative'>
            <img className='rounded-full h-10 sm:h-[3vw]' src="https://img.icons8.com/?size=100&id=20750&format=png&color=000000" alt="" />
            <h1 className='text-lg sm:text-[1.5vw] font-bold ml-2 sm:ml-[1vw]'>Username</h1>
            {/* toggle button */}
            <button className='cursor-pointer' type='button' onClick={() => { setDropdownOpen((prev) => !prev) }}>
              {!dropdownOpen ?
                <img className="ml-2 sm:ml-[1vw] h-3 sm:h-[0.8vw]"
                  src="https://img.icons8.com/?size=100&id=ewktsfNlALF5&format=png&color=000000" alt="" /> :
                <img className="ml-2 sm:ml-[1vw] h-3 sm:h-[0.8vw]"
                  src="https://img.icons8.com/?size=100&id=X0azPa7Q2toW&format=png&color=000000" alt="" />}
            </button>
          </div>
          {/* search bar container */}
          <div className='flex items-center justify-start p-2 sm:p-[0.5vw] ml-2 sm:ml-[1vw]'>
            <img className="h-4 sm:h-[1vw]" src="https://img.icons8.com/?size=100&id=12773&format=png&color=000000" alt="" />
            <input type="text" placeholder="Search..." className='border-gray-300 ml-2 sm:ml-[0.5vw] focus:outline-none text-sm sm:text-base' />
          </div>
        </div>
        {/* notifications container */}
        <div className="mt-2 sm:mt-0">
          <button>
            <img className="h-7 sm:h-[1.8vw] mr-4 sm:mr-[2vw]" src="https://img.icons8.com/?size=100&id=11642&format=png&color=000000" alt="" />
          </button>
        </div>
      </div>
      {/* drop down menu */}
      <div className={`${dropdownOpen ? 'block' : 'hidden'} bg-white absolute mt-2 sm:mt-[0.5vw] ml-8 sm:ml-[2vw] rounded-xl sm:rounded-[1vw] shadow-lg p-4 sm:p-[1vw] z-10`}>
        <ul className='flex flex-col items-start justify-start px-4 sm:px-[1.5vw] py-1 sm:py-[0.25vw] gap-y-2 sm:gap-y-[0.5vw]'>
          <li>
            <button className='flex justify-center items-center'>
              <img className="h-8 sm:h-[2vw] mr-2 sm:mr-[0.5vw]" onClick={() => nav('/profile')} src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000" alt="" />
              My Profile
            </button>
          </li>
          <li>
            <button className='flex justify-center items-center'>
              <img className="h-8 sm:h-[2vw] mr-2 sm:mr-[0.5vw]" onClick={() => nav('/')} src="https://img.icons8.com/?size=100&id=W9oSY4G5TPcN&format=png&color=000000" alt="" />
              LogOut
            </button>
          </li>
        </ul>
      </div>
      <div className='flex flex-col sm:grid sm:grid-cols-7'>
        {/* Side menu for desktop and drawer for mobile */}
        <div>
          {/* Overlay for mobile menu */}
          {sideMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-10 sm:hidden"
              onClick={() => setSideMenuOpen(false)}
            />
          )}
          <div
            className={`
              ${dropdownOpen ? 'opacity-15' : 'opacity-100'}
              bg-white mt-4 sm:mt-[1vw] ml-0 sm:ml-[1vw] rounded-xl sm:rounded-[1vw]
              fixed sm:static z-20
              top-0 left-0 h-full w-64 sm:w-auto
              transform ${sideMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0
              transition-transform duration-200
              sm:py-[1vw] py-8
              sm:block
            `}
            style={{ minWidth: '180px', maxWidth: '90vw' }}
          >
            <div className="flex flex-col items-start justify-start ml-4 sm:ml-[1vw]">
              <button
                className="text-base sm:text-[1.2vw] flex justify-center items-center gap-x-2 sm:gap-x-[0.5vw] mb-2 sm:mb-[0.5vw]"
                disabled={dropdownOpen}
                onClick={() => { setActiveSection('dashboard'); setSideMenuOpen(false); }}
              >
                <img
                  className="inline h-8 sm:h-[2vw]"
                  src="https://img.icons8.com/?size=100&id=XnHBz2LnhELw&format=png&color=000000"
                  alt="Dashboard"
                />
                Dashboard
              </button>
              <button
                className="text-base sm:text-[1.2vw] flex justify-center items-center gap-x-2 sm:gap-x-[0.5vw] mb-2 sm:mb-[0.5vw]"
                disabled={dropdownOpen}
                onClick={() => { setActiveSection('peoples'); setSideMenuOpen(false); }}
              >
                <img
                  className="inline h-8 sm:h-[2vw]"
                  src="https://img.icons8.com/?size=100&id=95smte29m50W&format=png&color=000000"
                  alt="Peoples"
                />
                Peoples
              </button>
              <button
                className="text-base sm:text-[1.2vw] flex justify-center items-center gap-x-2 sm:gap-x-[0.5vw] mb-2 sm:mb-[0.5vw]"
                disabled={dropdownOpen}
                onClick={() => { setActiveSection('add-roles'); setSideMenuOpen(false); }}
              >
                <img
                  className="inline h-8 sm:h-[2vw]"
                  src="https://img.icons8.com/?size=100&id=yFAVSbDZOJll&format=png&color=000000"
                  alt="Add roles"
                />
                SetUp Profile
              </button>
              <button
                className="text-base sm:text-[1.2vw] flex justify-center items-center gap-x-2 sm:gap-x-[0.5vw] mb-2 sm:mb-[0.5vw]"
                disabled={dropdownOpen}
                onClick={() => { setActiveSection('transaction'); setSideMenuOpen(false); }}
              >
                <img
                  className="inline h-8 sm:h-[2vw]"
                  src="https://img.icons8.com/?size=100&id=E4XDlQ9MdNr2&format=png&color=000000"
                  alt="Transaction"
                />
                Transaction
              </button>
              <button
                className="text-base sm:text-[1.2vw] flex justify-center items-center gap-x-2 sm:gap-x-[0.5vw] mb-2 sm:mb-[0.5vw]"
                disabled={dropdownOpen}
                onClick={() => { setActiveSection('issues'); setSideMenuOpen(false); }}
              >
                <img
                  className="inline h-8 sm:h-[2vw]"
                  src="https://img.icons8.com/?size=100&id=quSQZMLE2o1s&format=png&color=000000"
                  alt="Issues"
                />
                Issues
              </button>
              <button
                className="text-base sm:text-[1.2vw] flex justify-center items-center gap-x-2 sm:gap-x-[0.5vw] mb-2 sm:mb-[0.5vw]"
                disabled={dropdownOpen}
                onClick={() => { setActiveSection('verify'); setSideMenuOpen(false); }}
              >
                <img
                  className="inline h-8 sm:h-[2vw]"
                  src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"
                  alt="Verify"
                />
                Verify
              </button>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className={`${dropdownOpen ? 'opacity-15' : 'opacity-100'} flex-1 sm:col-span-6 mr-0 sm:mr-[1vw] rounded-xl sm:rounded-[1vw] p-4 sm:p-[1vw]`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Home;
