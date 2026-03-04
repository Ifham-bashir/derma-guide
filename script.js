/**
 * DermaGuide AI - Complete JavaScript
 * Created by Ifham Bashir
 * Class 12 | PCMB | AI Enthusiast
 */

// ==========================================
// DATA OBJECTS
// ==========================================

const fitzpatrickData = {
    1: { name: "Type I", burns: "Always", tans: "Never", warning: "High sun sensitivity", concFactor: 1.0 },
    2: { name: "Type II", burns: "Usually", tans: "Minimally", warning: "Sun sensitive", concFactor: 1.0 },
    3: { name: "Type III", burns: "Sometimes", tans: "Gradually", warning: "Moderate risk", concFactor: 0.8 },
    4: { name: "Type IV", burns: "Rarely", tans: "Easily", warning: "PIH risk - lower concentrations", concFactor: 0.6 },
    5: { name: "Type V", burns: "Very rarely", tans: "Darkly", warning: "High PIH risk - gentle actives", concFactor: 0.5 },
    6: { name: "Type VI", burns: "Never", tans: "Deeply", warning: "Maximum PIH protection needed", concFactor: 0.4 }
};

const ageData = {
    genZ: { name: "Gen Z (18-26)", focus: "Prevention", maxProducts: 4 },
    millennial: { name: "Millennial (27-42)", focus: "Correction+Prevention", maxProducts: 7 },
    genX: { name: "Gen X (43-58)", focus: "Rejuvenation", maxProducts: 5 },
    boomer: { name: "Boomer (59+)", focus: "Care", maxProducts: 4 }
};

const ingredients = [
    { name: "Niacinamide", benefits: "Pore reduction, oil control, barrier repair", 
      bestFor: ["acne", "aging", "pigmentation"],
      concI: "10%", concII: "10%", concIII: "10%", concIV: "5%", concV: "4%", concVI: "2-4%",
      pregnancySafe: true, conflicts: ["Vitamin C (separate by 30 min)"] },
    { name: "Vitamin C", benefits: "Brightening, collagen, antioxidant",
      bestFor: ["dullness", "aging", "sun damage"],
      concI: "15-20%", concII: "15-20%", concIII: "10-15%", concIV: "10%", concV: "5-8%", concVI: "5%",
      pregnancySafe: true, conflicts: ["Copper peptides", "Benzoyl peroxide"] },
    { name: "Azelaic Acid", benefits: "Melasma, anti-inflammatory, PIH prevention",
      bestFor: ["pigmentation", "rosacea", "acne"],
      concI: "10-20%", concII: "10-20%", concIII: "10-20%", concIV: "15-20%", concV: "20%", concVI: "20%",
      pregnancySafe: true, conflicts: [] },
    { name: "Salicylic Acid", benefits: "Pore penetration, oil soluble, exfoliation",
      bestFor: ["acne", "blackheads", "oily"],
      concI: "2%", concII: "2%", concIII: "2%", concIV: "1-2%", concV: "0.5-1%", concVI: "0.5%",
      pregnancySafe: "Caution >2%", conflicts: ["Retinoids (alternate nights)"] },
    { name: "Hyaluronic Acid", benefits: "Hydration, plumping, barrier support",
      bestFor: ["dryness", "aging", "all skin"],
      concI: "1-2%", concII: "1-2%", concIII: "1-2%", concIV: "1-2%", concV: "1-2%", concVI: "1-2%",
      pregnancySafe: true, conflicts: [] },
    { name: "Ceramides", benefits: "Barrier repair, moisture retention",
      bestFor: ["sensitive", "dry", "compromised barrier"],
      concI: "1-5%", concII: "1-5%", concIII: "1-5%", concIV: "1-5%", concV: "1-5%", concVI: "1-5%",
      pregnancySafe: true, conflicts: [] },
    { name: "Tranexamic Acid", benefits: "Melasma, PIH reduction, brightening",
      bestFor: ["pigmentation", "melasma"],
      concI: "2-5%", concII: "2-5%", concIII: "2-5%", concIV: "2-5%", concV: "2-5%", concVI: "2-5%",
      pregnancySafe: "Consult doctor", conflicts: [] },
    { name: "Centella Asiatica", benefits: "Wound healing, anti-inflammatory, soothing",
      bestFor: ["sensitive", "redness", "acne"],
      concI: "Any", concII: "Any", concIII: "Any", concIV: "Any", concV: "Any", concVI: "Any",
      pregnancySafe: true, conflicts: [] },
    { name: "Retinol", benefits: "Cell turnover, collagen, anti-aging",
      bestFor: ["aging", "texture"],
      concI: "0.025-0.1%", concII: "0.025-0.1%", concIII: "0.025-0.05%", concIV: "0.025%", concV: "0.025% buffer", concVI: "0.025% buffer",
      pregnancySafe: false, conflicts: ["Benzoyl peroxide", "AHA/BHA"] }
];

const products = [
    // Cleansers
    { name: "Cetaphil Gentle Cleanser", brand: "Cetaphil", price: "₹420", category: "drugstore",
      skinTypes: ["dry", "sensitive"], keyIngredients: ["Glycerin"], rating: 4.5, budget: "budget" },
    { name: "CeraVe Hydrating Cleanser", brand: "CeraVe", price: "₹850", category: "drugstore",
      skinTypes: ["dry", "sensitive"], keyIngredients: ["Ceramides", "Hyaluronic Acid"], rating: 4.6, budget: "affordable" },
    { name: "Neutrogena Oil-Free Acne Wash", brand: "Neutrogena", price: "₹350", category: "drugstore",
      skinTypes: ["oily", "acne"], keyIngredients: ["Salicylic Acid"], rating: 4.3, budget: "budget" },
    { name: "Minimalist 2% Salicylic Acid", brand: "Minimalist", price: "₹299", category: "indian",
      skinTypes: ["oily", "acne"], keyIngredients: ["Salicylic Acid", "Zinc"], rating: 4.5, budget: "budget" },
    { name: "La Roche-Posay Effaclar", brand: "La Roche-Posay", price: "₹1250", category: "pharmacy",
      skinTypes: ["oily", "acne"], keyIngredients: ["Zinc PCA"], rating: 4.6, budget: "mid" },
    
    // Moisturizers
    { name: "CeraVe Moisturizing Cream", brand: "CeraVe", price: "₹1050", category: "drugstore",
      skinTypes: ["dry", "very dry"], keyIngredients: ["Ceramides", "Hyaluronic Acid"], rating: 4.8, budget: "mid" },
    { name: "Neutrogena Hydro Boost", brand: "Neutrogena", price: "₹850", category: "drugstore",
      skinTypes: ["oily", "combination"], keyIngredients: ["Hyaluronic Acid"], rating: 4.5, budget: "affordable" },
    { name: "Minimalist Marula Oil", brand: "Minimalist", price: "₹549", category: "indian",
      skinTypes: ["dry", "normal"], keyIngredients: ["Marula Oil"], rating: 4.4, budget: "affordable" },
    
    // Sunscreens
    { name: "Minimalist SPF 50", brand: "Minimalist", price: "₹599", category: "indian",
      skinTypes: ["all"], keyIngredients: ["Zinc Oxide"], rating: 4.5, budget: "affordable" },
    { name: "La Roche-Posay Anthelios", brand: "La Roche-Posay", price: "₹1650", category: "pharmacy",
      skinTypes: ["sensitive"], keyIngredients: ["Zinc Oxide"], rating: 4.7, budget: "premium" },
    { name: "Re'equil Ultra Matte", brand: "Re'equil", price: "₹550", category: "indian",
      skinTypes: ["oily", "combination"], keyIngredients: ["Avobenzone"], rating: 4.6, budget: "affordable" },
    
    // Serums
    { name: "The Ordinary Niacinamide", brand: "The Ordinary", price: "₹650", category: "premium",
      skinTypes: ["oily", "acne"], keyIngredients: ["Niacinamide", "Zinc"], rating: 4.6, budget: "mid" },
    { name: "Minimalist Vitamin C", brand: "Minimalist", price: "₹699", category: "indian",
      skinTypes: ["dull", "aging"], keyIngredients: ["Vitamin C"], rating: 4.5, budget: "affordable" },
    { name: "The Ordinary Retinol 0.5%", brand: "The Ordinary", price: "₹550", category: "premium",
      skinTypes: ["aging"], keyIngredients: ["Retinol"], rating: 4.4, budget: "mid" }
];

const archetypes = [
    { name: "Gen Z Oil Controller", ages: ["genZ"], fitzpatrick: [2,3,4],
      routine: ["Gentle cleanser", "Niacinamide", "Lightweight moisturizer", "SPF"],
      avoid: ["Heavy oils", "Rich creams", "Multiple actives"],
      tips: ["Consistency over intensity", "Never skip SPF", "Patch test trends"] },
    { name: "Melasma Fighter", ages: ["millennial"], fitzpatrick: [3,4,5],
      routine: ["Gentle cleanser", "Vitamin C", "Azelaic acid", "Moisturizer", "Mineral SPF"],
      avoid: ["Hydroquinone unsupervised", "High heat", "Sun exposure"],
      tips: ["Results take 12+ weeks", "Hats are essential", "Morning antioxidant"] },
    { name: "Barrier Repairer", ages: ["any"], fitzpatrick: [1,2,3,4,5,6],
      routine: ["Ceramide cleanser", "Centella serum", "Ceramide moisturizer", "Zinc SPF"],
      avoid: ["All actives for 4 weeks", "Fragrance", "Essential oils"],
      tips: ["Less is more", "One change at a time", "See derm if not improving"] },
    { name: "Hormonal Acne", ages: ["millennial"], fitzpatrick: [1,2,3,4],
      routine: ["Salicylic acid cleanser", "Niacinamide", "Gel moisturizer", "SPF"],
      avoid: ["Dairy triggers", "Picking", "Over-exfoliation"],
      tips: ["Track with period app", "Consider spironolactone (derm)", "Ice inflamed spots"] }
];

// ==========================================
// STATE MANAGEMENT
// ==========================================

const state = {
    fitzpatrick: null,
    age: null,
    concerns: [],
    triggers: [],
    pregnancy: false,
    budget: '',
    brandPreference: '',
    climate: '',
    gender: ''
};

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('DermaGuide AI initialized');
    initEventListeners();
});

function initEventListeners() {
    // Fitzpatrick cards
    document.querySelectorAll('#skin-type-grid .card').forEach(card => {
        card.addEventListener('click', function() {
            const type = parseInt(this.id.split('-')[1]);
            selectFitzpatrick(type);
        });
    });

    // Age pathway cards
    document.querySelectorAll('#age-pathway-grid .card').forEach(card => {
        card.addEventListener('click', function() {
            const ageMap = {
                'age-teens': 'genZ',
                'age-young': 'millennial',
                'age-adult': 'genX',
                'age-mature': 'boomer'
            };
            selectAge(ageMap[this.id]);
        });
    });

    // Concerns checkboxes
    document.querySelectorAll('#concerns-grid input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            toggleConcern(this.value);
        });
    });

    // Triggers checkboxes
    document.querySelectorAll('#triggers-grid input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            toggleTrigger(this.value);
        });
    });

    // Pregnancy checkbox
    document.getElementById('pregnancy').addEventListener('change', function() {
        handlePregnancy();
    });

    // Dropdowns
    document.getElementById('budget').addEventListener('change', function() {
        state.budget = this.value;
        console.log('Budget selected:', state.budget);
    });

    document.getElementById('brand-preference').addEventListener('change', function() {
        state.brandPreference = this.value;
        console.log('Brand preference:', state.brandPreference);
    });

    document.getElementById('climate').addEventListener('change', function() {
        state.climate = this.value;
        console.log('Climate:', state.climate);
    });

    document.getElementById('gender').addEventListener('change', function() {
        state.gender = this.value;
        console.log('Gender:', state.gender);
    });

    // Generate button
    document.getElementById('generate-btn').addEventListener('click', generatePlan);

    console.log('All event listeners initialized');
}

// ==========================================
// SELECTION FUNCTIONS
// ==========================================

function selectFitzpatrick(type) {
    // Remove previous selection
    document.querySelectorAll('#skin-type-grid .card').forEach(card => {
        card.classList.remove('selected');
    });

    // Add selection to clicked card
    const selectedCard = document.getElementById(`type-${type}`);
    selectedCard.classList.add('selected');

    state.fitzpatrick = type;
    console.log('Fitzpatrick selected:', type, fitzpatrickData[type]);

    // Show warning for types IV-VI
    if (type >= 4) {
        showWarning(`⚠️ ${fitzpatrickData[type].warning}. Lower concentrations recommended.`);
    } else {
        hideWarning();
    }
}

function selectAge(age) {
    // Remove previous selection
    document.querySelectorAll('#age-pathway-grid .card').forEach(card => {
        card.classList.remove('selected');
    });

    // Add selection to clicked card
    const ageCardMap = {
        'genZ': 'age-teens',
        'millennial': 'age-young',
        'genX': 'age-adult',
        'boomer': 'age-mature'
    };
    document.getElementById(ageCardMap[age]).classList.add('selected');

    state.age = age;
    console.log('Age selected:', age, ageData[age]);
}

function toggleConcern(concern) {
    const index = state.concerns.indexOf(concern);
    if (index > -1) {
        state.concerns.splice(index, 1);
    } else {
        state.concerns.push(concern);
    }
    console.log('Concerns updated:', state.concerns);
}

function toggleTrigger(trigger) {
    const index = state.triggers.indexOf(trigger);
    if (index > -1) {
        state.triggers.splice(index, 1);
    } else {
        state.triggers.push(trigger);
    }
    console.log('Triggers updated:', state.triggers);
}

function handlePregnancy() {
    const checkbox = document.getElementById('pregnancy');
    state.pregnancy = checkbox.checked;
    
    if (state.pregnancy) {
        showWarning('🤰 Pregnancy mode activated. Retinoids and high-dose salicylic acid will be excluded.');
        console.log('Pregnancy mode: ON');
    } else {
        hideWarning();
        console.log('Pregnancy mode: OFF');
    }
}

// ==========================================
// CORE LOGIC FUNCTIONS
// ==========================================

function generatePlan() {
    console.log('Generating plan...');
    
    // Validation
    if (!state.fitzpatrick) {
        alert('Please select your Fitzpatrick skin type');
        return;
    }
    if (!state.age) {
        alert('Please select your age pathway');
        return;
    }
    if (state.concerns.length === 0) {
        alert('Please select at least one skin concern');
        return;
    }

    // Show loading state
    const btn = document.getElementById('generate-btn');
    btn.classList.add('loading');
    btn.textContent = 'Analyzing...';

    // Simulate processing delay
    setTimeout(() => {
        // Get recommendations
        const matchedArchetype = matchArchetype();
        const recommendedIngredients = getRecommendedIngredients();
        const filteredProducts = filterProducts();
        const routine = buildRoutine(matchedArchetype, filteredProducts);
        
        // Display results
        displayResults(matchedArchetype, recommendedIngredients, routine);
        
        // Reset button
        btn.classList.remove('loading');
        btn.textContent = 'Generate My Skincare Routine';
        
        // Scroll to results
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

function getConcentration(ingredient, fitzType) {
    const ing = ingredients.find(i => i.name === ingredient);
    if (!ing) return null;
    
    const typeKey = `conc${['I', 'II', 'III', 'IV', 'V', 'VI'][fitzType - 1]}`;
    return ing[typeKey];
}

function filterProducts() {
    console.log('Filtering products...');
    
    return products.filter(product => {
        // Budget filter
        if (state.budget === 'budget' && !['budget', 'affordable'].includes(product.budget)) return false;
        if (state.budget === 'mid' && product.budget === 'premium') return false;
        
        // Brand preference filter
        if (state.brandPreference === 'drugstore' && !['drugstore', 'indian'].includes(product.category)) return false;
        if (state.brandPreference === 'dermatologist' && product.category !== 'pharmacy') return false;
        
        // Pregnancy safety filter
        if (state.pregnancy) {
            const hasUnsafeIngredients = product.keyIngredients.some(ing => {
                const ingredientData = ingredients.find(i => i.name === ing);
                return ingredientData && ingredientData.pregnancySafe === false;
            });
            if (hasUnsafeIngredients) return false;
        }
        
        // Skin type matching (basic)
        const skinTypeMap = {
            'dry': ['dry', 'sensitive', 'all'],
            'oily': ['oily', 'acne', 'combination', 'all'],
            'acne': ['oily', 'acne', 'all'],
            'sensitive': ['sensitive', 'all']
        };
        
        const relevantTypes = state.concerns.flatMap(c => skinTypeMap[c] || ['all']);
        const hasMatchingType = product.skinTypes.some(type => 
            relevantTypes.includes(type) || type === 'all'
        );
        
        return hasMatchingType;
    });
}

function matchArchetype() {
    console.log('Matching archetype...');
    
    // Score each archetype
    let bestMatch = null;
    let highestScore = 0;
    
    archetypes.forEach(archetype => {
        let score = 0;
        
        // Age match
        if (archetype.ages.includes(state.age) || archetype.ages.includes('any')) {
            score += 3;
        }
        
        // Fitzpatrick match
        if (archetype.fitzpatrick.includes(state.fitzpatrick)) {
            score += 2;
        }
        
        // Concern overlap
        const archetypeConcerns = archetype.routine.join(' ').toLowerCase();
        state.concerns.forEach(concern => {
            if (archetypeConcerns.includes(concern)) score += 1;
        });
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = archetype;
        }
    });
    
    console.log('Best archetype match:', bestMatch);
    return bestMatch || archetypes[0]; // Default to first if no match
}

function getRecommendedIngredients() {
    console.log('Getting recommended ingredients...');
    
    return ingredients.filter(ing => {
        // Check if ingredient helps with selected concerns
        const helpsConcerns = ing.bestFor.some(concern => 
            state.concerns.includes(concern) || concern === 'all skin'
        );
        
        // Check pregnancy safety
        const isPregnancySafe = !state.pregnancy || ing.pregnancySafe === true;
        
        // Check trigger conflicts
        const hasTriggerConflict = state.triggers.some(trigger => 
            ing.conflicts.some(conflict => conflict.toLowerCase().includes(trigger.toLowerCase()))
        );
        
        return helpsConcerns && isPregnancySafe && !hasTriggerConflict;
    }).map(ing => ({
        ...ing,
        recommendedConc: getConcentration(ing.name, state.fitzpatrick)
    }));
}

function buildRoutine(archetype, availableProducts) {
    console.log('Building routine...');
    
    const maxProducts = ageData[state.age].maxProducts;
    const routine = {
        am: [],
        pm: []
    };
    
    // Essential steps
    const steps = ['cleanser', 'treatment', 'moisturizer', 'sunscreen'];
    
    // AM Routine
    routine.am.push({
        step: 'Cleanse',
        product: availableProducts.find(p => p.name.toLowerCase().includes('cleanser')) || products[0],
        note: 'Gentle morning cleanse'
    });
    
    if (state.concerns.includes('pigmentation') || state.concerns.includes('dullness')) {
        routine.am.push({
            step: 'Treat',
            product: availableProducts.find(p => p.keyIngredients.includes('Vitamin C')) || products[11],
            note: 'Antioxidant protection'
        });
    }
    
    routine.am.push({
        step: 'Moisturize',
        product: availableProducts.find(p => p.name.toLowerCase().includes('moisturizer')) || products[5],
        note: 'Hydration lock'
    });
    
    routine.am.push({
        step: 'Protect',
        product: availableProducts.find(p => p.name.toLowerCase().includes('spf')) || products[8],
        note: `SPF 50+ essential for Type ${state.fitzpatrick}`
    });
    
    // PM Routine
    routine.pm.push({
        step: 'Cleanse',
        product: availableProducts.find(p => p.name.toLowerCase().includes('cleanser')) || products[0],
        note: 'Remove dirt and sunscreen'
    });
    
    if (!state.pregnancy && state.concerns.includes('aging')) {
        routine.pm.push({
            step: 'Treat',
            product: availableProducts.find(p => p.keyIngredients.includes('Retinol')) || products[12],
            note: 'Start 2x/week, build tolerance'
        });
    } else if (state.concerns.includes('acne')) {
        routine.pm.push({
            step: 'Treat',
            product: availableProducts.find(p => p.keyIngredients.includes('Niacinamide')) || products[10],
            note: 'Oil control and pore refinement'
        });
    }
    
    routine.pm.push({
        step: 'Moisturize',
        product: availableProducts.find(p => p.name.toLowerCase().includes('moisturizer')) || products[5],
        note: 'Night repair support'
    });
    
    return routine;
}

// ==========================================
// DISPLAY FUNCTIONS
// ==========================================

function displayResults(archetype, ingredients, routine) {
    console.log('Displaying results...');
    
    const resultsSection = document.getElementById('results');
    const resultsContent = document.getElementById('results-content');
    
    resultsSection.classList.add('active');
    
    // Build HTML content
    let html = `
        <div class="results-header">
            <h2>Your Personalized Skincare Plan</h2>
            <div class="archetype-badge">${archetype.name}</div>
        </div>
        
        <div class="results-grid">
            <div class="result-card profile-summary">
                <h3>Your Profile</h3>
                <ul>
                    <li><strong>Skin Type:</strong> Fitzpatrick ${state.fitzpatrick} - ${fitzpatrickData[state.fitzpatrick].name}</li>
                    <li><strong>Age Group:</strong> ${ageData[state.age].name}</li>
                    <li><strong>Focus:</strong> ${ageData[state.age].focus}</li>
                    <li><strong>Concerns:</strong> ${state.concerns.join(', ')}</li>
                </ul>
            </div>
            
            <div class="result-card key-ingredients">
                <h3>Recommended Actives</h3>
                <div class="ingredient-list">
                    ${ingredients.slice(0, 4).map(ing => `
                        <div class="ingredient-item">
                            <strong>${ing.name}</strong>
                            <span class="concentration">${ing.recommendedConc}</span>
                            <p>${ing.benefits}</p>
                            ${ing.pregnancySafe !== true ? '<span class="warning-tag">⚠️ Pregnancy</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="routine-section">
            <h3>Your Daily Routine</h3>
            
            <div class="routine-columns">
                <div class="routine-card am-routine">
                    <h4>☀️ Morning Routine</h4>
                    ${routine.am.map((step, idx) => `
                        <div class="routine-step">
                            <span class="step-number">${idx + 1}</span>
                            <div class="step-details">
                                <strong>${step.step}</strong>
                                <p class="product-name">${step.product.name}</p>
                                <p class="step-note">${step.note}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="routine-card pm-routine">
                    <h4>🌙 Evening Routine</h4>
                    ${routine.pm.map((step, idx) => `
                        <div class="routine-step">
                            <span class="step-number">${idx + 1}</span>
                            <div class="step-details">
                                <strong>${step.step}</strong>
                                <p class="product-name">${step.product.name}</p>
                                <p class="step-note">${step.note}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="tips-section">
            <h3>💡 Personalized Tips</h3>
            <ul>
                ${archetype.tips.map(tip => `<li>${tip}</li>`).join('')}
                <li>Always patch test new products for 48 hours</li>
                <li>Introduce one new product at a time</li>
            </ul>
        </div>
        
        <div class="avoid-section">
            <h3>⚠️ Ingredients to Avoid</h3>
            <p>${archetype.avoid.join(', ')}</p>
        </div>
        
        <button onclick="resetAll()" class="reset-button">Start Over</button>
    `;
    
    resultsContent.innerHTML = html;
    
    // Add custom styles for results
    addResultsStyles();
}

function addResultsStyles() {
    // Check if styles already exist
    if (document.getElementById('results-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'results-styles';
    styles.textContent = `
        .results-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .archetype-badge {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 25px;
            font-weight: 600;
            margin-top: 1rem;
        }
        
        .results-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .result-card {
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .result-card h3 {
            color: #4CAF50;
            margin-bottom: 1rem;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 0.5rem;
        }
        
        .profile-summary ul {
            list-style: none;
        }
        
        .profile-summary li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .ingredient-item {
            background: #f7fafc;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 0.75rem;
            border-left: 4px solid #4CAF50;
        }
        
        .concentration {
            float: right;
            background: #4CAF50;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: 600;
        }
        
        .warning-tag {
            display: inline-block;
            background: #fed7d7;
            color: #c53030;
            padding: 0.25rem 0.5rem;
            border-radius: 5px;
            font-size: 0.75rem;
            margin-top: 0.5rem;
        }
        
        .routine-section {
            margin: 2rem 0;
        }
        
        .routine-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }
        
        .routine-card {
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .am-routine {
            border-top: 4px solid #f6ad55;
        }
        
        .pm-routine {
            border-top: 4px solid #667eea;
        }
        
        .routine-card h4 {
            margin-bottom: 1rem;
            color: #2d3748;
        }
        
        .routine-step {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1rem 0;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .step-number {
            width: 30px;
            height: 30px;
            background: #4CAF50;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            flex-shrink: 0;
        }
        
        .step-details strong {
            display: block;
            color: #2d3748;
            margin-bottom: 0.25rem;
        }
        
        .product-name {
            color: #667eea;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        
        .step-note {
            font-size: 0.9rem;
            color: #718096;
        }
        
        .tips-section, .avoid-section {
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            margin: 1.5rem 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .tips-section h3 {
            color: #4CAF50;
        }
        
        .avoid-section h3 {
            color: #e53e3e;
        }
        
        .tips-section ul {
            list-style: none;
            padding-left: 0;
        }
        
        .tips-section li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
        }
        
        .tips-section li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #4CAF50;
            font-weight: bold;
        }
        
        .reset-button {
            width: 100%;
            padding: 1rem;
            background: #e2e8f0;
            color: #4a5568;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 1rem;
        }
        
        .reset-button:hover {
            background: #cbd5e0;
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .results-grid,
            .routine-columns {
                grid-template-columns: 1fr;
            }
            
            .concentration {
                float: none;
                display: inline-block;
                margin-top: 0.5rem;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function showWarning(message) {
    // Remove existing warning
    hideWarning();
    
    const warningDiv = document.createElement('div');
    warningDiv.id = 'dynamic-warning';
    warningDiv.className = 'warning-banner';
    warningDiv.style.cssText = `
        background: #fed7d7;
        color: #c53030;
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
        border-left: 4px solid #e53e3e;
        font-weight: 500;
    `;
    warningDiv.textContent = message;
    
    const firstSection = document.querySelector('.section');
    firstSection.insertBefore(warningDiv, firstSection.firstChild);
}

function hideWarning() {
    const existing = document.getElementById('dynamic-warning');
    if (existing) existing.remove();
}

function resetAll() {
    console.log('Resetting all selections...');
    
    // Reset state
    state.fitzpatrick = null;
    state.age = null;
    state.concerns = [];
    state.triggers = [];
    state.pregnancy = false;
    state.budget = '';
    state.brandPreference = '';
    state.climate = '';
    state.gender = '';
    
    // Reset UI
    document.querySelectorAll('.card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('select').forEach(select => select.value = '');
    
    // Hide results
    document.getElementById('results').classList.remove('active');
    document.getElementById('results-content').innerHTML = '';
    
    // Remove warning
    hideWarning();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('Reset complete');
}

// Console welcome message
console.log('%c DermaGuide AI ', 'background: linear-gradient(135deg, #4158D0, #C850C0); color: white; font-size: 24px; font-weight: bold; padding: 10px; border-radius: 10px;');
console.log('%c Created by Ifham Bashir - Class 12 | PCMB | AI Enthusiast ', 'color: #C850C0; font-size: 14px;');
