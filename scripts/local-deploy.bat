@echo off
REM Local Deployment Script for SCISS Client (Windows)
REM This script can be used to deploy manually if GitHub Actions fails

echo 🚀 Starting local deployment to Hostinger...

REM Check if required environment variables are set
if "%HOSTINGER_USER%"=="" (
    echo ❌ Error: HOSTINGER_USER environment variable not set!
    goto :error
)
if "%HOSTINGER_HOST%"=="" (
    echo ❌ Error: HOSTINGER_HOST environment variable not set!
    goto :error
)
if "%HOSTINGER_PATH%"=="" (
    echo ❌ Error: HOSTINGER_PATH environment variable not set!
    goto :error
)
if "%HOSTINGER_SSH_PORT%"=="" (
    echo ❌ Error: HOSTINGER_SSH_PORT environment variable not set!
    goto :error
)

REM Check if dist folder exists
if not exist "dist" (
    echo ❌ Error: dist folder not found!
    echo Please run 'pnpm run deploy:prod' first to build the application.
    goto :error
)

echo 📦 Building application...
call pnpm run deploy:prod

echo 🔐 Testing SSH connection...
ssh -p %HOSTINGER_SSH_PORT% -o ConnectTimeout=10 -o BatchMode=yes -o StrictHostKeyChecking=no %HOSTINGER_USER%@%HOSTINGER_HOST% "echo SSH connection successful"
if errorlevel 1 (
    echo ❌ SSH connection failed!
    echo Please check your SSH key and connection details.
    goto :error
)

echo 📤 Deploying files to Hostinger...
rsync -avz --progress --itemize-changes -e "ssh -p %HOSTINGER_SSH_PORT% -o ConnectTimeout=10 -o StrictHostKeyChecking=no" --exclude=.DS_Store --exclude=videos/ --exclude=images/ dist/ %HOSTINGER_USER%@%HOSTINGER_HOST%:%HOSTINGER_PATH%/

echo ✅ Deployment completed successfully!
echo 🌐 Your site should be live at: https://sciss.org
goto :end

:error
echo.
echo Please set the following environment variables:
echo   - HOSTINGER_USER
echo   - HOSTINGER_HOST
echo   - HOSTINGER_PATH
echo   - HOSTINGER_SSH_PORT
echo.
echo Example:
echo   set HOSTINGER_USER=your_username
echo   set HOSTINGER_HOST=your_host.com
echo   set HOSTINGER_PATH=/path/to/your/site
echo   set HOSTINGER_SSH_PORT=22
exit /b 1

:end
