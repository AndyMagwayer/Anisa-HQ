@echo off
cd /d "%~dp0"
if exist .env goto run
echo First run. Paste each value with right mouse click, then press Enter.
set /p TG=1 of 4 - Bot token from BotFather: 
set /p ID=2 of 4 - Your Telegram ID from userinfobot: 
set /p KEY=3 of 4 - Gemini API key from AI Studio: 
set /p GHT=4 of 4 - GitHub token, or just press Enter to skip: 
> .env echo TELEGRAM_TOKEN=%TG%
>> .env echo OWNER_ID=%ID%
>> .env echo AI_API_KEY=%KEY%
>> .env echo AI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai
>> .env echo AI_MODEL=gemini-2.0-flash
>> .env echo TZ_NAME=Asia/Tashkent
>> .env echo TZ_OFFSET=+05:00
>> .env echo GITHUB_REPO=AndyMagwayer/Anisa-HQ
>> .env echo GITHUB_BRANCH=bruno-dev
if not "%GHT%"=="" >> .env echo GITHUB_TOKEN=%GHT%
:run
set NODE=node
where node >nul 2>nul || set NODE=C:\Users\f.qambarova\Downloads\node-v22.22.3-win-x64\node-v22.22.3-win-x64\node.exe
"%NODE%" --env-file=.env src/index.js
pause
