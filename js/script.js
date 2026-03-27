// ========== COMPLETE MENU DATABASE WITH IMAGES ==========
const menuItems = [
  // VEG BURGERS
  { 
    id: 1, 
    name: "Veg Supreme Burger", 
    price: 149, 
    category: "veg", 
    img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&auto=format",
    description: "Loaded with fresh veggies, cheese, and special sauce"
  },
  { 
    id: 2, 
    name: "Paneer Tikka Burger", 
    price: 169, 
    category: "veg", 
    img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&auto=format",
    description: "Grilled paneer tikka with mint mayo"
  },
  { 
    id: 3, 
    name: "Crispy Veg Burger", 
    price: 129, 
    category: "veg", 
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&auto=format",
    description: "Crispy veg patty with lettuce and tomato"
  },
  { 
    id: 4, 
    name: "Mushroom Swiss Burger", 
    price: 179, 
    category: "veg", 
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&auto=format",
    description: "Sautéed mushrooms with swiss cheese"
  },
  { 
    id: 5, 
    name: "Cheese Explosion", 
    price: 159, 
    category: "veg", 
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format",
    description: "Double cheese, extra cheesy delight"
  },
  
  // CHICKEN BURGERS
  { 
    id: 6, 
    name: "Chicken Classic", 
    price: 189, 
    category: "chicken", 
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format",
    description: "Grilled chicken breast with fresh lettuce"
  },
  { 
    id: 7, 
    name: "Spicy Chicken Blast", 
    price: 219, 
    category: "chicken", 
    img: "https://images.unsplash.com/photo-1553979459-d2229ba743c6?w=400&auto=format",
    description: "Spicy crispy chicken with jalapeños"
  },
  { 
    id: 8, 
    name: "Grilled Chicken Burger", 
    price: 199, 
    category: "chicken", 
    img: "https://images.unsplash.com/photo-1550547660-d9450f859941?w=400&auto=format",
    description: "Herb-grilled chicken with garlic aioli"
  },
  { 
    id: 9, 
    name: "Crispy Chicken Deluxe", 
    price: 209, 
    category: "chicken", 
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format",
    description: "Crispy fried chicken with bacon"
  },
  { 
    id: 10, 
    name: "BBQ Chicken Burger", 
    price: 229, 
    category: "chicken", 
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&auto=format",
    description: "Tangy BBQ sauce with caramelized onions"
  },
  
  // COMBOS
  { 
    id: 11, 
    name: "Double Patty Combo", 
    price: 349, 
    category: "combos", 
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&auto=format",
    description: "2 patties + fries + soft drink"
  },
  { 
    id: 12, 
    name: "Family Feast", 
    price: 899, 
    category: "combos", 
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&auto=format",
    description: "4 burgers + 2 large fries + 4 drinks"
  },
  { 
    id: 13, 
    name: "Spicy Chicken Combo", 
    price: 399, 
    category: "combos", 
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&auto=format",
    description: "Spicy chicken burger + fries + drink"
  },
  { 
    id: 14, 
    name: "Veg Lover's Combo", 
    price: 299, 
    category: "combos", 
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format",
    description: "Veg burger + onion rings + shake"
  },
  { 
    id: 15, 
    name: "Date Night Special", 
    price: 549, 
    category: "combos", 
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format",
    description: "2 gourmet burgers + fries + 2 drinks + dessert"
  },
  
  // DRINKS
  { 
    id: 16, 
    name: "Fresh Lime Soda", 
    price: 79, 
    category: "drinks", 
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format",
    description: "Refreshing lime soda (sweet/salt)"
  },
  { 
    id: 17, 
    name: "Thick Chocolate Shake", 
    price: 149, 
    category: "drinks", 
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format",
    description: "Rich chocolate milkshake with cream"
  },
  { 
    id: 18, 
    name: "Strawberry Shake", 
    price: 149, 
    category: "drinks", 
    img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&auto=format",
    description: "Fresh strawberry milkshake"
  },
  { 
    id: 19, 
    name: "Cold Coffee", 
    price: 129, 
    category: "drinks", 
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&auto=format",
    description: "Chilled coffee with ice cream"
  },
  { 
    id: 20, 
    name: "Soft Drinks", 
    price: 59, 
    category: "drinks", 
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&auto=format",
    description: "Coke, Sprite, Fanta (330ml)"
  }
];

// Featured items for homepage
const featuredItems = menuItems.slice(0, 4);
const comboOffers = menuItems.filter(item => item.category === "combos").slice(0, 3);

// ========== CART MANAGEMENT ==========
let cart = JSON.parse(localStorage.getItem('burgerCart')) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('burgerCart', JSON.stringify(cart));
  updateCartCount();
}

// Update cart count in navigation
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElements = document.querySelectorAll('#cartCountNav');
  cartCountElements.forEach(el => {
    if (el) el.textContent = totalItems;
  });
}

// Add item to cart
function addToCart(itemId, itemName, itemPrice, itemImg) {
  const existingItem = cart.find(item => item.id === itemId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: itemId,
      name: itemName,
      price: itemPrice,
      img: itemImg,
      quantity: 1
    });
  }
  
  saveCart();
  showNotification(`${itemName} added to cart!`, 'success');
}

// Remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCart();
  if (window.location.pathname.includes('cart.html')) {
    displayCartItems();
  }
}

// Update item quantity
function updateQuantity(itemId, newQuantity) {
  const item = cart.find(item => item.id === itemId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      item.quantity = newQuantity;
      saveCart();
    }
  }
  if (window.location.pathname.includes('cart.html')) {
    displayCartItems();
  }
}

// Show notification
function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ========== DISPLAY MENU ITEMS ==========
function displayMenuItems(category = 'all') {
  const container = document.getElementById('menuItemsContainer');
  if (!container) return;
  
  let filteredItems = menuItems;
  if (category !== 'all') {
    filteredItems = menuItems.filter(item => item.category === category);
  }
  
  container.innerHTML = filteredItems.map(item => `
    <div class="product-card">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Burger'">
      <h3>${item.name}</h3>
      <p class="item-description">${item.description}</p>
      <div class="price">₹${item.price}</div>
      <button class="add-to-cart" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.img}')">
        <i class="fas fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  `).join('');
}

// Display featured items on homepage
function displayFeaturedItems() {
  const container = document.getElementById('featuredGrid');
  if (!container) return;
  
  container.innerHTML = featuredItems.map(item => `
    <div class="product-card">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Burger'">
      <h3>${item.name}</h3>
      <p class="item-description">${item.description}</p>
      <div class="price">₹${item.price}</div>
      <button class="add-to-cart" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.img}')">
        <i class="fas fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  `).join('');
}

// Display combo offers on homepage
function displayComboOffers() {
  const container = document.getElementById('comboGrid');
  if (!container) return;
  
  container.innerHTML = comboOffers.map(item => `
    <div class="product-card combo-card">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Combo'">
      <h3>${item.name}</h3>
      <p class="item-description">${item.description}</p>
      <div class="price">₹${item.price}</div>
      <button class="add-to-cart" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.img}')">
        <i class="fas fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  `).join('');
}

// ========== CART PAGE FUNCTIONS ==========
function displayCartItems() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><h3>Your cart is empty</h3><p>Add some delicious burgers to your cart!</p><a href="menu.html" class="btn-primary">Browse Menu</a></div>';
    document.getElementById('cartSubtotal').textContent = '₹0';
    document.getElementById('cartTax').textContent = '₹0';
    document.getElementById('cartTotal').textContent = '₹0';
    return;
  }
  
  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Burger'">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>₹${item.price} each</p>
          <div class="quantity-controls">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
          </div>
        </div>
        <div class="cart-item-price">
          <p><strong>₹${itemTotal}</strong></p>
          <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i> Remove</button>
        </div>
      </div>
    `;
  }).join('');
  
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  
  document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
  document.getElementById('cartTax').textContent = `₹${tax.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `₹${total.toFixed(2)}`;
}

// Proceed to checkout
function proceedToCheckout() {
  if (cart.length === 0) {
    showNotification('Your cart is empty!', 'error');
    return;
  }
  const checkoutSection = document.getElementById('checkoutSection');
  if (checkoutSection) {
    checkoutSection.style.display = 'block';
    checkoutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Handle checkout form submission
function handleCheckout(event) {
  event.preventDefault();
  
  const name = document.getElementById('fullName')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  const address = document.getElementById('address')?.value.trim();
  const payment = document.getElementById('paymentMethod')?.value;
  
  if (!name || !phone || !address || !payment) {
    showNotification('Please fill all fields!', 'error');
    return;
  }
  
  if (!/^\d{10}$/.test(phone)) {
    showNotification('Please enter a valid 10-digit phone number!', 'error');
    return;
  }
  
  showNotification(`Thank you ${name}! Your order has been placed successfully!`, 'success');
  
  // Clear cart
  cart = [];
  saveCart();
  
  // Reset form
  document.getElementById('checkoutForm').reset();
  document.getElementById('checkoutSection').style.display = 'none';
  
  // Update cart display
  displayCartItems();
  
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
}

// ========== CONTACT FORM VALIDATION ==========
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMsg')?.value.trim();
    const feedback = document.getElementById('formFeedback');
    
    if (!name || !email || !message) {
      if (feedback) {
        feedback.textContent = 'Please fill all fields!';
        feedback.style.color = 'red';
      }
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      if (feedback) {
        feedback.textContent = 'Please enter a valid email!';
        feedback.style.color = 'red';
      }
      return;
    }
    
    if (feedback) {
      feedback.textContent = 'Message sent successfully! We will contact you soon.';
      feedback.style.color = 'green';
    }
    contactForm.reset();
  });
}

// ========== OFFER POPUP ==========
function setupOfferPopup() {
  const popup = document.getElementById('offerPopup');
  if (!popup) return;
  
  const closed = localStorage.getItem('offerClosed');
  if (!closed) {
    setTimeout(() => {
      popup.classList.add('show');
    }, 1500);
  }
  
  const closeBtn = document.querySelector('.close-popup');
  if (closeBtn) {
    closeBtn.onclick = () => {
      popup.classList.remove('show');
      localStorage.setItem('offerClosed', 'true');
    };
  }
  
  const claimBtn = document.getElementById('popupClaimBtn');
  if (claimBtn) {
    claimBtn.onclick = () => {
      popup.classList.remove('show');
      localStorage.setItem('offerClosed', 'true');
      showNotification('Code BLAST20 applied! 20% off on first order!', 'success');
    };
  }
}

// ========== CATEGORY FILTERS ==========
function setupCategoryFilters() {
  const catBtns = document.querySelectorAll('.cat-btn');
  if (!catBtns.length) return;
  
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-cat');
      displayMenuItems(category);
    });
  });
}

// ========== SMOOTH SCROLLING ==========
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ========== STICKY NAVBAR ==========
function setupStickyNav() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
      } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
      }
    }
  });
}

// ========== HAMBURGER MENU ==========
function setupHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
  // Update cart count on all pages
  updateCartCount();
  
  // Page-specific initialization
  if (document.getElementById('featuredGrid')) {
    displayFeaturedItems();
    displayComboOffers();
  }
  
  if (document.getElementById('menuItemsContainer')) {
    displayMenuItems('all');
    setupCategoryFilters();
  }
  
  if (document.getElementById('cartItemsList')) {
    displayCartItems();
    const proceedBtn = document.getElementById('proceedCheckoutBtn');
    if (proceedBtn) {
      proceedBtn.addEventListener('click', proceedToCheckout);
    }
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', handleCheckout);
    }
  }
  
  setupContactForm();
  setupOfferPopup();
  setupSmoothScroll();
  setupStickyNav();
  setupHamburgerMenu();
});

// Add notification styles dynamically
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    position: fixed;
    top: 80px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 2000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
  }
  .notification.show {
    transform: translateX(0);
  }
  .notification.success {
    border-left: 4px solid #28a745;
    color: #28a745;
  }
  .notification.error {
    border-left: 4px solid #dc3545;
    color: #dc3545;
  }
  .empty-cart {
    text-align: center;
    padding: 3rem;
  }
  .empty-cart i {
    font-size: 4rem;
    color: #ddd;
    margin-bottom: 1rem;
  }
  .item-description {
    font-size: 0.85rem;
    color: #666;
    margin: 0.5rem 0;
  }
  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
  }
  .quantity {
    font-weight: 600;
    min-width: 30px;
    text-align: center;
  }
  .cart-item {
    background: #f9f9f9;
    border-radius: 12px;
  }
`;
document.head.appendChild(notificationStyles);
