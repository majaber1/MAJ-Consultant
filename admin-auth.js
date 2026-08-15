// Admin authentication using SHA-256 hash comparison.
// To change the passphrase, generate a new hash:
//   echo -n "your-new-passphrase" | shasum -a 256
// Then replace ADMIN_HASH below.

const ADMIN_HASH = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'; // default: 'password' — CHANGE THIS
const SESSION_KEY = 'md_admin_unlocked';

async function hashPassphrase(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function tryUnlock() {
  const input = document.getElementById('gate-pass').value;
  const err = document.getElementById('gate-error');
  const hashed = await hashPassphrase(input);
  if (hashed === ADMIN_HASH) {
    sessionStorage.setItem(SESSION_KEY, '1');
    unlockUI();
  } else {
    err.textContent = 'Incorrect passphrase. Please try again.';
    document.getElementById('gate-pass').value = '';
    document.getElementById('gate-pass').focus();
  }
}

function unlockUI() {
  document.getElementById('gate-overlay').style.display = 'none';
  document.getElementById('admin-content').style.display = 'block';
  if (typeof renderDashboard === 'function') renderDashboard();
}

function lockAdmin() {
  sessionStorage.removeItem(SESSION_KEY);
  location.reload();
}

if (sessionStorage.getItem(SESSION_KEY) === '1') {
  document.addEventListener('DOMContentLoaded', unlockUI);
} else {
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gate-pass').focus();
  });
}
