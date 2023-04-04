'use client';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import logo from '../../public/Spotify.png';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';

const DynamicSignInButton = dynamic(
  () => import('../components/DynamicSignInButton'),
  {
    ssr: false,
  }
);

function LoginPage() {
  const [providers, setProviders] = useState<Record<string, unknown>>({});

  useEffect(() => {
    async function fetchProviders() {
      const providers = await getProviders();
      setProviders(providers);
    }
    fetchProviders();
  }, []);

  const handleSignIn = useCallback(
    (providerId: string) => signIn(providerId, { callbackUrl: '/' }),
    []
  );

  return (
    <div className='flex flex-col bg-black min-h-screen w-full justify-center items-center'>
      <h1 className='text-3xl sm:text-5xl md:text-7xl text-white font-bold mb-8'>Spoofy | Spotify Clone</h1>
      <p className='text-gray-400 italic text-center'>
        Built to explore and practice Front End Development concepts and
        technologies
      </p>
      <p className='text-gray-400 italic text-center mb-8'>Not an Official Spotify App*</p>
      <Image className='mb-8' src={logo} height={100} alt='Spotify Logo' />
      {Object.values(providers).map((provider: any) => (
        <div key={provider.id}>
          <DynamicSignInButton
            providerId={provider.id}
            handleSignIn={handleSignIn}
          >
            Login with {provider.name}
          </DynamicSignInButton>
        </div>
      ))}
    </div>
  );
}

export default LoginPage;
