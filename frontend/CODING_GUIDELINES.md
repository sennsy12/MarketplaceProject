# Frontend Coding Guidelines

## Key Principles
- Write clean, modular JavaScript code with concise examples.
- Use functional and declarative programming patterns; avoid class components.
- Emphasize reusability by modularizing components and avoiding code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- Structure files with a clear hierarchy: exported component, subcomponents, utility functions, and constants.

## Naming Conventions
- Use lowercase with dashes for directories (e.g., `components/task-list`).
- Favor named exports for components and utility functions.
- Components should have names matching their functionality and directory.

## JavaScript Usage
- Use modern ES6+ syntax; avoid legacy JavaScript patterns.
- Prefer arrow functions for anonymous and inline functions.
- Use functional components exclusively; avoid class components.

## Syntax and Formatting
- Follow clean code principles: concise, consistent, and readable.
- Avoid unnecessary curly braces in conditionals; use shorthand syntax where appropriate.
- Ensure consistent indentation and spacing (e.g., 2 spaces, no mixed tabs).
- Follow declarative JSX patterns, keeping JSX logic minimal.

## UI and Styling
- Use Tailwind CSS for styling and prioritize a mobile-first responsive approach.
- Incorporate Lucide React icons for intuitive and scalable UI elements.
- Follow componentization practices: split large UI sections into smaller, reusable pieces.

## Performance Optimization
- Minimize the use of `useEffect` and `setState`; favor declarative approaches with hooks.
- Optimize components with memoization and dynamic imports where necessary.
- Implement lazy loading for non-critical assets (e.g., images and offscreen components).
- Use Tailwind's utilities to minimize custom CSS.

## Accessibility and Best Practices
- Use semantic HTML to ensure accessibility.
- Add `aria-*` attributes where necessary, especially for interactive components.
- Include focus states and hover states for all interactive elements.

## File Organization
- Group components by feature or domain for easier scalability (e.g., `features/todo/`).
- Separate concerns: components, hooks, utilities, and context in their respective folders.
- Keep files concise; avoid exceeding ~300 lines per file.

By adhering to these principles, maintain a consistent and scalable codebase that is optimized for readability, performance, and collaboration.
