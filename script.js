// Scientific Repository Script
// Metadata and citation helper
document.addEventListener('DOMContentLoaded', function() {
  // Add copy-to-clipboard for citation
  const codeEl = document.querySelector('code');
  if (codeEl) {
    codeEl.style.cursor = 'pointer';
    codeEl.title = 'Click to copy citation';
    codeEl.addEventListener('click', function() {
      navigator.clipboard.writeText(codeEl.textContent).then(() => {
        const orig = codeEl.textContent;
        codeEl.textContent = '✅ Copied to clipboard!';
        setTimeout(() => { codeEl.textContent = orig; }, 2000);
      });
    });
  }
  
  // Track page view (privacy-friendly, no external calls)
  console.log('Dataset page loaded: Longitudinal dataset (2000-2025) on digital technology adoption indicators across 21 Latin American and Iberian countries. Variables: internet penetration, mobile subscriptions, smartphone adoption, social media usage, e-commerce, digital payments, A');
  console.log('Author: Juan Moisés de la Serna Tuya | ORCID: https://orcid.org/0000-0002-8401-8018');
});
