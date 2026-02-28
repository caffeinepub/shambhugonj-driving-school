/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Bengali"', '"Hind Siliguri"', 'Inter', 'sans-serif'],
        bengali: ['"Noto Sans Bengali"', '"Hind Siliguri"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        /* Navy Blue palette */
        'navy-darkest':  'oklch(0.14 0.055 240)',
        'navy-dark':     'oklch(0.18 0.065 240)',
        'navy-mid':      'oklch(0.24 0.070 240)',
        'navy-light':    'oklch(0.32 0.065 240)',
        'navy-pale':     'oklch(0.42 0.055 240)',

        /* Cream palette */
        'cream-deep':    'oklch(0.88 0.025 85)',
        'cream-mid':     'oklch(0.93 0.018 85)',
        'cream-light':   'oklch(0.96 0.012 85)',
        'cream-white':   'oklch(0.98 0.008 85)',

        /* Gold accent */
        'gold':          'oklch(0.78 0.12 75)',
        'gold-light':    'oklch(0.86 0.10 75)',
        'gold-dark':     'oklch(0.65 0.13 75)',

        /* Semantic tokens */
        background:      'var(--background)',
        foreground:      'var(--foreground)',
        border:          'var(--border)',
        input:           'var(--input)',
        ring:            'var(--ring)',
        card: {
          DEFAULT:       'var(--card)',
          foreground:    'var(--card-foreground)',
        },
        primary: {
          DEFAULT:       'var(--primary)',
          foreground:    'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT:       'var(--secondary)',
          foreground:    'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT:       'var(--muted)',
          foreground:    'var(--muted-foreground)',
        },
        accent: {
          DEFAULT:       'var(--accent)',
          foreground:    'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT:       'var(--destructive)',
          foreground:    'var(--destructive-foreground)',
        },
        popover: {
          DEFAULT:       'var(--popover)',
          foreground:    'var(--popover-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        navy:       '0 4px 16px oklch(0.18 0.065 240 / 0.18)',
        'navy-md':  '0 4px 20px oklch(0.18 0.065 240 / 0.22)',
        'navy-lg':  '0 8px 32px oklch(0.18 0.065 240 / 0.28)',
        card:       '0 2px 8px oklch(0.18 0.065 240 / 0.08)',
        'card-hover': '0 6px 20px oklch(0.18 0.065 240 / 0.16)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
