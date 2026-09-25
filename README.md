# JWT Explorer 🔐

A powerful, client-side JWT (JSON Web Token) decoder and explorer built with modern web technologies. Instantly decode and analyze JWT tokens with real-time validation, beautiful syntax highlighting, and comprehensive metadata display.

## ✨ Features

- **🔍 Real-time JWT Decoding** - Instant token analysis as you type
- **🎨 Syntax Highlighting** - Beautiful JSON formatting for header and payload
- **🌙 Dark/Light Theme** - Toggle between themes with persistent preference
- **📋 Copy to Clipboard** - One-click copying for header, payload, and signature
- **📱 Mobile Responsive** - Works perfectly on all device sizes  
- **🔒 100% Client-Side** - No data transmitted to servers, completely secure
- **⚡ Zero Dependencies** - Lightweight and fast performance
- **🧪 Sample Tokens** - Built-in test tokens for quick exploration
- **⏰ Timestamp Conversion** - Human-readable date formatting
- **✅ Token Validation** - Expiration checking and error handling

## 🚀 Tech Stack

- **Framework**: Astro + TypeScript
- **Styling**: Tailwind CSS
- **JWT Library**: jwt-decode
- **Deployment Ready**: Cloudflare Pages / Vercel / Netlify

## 📁 Project Structure

```
/
├── docs/              # Project documentation
├── src/
│   ├── components/    # Reusable UI components
│   │   ├── ThemeToggle.astro
│   │   ├── JwtInput.astro
│   │   └── DecodedView.astro
│   ├── layouts/       # Page layouts
│   │   └── Layout.astro
│   ├── pages/         # Routes
│   │   └── index.astro
│   ├── styles/        # Global styles
│   │   └── global.css
│   └── utils/         # Utility functions
│       └── jwt.ts
└── package.json
```

## 🛠️ Development

### Prerequisites
- Node.js 22 (see `.nvmrc`). CI and GitHub Pages use this LTS line, which Astro 5 documents as the current upgrade target (`22.0.0` or higher).
- npm

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   
3. **Open in browser**
   Navigate to `http://localhost:4321`

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## 🎯 Usage

1. **Paste JWT Token** - Copy your JWT token into the textarea
2. **View Decoded Data** - Instantly see header, payload, and signature
3. **Check Timestamps** - View human-readable expiration times  
4. **Copy Sections** - Use copy buttons to grab specific parts
5. **Try Samples** - Use built-in sample tokens to test features
6. **Toggle Theme** - Switch between light and dark modes

## 🔧 Configuration

The app includes sensible defaults but can be customized:

- **Tailwind Config**: `tailwind.config.mjs`
- **Astro Config**: `astro.config.mjs`
- **TypeScript**: `tsconfig.json`

## 🚀 Deployment

Build the production version:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting provider.

### Continuous integration and GitHub Pages

- **CI** (`.github/workflows/ci.yml`) runs on pull requests and on pushes to `main`. It installs dependencies with `npm ci` and runs `npm run build` on Node.js 22.
- **Deploy** (`.github/workflows/deploy.yml`) runs only on pushes to `main`, or when started manually. It builds the site the same way and publishes `./dist` to GitHub Pages.

## 📝 License

[MIT](LICENSE) — the same license used on Satheez's other open-source packages.

## 🤝 Contributing

Contributions welcome! Please read the docs folder for requirements and design guidelines.
