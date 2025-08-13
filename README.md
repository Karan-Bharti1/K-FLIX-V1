
# K-Flix
# 🎬 K-FLIX GPT — Your AI-Powered Streaming Companion

> **From Binge to Brilliance** — The Netflix-inspired platform that’s got brains *and* beauty.  
> Movies, shows & recommendations… now with the power of AI.

---

## ✨ Why K-FLIX GPT?
Because scrolling endlessly is *so* 2020.  
K-FLIX GPT blends the sleek Netflix experience with intelligent AI recommendations — powered by GPT — to help you discover the *perfect* title, every time.

---

## 🚀 Features at a Glance
- 🔍 **Smart Search:** Find exactly what you’re craving — by mood, genre, or even vague descriptions.
- 🎯 **Personalized Picks:** AI learns your taste faster than you can say *skip intro*.
- 🌐 **Multi-Language Support:** English, Hindi, Spanish — watch your way.
- 🎥 **Netflix-Inspired UI:** Sleek, fast, and ridiculously good-looking.
- ⚡ **Blazing Performance:** Built with React, Tailwind, and GPT integrations.

---
## 🚀 Features

### Core
- 🔐 **Login / Sign Up** (Firebase Auth — Email/Password)
- 🔁 **Redirects**  
  - If not logged in → `/login`  
  - If logged in → `/browse`
- 🧭 **Routing** (Protected routes)
- 🏠 **Header** with auth state & Sign out
- 🧾 **Form Validation** (Login / Sign Up)
- 🧠 **useRef Hook** where relevant

### Browse Experience
- 🎬 **Main Movie** with autoplaying, muted trailer
- 📝 **Title & Description overlay**
- 🧰 **Movie Lists × N** (Now Playing, Popular, etc.)
- 🧩 **Movie Card** component + **TMDB Image CDN**

### GPT Discovery
- 🔎 **GPT Search Page & Bar**
- 🤖 **GPT Search API Call** → suggestions → fetched via TMDB
- 🗄 **gptSlice** + reuse **MovieList** for suggestions
- 🌍 **Multi-language UI** (bonus)

### Data & State
- 🧱 **Redux Store** with `userSlice`, `movieSlice`, `gptSlice`
- 🔄 **Memoization** where needed for perf
- ♻️ **Unsubscribe** from `onAuthStateChanged` on cleanup

### Streaming & UX Extras
- 📶 **Online/Offline detection** (graceful UI)
- 📽 **Trailer embedding** (YouTube) + smooth playback
- 📱 **Fully Responsive** with Tailwind
- ⚡ **Lazy loading** for heavy views/components

### Account Management
- ✏️ **Update Profile** (display name, avatar)
- ✅ **Bugfixes**  
  - Sign-up `displayName` & `photoURL` update  
  - Auth-aware redirects for `/browse` / `/login`

### Integrations
- 🔥 **Firebase Setup** (Auth, optional Hosting)
- 🎞 **TMDB**: Now Playing, Popular, Trailer, etc.
- 🧠 **OpenAI**: GPT-based semantic search

### Microservice (Optional, Recommended)
- 🧩 **Node.js + Express** microservice for **secure OpenAI access** (hides keys, adds rate-limiting & CORS)

---

## 🧰 Tech Stack

**Frontend:** React + Tailwind CSS  
**State:** Redux Toolkit  
**Auth/Hosting:** Firebase  
**Data:** TMDB API  
**AI:** OpenAI (GPT)  
**Backend (optional):** Node.js + Express (OpenAI proxy)  
**Build/Deploy:** Firebase Hosting / Vercel / Netlify

---
## 🛠 Tech Stack
- **Frontend:** React + Tailwind CSS
- **AI Engine:** GPT API for intelligent recommendations
- **Backend:** TMDB + Firebase
- **Database:** MongoDB

---

## 💡 Pro Tip
Try searching for _"A mind-bending sci-fi with a twist ending"_ and watch K-FLIX GPT work its magic. 🎩✨

---

> **Note:** This project is for educational & portfolio purposes only.  
> All rights to content, branding, and trademarks belong to their respective owners.


## Author

- [Github](https://github.com/Karan-Bharti1)
- [LinkedIn](https://www.linkedin.com/in/bharti1999/)



## 🚀 About Me
Hi there! 👋.
I am currently learning Full Stack Web Development with a focus on the MERN stack (MongoDB, Express.js, React, and Node.js). I'm passionate about building dynamic, user-friendly web applications and continuously improving my skills.
# K-FLIX-V1
