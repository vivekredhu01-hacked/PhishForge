# React Bits UI Integration

This project now includes React Bits UI components for enhanced animations and visual effects.

## Installed Components

The following React Bits-style components have been added to `components/react-bits/`:

1. **GradientText** - Text with gradient colors (purple, cyan, rainbow variants)
2. **ShineText** - Animated shining text effect
3. **AnimatedText** - GSAP-powered animated text entrance
4. **GlowButton** - Button with glowing shadow effects

## Usage Examples

### GradientText

```tsx
import { GradientText } from "@/components/react-bits";

<GradientText gradient="purple" className="text-4xl">
  Your Text Here
</GradientText>
```

Gradients available: `purple`, `cyan`, `rainbow`

### ShineText

```tsx
import { ShineText } from "@/components/react-bits";

<ShineText className="text-3xl">
  Shining Text Effect
</ShineText>
```

### GlowButton

```tsx
import { GlowButton } from "@/components/react-bits";

<GlowButton glowColor="purple" size="lg">
  Click Me
</GlowButton>
```

Glow colors available: `purple`, `cyan`, `pink`

### AnimatedText

```tsx
import { AnimatedText } from "@/components/react-bits";

<AnimatedText delay={0.2} duration={0.8}>
  Animated Text
</AnimatedText>
```

## Installing More React Bits Components

To install additional React Bits components from their official library:

### Using jsrepo (Recommended)

Since you're using TypeScript with Tailwind CSS, use the `ts/tailwind` variant:

```bash
npx jsrepo add https://reactbits.dev/ts/tailwind/TextAnimations/SplitText
npx jsrepo add https://reactbits.dev/ts/tailwind/TextAnimations/TypingText
npx jsrepo add https://reactbits.dev/ts/tailwind/Effects/GradientBackground
```

### Using shadcn CLI

```bash
npx shadcn@latest add https://reactbits.dev/r/SplitText-TS-TW
npx shadcn@latest add https://reactbits.dev/r/TypingText-TS-TW
```

### Browse Available Components

Visit [https://reactbits.dev/](https://reactbits.dev/) to browse all available components and their installation instructions.

## Current Implementation

The landing page currently uses:
- `GradientText` in the hero section title
- `ShineText` in the "Problem Section" title

You can add more React Bits components throughout the page as needed!

