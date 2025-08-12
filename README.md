# Weddings by Siddhant Kapoor

A React + TypeScript + Vite static website for professional wedding photography services hosted on GitHub Pages.

## 🚀 Live Demo

Visit the live site: [https://weddingsbysk.github.io/ShaadiPhotos](https://weddingsbysk.github.io/ShaadiPhotos)

## 🛠️ Built With

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **GitHub Pages** - Static hosting
- **GitHub Actions** - Automated deployment

## 📦 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/weddingsbysk/ShaadiPhotos.git
cd ShaadiPhotos
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

## 📁 Project Structure

```
ShaadiPhotos/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── assets/      # Images, fonts, etc.
│   ├── App.tsx      # Main App component
│   └── main.tsx     # Entry point
├── .github/         # GitHub Actions workflows
├── dist/            # Build output (auto-generated)
└── package.json     # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📝 Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch
5. Click Save

### Update Configuration

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Update the `base` field in `vite.config.ts` with your repository name
3. Replace contact information and branding as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
