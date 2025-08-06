# Deployment Guide

## Production
- Branch: `main`
- Host: Vercel (Frontend), Render/DigitalOcean (Backend)
- CI/CD: GitHub Actions

## Rollback
- Use GitHub to revert commit
- Vercel auto redeploys on rollback
- Render: click "Redeploy Previous Version"

## Environments
- .env.production (Frontend)
- Backend Render Environment Settings
