// ButtonStyles.ts
import { tv } from 'tailwind-variants';

export const baseButton = tv({
  base: 'text-center relative font-semibold whitespace-nowrap align-middle outline-none inline-flex items-center justify-center select-none',
  variants: {
    size: {
      xs: 'text-xs py-1 px-2', // 12 pixels
      md: 'text-sm py-2 px-4', // 14 pixels
      lg: 'text-base py-3 px-6', // 16 pixels
   

    },
    color: {
      transparent: 'bg-transparent',
      darkGray: 'bg-[#121212] text-white',
      white: 'bg-white text-black'
    },
    rounded: {
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      full: 'rounded-full'
    },
  },
  
});
