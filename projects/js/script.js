
        // Sample product data with images and longer descriptions
        const products = [
            {
                id: 1,
                title: "E-Commerce Website",
                description: "A complete e-commerce solution with shopping cart and payment integration. This project includes user authentication, product catalog, shopping cart, checkout process, and order management. Built with modern web technologies, it features a responsive design that works on all devices. The admin panel allows for easy management of products, orders, and customers. Perfect for small to medium businesses looking to establish an online presence.",
                price: 499,
                language: "PHP",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                title: "Inventory System",
                description: "Desktop application for inventory management with reporting features. This system helps businesses track stock levels, orders, sales, and deliveries. It can also be used to create work orders, bills of materials, and other production-related documents. The application includes barcode scanning capability for easy product identification and tracking. Advanced reporting features provide insights into sales trends, inventory turnover, and product performance.",
                price: 299,
                language: "C++",
                image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 3,
                title: "Student Management",
                description: "Web-based student information system with admin dashboard. This comprehensive system manages student records, attendance, grades, and scheduling. Teachers can input grades and attendance, while students can view their progress and schedules. Parents have access to their children's performance data. The admin dashboard provides analytics on student performance, attendance trends, and other key metrics. The system supports multiple user roles with appropriate permissions.",
                price: 399,
                language: "Java",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 4,
                title: "Banking Application",
                description: "Secure banking application with transaction processing. This application provides customers with 24/7 access to their accounts. Features include balance checking, fund transfers, bill payments, and transaction history. The system incorporates multi-layer security including encryption, two-factor authentication, and fraud detection algorithms. Administrative features allow bank staff to manage customer accounts, process requests, and generate financial reports.",
                price: 599,
                language: ".NET",
                image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 5,
                title: "Social Media App",
                description: "Mobile social media application with real-time updates. This app allows users to create profiles, share updates, photos, and videos, connect with friends, and join interest-based communities. Features include news feed, messaging, notifications, and live streaming. The application uses advanced algorithms to personalize content for each user. Built with cross-platform technology, it works seamlessly on both iOS and Android devices.",
                price: 699,
                language: "NS",
                image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 6,
                title: "Hotel Booking System",
                description: "Online reservation system for hotels with availability checking. This system allows customers to search for available rooms based on dates, view room details and amenities, and make reservations. Hotel administrators can manage room inventory, pricing, and promotions. The system includes payment processing integration and sends automatic confirmation emails to customers. Reporting features help hotel managers analyze occupancy rates and revenue.",
                price: 349,
                language: "PHP",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 7,
                title: "Game Development",
                description: "2D game with physics engine and multiple levels. This game features colorful graphics, smooth animations, and engaging gameplay. The physics engine provides realistic movement and interactions between game objects. Players progress through multiple levels of increasing difficulty, with boss battles at the end of each world. The game includes character customization, power-ups, and online leaderboards. Built with a popular game engine, it can be deployed to multiple platforms.",
                price: 549,
                language: "C++",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 8,
                title: "Weather App",
                description: "Real-time weather forecasting application with maps. This app provides current weather conditions and forecasts for locations worldwide. Features include interactive weather maps, severe weather alerts, and detailed hourly and 10-day forecasts. Users can save multiple locations and receive notifications for changing weather conditions. The app uses data from reliable meteorological sources and presents it in an easy-to-understand interface. The design is clean and intuitive, with customizable widgets for quick access to weather information.",
                price: 249,
                language: "Java",
                image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 9,
                title: "Fitness Tracker",
                description: "Mobile application for tracking fitness activities and health metrics. This app allows users to log workouts, track steps, monitor heart rate, and set fitness goals. It includes features like GPS tracking for runs and rides, calorie counting, and integration with popular health platforms. The app provides personalized recommendations based on user activity and goals. With a sleek interface and comprehensive analytics, it helps users stay motivated and achieve their fitness objectives.",
                price: 399,
                language: "Java",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            }
        ];

        // Function to render products
        function renderProducts(productsToRender) {
            const productsContainer = document.getElementById('products-container');
            productsContainer.innerHTML = '';
            
            if (productsToRender.length === 0) {
                productsContainer.innerHTML = '<p class="no-results">No products match your filters. Try adjusting your criteria.</p>';
                return;
            }
            
            productsToRender.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.style.animationDelay = `${index * 0.1}s`;
                
                // Create truncated description
                const truncatedDesc = product.description.length > 120 
                    ? product.description.substring(0, 120) + '...' 
                    : product.description;
                
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-details">
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-description">
                            <div class="description-text">${truncatedDesc}</div>
                            ${product.description.length > 120 ? 
                                `<button class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></button>
                                 <div class="full-description" style="display: none;">${product.description}</div>` 
                                : ''}
                        </div>
                        <div class="product-meta">
                            <div class="product-price">$${product.price}</div>
                            <div class="product-language">${product.language}</div>
                        </div>
                        <button class="enquiry-btn" data-id="${product.id}"><i class="fas fa-envelope"></i> Enquiry Now</button>
                    </div>
                `;
                
                productsContainer.appendChild(productCard);
                
                // Animate the card in
                setTimeout(() => {
                    productCard.classList.add('visible');
                }, 10);
            });
            
            // Add event listeners to enquiry buttons
            document.querySelectorAll('.enquiry-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    const product = products.find(p => p.id == productId);
                    
                    // Add animation effect to button
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                        alert(`Enquiry about: ${product.title}\nPrice: $${product.price}\nWe'll contact you shortly!`);
                    }, 200);
                });
            });
            
            // Add event listeners to read more buttons
            document.querySelectorAll('.read-more-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const descriptionText = this.previousElementSibling;
                    const fullDescription = this.nextElementSibling;
                    
                    if (fullDescription.style.display === 'none') {
                        descriptionText.style.display = 'none';
                        fullDescription.style.display = 'block';
                        this.innerHTML = 'Read less <i class="fas fa-arrow-up"></i>';
                    } else {
                        descriptionText.style.display = '-webkit-box';
                        fullDescription.style.display = 'none';
                        this.innerHTML = 'Read more <i class="fas fa-arrow-right"></i>';
                    }
                });
            });
        }
        
        // Function to apply filters
        function applyFilters() {
            const minPrice = parseInt(document.getElementById('min-price').value) || 0;
            const maxPrice = parseInt(document.getElementById('max-price').value) || Number.MAX_SAFE_INTEGER;
            
            const selectedLanguages = [];
            const allChecked = document.getElementById('lang-all').checked;
            
            if (allChecked) {
                // If "All" is checked, include all languages
                document.querySelectorAll('.lang-checkbox').forEach(checkbox => {
                    selectedLanguages.push(checkbox.value);
                });
            } else {
                // Otherwise, only include the checked languages
                document.querySelectorAll('.lang-checkbox:checked').forEach(checkbox => {
                    selectedLanguages.push(checkbox.value);
                });
            }
            
            const filteredProducts = products.filter(product => {
                return product.price >= minPrice && 
                       product.price <= maxPrice && 
                       selectedLanguages.includes(product.language);
            });
            
            renderProducts(filteredProducts);
        }
        
        // Function to handle "All" checkbox logic
        function setupLanguageFilter() {
            const allCheckbox = document.getElementById('lang-all');
            const langCheckboxes = document.querySelectorAll('.lang-checkbox');
            
            // When "All" is checked/unchecked
            allCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    // Check all language checkboxes
                    langCheckboxes.forEach(checkbox => {
                        checkbox.checked = true;
                    });
                }
                applyFilters();
            });
            
            // When individual language checkboxes change
            langCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    // If any language checkbox is unchecked, uncheck "All"
                    if (!this.checked) {
                        allCheckbox.checked = false;
                    }
                    
                    // If all language checkboxes are checked, check "All"
                    const allChecked = Array.from(langCheckboxes).every(cb => cb.checked);
                    allCheckbox.checked = allChecked;
                    
                    applyFilters();
                });
            });
        }
        
        // Initial render
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts(products);
            setupLanguageFilter();
            
            // Add event listeners to price inputs to apply filters on change
            document.getElementById('min-price').addEventListener('input', applyFilters);
            document.getElementById('max-price').addEventListener('input', applyFilters);
            
            // Callback button functionality
            document.querySelector('.callback-btn').addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    const name = prompt("Please enter your name:");
                    const phone = prompt("Please enter your phone number:");
                    
                    if (name && phone) {
                        alert(`Thank you ${name}! We will call you at ${phone} within 24 hours.`);
                    }
                }, 200);
            });
            
            // Add animation to hero elements
            setTimeout(() => {
                document.querySelectorAll('.feature').forEach((feature, index) => {
                    feature.style.animationDelay = `${0.6 + index * 0.2}s`;
                    feature.classList.add('visible');
                });
            }, 100);
        });
    