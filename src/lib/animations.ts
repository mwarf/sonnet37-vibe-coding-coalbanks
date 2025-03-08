import type { Variants } from "framer-motion";
import { prefersReducedMotion } from "./utils";

/**
 * Animation constants
 */
export const ANIMATION_DURATION = {
  fast: 0.2,
  medium: 0.5,
  slow: 0.8,
};

export const ANIMATION_EASE = {
  gentle: [0.4, 0.0, 0.2, 1],
  bounce: [0.43, 0.13, 0.23, 0.96],
  anticipate: [0.43, 0.13, 0.23, 0.96],
};

/**
 * Fade in animation variants
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASE.gentle,
    },
  },
};

/**
 * Fade in up animation variants
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASE.gentle,
    },
  },
};

/**
 * Fade in down animation variants
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASE.gentle,
    },
  },
};

/**
 * Staggered children animation variants
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Scale animation variants
 */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASE.bounce,
    },
  },
};

/**
 * Slide in from right animation variants
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASE.gentle,
    },
  },
};

/**
 * Slide in from left animation variants
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASE.gentle,
    },
  },
};

/**
 * Page transition variants
 */
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: ANIMATION_EASE.gentle,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: ANIMATION_EASE.gentle,
    },
  },
};

/**
 * Hover scale animation for interactive elements
 */
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: ANIMATION_EASE.gentle,
  },
};

/**
 * Tap scale animation for interactive elements
 */
export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: ANIMATION_EASE.gentle,
  },
};

/**
 * Creates staggered animation variants with custom settings
 * @param delay - Delay between children animations
 * @param childVariants - Animation variants for children
 * @returns Staggered animation variants
 */
export function createStaggeredAnimation(
  delay: number = 0.1,
  childVariants: Variants = fadeInUp
): {
  container: Variants;
  item: Variants;
} {
  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: delay,
          delayChildren: delay,
        },
      },
    },
    item: childVariants,
  };
}

/**
 * Returns appropriate animation settings based on user's motion preferences
 * @param animationVariants - Original animation variants
 * @returns Animation variants respecting user preferences
 */
export function getAccessibleAnimationVariants(
  animationVariants: Variants
): Variants {
  if (prefersReducedMotion()) {
    // Simplified animations for users who prefer reduced motion
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }
  return animationVariants;
}

/**
 * Scroll animation variants
 */
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASE.gentle,
    },
  },
};

/**
 * Video player animation variants
 */
export const videoPlayerAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASE.gentle,
    },
  },
};
