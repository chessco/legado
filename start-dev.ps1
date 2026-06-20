$ErrorActionPreference = "Stop"

# Directorio raiz SIEMPRE fijo al folder de este script — nunca sale de legado
$baseDir = $PSScriptRoot
$apiDir  = Join-Path $baseDir "apps\api"
$webDir  = Join-Path $baseDir "apps\web"
$schema  = Join-Path $apiDir "prisma\schema.prisma"

Write-Host "===========================================" -ForegroundColor Cyan
Write-Host " Legado Dev Environment Startup" -ForegroundColor Cyan
Write-Host " Raiz: $baseDir" -ForegroundColor DarkGray
Write-Host "===========================================" -ForegroundColor Cyan

# Verificacion de seguridad
if (-not (Test-Path (Join-Path $baseDir ".gitignore"))) {
    Write-Host "ERROR: No estas dentro de C:\PitayaCode\legado" -ForegroundColor Red
    exit 1
}

# --- Instalar dependencias API ---
Write-Host "`n[1/4] Instalando dependencias de API..." -ForegroundColor Yellow
Set-Location $apiDir
npm install --ignore-scripts

# --- Generar Prisma Client (rutas absolutas) ---
Write-Host "`n[2/4] Generando Prisma Client..." -ForegroundColor Yellow
$nodeModulesBin = Join-Path $apiDir "node_modules\.bin\prisma"
if (Test-Path $nodeModulesBin) {
    & $nodeModulesBin generate --schema="$schema"
} else {
    npx --prefix "$apiDir" prisma generate --schema="$schema"
}

# --- Instalar dependencias Web ---
Write-Host "`n[3/4] Instalando dependencias de Web..." -ForegroundColor Yellow
Set-Location $webDir
npm install

# --- Levantar servicios ---
Write-Host "`n[4/4] Levantando servicios..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$apiDir'; npm run start:dev"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$webDir'; npm run dev"

Set-Location $baseDir
Write-Host "`n Servicios iniciados:" -ForegroundColor Cyan
Write-Host "   API  -> http://localhost:3006" -ForegroundColor White
Write-Host "   WEB  -> http://localhost:3000" -ForegroundColor White
