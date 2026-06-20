Write-Host "===========================================" -ForegroundColor Cyan
Write-Host "Iniciando Entorno de Desarrollo: Legado" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan

$baseDir = $PSScriptRoot

Write-Host "Instalando dependencias Web si es necesario..." -ForegroundColor DarkGray
Start-Process powershell -Wait -NoNewWindow -ArgumentList "-Command", "cd '$baseDir\apps\web'; npm install"

Write-Host "Levantando API (NestJS)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$baseDir\apps\api'; npm run start:dev"

Write-Host "Levantando Frontend (React/Vite)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$baseDir\apps\web'; npm run dev"

Write-Host "¡Servicios iniciados en ventanas de PowerShell separadas!" -ForegroundColor Green
Write-Host "La API estara disponible en http://localhost:3006"
Write-Host "El Frontend estara disponible en http://localhost:3000"
Write-Host ""
