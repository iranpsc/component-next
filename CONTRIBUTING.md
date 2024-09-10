
# Contributing to Component-Next

Thank you for considering contributing to Component-Next! Here are some guidelines to help you contribute effectively.

## Table of Contents

- [Getting Started](#getting-started)
- [Coding Standards](#coding-standards)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Branching and Merging](#branching-and-merging)

## Getting Started

To get started with contributing, follow the steps below to clone the repository and set it up on your local machine:

### 1. Clone the Repository

First, fork the repository to your GitHub account. Then, clone it to your local machine using the following commands:

```bash
git clone https://github.com/YOUR-USERNAME/component-next.git
cd component-next
```

### 2. Install Dependencies

After cloning the repository, install the required dependencies:

```bash
npm install
```

### 3. Create a New Branch

Before you begin working on a feature or bug fix, create a new branch. This helps in keeping the `main` branch stable.

```bash
git checkout -b feature-name
```

Replace `feature-name` with a meaningful name that describes the feature you're working on.

## Coding Standards

Please adhere to the following coding standards:

1. **Consistency**: Follow the existing code style. Indentation, spacing, and naming conventions should match the rest of the project.
2. **Tailwind CSS**: Use Tailwind CSS classes to style components, unless additional styling is required.
3. **Clean Code**: Avoid unnecessary comments or unused code. Ensure that your code is clean and easy to understand.

## Submitting a Pull Request

Once you've completed your changes and committed them, it's time to submit a pull request (PR) to have your work reviewed and merged into the main branch.

### 1. Push Your Changes

First, push your changes to the feature branch you created:

```bash
git push origin feature-name
```

### 2. Open a Pull Request

Go to the GitHub repository and click on the **Compare & pull request** button. Fill out the PR template with a description of your changes, ensuring that they meet the following criteria:

- The feature or fix is complete.
- The code adheres to the project’s coding standards.
- All relevant tests (if applicable) have been updated or created.

Once everything is in order, submit your pull request.

### 3. PR Review

All pull requests must be reviewed by a project maintainer. They may ask for changes or improvements before merging.

## Branching and Merging

To ensure a smooth development process, follow these guidelines when branching and merging:

1. **Use Feature Branches**: Always create a new branch for each feature or bug fix.
2. **Pull Request Reviews**: All changes should be merged into `main` through a pull request that has been reviewed and approved by at least one maintainer.
3. **Keep Branches Up-to-Date**: Regularly pull the latest changes from the `main` branch into your feature branch to avoid merge conflicts:

```bash
git fetch origin
git checkout main
git pull origin main
git checkout feature-name
git merge main
```

By following these steps, you will help maintain a clean and efficient codebase.

---

Thank you for contributing to Component-Next! Your contributions help make the project better for everyone.
