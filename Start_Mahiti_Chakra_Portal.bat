@echo off
title Mahiti Chakra Digital Portal Starter - help.mahitichakra.in
color 0A
cls
echo ====================================================================
echo   MAHITI CHAKRA DIGITAL HELP PORTAL - LOCAL SERVER STARTER
echo   Website URL: http://localhost:3000
echo ====================================================================
echo.
echo [1/3] Clearing previous node processes on port 3000 ...
taskkill /F /IM node.exe >nul 2>&1

echo [2/3] Navigating to project directory ...
cd /d "c:\Users\ADMIN\OneDrive\Desktop\WEB APPS"

echo [3/3] Opening browser at http://localhost:3000 ...
timeout /t 2 /nobreak >nul
start http://localhost:3000

echo.
echo ====================================================================
echo SERVER RUNNING SUCCESSFULLY ON PORT 3000!
echo Keep this terminal window open while browsing http://localhost:3000
echo ====================================================================
echo.
npm.cmd run dev

pause
