// hex to rgb

function hexToRgb(hex) {
  // Remove the first #
  hex = hex.replace('#', '');
  // if short (3 characters), expand to full 6
  if(hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  // Validate after expansion
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Invalid hex color.')
  }

  // Convert
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return {r, g, b};

}

module.exports = { hexToRgb };