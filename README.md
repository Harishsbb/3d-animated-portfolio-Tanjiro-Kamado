    # ⚔️ Tanjiro Kamado: Cinematic Animated Portfolio

    An immersive, high-performance developer portfolio themed around **Tanjiro Kamado** (from *Demon Slayer*), featuring a interactive HTML5 canvas engine, smooth scroll-based image frame scrubbing, dynamic fire/ember particle systems, floating code runes, and responsive, premium layout components.

    ---

    ## 🚀 Key Features

    *   **Cinematic Hero Scrubbing:** A canvas-based video scrubbing system that binds page scrolling to a sequence of image frames. It uses linear interpolation (`lerp`) for a buttery smooth framerate progression.
    *   **Dynamic Fire Particle System:** An immersive background particle simulation displaying floating embers, flames, and ashes rendered in real-time.
    *   **Floating Code Runes:** Translucent programming keywords and symbols floating dynamically on the hero background canvas.
    *   **Responsive Weaponry (Skills Grid):** Categorized matrix of skills (Programming, Frontend, Backend, Databases, Cloud & Tools) complete with animated skill level progression bars.
    *   **Interactive Projects Showcase:** Glowing glassmorphism project cards displaying project taglines, lead roles, key features, and technology badges.
    *   **Command Line Terminal Contact:** An interactive shell interface allowing visitors to run commands or send messages using terminal commands.

    ---

    ## 🛠️ Technology Stack

    This project is built using a modern, performant, and premium stack:

    ### **Core Framework & Languages**
    *   **Framework:** [Next.js 14.2.3](https://nextjs.org/) (App Router & Server-side optimization)
    *   **Library:** [React 18.3.1](https://react.dev/) (Functional components, hooks, custom state management)
    *   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing, interfaces, enhanced IDE support)

    ### **Styling & Layout**
    *   **CSS Engine:** [Tailwind CSS 3.4.3](https://tailwindcss.com/) (Utility-first styling, custom color variables)
    *   **Processors:** [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
    *   **Layout Utilities:** `clsx` & `tailwind-merge` (Conditional class rendering and dynamic tailwind resolution)

    ### **Animation & Graphics**
    *   **Hardware-Accelerated Canvas:** HTML5 2D Canvas Context using `requestAnimationFrame` for maximum rendering performance.
    *   **Component Transitions:** [Framer Motion 11.1.7](https://www.framer.com/motion/) (Complex entry/exit animations, page staggerings)
    *   **Interpolation Engine:** [GSAP 3.12.5](https://gsap.com/) (For robust and optimized custom timeline animations)

    ### **Icons & Assets**
    *   **Icons:** [Lucide React](https://lucide.dev/) (Clean vector-based UI icons)
    *   **Visual Assets:** AI-generated frame sequence (representing Tanjiro's Hinokami Kagura theme), packaged as a compressed ZIP.

    ---

    ## 📦 Project Directory Structure

    ```text
    ├── app/                  # Next.js App Router configurations, global styles, and layout
    │   ├── globals.css       # Core design tokens, gradients, and custom utility classes
    │   ├── layout.tsx        # HTML wrapper and global metadata
    │   └── page.tsx          # Main entrypoint bringing all sections together
    ├── components/           # Reusable portfolio section components
    │   ├── About.tsx         # Bio details, background cards, and timeline
    │   ├── Achievements.tsx  # Grid displaying awards and certifications
    │   ├── CinematicHero.tsx # HTML5 Canvas scrubbing engine & particle systems
    │   ├── Contact.tsx       # Terminal command line contact portal
    │   ├── Experience.tsx    # Chronological professional career timeline
    │   ├── Footer.tsx        # Footnote copyright and signature
    │   ├── Navbar.tsx        # Sticky navigation overlay with glowing elements
    │   ├── Projects.tsx      # Showcase cards for previous work
    │   ├── Skills.tsx        # Capabilities progress bars
    │   └── framesConfig.ts   # Automatically generated frame count configuration
    ├── public/               # Static web assets (automatically populated frames go here)
    ├── scripts/              # Build-related automation scripts
    │   └── unzip.js          # Frame extraction and configuration tool
    ├── package.json          # Dependency definition and lifecycle scripts
    └── tsconfig.json         # TypeScript compiler configuration
    ```

    ---

    ## ⚙️ Installation & Setup

    ### **Prerequisites**
    *   [Node.js](https://nodejs.org/) (v18.x or later recommended)
    *   [npm](https://www.npmjs.com/) or another package manager
    *   **Windows OS** (required to run the automated PowerShell unzip script during the install hook). If you are on macOS or Linux, please extract `tanjiro_frames1.zip` manually into `/public/frames/` and name the files in order `frame_001.jpg` to `frame_xxx.jpg`, then update `components/framesConfig.ts` with `export const TOTAL_FRAMES = <number>;`.

    ### **1. Install Dependencies & Extract Assets**
    Run the install command. The `postinstall` lifecycle script automatically decompresses the canvas frame ZIP archive, maps the files, and creates the config details:
    ```bash
    npm install
    ```

    ### **2. Run the Development Server**
    Launch the local development environment:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:3000` to preview the portfolio.

    ### **3. Production Build & Deployment**
    Create a production-ready, optimized bundle:
    ```bash
    npm run build
    ```
    Start the Next.js server locally for testing production builds:
    ```bash
    npm run start
    ```
