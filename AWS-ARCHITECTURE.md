# DevOpsCloudAI.com - AWS Portfolio Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        AWS PORTFOLIO ARCHITECTURE                               │
│                           devopscloudai.com                                     │
└─────────────────────────────────────────────────────────────────────────────────┘

    🌐 Users (Internet)
         │
         │ DNS Query
         ▼
    ┌─────────────────┐
    │   🌍 Route 53   │ ◄─── DNS Management
    │  DNS Service    │      devopscloudai.com
    │                 │      www.devopscloudai.com
    └─────────────────┘
         │
         │ CNAME/A Record
         ▼
    ┌─────────────────┐      ┌─────────────────┐
    │ ⚡ CloudFront   │ ◄────│  🔒 ACM SSL     │
    │   CDN Service   │      │  Certificate    │
    │ Global Edge     │      │ *.devopscloudai │
    │ Locations       │      │     .com        │
    └─────────────────┘      └─────────────────┘
         │
         │ Origin Request
         ▼
    ┌─────────────────┐
    │  🪣 S3 Bucket   │
    │ Static Website  │
    │   Hosting       │
    │                 │
    │ • index.html    │
    │ • style.css     │
    │ • script.js     │
    │ • assets/       │
    │ • blog pages    │
    └─────────────────┘
         ▲
         │ Deploy Files
         │
    ┌─────────────────┐      ┌─────────────────┐
    │ 🚀 GitHub       │      │ ⚙️ AWS CLI      │
    │   Actions       │      │ Deployment      │
    │ CI/CD Pipeline  │      │ Scripts         │
    │                 │      │                 │
    │ • Auto Deploy   │      │ • S3 Sync       │
    │ • Cache Clear   │      │ • Invalidation  │
    └─────────────────┘      └─────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                              BENEFITS                                          │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ✅ Global CDN Performance    ✅ 99.99% Availability                            │
│ ✅ SSL/TLS Security         ✅ Cost-Effective Hosting                          │
│ ✅ Auto-Scaling             ✅ Version Control Integration                     │
│ ✅ Fast Content Delivery    ✅ Easy Maintenance                                │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Architecture Components

### 1. **Route 53 (DNS Service)**
- Manages DNS for `devopscloudai.com`
- Routes traffic to CloudFront distribution
- Provides health checks and failover

### 2. **CloudFront (CDN)**
- Global content delivery network
- Caches static content at edge locations
- SSL termination with ACM certificate
- Custom domain support

### 3. **S3 (Static Website Hosting)**
- Stores all portfolio files
- Configured for static website hosting
- Public read access for web content
- Version control integration

### 4. **ACM (SSL Certificate)**
- Free SSL/TLS certificates
- Automatic renewal
- Wildcard certificate support

### 5. **GitHub Actions (CI/CD)**
- Automated deployment pipeline
- Triggers on code changes
- Syncs files to S3
- Invalidates CloudFront cache

## Deployment Workflow

1. **Code Push** → GitHub Repository
2. **GitHub Actions** → Builds and deploys
3. **AWS S3** → Stores static files
4. **CloudFront** → Distributes globally
5. **Route 53** → Routes domain traffic
6. **Users** → Access via devopscloudai.com
