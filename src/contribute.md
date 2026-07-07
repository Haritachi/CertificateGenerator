# Contributing Guide

Thanks for contributing to this project! Please follow the workflow below to keep things consistent and avoid conflicts.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app locally:
   ```bash
   ng serve
   ```

## Before You Start Working

Always pull the latest changes from `main` before starting new work:
```bash
git checkout main
git pull origin main
```

## Branching

Create a new branch for each feature or fix — don't work directly on `main`.

```bash
git checkout -b feature/short-description
```

Suggested prefixes:
- `feature/` — new functionality
- `fix/` — bug fixes
- `chore/` — config, dependencies, tooling
- `docs/` — documentation changes

## Making Changes

1. Make your changes and test them locally.
2. Stage and commit with a clear message:
   ```bash
   git add .
   git commit -m "Add login page UI"
   ```
3. Push your branch:
   ```bash
   git push -u origin feature/short-description
   ```

## Opening a Pull Request

- Open a PR from your branch into `main`.
- Add a short description of what changed and why.
- Request a review before merging.
- Once approved, merge and delete the branch.

## Resolving Merge Conflicts

If Git flags a conflict during `pull` or merge:
1. Open the conflicting file(s) and resolve the marked sections manually.
2. Stage and commit the resolution:
   ```bash
   git add .
   git commit
   ```

## Code Style

- Follow existing formatting and naming conventions in the codebase.
- Run `ng lint` before pushing, if configured.
- Keep commits focused — one logical change per commit where possible.

## Questions

If anything is unclear, reach out to the project maintainer before making large changes.