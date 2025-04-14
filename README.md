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

The icons included with this extension need to be created or sourced separately. You can create your own icons or find free ones at resources like [Flaticon](https://www.flaticon.com/) or [Icons8](https://icons8.com/).

## License

This project is open source and available under the MIT License. 