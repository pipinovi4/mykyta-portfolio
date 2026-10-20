export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "portfolio-theme";

// Apply the saved preference before paint; first-time visitors always get dark.
export const themeInitializationScript = `(() => {
  let theme = "dark";
  try {
    if (localStorage.getItem("${THEME_STORAGE_KEY}") === "light") theme = "light";
  } catch {}
  document.documentElement.dataset.theme = theme;
})();`;
