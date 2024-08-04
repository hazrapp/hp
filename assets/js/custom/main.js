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




// 
document.addEventListener('DOMContentLoaded', function() {
  const htmlElement = document.documentElement; // <html> element
  const headerSvg = document.querySelector('.header-svg'); // <div> with class 'header-svg'
  const hpLogoHeader = document.getElementById('hp-logo-header');
  const headerLogoText = document.querySelector('.header-logo-text');

  // Function to update background image based on the theme
  function updateBackgroundImage() {
      const theme = htmlElement.getAttribute('data-theme');
      if (theme === 'theme-dark') {
          headerSvg.style.backgroundImage = 'var(--header-bg-dark)';
          hpLogoHeader.src = "./assets/images/HP white.svg";
          headerLogoText.style.color= '#fff'
      } else if (theme === 'theme-light') {
          headerSvg.style.backgroundImage = 'var(--header-bg-light)';
          hpLogoHeader.src = "./assets/images/imagine hp.svg";
          headerLogoText.style.color= 'black'
      }
  }

  // Call the function to set the initial background image
  updateBackgroundImage();

  // Optional: You could also set up an observer if the theme changes dynamically
  // (e.g., if the data-theme attribute changes at runtime)
  const observer = new MutationObserver(updateBackgroundImage);
  observer.observe(htmlElement, { attributes: true, attributeFilter: ['data-theme'] });
});
