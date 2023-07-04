import React from 'react';
import cognitoConfig from '../config/cognitoConfig';

const HomePage = () => {
  const signUpUrl = `${cognitoConfig.domain}/signup?response_type=token&client_id=${cognitoConfig.clientId}&redirect_uri=${cognitoConfig.callbackUrl}`;
  const signInUrl = `${cognitoConfig.domain}/login?response_type=token&client_id=${cognitoConfig.clientId}&redirect_uri=${cognitoConfig.callbackUrl}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Wildlife Reporting App!</h1>
      <p className="text-lg text-gray-600 mb-8">Please sign up or sign in to access the features of the app.</p>
      <a href={signUpUrl} className="btn-primary mr-4">Sign Up</a>
      <a href={signInUrl} className="btn-secondary">Sign In</a>
    </div>
  );
};

export default HomePage;
