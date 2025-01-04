To solve this issue, you can ensure that `initializeApp` is called only once and that all parts of your app use the same Firebase configuration. You can achieve this by creating a single Firebase configuration object and using that object throughout your app.  Here's how:

```javascript
//Import firebase
import { initializeApp } from "firebase/app";
// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);

// Use the app variable throughout your app
export default app;
```
This approach ensures that your app uses the correct configuration and avoids duplicate `initializeApp` calls.