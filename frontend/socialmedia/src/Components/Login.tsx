import { useNavigate } from 'react-router-dom';

import logo from '../assets/sharelifelogo.png';
import shareVideo from '../assets/share.mp4';
import GoogleOAuth from './GoogleAuth';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          typeof='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center inset-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className='shadow-2xl'>
          <GoogleOAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
