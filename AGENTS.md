# AGENTS.md — React + TypeScript UI/UX Redesign Guidelines

## Project Scope & Objectives
This project involves redesigning and cloning an existing web application to improve its UI/UX, modernize its layout, and correct usability flaws. The codebase uses **React, TypeScript, Vite, and Tailwind CSS**.

---

## 🛠 Tech Stack & Environment
- **Core:** React 18+ / Vite
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS + `clsx` / `tailwind-merge`
- **Icons:** Lucide-React
- **Animations:** Framer Motion

### Core Development Commands
- **Install Dependencies:** `npm install`
- **Run Dev Server:** `npm run dev`
- **Type Check & Build:** `npm run build`
- **Lint Code:** `npm run lint`

---

## 📐 TypeScript & Coding Standards

1. **Strict Typing:**
   - **No `any` types.** Always define explicit interfaces or type aliases for component props, state objects, and API/mock data structures inside `src/types/`.
   - Ensure all React functional components are explicitly typed (e.g., `React.FC<ComponentProps>`).

2. **Component Architecture & Modularity:**
   - Keep components small, modular, and single-responsibility in `src/components/`.
   - Separate stateful container logic from pure presentational components where applicable.
   - Store mock data models in `src/data/` typed against interfaces in `src/types/`.

3. **UI/UX & Responsive Best Practices:**
   - Implement mobile-first design using Tailwind CSS breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
   - Ensure interactive elements (buttons, links) have minimum **44x44px** touch targets on mobile viewports.
   - Maintain accessible color contrast ratios (WCAG AA compliant).

---

## 🤖 Codex Agent Execution Rules

- **Type Safety Verification:** After modifying or adding components, always run `npm run build` or the TypeScript compiler check to verify there are no compilation errors or broken prop types.
- **Reference Assets:** Pull layout inspiration, copy, and structural data from the reference files located in `reference/site-clone/` and `reference/audit-notes.md`.
- **Git Hygiene:** Do not commit local build artifacts (`dist/`) or local environment configs (`.env`).
