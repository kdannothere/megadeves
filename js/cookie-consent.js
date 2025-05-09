// Function to store cookie consent in localStorage
function storeCookieConsent(value = "agreed") {
  // Store consent status
  localStorage.setItem("cookieConsent", JSON.stringify(value));
  // Hide cookie banner
  const cookieBanner = document.getElementById("cookie-consent");
  cookieBanner.classList.add("hidden");
}

// Function to get cookie consent from localStorage
function getCookieConsent() {
  const storedConsent = localStorage.getItem("cookieConsent");
  return storedConsent ? JSON.parse(storedConsent) : "";
}

// Check for cookie consent on page load
document.addEventListener("DOMContentLoaded", () => {
  const consentStatus = getCookieConsent();

  // Show or hide cookie banner based on consent status
  const cookieBanner = document.getElementById("cookie-consent");
  const acceptCookiesButton = document.getElementById("accept-cookies");
  if (consentStatus === "agreed") {
    cookieBanner.classList.add("hidden");
  } else {
    cookieBanner.classList.remove("hidden");
    acceptCookiesButton.addEventListener("click", () => storeCookieConsent());
  }
});
