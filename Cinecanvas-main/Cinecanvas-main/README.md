
<img src="./src/assets/CineCanvas_white_bg.png" alt="CineCanvas Logo"/> 





[**Cinecanvas**](https://cinecanvas.pages.dev/)
 is a fast, modern movie‑browsing web app built with Vite and React, styled using Tailwind CSS and shadcn/ui, integrated with TMDB and VidSrc APIs for metadata and streaming embeds, and deployed on Cloudflare Pages for global performance.
<p align="center">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/> 
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"/> 
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/> 
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" alt="Cloudflare"/> 
  <a href="https://developers.themoviedb.org/4/"><img src="https://img.shields.io/badge/TMDB_API-v4-blue?logo=themoviedatabase&logoColor=fff" alt="TMDB API"/></a> 
  <a href="https://vidsrc.icu/"><img src="https://img.shields.io/badge/VidSrc-Embed%20Streaming-informational" alt="VidSrc API"/></a> 
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?logo=mit&logoColor=000" alt="License"/></a>
</p>


## Features  
- **Search & Discovery**: Browse and search movies/TV shows via the TMDB API, which offers a community‑driven database of over 800,000 films and 150,000 TV shows with images and credits. 
- **Streaming Embeds**: Seamlessly embed trailers and previews using VidSrc’s free streaming API, providing responsive, auto‑updated, high‑quality links via simple REST endpoints.  
- **Responsive UI**: Utility‑first design with Tailwind CSS, combining low‑level, single‑purpose classes for rapid, custom styling directly in markup.  
- **Accessible Components**: UI primitives and patterns from shadcn/ui accelerate accessible React component assembly on top of Tailwind.  
- **Blazing Fast HMR**: Vite’s Hot Module Replacement updates modules in‑place without full reloads, preserving state and boosting developer productivity.  
- **Global Edge Deployment**: Hosted on Cloudflare Pages for instant, Git‑driven builds, automatic HTTPS, and edge caching across 275+ cities.  


> [!NOTE]
> Use Ad Blockers or Brave Browser for better experience

## Technology Stack  

### Vite  
Vite is a next‑generation build tool offering instant server start, on‑demand ESM, and lightning‑fast Hot Module Replacement.  

### React  
React is a declarative JavaScript library for building reusable UI components, making complex UIs easier to reason about and maintain.  

### Tailwind CSS  
Tailwind CSS is a utility‑first framework that provides low‑level, composable classes for styling without opinionated defaults.  

### shadcn/ui  
shadcn/ui delivers a suite of accessible, theme‑aware React components built on top of Tailwind, streamlining UI development.  

### TMDB API  
The Movie Database (TMDb) API supplies extensive metadata—images, synopses, cast, and crew—to power search, discovery, and detail pages.  

### VidSrc API  
VidSrc offers a lightweight video‑streaming API and embed URLs for movies and episodes, updating links automatically for optimal quality.  

### Cloudflare Pages  
Cloudflare Pages is a JAMstack platform that deploys static and full‑stack applications to Cloudflare’s global network with zero‑config Git integration.  


## Installation  
```bash
git clone https://github.com/Optimized-Brain/Cinecanvas.git  
cd Cinecanvas  
npm install  
```  

## Configuration   
  Add your `TMDB_API_KEY` and any VidSrc credentials.  

## Usage  
```bash
npm run dev
```  
Open [http://localhost:5173](http://localhost:5173) to explore Cinecanvas locally.   

## License  
This project is licensed under the **MIT License**—see the [LICENSE](LICENSE) file for details.  
