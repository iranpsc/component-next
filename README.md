
# Component-Next

This repository contains reusable HTML components styled with Tailwind CSS. The components are designed to be used in various web projects.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Build](#build)
- [Contributing](#contributing)
- [Development Guidelines](#development-guidelines)
- [License](#license)

## Introduction

Component-Next is a collection of ready-to-use HTML components styled with Tailwind CSS. These components help developers quickly integrate modern, responsive web design into their projects.

### Project Goals

The goal of this project is to provide developers with a set of highly customizable, reusable components that can be easily integrated into any web application. The components are designed to follow the best practices of web development with a focus on performance and accessibility.

## Installation

To use these components in your project, follow the steps below:

### 1. Clone the repository

Clone this repository using Git:

```bash
git clone https://github.com/iranpsc/component-next.git
cd component-next
```

### 2. Install dependencies

Before starting, make sure you have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/). Then, install the necessary dependencies by running:

```bash
npm install
```

### 3. Install Tailwind Scrollbar Plugin

To enable custom scrollbars in your project, you need to install the `tailwind-scrollbar` plugin:

```bash
npm install tailwind-scrollbar
```

Then, add the plugin to your `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
```

## Usage

You can use these components by copying the HTML structure and Tailwind CSS classes into your own web project. Feel free to customize the components as needed.

## Build

To build the project (e.g., compile the components into the final build version), you can run the following command:

```bash
npm run build
```

This will generate the final output in the `dist/` directory, including your CSS files.

## Contributing

We welcome contributions! If you'd like to contribute to this project, feel free to open issues or submit pull requests. Follow the contribution guidelines below to ensure a smooth collaboration.

## Development Guidelines

1. **Create a Separate Branch for Each Feature**  
   For each new feature or bug fix, create a new branch off of the `main` branch. The branch should follow the naming convention `feature-[description]` or `bugfix-[description]`. For example:
   
   ```bash
   git checkout -b feature-navbar-component
   ```

2. **Commit Regularly with Detailed Messages**  
   Make small, frequent commits with clear, descriptive commit messages that explain the changes you made. This helps maintain an organized history and makes it easier to track changes.

   Example:
   
   ```bash
   git commit -m "Added responsive navbar component"
   ```

3. **Submit Pull Requests for Code Review**  
   Once your feature is complete, submit a pull request (PR) to merge your branch into the `main` branch. All PRs should be reviewed and approved before merging. Make sure to resolve any merge conflicts before submitting.

4. **Follow Coding Standards**  
   Ensure that your code follows the established coding standards for the project. Consistent code improves readability and maintainability. If you're unsure about a particular standard, review the existing code or ask for guidance.

## License

This project is licensed under the [MIT License](LICENSE).
