export const icons = [
    "chrome",
    "mobile",
    "desktop",
  ] as const;
  
  export type Icon = (typeof icons)[number];