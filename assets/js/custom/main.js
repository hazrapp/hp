function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme');
  const lightThemeLink = document.getElementById('light-theme');
  const darkThemeLink = document.getElementById('dark-theme');

  if (currentTheme === 'theme-light') {
    htmlElement.setAttribute('data-theme', 'theme-dark');
    lightThemeLink.disabled = true;
    darkThemeLink.disabled = false;
  } else {
    htmlElement.setAttribute('data-theme', 'theme-light');
    lightThemeLink.disabled = false;
    darkThemeLink.disabled = true;
  }

  updateLogo();
}

function updateLogo() {
  const hpLogo = document.getElementById('hp-logo');
  const hpLogoResp = document.getElementById('hp-logo-resp');
  const theme = document.documentElement.getAttribute('data-theme');

  if (theme === 'theme-light') {
    hpLogo.src = './assets/images/HP-Imagine-Logo-Official-RGB-01.svg';
    hpLogoResp.src = './assets/images/HP-Imagine-Logo-Official-RGB-01.svg';
  } else if (theme === 'theme-dark') {
    hpLogo.src = './assets/images/HP-Imagine-Logo-Official-RGB-04.svg';
    hpLogoResp.src = './assets/images/HP-Imagine-Logo-Official-RGB-04.svg';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Initial call to set the correct logo based on the current theme
  updateLogo();
});
