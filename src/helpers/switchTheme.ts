const bodyClassList = document.body.classList;

export const switchTheme = (darkTheme: boolean) => {
  if (darkTheme) bodyClassList.add('dark');
  else bodyClassList.remove('dark');
};

export const defaultTheme = () => {
  const defaultDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  switchTheme(defaultDark);
};