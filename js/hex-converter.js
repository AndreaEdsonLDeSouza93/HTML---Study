// Function to convert color
function convertColor() {
    const fromType = document.getElementById('from-type').value;
    const inputValue = document.getElementById('input-value').value.trim();

    let rgb, hex, hsl;

    try {
        if (fromType === 'rgb') {
            // Convert RGB to other formats
            rgb = parseRGB(inputValue);
            hex = rgbToHex(rgb);
            hsl = rgbToHsl(rgb);
        } else if (fromType === 'hex') {
            // Convert HEX to other formats
            rgb = hexToRgb(inputValue);
            hex = inputValue.toUpperCase();
            hsl = rgbToHsl(rgb);
        } else if (fromType === 'hsl') {
            // Convert HSL to other formats
            hsl = parseHSL(inputValue);
            rgb = hslToRgb(hsl);
            hex = rgbToHex(rgb);
        }

        // Update the results
        document.getElementById('rgb-output').textContent = `rgb(${rgb.join(', ')})`;
        document.getElementById('hex-output').textContent = hex;
        document.getElementById('hsl-output').textContent = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;

        // Update the color preview
        document.getElementById('color-preview').style.backgroundColor = hex;
    } catch (error) {
        alert('Invalid color value! Please check the format.');
    }
}

// Helper functions
function parseRGB(value) {
    const match = value.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
    if (!match) throw new Error('Invalid RGB format');
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
}

function parseHSL(value) {
    const match = value.match(/^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/);
    if (!match) throw new Error('Invalid HSL format');
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
}

function rgbToHex([r, g, b]) {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}

function hexToRgb(hex) {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) throw new Error('Invalid HEX format');
    return [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];
}

function rgbToHsl([r, g, b]) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb([h, s, l]) {
    s /= 100; l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }

    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}
