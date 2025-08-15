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

We welcome contributions from the community! This project is designed to be extensible and there are many exciting features that could be added. Here are some ideas to get you started:

### 🌟 Feature Ideas
- **Multiplayer Mode**: Add real-time PvP battles using WebSockets
- **New Characters**: Design and implement additional fighters with unique movesets
- **Special Moves**: Add character-specific special attacks and combos
- **Tournament Mode**: Create bracket-style tournaments
- **Online Leaderboards**: Track high scores and win streaks
- **Character Customization**: Allow players to customize fighter appearance
- **New Stages**: Add more battle arenas with interactive elements
- **Sound Effects**: Enhance audio with character voices and impact sounds
- **Story Mode**: Create a single-player campaign with cutscenes
- **Training Mode**: Add a practice area for learning combos

### 🛠️ Technical Improvements
- **Performance Optimization**: Improve frame rates and reduce bundle size
- **Mobile Enhancements**: Better touch controls and haptic feedback
- **Accessibility**: Enhanced screen reader support and colorblind-friendly options
- **Internationalization**: Multi-language support
- **Save System**: Local storage for progress and settings

### Getting Started with Contributing

1. **Fork the repository** and clone your fork
2. **Create a feature branch** (`git checkout -b feature/your-feature-name`)
3. **Install dependencies** (`npm install`)
4. **Start the development server** (`npm run dev`)
5. **Make your changes** and test thoroughly
6. **Commit your changes** with descriptive messages
7. **Push to your fork** and create a Pull Request

### Code Style
- Use TypeScript for type safety
- Follow existing naming conventions
- Add comments for complex game logic
- Test on both desktop and mobile devices

For major features like multiplayer or new game modes, please open an issue first to discuss the implementation approach.

## 🤖 Revolutionary AI-Driven Architecture

This project showcases the **cutting-edge frontier of autonomous software engineering**, where advanced artificial intelligence transcends traditional development paradigms to create production-grade applications through pure computational intelligence.

### Neural Code Synthesis
- **Zero-Shot Programming**: Complete application architecture materialized from natural language specifications using transformer-based code generation models
- **Semantic Code Understanding**: AI systems that comprehend complex software requirements and translate them into optimized TypeScript/React implementations
- **Contextual Pattern Matching**: Machine learning algorithms that identify and implement industry best practices without human intervention
- **Adaptive Architecture Design**: Dynamic system design decisions made through AI reasoning about scalability, performance, and maintainability

### Autonomous Development Pipeline
- **Intelligent Debugging**: Self-correcting code generation with real-time error detection and resolution
- **Emergent Problem Solving**: AI-driven solutions to complex challenges like collision detection, state management, and responsive design
- **Iterative Code Evolution**: Continuous improvement through AI feedback loops and performance optimization
- **Cross-Platform Intelligence**: Automated responsive design generation ensuring seamless multi-device compatibility

### Technical Singularity Demonstration
- **100% AI Authorship**: Every line of code, component architecture, and system design decision generated through artificial intelligence
- **Production-Grade Quality**: Enterprise-level code standards achieved without traditional software engineering processes
- **Complex Logic Implementation**: Advanced game mechanics, AI opponent behavior, and real-time combat systems created through pure AI reasoning
- **Modern Stack Mastery**: Seamless integration of Next.js 15, React 19, TypeScript, and Tailwind CSS through AI understanding of framework ecosystems

### Paradigm-Shifting Implications
This project represents a **technological inflection point** where AI systems demonstrate the capability to handle end-to-end software development, from conceptual design to deployment optimization. It challenges conventional software engineering methodologies and previews a future where human creativity directs AI execution for unprecedented development velocity.

**The result**: A fully functional, responsive, cross-platform fighting game that rivals traditionally developed applications while being created entirely through AI-human collaboration.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic Street Fighter gameplay mechanics
- Built with modern web technologies for cross-platform compatibility
- Special thanks to the React and Next.js communities

## 🔗 Links

- **Live Demo**: [Play Street Fighter](https://your-deployment-url.vercel.app)
- **Creator**: [Vimal](https://vimalsreal.com)
- **GitHub Repository**: [Source Code](https://github.com/vimalsreal/streetfighter)

---

*Built with ❤️ using Next.js and React*
