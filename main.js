document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navigation Menu
    const navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('.nav');
    nav.parentNode.insertBefore(navToggle, nav);
    
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            navToggle.querySelector('i').className = 'fas fa-times';
        } else {
            navToggle.querySelector('i').className = 'fas fa-bars';
        }
    });
    
    // Add scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Initialize lightbox for gallery
    const galleryZoomLinks = document.querySelectorAll('.gallery-zoom');
    if (galleryZoomLinks.length > 0) {
        galleryZoomLinks.forEach(link => {
            if (link.getAttribute('href').match(/\.(jpeg|jpg|gif|png)$/) != null) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const lightbox = document.createElement('div');
                    lightbox.className = 'lightbox';
                    lightbox.innerHTML = `
                        <div class="lightbox-content">
                            <img src="${this.getAttribute('href')}" alt="Gallery Image">
                            <button class="lightbox-close"><i class="fas fa-times"></i></button>
                        </div>
                    `;
                    
                    document.body.appendChild(lightbox);
                    document.body.style.overflow = 'hidden';
                    
                    lightbox.addEventListener('click', function(e) {
                        if (e.target === lightbox || e.target.className === 'lightbox-close' || e.target.parentNode.className === 'lightbox-close') {
                            lightbox.remove();
                            document.body.style.overflow = '';
                        }
                    });
                });
            }
        });
    }
});
// Tambahkan kode ini pada file main.js

// Handle active tab on informasi.html
if (window.location.pathname.includes('informasi.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    
    // Check if there's a tab parameter or stored tab
    if (tabParam) {
        openTab(tabParam);
    } else {
        const storedTab = localStorage.getItem('activeTab');
        if (storedTab) {
            openTab(storedTab);
            localStorage.removeItem('activeTab');
        }
    }
}

// Modifikasi fungsi openTab di informasi.html
function openTab(tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Remove active class from all tablinks
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show the specific tab content
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.classList.add("active");
        
        // Add active class to the button that should be active
        const tabButton = document.querySelector(`.tablink[onclick="openTab('${tabName}')"]`);
        if (tabButton) {
            tabButton.classList.add("active");
        }
    }
}