# Docker Deployment Guide for Conference2026

This guide explains how to build and deploy your Next.js application using Docker on Linux.

## Prerequisites

- Docker installed on your Linux system
- Docker Compose installed (optional but recommended)
- ~500MB disk space for the Docker image

## Quick Start

### Option 1: Using Docker Compose (Recommended)

1. **Build the Docker image:**
   ```bash
   docker-compose build
   ```

2. **Start the application:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   Open your browser and navigate to: `http://localhost:3000`

4. **View logs:**
   ```bash
   docker-compose logs -f app
   ```

5. **Stop the application:**
   ```bash
   docker-compose down
   ```

### Option 2: Using Docker CLI Only

1. **Build the Docker image:**
   ```bash
   docker build -t inspire-conference:latest .
   ```

2. **Run the container:**
   ```bash
   docker run -d --name inspire-app -p 3000:3000 inspire-conference:latest
   ```

3. **Access the application:**
   Open your browser and navigate to: `http://localhost:3000`

4. **View logs:**
   ```bash
   docker logs -f inspire-app
   ```

5. **Stop the container:**
   ```bash
   docker stop inspire-app
   docker rm inspire-app
   ```

## Environment Variables

Create a `.env.production.local` file in your project root or pass environment variables at runtime:

```bash
# Using docker-compose
docker-compose up -d --env-file .env.production.local

# Using Docker CLI
docker run -d \
  --name inspire-app \
  -p 3000:3000 \
  --env-file .env.production.local \
  inspire-conference:latest
```

## Database Connection

If you're using MongoDB:

1. **With Docker Compose:** The `mongodb` service is included. Update your code to use:
   ```
   mongodb://admin:password123@mongodb:27017/inspire?authSource=admin
   ```

2. **With External MongoDB:** Update your connection string in environment variables.

## Deployment to Production

### On a Linux VPS/Server:

1. **SSH into your server:**
   ```bash
   ssh user@your-server-ip
   ```

2. **Clone or upload your project:**
   ```bash
   git clone <your-repo-url>
   cd Conference2026
   ```

3. **Create environment file:**
   ```bash
   nano .env.production.local
   # Add your production environment variables
   ```

4. **Start with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

### Using a Reverse Proxy (Nginx)

Create an nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Using SSL/HTTPS with Let's Encrypt:

1. Install Certbot:
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. Generate certificate:
   ```bash
   sudo certbot certonly --standalone -d your-domain.com
   ```

3. Update nginx config with SSL certificates.

## Docker Image Optimization

The provided Dockerfile uses a multi-stage build:
- **Builder stage:** Installs dependencies and builds the application
- **Runner stage:** Only includes production files

This reduces the final image size from ~1GB to ~500MB.

## Useful Commands

```bash
# View all containers
docker ps -a

# View image size
docker images

# Inspect container logs
docker logs <container-id>

# Execute command inside container
docker exec -it <container-id> /bin/sh

# Remove unused images and containers
docker system prune

# Push image to Docker Hub
docker tag inspire-conference:latest yourusername/inspire-conference:latest
docker push yourusername/inspire-conference:latest
```

## Troubleshooting

### Application not starting
```bash
docker logs inspire-app
```

### Port already in use
```bash
# Change port mapping in docker-compose.yml or use:
docker run -p 8000:3000 inspire-conference:latest
```

### Build fails
- Clear cache: `docker build --no-cache -t inspire-conference:latest .`
- Check Docker disk space: `docker system df`

### Performance issues
- Increase Docker memory: Add `mem_limit: 2g` in docker-compose.yml
- Use volume mounts for caching: Add Docker volumes for node_modules

## Next Steps

1. Update your environment variables in `.env.docker` or `.env.production.local`
2. Test locally with Docker before deploying
3. Consider using a container registry (Docker Hub, AWS ECR, etc.)
4. Set up CI/CD pipelines for automated deployment
