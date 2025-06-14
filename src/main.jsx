import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Analytics } from "@vercel/analytics/react"
import './index.css';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

if (!domain || !clientId) {
  console.error('Missing Auth0 configuration. Please check your environment variables.');
  
  // Render error message instead of the app if environment variables are missing
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8d7da', 
        color: '#721c24',
        borderRadius: '5px',
        margin: '20px',
        textAlign: 'center' 
      }}>
        <h2>Configuration Error</h2>
        <p>Auth0 environment variables are missing. Please check your environment configuration.</p>
      </div>
      <Analytics/>
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <App />
      </Auth0Provider>
      <Analytics/>
    </React.StrictMode>
  );
}
