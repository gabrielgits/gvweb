# GitHub Actions FTP Deployment Setup

## Required GitHub Secrets

To enable FTP deployment, add these secrets to your GitHub repository:

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following repository secrets:

### Required Secrets:

- **FTP_SERVER**: Your FTP server hostname (e.g., `ftp.yourhost.com`)
- **FTP_USERNAME**: Your FTP username
- **FTP_PASSWORD**: Your FTP password

### How to Add Secrets:

1. Click "New repository secret"
2. Enter the secret name (exactly as listed above)
3. Enter the secret value
4. Click "Add secret"

## Deployment Process

- The workflow triggers on pushes to the `main` branch
- It builds the project using `npm run build`
- The `dist/` folder is deployed to `/public_html/` on your FTP server
- Only successful builds on the main branch will deploy

## Customization

To modify the deployment:
- Change `server-dir` in the workflow if your web root is different
- Modify the `exclude` patterns to skip additional files
- Adjust the `local-dir` if your build output changes