---
description: Publish PropertyON Landing Page to GitHub
---

Follow these steps to publish your project to GitHub:

1.  **Create a New Repository on GitHub**
    *   Go to [GitHub New Repository](https://github.com/new).
    *   Name your repository (e.g., `propertyon-landing`).
    *   Keep it **Public** or **Private** as you prefer.
    *   **Do not** initialize with README, .gitignore, or License (we already have them).
    *   Click **Create repository**.

2.  **Push Your Code**
    *   Copy the commands from the "…or push an existing repository from the command line" section.
    *   They will look like this (replace `YOUR_USERNAME` with your actual GitHub username):

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/propertyon-landing.git
    git branch -M main
    git push -u origin main
    ```

3.  **Run the Commands**
    *   Paste and run these commands in your terminal here.

4.  **Verify**
    *   Refresh your GitHub repository page to see your code.
