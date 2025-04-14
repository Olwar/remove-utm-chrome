# UTM Source Remover Chrome Extension

A simple Chrome extension that automatically removes `utm_source` and all parameters that follow it from URLs in your address bar.

## Features

- Automatically cleans URLs by removing UTM tracking parameters
- Works with both `?utm_source` and `&utm_source` parameter formats
- Operates silently in the background with no user interaction required

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" and select the directory containing this extension
5. The extension is now installed and active

## How It Works

The extension monitors URL changes in your browser tabs. When it detects a URL containing `utm_source` parameters, it automatically strips those parameters and updates the address bar with the clean URL.

## Icon Credits

The extension requires icons in the following sizes: 16x16, 48x48, and 128x128 pixels. These should be saved in PNG format in the `icons` directory as `icon16.png`, `icon48.png`, and `icon128.png` respectively.

You can create these icons using image editing software like GIMP or Photoshop, or use online icon generators. Alternatively, you can find suitable free icons at resources like [Flaticon](https://www.flaticon.com/) or [Icons8](https://icons8.com/), ensuring they match the required sizes.

### Placeholder Icon Generation (Optional)

The current icons included in the repository are simple placeholders generated from base64 strings. If they are missing or you need to regenerate them, you can use the following commands (requires `base64` and standard Unix tools like `grep`, `tail`):

```bash
mkdir -p icons

cat base64_icons.txt | grep -A1 "icon16.png:" | tail -1 | base64 -D > icons/icon16.png

cat base64_icons.txt | grep -A1 "icon48.png:" | tail -1 | base64 -D > icons/icon48.png

cat base64_icons.txt | grep -A1 "icon128.png:" | tail -1 | base64 -D > icons/icon128.png
```

Note: The `base64_icons.txt` file contains the base64-encoded data for these placeholder images.

## License

This project is open source and available under the MIT License. 