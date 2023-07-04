const cognitoConfig = {
    domain: process.env.REACT_APP_COGNITO_DOMAIN,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    clientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
    callbackUrl: process.env.REACT_APP_COGNITO_CALLBACK_URL
  };
  
  export default cognitoConfig;
  