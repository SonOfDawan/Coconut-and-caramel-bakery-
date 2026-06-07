
(function () {
    const btn = document.getElementById('see-more-btn');
     if (!btn) return;
     btn.addEventListener('click', function () {
     const href = this.dataset.href || 'create-account.html';
     window.location.href = href;
    });
 })();
