/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    API_KEY: "AIzaSyDcUJsf4GH8_x1r73npg7QalYEydqzVvmo",
    AUTH_DOMAIN: "telegram-d8c77.firebaseapp.com",
    PROJECT_ID: "telegram-d8c77",
    STORAGE_BUCKET: "telegram-d8c77.appspot.com",
    MESSAGING_SENDER_ID: "156224427757",
    APP_ID: "1:156224427757:web:8dbc31980f50ae24b4dee4",
  },
};

module.exports = nextConfig;
