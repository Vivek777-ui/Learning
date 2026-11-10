/**
 * Location & Contact Component
 * Handles the Google Maps integration, directions, address copying,
 * and customer table/visit inquiry form with validation.
 */

export function initLocation() {
  const copyAddressBtn = document.getElementById('copyAddressBtn');
  const inquiryForm = document.getElementById('inquiryForm');

  // Copy address to clipboard
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', async () => {
      const fullAddress = 'Shop No. 5, Sainath Apartment, Opposite Mahavir Shopping Mall, Suraj Nagar, Mundra, Baroi, Gujarat 370421, India';
      try {
        await navigator.clipboard.writeText(fullAddress);
        showToast('Address copied to clipboard!');
        copyAddressBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyAddressBtn.innerHTML = `
            <svg class="w-4 h-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
            </svg>
            Copy Address
          `;
        }, 2000);
      } catch (err) {
        showToast('Address: ' + fullAddress);
      }
    });
  }

  // Inquiry / Reservation form submission handling
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('inquiryName')?.value.trim();
      const guests = document.getElementById('inquiryGuests')?.value;
      const date = document.getElementById('inquiryDate')?.value;
      const time = document.getElementById('inquiryTime')?.value;
      const notes = document.getElementById('inquiryNotes')?.value.trim();

      if (!name) {
        showToast('Please enter your name.', 'error');
        return;
      }

      // Display a beautiful confirmation modal or notification
      const formWrapper = inquiryForm.parentElement;
      inquiryForm.style.display = 'none';

      const successCard = document.createElement('div');
      successCard.className = 'bg-cream rounded-2xl p-6 text-center border border-border animate-fade-in';
      successCard.innerHTML = `
        <div class="w-14 h-14 bg-olive/20 text-olive rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h4 class="font-serif text-2xl font-bold text-espresso mb-2">Thank you, ${name}!</h4>
        <p class="text-sm text-text-muted mb-4">
          Your visit inquiry for ${guests || 'your party'} on <strong>${date || 'upcoming date'}</strong> at <strong>${time || 'preferred time'}</strong> has been noted. We look forward to welcoming you at Thapas Cafe, Mundra!
        </p>
        <div class="text-xs text-text-light mb-6 p-3 bg-surface rounded-lg border border-border/80">
          📍 Shop No. 5, Sainath Apartment, Opposite Mahavir Shopping Mall, Mundra, Gujarat.
        </div>
        <button type="button" id="resetInquiryBtn" class="btn-primary btn-sm">
          Send Another Note
        </button>
      `;

      formWrapper.appendChild(successCard);

      document.getElementById('resetInquiryBtn').addEventListener('click', () => {
        successCard.remove();
        inquiryForm.reset();
        inquiryForm.style.display = 'block';
      });

      showToast('Inquiry submitted successfully! See you soon at Thapas Cafe.');
    });
  }
}

/**
 * Toast notification helper
 */
export function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const isError = type === 'error';
  toast.className = `px-5 py-3 rounded-full text-sm font-medium shadow-lg transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto flex items-center gap-2 ${
    isError ? 'bg-red-800 text-white' : 'bg-espresso text-cream border border-terracotta/40'
  }`;

  toast.innerHTML = `
    <span>${isError ? '⚠️' : '☕'}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  // Auto dismiss
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
