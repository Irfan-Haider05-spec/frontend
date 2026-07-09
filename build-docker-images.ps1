<#
.SYNOPSIS
Builds Docker images for both the Admin Dashboard and Business Dashboard locally.

.DESCRIPTION
This script navigates to each frontend directory and runs the `docker build` command 
to create the respective Docker images.

.EXAMPLE
.\build-docker-images.ps1
#>

$adminDir = "admin-dashboard-frontend"
$businessDir = "business-dashboard-frontend"

$adminImageName = "admin-dashboard-frontend:latest"
$businessImageName = "business-dashboard-frontend:latest"

# Build Admin Dashboard
Write-Host "Building Admin Dashboard Image..." -ForegroundColor Cyan
if (Test-Path "$adminDir\Dockerfile") {
    Push-Location $adminDir
    docker build -t $adminImageName .
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Successfully built $adminImageName`n" -ForegroundColor Green
    } else {
        Write-Host "Failed to build $adminImageName`n" -ForegroundColor Red
    }
    Pop-Location
} else {
    Write-Host "Dockerfile not found in $adminDir`n" -ForegroundColor Yellow
}

# Build Business Dashboard
Write-Host "Building Business Dashboard Image..." -ForegroundColor Cyan
if (Test-Path "$businessDir\Dockerfile") {
    Push-Location $businessDir
    docker build -t $businessImageName .
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Successfully built $businessImageName`n" -ForegroundColor Green
    } else {
        Write-Host "Failed to build $businessImageName`n" -ForegroundColor Red
    }
    Pop-Location
} else {
    Write-Host "Dockerfile not found in $businessDir`n" -ForegroundColor Yellow
}

Write-Host "Build process completed." -ForegroundColor Cyan
