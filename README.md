# ✨ Personal Portfolio Showcase ✨

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/markuptitan/react-portfolio)](https://github.com/markuptitan/react-portfolio/issues)
[![GitHub forks](https://img.shields.io/github/forks/markuptitan/react-portfolio)](https://github.com/markuptitan/react-portfolio/network)
[![GitHub stars](https://img.shields.io/github/stars/markuptitan/react-portfolio)](https://github.com/markuptitan/react-portfolio/stargazers)

This project is a modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. It showcases my skills, projects, and provides a way for visitors to get in touch.

🚀 **Live Demo:** https://markuptitan.site

## 🌟 Features

*   🎨 **Modern UI/UX:** Clean, engaging, and responsive design.
*   ⚡ **Fast & Performant:** Built with Vite for optimized performance.
*   📱 **Responsive Design:** Looks great on all devices (desktops, tablets, and mobiles).
*   🧩 **Reusable Components:** Modular components for easy maintenance and scalability.
*   🎣 **Custom Hooks:** Logic abstracted into custom hooks (`useTheme`, `useTech`) for better code organization.
*   🌙 **Theme Switching:** Multiple theme support (`light`, `dark`, `dracula`) managed by `useTheme` hook and `ThemeSwitch` component.
*   📊 **Vercel Analytics:** Integrated for tracking page views.
*   📜 **Dynamic Project Filtering:** Filter projects by technology using `FilterDropDown` and `useTech`.
*   📝 **Contact Form:** Easy way for visitors to send messages, with status notifications.
*   ✅ **Interactive Elements:** Engaging animations and transitions using Framer Motion (e.g., `PulseLayer`, `Hero` typing animation, `ProjectCard` hover).
*   🔗 **Dynamic CTA Buttons:** Call-to-action buttons with randomly selected navigation links.
*     सामाजिक **Social Links:** Prominently displayed social media connections.

## 🛠️ Tech Stack

*   **Core:**
    *   [React](https://react.dev/) (v18.2.0)
    *   [Vite](https://vitejs.dev/) (v5.2.0)
    *   [Tailwind CSS](https://tailwindcss.com/) (v3.4.4)
*   **Routing:**
    *   [React Router DOM](https://reactrouter.com/) (v6.23.1)
*   **UI & UX:**
    *   [Framer Motion](https://www.framer.com/motion/) (v11.2.12) (for animations)
    *   [Lucide React](https://lucide.dev/) (v0.396.0) (for icons)
    *   [React Icons](https://react-icons.github.io/react-icons/) (v5.2.1) (for icons)
    *   [Typed.js](https://github.com/mattboldt/typed.js/) (v2.1.0) (for typing animations)
    *   [SweetAlert2](https://sweetalert2.github.io/) (v11.12.0) (for alerts)
*   **Analytics:**
    *   [@vercel/analytics](https://vercel.com/analytics) (v1.3.1)
*   **Development Tools:**
    *   [ESLint](https://eslint.org/) (v8.57.0) (for code linting)
    *   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react) (v4.2.1)

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18.x or higher recommended)
*   npm (or yarn)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/markuptitan/react-portfolio.git
    cd react-portfolio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

### Build for Production

To create a production build:

```bash
npm run build
# or
# yarn build
```

This will create a `dist` folder with the optimized static assets.

### Linting

To run the linter:

```bash
npm run lint
# or
# yarn lint
```

## 📁 Project Structure (Overview)

```
.
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── images
│   │   ├── banks.png
│   │   ├── password-gen.png
│   │   ├── portfolio.png
│   │   └── word-unscrambler.png
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Background.jsx
│   │   ├── CTAButtons.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FilterDropDown.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── PulseLayer.jsx
│   │   ├── SocialLinks.jsx
│   │   └── ThemeSwitch.jsx
│   ├── data
│   │   └── projects.js
│   ├── hooks
│   │   ├── useTech.js
│   │   └── useTheme.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   └── utils
│       └── formSubmit.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🎣 Custom Hooks Documentation

This project utilizes several custom hooks to encapsulate reusable logic.

### 🎣 `useTech()`

**Purpose:** This hook is responsible for extracting and providing a unique list of technologies used across all projects. It reads project data and compiles a de-duplicated array of technology strings.

**Usage:**
Import the hook and call it within your component to get the list of technologies.

```jsx
import useTech from './hooks/useTech';

const MyComponent = () => {
  const techStack = useTech();
  // techStack will be an array like: ['React', 'Node.js', 'JavaScript', ...]
  // ...
};
```

**Returned Value:**
*   `techStack` (Array of Strings): An array containing unique technology names. Returns an empty array initially and during data fetching, then populates with the unique tech stack.
**File:** `src/hooks/useTech.js`

### 🎨 `useTheme()`

**Purpose:** This hook manages the application's theming functionality. It allows users to switch between predefined themes, persists the selected theme in `localStorage`, and updates the root HTML element's `data-theme` attribute to apply theme-specific styles.

**Available Themes:**
*   `light` (Default)
*   `dark`
*   `dracula`

**Usage:**
Import the hook and call it within your component. It provides the current theme and a function to toggle to the next theme.

```jsx
import { useTheme } from './hooks/useTheme';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : theme === 'dark' ? 'Dracula' : 'Light'} Theme
    </button>
  );
};
```

**Returned Values/Functions:**
*   `theme` (String): The currently active theme (e.g., `"light"`, `"dark"`, `"dracula"`).
*   `toggleTheme` (Function): A function to switch to the next theme in the predefined list.
**File:** `src/hooks/useTheme.js`

## 🧩 Components Documentation

Key reusable components in this project:

#### ✨ `Background`
*   **Purpose**: Renders a fixed background with a grid pattern.
*   **Functionality**: Provides a consistent background styling across the application. It's a simple presentational component.
*   **File**: `src/components/Background.jsx`

#### 🚀 `CTAButtons`
*   **Purpose**: Displays a set of Call-to-Action (CTA) buttons.
*   **Functionality**: Randomly selects two routes from a predefined list (`/projects`, `/contact`, `/about`) and renders them as navigation links. This adds a dynamic touch to user navigation prompts.
*   **File**: `src/components/CTAButtons.jsx`

#### 📝 `ContactForm`
*   **Purpose**: Provides a form for users to send messages.
*   **Functionality**:
    *   [x] Handles user input for name, email, and message.
    *   [x] Uses `utils/formSubmit.js` for submission logic.
    *   [x] Displays status messages (loading, success, error) using `SweetAlert2`.
    *   [x] Uses `framer-motion` for subtle animations.
*   **File**: `src/components/ContactForm.jsx`

#### फिल्टर `FilterDropDown`
*   **Purpose**: Allows users to filter a list of projects based on their technology stack.
*   **Functionality**:
    *   [x] Uses the `useTech()` hook to get the list of available technologies.
    *   [x] Maintains the state of the selected filter and dropdown visibility.
    *   [x] Persists the last selected filter in `localStorage`.
    *   [x] Calls an `onFilterChange` prop function when a filter is selected.
    *   [x] Uses `framer-motion` for dropdown animation.
*   **Key Props**:
    *   `onFilterChange` (Function): Callback function triggered when the filter changes.
    *   `activeFilter` (String): The currently active filter.
*   **File**: `src/components/FilterDropDown.jsx`

#### 🦶 `Footer`
*   **Purpose**: Displays the application footer.
*   **Functionality**:
    *   [x] Shows the copyright year and author's name.
    *   [x] Includes a link to the project's GitHub repository.
    *   [x] Integrates the `ThemeSwitch` component.
    *   [x] Fixed at the bottom of the viewport.
*   **File**: `src/components/Footer.jsx`

#### 🦸‍♂️ `Hero`
*   **Purpose**: Displays the main hero section of the portfolio.
*   **Functionality**:
    *   [x] Shows a profile image.
    *   [x] Features a dynamic typing animation (`Typed.js`).
    *   [x] Includes introductory text.
    *   [x] Integrates `CTAButtons`.
*   **File**: `src/components/Hero.jsx`

#### 🧭 `NavBar`
*   **Purpose**: Provides the main navigation for the application.
*   **Functionality**:
    *   [x] Displays application name/logo.
    *   [x] Responsive navigation (desktop and mobile).
    *   [x] Uses `NavLink` for active link highlighting.
    *   [x] Manages body scroll when mobile menu is open.
*   **File**: `src/components/NavBar.jsx`

#### 🃏 `ProjectCard`
*   **Purpose**: Displays information about a single project.
*   **Functionality**:
    *   [x] Shows project image, title, description, tech stack.
    *   [x] Links to GitHub and live demo.
    *   [x] Uses `framer-motion` for animation.
*   **Key Props**:
    *   `project` (Object): Project details.
*   **File**: `src/components/ProjectCard.jsx`

#### 💓 `PulseLayer`
*   **Purpose**: Creates a visual pulsing effect following the mouse.
*   **Functionality**:
    *   [x] Listens to `mousemove` events.
    *   [x] Renders animated circles at cursor coordinates.
    *   [x] Non-interactive background effect.
*   **File**: `src/components/PulseLayer.jsx`

#### 🔗 `SocialLinks`
*   **Purpose**: Displays a list of social media and contact links.
*   **Functionality**:
    *   [x] Renders predefined social links with icons.
    *   [x] Uses `framer-motion` for animation.
    *   [x] Includes hover effects.
*   **File**: `src/components/SocialLinks.jsx`

#### 🎨 `ThemeSwitch` (Component)
*   **Purpose**: UI control for switching application themes.
*   **Functionality**:
    *   [x] Uses the `useTheme()` hook.
    *   [x] Displays theme-representative icons (`lucide-react`).
    *   [x] Animates icon transition (`framer-motion`).
*   **File**: `src/components/ThemeSwitch.jsx`

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

Distributed under the MIT License.
## 🙏 Acknowledgements

*   [Vite](https://vitejs.dev/)
*   [React](https://reactjs.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Framer Motion](https://www.framer.com/motion/)
*   Icons from [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
*   Author: Siyabonga Samson Lukhele
