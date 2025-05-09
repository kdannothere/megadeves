// show and hide message banner on contact page

function showContactMessageBanner() {
  const contactMessageBanner = document.getElementById("contact-message");
  contactMessageBanner.classList.remove("hidden");
}

function hideContactMessageBanner() {
	// hide banner
  const contactMessageBanner = document.getElementById("contact-message");
  contactMessageBanner.classList.add("hidden");
	// reset form fields
  const contactForm = document.getElementById("contact-form");
	contactForm.reset();
}

const contactSendButton = document.getElementById("contact-send-button");
contactSendButton.addEventListener("click", () => showContactMessageBanner());

const contactCloseMessageButton = document.getElementById(
  "contact-message-button"
);
contactCloseMessageButton.addEventListener("click", () =>
  hideContactMessageBanner()
);
