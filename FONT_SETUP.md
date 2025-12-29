# Satoshi Font Setup

The project is configured to use the Satoshi font family. To complete the setup:

## Adding Satoshi Font Files

1. **Download Satoshi Font**: 
   - Satoshi is a commercial font. You can purchase it from [Fontshare](https://www.fontshare.com/fonts/satoshi) or obtain it from your font license.
   
2. **Add Font Files**:
   - Place the following font files in the `public/fonts/` directory:
     - `Satoshi-Regular.woff2`
     - `Satoshi-Regular.woff`
     - `Satoshi-Medium.woff2`
     - `Satoshi-Medium.woff`
     - `Satoshi-Bold.woff2`
     - `Satoshi-Bold.woff`

3. **Directory Structure**:
   ```
   public/
     fonts/
       Satoshi-Regular.woff2
       Satoshi-Regular.woff
       Satoshi-Medium.woff2
       Satoshi-Medium.woff
       Satoshi-Bold.woff2
       Satoshi-Bold.woff
   ```

## Current Configuration

- Font is defined in `app/globals.css` using `@font-face`
- Tailwind config includes Satoshi as the default sans-serif font
- Body element uses `font-satoshi` class
- Fallback fonts: system-ui, -apple-system, sans-serif

## Alternative: Free Font Fallback

If you don't have Satoshi font files, you can temporarily use a similar font by updating `tailwind.config.ts`:

```typescript
fontFamily: {
  satoshi: ["Inter", "system-ui", "-apple-system", "sans-serif"],
  sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
}
```

Then add Inter back in `app/layout.tsx`:
```typescript
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// Use className={inter.className} in body
```


