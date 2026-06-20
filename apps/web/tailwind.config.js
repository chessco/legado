export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
              "tertiary": "#000000",
              "error": "#ba1a1a",
              "ink-text": "#0A192F",
              "primary-fixed-dim": "#b9c7e4",
              "on-primary": "#ffffff",
              "on-tertiary": "#ffffff",
              "outline": "#75777e",
              "tertiary-fixed-dim": "#e7bf99",
              "secondary-container": "#fed65b",
              "primary-container": "#0d1c32",
              "secondary": "#735c00",
              "on-primary-fixed-variant": "#39475f",
              "on-primary-container": "#76849f",
              "on-secondary": "#ffffff",
              "outline-variant": "#c5c6cd",
              "surface-container": "#eeeeee",
              "surface-bright": "#f9f9f9",
              "secondary-fixed": "#ffe088",
              "on-error": "#ffffff",
              "on-surface": "#1a1c1c",
              "surface-variant": "#e2e2e2",
              "on-error-container": "#93000a",
              "on-secondary-container": "#745c00",
              "background": "#f9f9f9",
              "on-tertiary-fixed": "#2b1701",
              "primary": "#000000",
              "surface-container-low": "#f3f3f3",
              "on-primary-fixed": "#0d1c32",
              "muted-ink": "#4B5563",
              "on-tertiary-container": "#9f7d5b",
              "inverse-primary": "#b9c7e4",
              "surface-container-lowest": "#ffffff",
              "on-secondary-fixed-variant": "#574500",
              "on-secondary-fixed": "#241a00",
              "error-container": "#ffdad6",
              "surface-container-high": "#e8e8e8",
              "primary-fixed": "#d6e3ff",
              "paper-surface": "#FAFAFA",
              "surface": "#f9f9f9",
              "tertiary-fixed": "#ffdcbd",
              "on-tertiary-fixed-variant": "#5d4124",
              "surface-dim": "#dadada",
              "heritage-gold": "#D4AF37",
              "border-subtle": "#E5E7EB",
              "on-background": "#1a1c1c",
              "tertiary-container": "#2b1701",
              "inverse-surface": "#2f3131",
              "surface-container-highest": "#e2e2e2",
              "inverse-on-surface": "#f0f1f1",
              "surface-tint": "#515f78",
              "secondary-fixed-dim": "#e9c349",
              "on-surface-variant": "#44474d"
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
      },
      "spacing": {
              "stack-md": "1.5rem",
              "stack-lg": "4rem",
              "margin-mobile": "1rem",
              "container-max": "1200px",
              "stack-sm": "0.5rem",
              "gutter": "2rem"
      },
      "fontFamily": {
              "label-md": [
                      "Inter"
              ],
              "headline-lg": [
                      "\"Source Serif 4\""
              ],
              "headline-xl-mobile": [
                      "\"Source Serif 4\""
              ],
              "headline-xl": [
                      "\"Source Serif 4\""
              ],
              "label-sm": [
                      "Inter"
              ],
              "body-md": [
                      "Inter"
              ],
              "body-lg": [
                      "Inter"
              ],
              "headline-md": [
                      "\"Source Serif 4\""
              ]
      },
      "fontSize": {
              "label-md": [
                      "14px",
                      {
                              "lineHeight": "1.4",
                              "letterSpacing": "0.01em",
                              "fontWeight": "500"
                      }
              ],
              "headline-lg": [
                      "32px",
                      {
                              "lineHeight": "1.2",
                              "fontWeight": "600"
                      }
              ],
              "headline-xl-mobile": [
                      "32px",
                      {
                              "lineHeight": "1.2",
                              "fontWeight": "600"
                      }
              ],
              "headline-xl": [
                      "48px",
                      {
                              "lineHeight": "1.1",
                              "letterSpacing": "-0.02em",
                              "fontWeight": "600"
                      }
              ],
              "label-sm": [
                      "12px",
                      {
                              "lineHeight": "1.4",
                              "letterSpacing": "0.05em",
                              "fontWeight": "600"
                      }
              ],
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "1.6",
                              "fontWeight": "400"
                      }
              ],
              "body-lg": [
                      "18px",
                      {
                              "lineHeight": "1.6",
                              "fontWeight": "400"
                      }
              ],
              "headline-md": [
                      "24px",
                      {
                              "lineHeight": "1.3",
                              "fontWeight": "500"
                      }
              ]
      }
    }
  }
}
