/**
 * IMPORTANTE PARA A IA / DESENVOLVEDOR:
 * Este tema utiliza a fonte "Plus Jakarta Sans". Certifique-se de adicionar a fonte no `<head>` do `index.html` via Google Fonts:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 * <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
 */

import {
  Button,
  Card,
  createTheme,
  PasswordInput,
  rem,
  TextInput,
  Select,
  virtualColor,
} from "@mantine/core";

export const mantineTheme = createTheme({
  primaryColor: "blue",
  primaryShade: 6,
  colors: {
    secondary: virtualColor({
      name: "secondary",
      dark: "orange",
      light: "orange",
    }),
  },
  fontFamily: "Plus Jakarta Sans, sans-serif",
  headings: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    sizes: {
      h1: { fontSize: rem("26px"), lineHeight: "1.3" }, // h1 with mantine original h2 size
      h2: { fontSize: rem("22px"), lineHeight: "1.35" }, // h2 with mantine original h3 size
      h3: { fontSize: rem("18px"), lineHeight: "1.4" }, // h3 with mantine original h4 size
    },
  },
  spacing: {
    xs: rem("10px"), // mantine default
    sm: rem("12px"), // mantine default
    md: rem("16px"), // mantine default
    lg: rem("20px"), // mantine default
    xl: rem("24px"), // smaller than mantine default (32px)
  },
  defaultRadius: "lg",
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "md",
      },
    }),
    Card: Card.extend({
      defaultProps: {
        padding: "lg",
        withBorder: true,
        shadow: "sm",
      },
      styles: {
        root: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--mantine-spacing-lg)",
        },
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "md",
      },
      styles: {
        label: {
          marginBottom: "var(--mantine-spacing-xs)",
        },
      },
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: {
        size: "md",
      },
      styles: {
        label: {
          marginBottom: "var(--mantine-spacing-xs)",
        },
      },
    }),
    Select: Select.extend({
      defaultProps: {
        size: "md",
      },
      styles: {
        label: {
          marginBottom: "var(--mantine-spacing-xs)",
        },
      },
    }),
    Stack: {
      defaultProps: {
        gap: "lg",
      },
    },
    Group: {
      defaultProps: {
        gap: "lg",
      },
    },
  },
});
