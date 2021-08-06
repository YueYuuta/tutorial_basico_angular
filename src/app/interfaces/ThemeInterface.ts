export interface Theme {
  name: string;
  properties: any;
}

export const defaultTheme: Theme = {
  name: 'defaultTheme',
  properties: {
    '--first-color-second': 'hsl(var(--hue-color), 69%, 61%)',
    '--title-color': 'hsl(var(--hue-color), 8%, 15%)',
    '--text-color': 'hsl(var(--hue-color), 8%, 45%)',
    '--input-color': 'hsl(var(--hue-color), 70%, 96%)',
    '--body-color': 'hsl(var(--hue-color), 60%, 99%)',
    '--scroll-bar-color': 'hsl(var(--hue-color), 12%, 90%)',
    '--scroll-thumb-color': 'hsl(var(--hue-color), 12%, 80%)',
    '--container-color': '#fff',
  },
};

export const light: Theme = {
  name: 'light',
  properties: {
    '--body-bg-color': '#DCDCDC',
    '--title-color': '#000080',
    '--button-bg-color': '#ADD8E6',
    '--button-border-color': '#ffffff',
    '--button-text-color': '#FFFFFF',
    '--magic-box-bg-color': '#ffffff',
    '--magic-box-text-color': '#483D8B',
  },
};

export const purple: Theme = {
  name: 'purple',
  properties: {
    '--hue-color': '250',
  },
};

export const green: Theme = {
  name: 'green',
  properties: {
    '--hue-color': '142',
  },
};

export const pink: Theme = {
  name: 'pink',
  properties: {
    '--hue-color': '340',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--first-color-second': 'hsl(var(--hue-color), 30%, 8%)',
    '--title-color': 'hsl(var(--hue-color), 8%, 95%)',
    '--text-color': 'hsl(var(--hue-color), 8%, 75%)',
    '--input-color': 'hsl(var(--hue-color), 29%, 16%)',
    '--body-color': 'hsl(var(--hue-color), 28%, 12%)',
    '--container-color': 'hsl(var(--hue-color), 29%, 16%)',
    '--scroll-bar-color': 'hsl(var(--hue-color), 12%, 48%)',
    '--scroll-thumb-color': 'hsl(var(--hue-color), 12%, 36%)',
  },
};
