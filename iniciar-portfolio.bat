@echo off
echo Instalando dependencias del portafolio...
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo Error al instalar dependencias
    pause
    exit /b %errorlevel%
)

echo Iniciando el portafolio...
start http://localhost:3000
call npm run dev
pause
