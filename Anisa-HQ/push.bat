@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist .git git init
git branch -M main
git add .
git commit -m "Anisa HQ: офис, бот, Конституция"
git remote remove origin 2>nul
git remote add origin https://github.com/AndyMagwayer/Anisa-HQ.git
git push -u origin main
pause
