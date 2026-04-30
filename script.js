// navbar responsive js

  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

// / ── Brand filter ──
function filterBrand(brand, btn) {

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(c => {
    if (brand === 'all' || c.dataset.brand === brand) {
      c.classList.add('visible');
    } else {
      c.classList.remove('visible');
    }
  });
  document.querySelectorAll('.brand-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ── Compare logic ──
let compareList = [];

function toggleCompare(checkbox, name, brand, price, material, type, features) {
  if (checkbox.checked) {
    if (compareList.length >= 3) {
      checkbox.checked = false;
      showToast('Maximum 3 products for comparison');
      return;
    }
    compareList.push({ name, brand, price, material, type, features });
  } else {
    compareList = compareList.filter(p => p.name !== name);
  }
  updateSlots();
}

function updateSlots() {
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById('slot' + i);
    slot.textContent = compareList[i] ? compareList[i].name : '— Select Product —';
  }
}

function runCompare() {
  for (let i = 0; i < 3; i++) {
    const p = compareList[i];
    document.getElementById('th' + i).textContent = p ? p.name : '—';
    document.getElementById('cb' + i).textContent = p ? p.brand : '—';
    document.getElementById('cp' + i).textContent = p ? p.price : '—';
    document.getElementById('cm' + i).textContent = p ? p.material : '—';
    document.getElementById('ct' + i).textContent = p ? p.type : '—';
    document.getElementById('cf' + i).textContent = p ? p.features : '—';
  }
  document.getElementById('compare').scrollIntoView({ behavior: 'smooth' });
  showToast('Comparison updated!');
}



function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Toast ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function sendMessage() {
  showToast('Message sent! We\'ll reply within 24hrs.');
}

// ── Close modal on ESC ──
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// products page js
function changeQty(amount) {
    let qtyInput = document.getElementById('qty');
    let currentVal = parseInt(qtyInput.value);
    if(currentVal + amount >= 1) {
        qtyInput.value = currentVal + amount;
    }
}
// Thumbnail click karne par main image change karne ka logic
document.querySelectorAll('.thumbnails img').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Main image ka element select karein
        const mainImg = document.querySelector('.main-image img');
        
        // Main image ka src badal kar wahi kar dein jo clicked thumbnail ka hai
        mainImg.src = this.src;

        // Optionally: Active thumbnail ko highlight karne ke liye
        document.querySelectorAll('.thumbnails img').forEach(img => img.style.borderColor = '#333');
        this.style.borderColor = '#c5a059'; // Gold color highlight
    });
});


function addToCartClicked() {
    // Input se quantity uthane ke liye
    const quantity = document.getElementById('qty').value;
    const productName = document.querySelector('.product-title').innerText;

    // Success message
    alert("Added to cart successfully! \n" + quantity + " x " + productName);
    
    // Agar aap button ka text change karna chahte hain temporarily:
    const btn = document.querySelector('.add-to-cart');
    const originalText = btn.innerText;
    btn.innerText = "✓ Added";
    btn.style.backgroundColor = "#28a745"; // Green color for success
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; // Reset to original gold/dark color
    }, 2000);
}

// payment method js
function openPaymentModal() {
    document.getElementById('paymentModal').style.display = "block";
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = "none";
}

function processPayment(event) {
    event.preventDefault(); // Page refresh hone se rokne ke liye
    
    // Yahan payment processing ka effect dikhayenge
    const btn = document.querySelector('.btn-pay');
    btn.innerText = "Processing...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Payment Successful! Your order has been placed.");
        closePaymentModal();
        btn.innerText = "Pay Now";
        btn.disabled = false;
    }, 3000);
}

// Modal ke bahar click karne par band hona
window.onclick = function(event) {
    let modal = document.getElementById('paymentModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}