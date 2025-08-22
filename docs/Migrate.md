# Project Migration Credentials & Secrets

**Project Name:** `SCISS`
**Environment:** `Staging`
**Date Initialized:** ``

> **SECURITY WARNING:** This file contains sensitive production secrets. Store it securely and do not commit it to a public Git repository. Consider using a password manager or an encrypted vault.

---

## Payload CMS & General Info

- **Primary Custom Domain:** `staging.xxx.org`
- **GitHub Repository (Payload Backend):** `[Link to your GitHub repo]`
- **Payload Admin Login URL:** `https://staging.xxx.org/admin`
- **Payload Secret Key:**
  ```
  YOUR_STRONG_PAYLOAD_SECRET_KEY
  ```

---

## Render (CMS Hosting)

- **Service Name:** `[e.g., payload-staging-api]`
- **Render URL:** `[e.g., payload-staging-api.onrender.com]`
- **Assigned Custom Domain:** `staging.xxx.org`
- **Notes:** Used for hosting the Payload CMS Node.js application. Deploys automatically from the `main` branch of the GitHub repo.

---

## Supabase (Database - PostgreSQL)

- **Project Name:** `sciss`
- **Database Password:**
  ```
  KBG4tpa@ekb2rgr8ugc
  ```
- **Connection String (Direct - DO NOT USE ON RENDER):**
  ```
  postgresql://postgres:[YOUR-PASSWORD]@db.yaaymolnotelclearjkq.supabase.co:5432/postgres
  ```
- **Connection String (Transaction Pooler - FOR RENDER):**
  ```
  postgresql://postgres.yaaymolnotelclearjkq:[YOUR-PASSWORD]@aws-0-us-east-2.pooler.supabase.com:6543/postgres
  ```
- **Notes:** Use the **Pooler** connection string in the Render environment variables to solve the IPv4/IPv6 issue.

---

## Cloudflare R2 (File Storage)

- **Bucket Name:** `springfield-commonwealth`
- **Bucket Public URL:** `[The public URL for your R2 bucket, if you set one]`
- **S3 API Endpoint:**
  ```
  https://423e811d42b4e67d7b9d071c0358d68b.r2.cloudflarestorage.com/springfield-commonwealth
  ```
- **Account ID:**
  ```
  423e811d42b4e67d7b9d071c0358d68b
  ```
- **Cloudflare API Token**
  ```
  1W3ijD7ppYEtQW0S7RHQyxMnh2JRg5Q8T299PbVM
  ```
- **Access Key ID:**
  ```
  4d07cd2189ba13496384d3bed434b572
  ```
- **Secret Access Key:**
  ```
  4398357ac9c04927c51509274acb76aab1fd12d14c1a677e2a15fcbe0b272818
  ```
- **Notes:** This bucket stores all media uploads from Payload CMS. The credentials are used by the `plugin-cloud-storage` S3 adapter.

