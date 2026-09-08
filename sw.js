self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // PWA ইন্সটল করার জন্য এই ফাঁকা ফাংশনটি থাকা বাধ্যতামূলক
});