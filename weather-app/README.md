# Weather App

A responsive weather application built as part of a [Frontend Mentor](https://www.frontendmentor.io/) challenge. The app allows users to search for weather information by location and view current weather conditions and forecasts.

The project was developed using React, TypeScript, CSS, and Tailwind CSS, with external APIs for weather data and geolocation.

## Live Demo

Soon

## Challenge

This project is based on the [Frontend Mentor – Weather App Challenge](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49).

## Built With

- **React** – UI development
- **TypeScript** – Static typing
- **CSS** – Custom styling
- **Tailwind CSS** – Utility-first CSS framework
- **Vite** – Development server and build tool
- **Open-Meteo API** – Weather data and forecasts
- **BigDataCloud Reverse Geocoding API** – Location detection and geolocation information

## APIs

This application uses the following APIs:

### Weather Data – Open-Meteo

[Open-Meteo](https://open-meteo.com/)

Provides weather information, including current weather conditions and forecasts.

### Location Detection – BigDataCloud

[BigDataCloud Reverse Geocoding API](https://api.bigdatacloud.net/data/reverse-geocode-client)

Used to retrieve location information based on the user's geographical coordinates.

## Features

- Search for weather information by location.
- Display current weather conditions.
- Retrieve location information using geolocation.
- Get weather data from Open-Meteo.
- Responsive layout for different screen sizes.
- Styled with Tailwind CSS and custom CSS.

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Margarita250494/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Acknowledgements

- [Frontend Mentor](https://www.frontendmentor.io/) for the challenge and design inspiration.
- [Open-Meteo](https://open-meteo.com/) for providing free weather data.
- [BigDataCloud](https://www.bigdatacloud.com/) for reverse geocoding services.

---

**Created by [Margarita Boiko](https://github.com/Margarita250494)**
