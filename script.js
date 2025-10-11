/* ============================================
   PART 2: JAVASCRIPT FUNCTIONS
   Demonstrating scope, parameters, and return values
   ============================================ */

// ========== GLOBAL SCOPE VARIABLE ==========
// This variable is accessible throughout the entire script
let globalCounter = 0;

/**
 * FUNCTION 1: Calculate Total with Tax
 * 
 * Demonstrates:
 * - Parameters (price, taxRate, quantity)
 * - Mathematical operations
 * - Return value (formatted total)
 * - Local scope variables
 * 
 * @param {number} price - The unit price
 * @param {number} taxRate - The tax percentage
 * @param {number} quantity - The quantity ordered
 * @returns {object} Object containing itemSubtotal, taxAmount, and grandTotal
 */
function calculateTotal(price, taxRate, quantity) {
    // Local scope: these variables only exist within this function
    const itemSubtotal = price * quantity;
    const taxAmount = itemSubtotal * (taxRate / 100);
    const grandTotal = itemSubtotal + taxAmount;

    // Return an object with calculated values
    return {
        itemSubtotal: itemSubtotal.toFixed(2),
        taxAmount: taxAmount.toFixed(2),
        grandTotal: grandTotal.toFixed(2),
        itemsCount: quantity,
        pricePerItem: price.toFixed(2)
    };
}

/**
 * FUNCTION 2: Format Text with Different Styles
 * 
 * Demonstrates:
 * - String parameter
 * - Conditional logic (switch statement)
 * - Different return values based on parameters
 * - Return value for string manipulation
 * 
 * @param {string} text - The text to format
 * @param {string} style - The style to apply (uppercase, lowercase, reverse, capitalize)
 * @returns {string} The formatted text
 */
function formatText(text, style) {
    // Local scope: style variable only exists in this function
    switch(style) {
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'reverse':
            return text.split('').reverse().join('');
        case 'capitalize':
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        default:
            return text;
    }
}

/**
 * FUNCTION 3: Calculate Statistics from Array
 * 
 * Demonstrates:
 * - Array parameter
 * - Array methods (reduce, sort)
 * - Multiple calculations
 * - Return object with multiple values
 * - Local scope with nested calculations
 * 
 * @param {array} numbers - Array of numbers
 * @returns {object} Object containing min, max, average, sum, and count
 */
function calculateStats(numbers) {
    // Local scope: all variables here are local to this function
    if (numbers.length === 0) {
        return {
            min: 0,
            max: 0,
            average: 0,
            sum: 0,
            count: 0
        };
    }

    // Using reduce to sum all numbers (local scope calculation)
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    
    // Using Math methods to find min and max
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    // Return object with all statistics
    return {
        min: min,
        max: max,
        average: average.toFixed(2),
        sum: sum,
        count: numbers.length
    };
}

/**
 * FUNCTION 4: Demonstrate Global Scope
 * 
 * Demonstrates:
 * - Access to global variables
 * - Modifying global state
 * - Return value showing global state
 * 
 * @returns {object} Object containing global state information
 */
function demonstrateGlobalScope() {
    // Accessing and modifying the global variable
    globalCounter++;

    return {
        message: `Global counter has been incremented`,
        currentValue: globalCounter,
        isGlobal: true
    };
}

/**
 * FUNCTION 5: Demonstrate Local Scope
 * 
 * Demonstrates:
 * - Local variables that don't affect globals
 * - Local counter that starts fresh each call
 * - Return value showing local-only state
 * 
 * @returns {object} Object containing local state information
 */
function demonstrateLocalScope() {
    // Local scope: this variable is ONLY accessible within this function
    const localCounter = 5;
    const multiplier = 3;
    const result = localCounter * multiplier;

    return {
        message: `Local calculation completed (5 × 3)`,
        result: result,
        isLocal: true,
        globalCounterValue: globalCounter
    };
}

/**
 * FUNCTION 6: Format Currency
 * 
 * Helper function demonstrating:
 * - Single responsibility principle
 * - Simple parameter and return value
 * 
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2);
}

/**
 * FUNCTION 7: Validate Input
 * 
 * Demonstrates:
 * - Parameter validation
 * - Boolean return value
 * 
 * @param {any} value - The value to validate
 * @param {string} type - The expected type
 * @returns {boolean} Whether the value is valid
 */
function validateInput(value, type) {
    if (type === 'number') {
        return !isNaN(value) && value !== '';
    } else if (type === 'text') {
        return value.trim().length > 0;
    }
    return true;
}

/* ============================================
   PART 3: CSS & JAVASCRIPT INTEGRATION
   Triggering animations dynamically
   ============================================ */

/**
 * FUNCTION 8: Trigger Animation on Element
 * 
 * Demonstrates:
 * - DOM element selection
 * - Adding CSS classes dynamically
 * - JavaScript controlling CSS animations
 * - Parameter determines which animation is applied
 * 
 * @param {string} animationType - The type of animation to trigger
 */
function triggerAnimation(animationType) {
    const square = document.getElementById('animatedSquare');
    const statusDiv = document.getElementById('animationStatus');

    // Remove all animation classes first
    square.classList.remove('spin', 'pulse-animation', 'bounce-animation');

    // Add the selected animation class
    if (animationType === 'spin') {
        square.classList.add('spin');
        statusDiv.textContent = '🔄 Spinning animation triggered!';
    } else if (animationType === 'pulse') {
        square.classList.add('pulse-animation');
        statusDiv.textContent = '💓 Pulse animation triggered!';
    } else if (animationType === 'bounce') {
        square.classList.add('bounce-animation');
        statusDiv.textContent = '🎪 Bounce animation triggered!';
    }

    // Show status message
    statusDiv.style.display = 'block';

    // Hide status after animation completes
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 3000);
}

/**
 * FUNCTION 9: Reset Animation
 * 
 * Demonstrates:
 * - Removing CSS classes
 * - Resetting element state
 */
function resetAnimation() {
    const square = document.getElementById('animatedSquare');
    const statusDiv = document.getElementById('animationStatus');

    // Remove all animation classes
    square.classList.remove('spin', 'pulse-animation', 'bounce-animation');

    statusDiv.textContent = '✓ Animation reset!';
    statusDiv.style.display = 'block';

    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 2000);
}

/**
 * FUNCTION 10: Flip Card Element
 * 
 * Demonstrates:
 * - DOM traversal (finding child elements)
 * - Toggle CSS class for animation
 * - Event handling with element context
 * 
 * @param {element} cardElement - The card element to flip
 */
function flipCardElement(cardElement) {
    // Find the flip-card-inner element (child of the card)
    const cardInner = cardElement.querySelector('.flip-card-inner');

    // Toggle the 'flipped' class to trigger the CSS 3D animation
    if (cardInner.classList.contains('flipped')) {
        cardInner.classList.remove('flipped');
    } else {
        cardInner.classList.add('flipped');
    }
}

/**
 * FUNCTION 11: Open Modal with Animation
 * 
 * Demonstrates:
 * - DOM element selection and manipulation
 * - Adding classes to trigger CSS animations
 * - Controlling visibility with JavaScript
 */
function openModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modalOverlay');

    // Add 'show' class to trigger CSS animations
    modal.classList.add('show');
    overlay.classList.add('show');

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * FUNCTION 12: Close Modal with Animation
 * 
 * Demonstrates:
 * - Removing classes to trigger reverse animation
 * - Cleanup operations
 */
function closeModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modalOverlay');

    // Remove 'show' class to trigger CSS fade-out animation
    modal.classList.remove('show');
    overlay.classList.remove('show');

    // Re-enable body scroll
    document.body.style.overflow = 'auto';
}

/**
 * FUNCTION 13: Start Loading Animation
 * 
 * Demonstrates:
 * - Displaying hidden elements
 * - Controlling CSS animations via JavaScript
 * - State management
 */
function startLoading() {
    const loadingContainer = document.getElementById('loadingContainer');
    const loadingText = document.getElementById('loadingText');

    // Display the loading animation
    loadingContainer.style.display = 'block';

    // Optional: Update loading text periodically
    let dots = '';
    const interval = setInterval(() => {
        dots = dots.length < 3 ? dots + '.' : '';
        loadingText.textContent = 'Loading' + dots;
    }, 500);

    // Store interval ID for cleanup
    loadingContainer.dataset.intervalId = interval;
}

/**
 * FUNCTION 14: Stop Loading Animation
 * 
 * Demonstrates:
 * - Hiding elements
 * - Cleanup of intervals
 * - Resetting state
 */
function stopLoading() {
    const loadingContainer = document.getElementById('loadingContainer');
    const loadingText = document.getElementById('loadingText');

    // Get and clear the interval if it exists
    const intervalId = loadingContainer.dataset.intervalId;
    if (intervalId) {
        clearInterval(intervalId);
    }

    // Hide the loading animation
    loadingContainer.style.display = 'none';
    loadingText.textContent = 'Loading...';
}

/* ============================================
   UI EVENT HANDLERS & INTEGRATION
   ============================================ */

/**
 * FUNCTION 15: Run Calculator Demo
 * 
 * Demonstrates:
 * - Getting input values from DOM
 * - Calling a function with parameters
 * - Displaying return values in the DOM
 * - Input validation
 */
function runCalculatorDemo() {
    const priceInput = document.getElementById('priceInput');
    const taxInput = document.getElementById('taxInput');
    const quantityInput = document.getElementById('quantityInput');
    const resultDiv = document.getElementById('calculatorResult');
    const resultText = document.getElementById('resultText');

    // Get values from input fields
    const price = parseFloat(priceInput.value);
    const taxRate = parseFloat(taxInput.value);
    const quantity = parseFloat(quantityInput.value);

    // Validate inputs
    if (!validateInput(price, 'number') || !validateInput(taxRate, 'number') || !validateInput(quantity, 'number')) {
        resultText.innerHTML = '<span style="color: #f44336;">❌ Please enter valid numbers!</span>';
        resultDiv.style.display = 'block';
        return;
    }

    // Call the calculateTotal function with parameters
    const result = calculateTotal(price, taxRate, quantity);

    // Display the return value
    resultText.innerHTML = `
        <div style="text-align: left;">
            <p>📦 Items: ${result.itemsCount} × ${formatCurrency(result.pricePerItem)} = ${formatCurrency(result.itemSubtotal)}</p>
            <p>🧾 Tax (${taxRate}%): ${formatCurrency(result.taxAmount)}</p>
            <p style="font-size: 1.2rem; color: #667eea; margin-top: 10px;"><strong>💰 Total: ${formatCurrency(result.grandTotal)}</strong></p>
        </div>
    `;

    resultDiv.style.display = 'block';

    // Trigger CSS animation on result
    resultDiv.style.animation = 'none';
    setTimeout(() => {
        resultDiv.style.animation = 'slideInLeft 0.4s ease-out';
    }, 10);
}

/**
 * FUNCTION 16: Run String Formatting Demo
 * 
 * Demonstrates:
 * - Getting DOM input
 * - Calling function with string parameters
 * - Displaying formatted output
 */
function runStringDemo(style) {
    const textInput = document.getElementById('textInput');
    const resultDiv = document.getElementById('stringResult');
    const resultText = document.getElementById('stringResultText');

    const inputText = textInput.value;

    // Validate input
    if (!validateInput(inputText, 'text')) {
        resultText.innerHTML = '<span style="color: #f44336;">❌ Please enter some text!</span>';
        resultDiv.style.display = 'block';
        return;
    }

    // Call formatText function with parameters
    const formattedText = formatText(inputText, style);

    // Display the result
    resultText.innerHTML = `
        <strong>${style.toUpperCase()}:</strong> <span style="color: #f093fb; font-size: 1.1rem;">"${formattedText}"</span>
    `;

    resultDiv.style.display = 'block';

    // Trigger animation
    resultDiv.style.animation = 'none';
    setTimeout(() => {
        resultDiv.style.animation = 'slideInRight 0.4s ease-out';
    }, 10);
}

/**
 * FUNCTION 17: Run Array Statistics Demo
 * 
 * Demonstrates:
 * - Parsing string input into array
 * - Calling function with array parameter
 * - Displaying multiple return values
 */
function runArrayDemo() {
    const numbersInput = document.getElementById('numbersInput');
    const resultDiv = document.getElementById('arrayResult');
    const statsText = document.getElementById('statsText');

    // Parse input string into array of numbers
    const inputString = numbersInput.value;
    const numbers = inputString.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    // Validate
    if (numbers.length === 0) {
        statsText.innerHTML = '<span style="color: #f44336;">❌ Please enter valid numbers!</span>';
        resultDiv.style.display = 'block';
        return;
    }

    // Call calculateStats function with array parameter
    const stats = calculateStats(numbers);

    // Display all return values
    statsText.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
            <div><strong>📊 Count:</strong> ${stats.count}</div>
            <div><strong>➕ Sum:</strong> ${stats.sum}</div>
            <div><strong>⬇️ Minimum:</strong> ${stats.min}</div>
            <div><strong>⬆️ Maximum:</strong> ${stats.max}</div>
            <div><strong>📈 Average:</strong> ${stats.average}</div>
        </div>
    `;

    resultDiv.style.display = 'block';
}

/**
 * FUNCTION 18: Demonstrate Global Scope in UI
 * 
 * Demonstrates:
 * - Calling function that accesses global scope
 * - Displaying global state changes
 */
function demonstrateGlobalScope() {
    const resultDiv = document.getElementById('scopeResult');
    const scopeText = document.getElementById('scopeText');

    // Call function that modifies global scope
    const result = demonstrateGlobalScope();

    scopeText.innerHTML = `
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>${result.message}</strong></p>
            <p style="margin-top: 10px; color: #667eea; font-size: 1.1rem;">Global Counter: <strong>${result.currentValue}</strong></p>
            <p style="margin-top: 10px; font-size: 0.9rem; color: #888;">This value persists and increases with each click!</p>
        </div>
    `;

    resultDiv.style.display = 'block';
}

/**
 * FUNCTION 19: Demonstrate Local Scope in UI
 * 
 * Demonstrates:
 * - Calling function with local scope only
 * - Showing that local variables reset each time
 */
function demonstrateLocalScope() {
    const resultDiv = document.getElementById('scopeResult');
    const scopeText = document.getElementById('scopeText');

    // Call function that uses only local scope
    const result = demonstrateLocalScope();

    scopeText.innerHTML = `
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>${result.message}</strong></p>
            <p style="margin-top: 10px; color: #667eea; font-size: 1.1rem;">Result: <strong>${result.result}</strong></p>
            <p style="margin-top: 10px; font-size: 0.9rem; color: #888;">Global Counter (from global scope): ${result.globalCounterValue}</p>
            <p style="margin-top: 10px; font-size: 0.9rem; color: #888;">Local variables reset each call!</p>
        </div>
    `;

    resultDiv.style.display = 'block';
}

/* ============================================
   INITIALIZATION & EVENT LISTENERS
   ============================================ */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Log to console to confirm script is loaded
    console.log('✅ Script.js loaded successfully!');
    console.log('🎬 Interactive Web Experience - Ready to go!');
});

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('modal');
        if (modal.classList.contains('show')) {
            closeModal();
        }
    }
});

// Close modal when clicking outside the modal content
document.getElementById('modalOverlay')?.addEventListener('click', function() {
    closeModal();
});