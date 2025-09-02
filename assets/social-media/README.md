# Social Media Preview Images Strategy

## Current Setup
- **Large Previews (Facebook, LinkedIn)**: Using `android-chrome-512x512.png` (512x512px)
- **Small Previews (Twitter)**: Using same 512x512 image (scaled down)
- **Logo**: `tablefortwo logo small.svg` available for logo-only usage

## Recommended Image Strategy

### 1. Large Preview Images (1200x630px - Facebook/LinkedIn)
```
Usage: og:image for large social cards
Current: android-chrome-512x512.png (512x512)
Ideal: Create 1200x630px image with:
- Table for Two branding
- Professional layout
- Clear typography
- Brand colors
```

### 2. Square Images (400x400px - Twitter/Instagram)
```
Usage: twitter:image for summary cards
Current: android-chrome-512x512.png (512x512)
Ideal: Create 400x400px image optimized for square previews
```

### 3. Logo-Only Images (200x200px - Small cards)
```
Usage: For compact previews where space is limited
Current: tablefortwo logo small.svg
Ideal: PNG version at 200x200px for crisp display
```

## Implementation

### Current Meta Tags Structure:
```html
<!-- Open Graph / Facebook (Large Preview) -->
<meta property="og:image" content="https://tablefortwo.studio/assets/favicon/android-chrome-512x512.png">
<meta property="og:image:width" content="512">
<meta property="og:image:height" content="512">
<meta property="og:image:alt" content="Table for Two Design Studio - [Page-Specific Alt Text]">

<!-- Twitter (Flexible based on card type) -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:image" content="https://tablefortwo.studio/assets/favicon/android-chrome-512x512.png">
<meta property="twitter:image:alt" content="Table for Two Design Studio - [Page-Specific Alt Text]">
```

### Alt Text Added (✅ Completed):
- **Homepage**: "Table for Two Design Studio - Lim Wai Hong"
- **Portfolio**: "Table for Two Design Studio - Portfolio & Projects"
- **Notes**: "Table for Two Design Studio - Notes"
- **Overthere App**: "Overthere iOS App - Parking Reminder by Lim Wai Hong"
- **Privacy Policy**: "Privacy Policy - Overthere App by Lim Wai Hong"
- **Terms & Conditions**: "Terms & Conditions - Overthere App by Lim Wai Hong"
- **Motion Graphics**: "Motion Graphics Resources - Table for Two Design Studio"
- **Reservations**: "Table for Two Design Studio - Lim Wai Hong"

## Future Enhancement Options

### Option 1: Dedicated Social Images
Create specific images for each page type:
- `social-home.jpg` (1200x630) - Homepage
- `social-portfolio.jpg` (1200x630) - Portfolio/Menu page
- `social-contact.jpg` (1200x630) - Contact page
- `social-app.jpg` (1200x630) - App pages

### Option 2: Dynamic Image Selection
Use different images based on page type:
```html
<!-- Homepage -->
<meta property="og:image" content="https://tablefortwo.studio/assets/social-media/social-home-1200x630.jpg">

<!-- Portfolio -->
<meta property="og:image" content="https://tablefortwo.studio/assets/social-media/social-portfolio-1200x630.jpg">
```

### Option 3: Logo + Text Overlay
For pages without specific images:
- Use logo as base
- Add page-specific text overlay
- Maintain consistent branding

## Testing

Test previews on:
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Preview](https://www.linkedin.com/post-inspector/)

## File Naming Convention
- `social-[page]-[width]x[height].jpg`
- `social-home-1200x630.jpg`
- `social-contact-400x400.jpg`
