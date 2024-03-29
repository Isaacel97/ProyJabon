import 'dotenv/config';
export default{
  "expo": {
    "name": "ProyJabon",
    "slug": "ProyJabon",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/IconMicAzul.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/images/logo2.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/IconMicAzul.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/images/IconMicAzul.png"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    }
  }
}
