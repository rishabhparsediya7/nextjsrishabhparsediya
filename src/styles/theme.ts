export const theme = {
  colors: {
    primary: {
      light: "#3B82F6", // blue-500
      dark: "#60A5FA", // blue-400
    },
    secondary: {
      light: "#6B7280", // gray-500
      dark: "#9CA3AF", // gray-400
    },
    background: {
      primary: {
        light: "#FFFFFF",
        dark: "#111827", // gray-900
      },
      secondary: {
        light: "#F3F4F6", // gray-100
        dark: "#1F2937", // gray-800
      },
      accent: {
        light: "#EEF2FF", // indigo-50
        dark: "#312E81", // indigo-900
      },
    },
    text: {
      primary: {
        light: "#111827", // gray-900
        dark: "#F9FAFB", // gray-50
      },
      secondary: {
        light: "#4B5563", // gray-600
        dark: "#D1D5DB", // gray-300
      },
      accent: {
        light: "#3B82F6", // blue-500
        dark: "#60A5FA", // blue-400
      },
    },
    border: {
      light: "#E5E7EB", // gray-200
      dark: "#374151", // gray-700
    },
    error: {
      light: "#EF4444", // red-500
      dark: "#F87171", // red-400
    },
    success: {
      light: "#10B981", // green-500
      dark: "#34D399", // green-400
    },
    warning: {
      light: "#F59E0B", // amber-500
      dark: "#FBBF24", // amber-400
    },
  },
  typography: {
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  transitions: {
    default: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "100ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  zIndices: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
  },
} as const;

// Utility type to get nested keys from theme
type ThemeKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? `${string & K}.${string & ThemeKeys<T[K]>}`
    : K;
}[keyof T];

// Export type for theme values
export type ThemeValue = ThemeKeys<typeof theme>;

// Helper function to get value from theme using dot notation
export function getThemeValue(path: ThemeValue) {
  return path.split(".").reduce((obj, key) => obj[key], theme as any);
}
