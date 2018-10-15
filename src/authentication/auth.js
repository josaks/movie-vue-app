import { Adal, AuthenticationContext } from 'vue-adal';


const adalConfig = {
// This config gets passed along to Adal, so all settings available to adal can be used here.
  config: {
    // 'common' (multi-tenant gateway) or Azure AD Tenant ID
    tenant: '<guid>',

    // Application ID
    clientId: '<guid>',

    // Host URI
    redirectUri: '<host addr>',

    cacheLocation: 'localStorage'
  },

  // Set this to true for authentication on startup
  requireAuthOnInitialize: true,

  // Pass a vue-router object in to add route hooks with authentication and role checking
  router: router
};

const profile = () => AuthenticationContext.user.profile;


export default { 
    adalConfig, 
    Adal, 
    profile 
};