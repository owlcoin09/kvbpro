#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/assets"
mkdir -p "$DEST"

urls=(
  "https://static.kvbplus.com/home/images/logo.svg"
  "https://kvbplus.com/logo.png"
  "https://static.kvbplus.com/home/images/home-mt.png"
  "https://static.kvbplus.com/home/images/mt5.png"
  "https://static.kvbplus.com/home/images/home-partner.png"
  "https://static.kvbplus.com/home/images/index-des-bg.jpg"
  "https://static.kvbplus.com/home/video/home.mp4"
  "https://static.kvbplus.com/home/images/download-bg.jpg"
  "https://static.kvbplus.com/home/images/home-down-h5.png"
  "https://static.mykvb.com/promotion/swap-free-banner.png"
  "https://static.mykvb.com/promotion/lucky-draw-banner.webp"
  "https://static.mykvb.com/promotion/switch-bonus-banner.webp"
)

for url in "${urls[@]}"; do
  curl -fsSL -o "$DEST/$(basename "$url")" "$url"
  echo "Downloaded $(basename "$url")"
done

curl -fsSL -o "$ROOT/public/favicon.ico" "https://www.kvbplus.com/favicon.ico"
curl -fsSL -o "$ROOT/public/favicon-32x32.png" "https://www.kvbplus.com/favicon-32x32.png"
echo "Done."
