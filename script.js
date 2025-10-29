// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark mode toggle with persistence
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.classList.add('dark');
    }
    toggle.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggle.textContent = isDark ? '☀️' : '🌙';
    });
});

// Basic contact form handler (no backend; prevent default)
document.addEventListener('submit', function(e) {
    const form = e.target.closest('#contact-form');
    if (!form) return;
    e.preventDefault();

    const name = (form.querySelector('input[name="name"]').value || '').trim();
    const email = (form.querySelector('input[name="email"]').value || '').trim();
    const message = (form.querySelector('textarea[name="message"]').value || '').trim();

    const recipient = form.getAttribute('data-recipient') || 'kiran7028@gmail.com';
    const subject = `Portfolio Contact: ${name || 'New Message'}`;
    const lines = [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
        '',
        `Sent from portfolio site on ${new Date().toLocaleString()}`
    ];
    const body = encodeURIComponent(lines.join('\n'));
    const href = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open the user's email client with prefilled details
    window.location.href = href;

    // Optional UX: confirm and reset
    setTimeout(() => { form.reset(); }, 300);
});

// Simple blog category filter
document.addEventListener('DOMContentLoaded', function() {
    const chipRow = document.querySelector('.chip-row');
    const articles = document.querySelectorAll('.article-card');
    if (!chipRow || !articles.length) return;

    chipRow.addEventListener('click', function(e) {
        const target = e.target.closest('.chip');
        if (!target) return;
        e.preventDefault();

        chipRow.querySelectorAll('.chip').forEach(chip => chip.classList.remove('is-active'));
        target.classList.add('is-active');

        const category = target.getAttribute('data-category');
        articles.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            const show = category === 'all' || category === cardCat;
            card.style.display = show ? '' : 'none';
        });
    });
});
