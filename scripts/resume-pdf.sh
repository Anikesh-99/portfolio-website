#!/usr/bin/env bash
# Regenerates public/anikesh-bhuvaneshwaram-resume.pdf from the live /resume
# page using the print stylesheet in globals.css. Run after editing
# lib/resume.ts, then commit the refreshed PDF:
#   npm run build && bash scripts/resume-pdf.sh
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=3199
OUT="public/anikesh-bhuvaneshwaram-resume.pdf"

npx next start --port "$PORT" >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT

until curl -sf -o /dev/null "http://localhost:$PORT/resume"; do sleep 0.5; done

"$CHROME" --headless=new --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --print-to-pdf="$OUT" \
  "http://localhost:$PORT/resume"

echo "wrote $OUT"
