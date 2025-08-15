# Street Fighter - Retro Fighting Game

A classic 2D fighting game built with Next.js and React, featuring pixel art graphics, responsive controls, and engaging combat mechanics. Choose from 6 unique fighters and battle through increasingly challenging rounds.

## 🎮 Game Features

### Combat System
- **Multiple Attack Types**: Punch (5 damage), Kick (10 damage), Jump Kick (15 damage)
- **Defense Mechanics**: Block attacks to reduce damage to 1%, duck to dodge kicks, jump to dodge punches
- **Advanced Combos**: Combine movement with attacks for jump kicks and directional strikes
- **Hit Detection**: Direction-based combat system requiring proper positioning

### Fighters
- **Sumo Shiro** - The red-hooded brawler with devastating power
- **Bobby Noodles** - Cool-headed fighter with precision strikes  
- **Cheeseman** - Cap-wearing technician with unmatched speed
- **Randy Omelette** - Mysterious detective with unpredictable moves
- **Sam Sneaky** - Balanced blue warrior with solid offense and defense
- **Omega Babu** - Steel-willed fighter with unbreakable defense

### Game Modes
- **Progressive Difficulty**: Each round increases AI challenge and damage multipliers
- **Smart AI**: Adaptive CPU that reacts to player actions and employs strategic combat
- **Multiple Stages**: Random stage selection with pixel art backgrounds

## 🕹️ Controls

### Desktop (Keyboard)
- **Movement**: Arrow keys (← →)
- **Jump**: ↑ (combine with ← → for directional jumps)
- **Duck**: ↓
- **Punch**: D key
- **Kick**: A key  
- **Defense**: S key
- **Jump Kick**: ↑ + A (15 damage combo)

### Mobile
- Touch-friendly on-screen controls with directional pad and action buttons
- Optimized for landscape orientation
- Responsive design for various screen sizes

## 🛠️ Technical Stack

- **Framework**: Next.js 15.2.4 with React 19
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/vimalsreal/streetfighter.git
cd streetfighter
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Game Mechanics

### Combat System
- **Collision Detection**: Prevents fighter overlap and ensures realistic positioning
- **Damage System**: Variable damage based on attack type and defensive state
- **Animation States**: Comprehensive sprite system with idle, walk, attack, defense, hit, victory, and defeat animations
- **AI Behavior**: CPU fighters with adaptive difficulty, strategic movement, and reactive combat

### Progressive Gameplay
- **Round System**: Continuous battles with increasing difficulty
- **Opponent Rotation**: Smart opponent selection avoiding recent matchups
- **Difficulty Scaling**: Damage multipliers and AI reaction times adjust per round

## 📱 Mobile Optimization

- **Responsive Design**: Optimized layouts for mobile, tablet, and desktop
- **Touch Controls**: Full mobile control scheme with visual feedback
- **Performance**: Smooth 60fps gameplay across devices
- **Accessibility**: Screen reader support and keyboard navigation

## 🎨 Art & Design

- **Pixel Art Style**: Authentic retro gaming aesthetic
- **Custom Sprites**: Unique character designs with multiple animation frames
- **Dynamic Backgrounds**: Varied stage environments
- **UI Design**: Classic fighting game interface with modern responsiveness

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic Street Fighter gameplay mechanics
- Built with modern web technologies for cross-platform compatibility
- Special thanks to the React and Next.js communities

## 🔗 Links

- **Live Demo**: [Play Street Fighter](https://your-deployment-url.vercel.app)
- **Creator**: [Vimal](https://vimalsreal.com)

---

*Built with ❤️ using Next.js and React*
