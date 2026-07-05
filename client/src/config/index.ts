// Application configurations placeholder

export const config = {
  env: process.env.NODE_ENV || "development",
  apiUrl: process.env.API_URL || "http://localhost:5000/api",
  isProduction: process.env.NODE_ENV === "production",
};

export default config;
