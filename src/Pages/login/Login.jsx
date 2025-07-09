import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    // Example: validate email/password, call API, etc.
    nav('/dashboard');
  };

  return (
    <div className='flex flex-col justify-start mt-[4vw] items-center h-screen max-md:mt-[10vw]'>
      <div className='flex items-end'>
        <h1 className='text-center drop-shadow-xs/40 text-[3vw] font-extrabold uppercase max-md:text-[8vw]'>Sales </h1>
        <h1 className='ml-[1vw] text-[2.6vw] font-mono max-md:text-[7vw] max-md:ml-[3vw]'> Manager's</h1>
      </div>
      <p className='mt-[1vw] text-[1.5vw] mb-[4vw] max-md:text-[4vw] max-md:mt-[2vw] max-md:mb-[30vw]'>Recruitment Service</p>
      <div className='flex flex-col justify-center items-center w-[20%] max-md:w-[90%]'>
        <h1 className='text-[2vw] font-bold max-md:text-[7vw]'>Welcome Back!</h1>
        <div className='flex flex-col justify-center items-start mt-[2vw] w-full max-md:mt-[7vw]'>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            className='bg-gray-100 rounded-md p-[0.5vw] mt-[0.5vw] w-full text-[1.5vw] placeholder:text-black/40 max-md:text-[5vw] max-md:mt-[2vw]'
            placeholder='Demo@gmail.com'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-center items-start mt-[0.5vw] max-md:mt-[4vw] w-full'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className='bg-gray-100 rounded-md p-[0.5vw] mt-[0.5vw] w-full text-[1.5vw] placeholder:text-black/40 max-md:text-[5vw] max-md:mt-[2vw]'
            placeholder='*******'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='w-full flex flex-col items-center'>
          <button
            className='bg-[#27ae60] w-full mt-[2vw] rounded-[1vw] text-white py-[0.5vw] uppercase max-md:py-[2vw] max-md:rounded-[4vw] max-md:my-[5vw]'
            onClick={handleLogin}
          >
            log In
          </button>
          <button type="button" className='text-black/40 my-[0.4vw]'>Forgot Password?</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
