const userDetailsEl = document.querySelector(".user-details-container");
const recipesContainer = document.querySelector(".recipes-container");


export function displayUserDetailsContainer(questionType) {
    if (questionType === "gender") {
        userDetailsEl.innerHTML = 
        `
            <h1>Select your Gender</h1>
            <button type="button" class="gender-btn" data-gender="male">Male</button>
            <button type="button" class="gender-btn" data-gender="female">Female</button>
            <button type="button" class="confirm-detail-btn confirm-gender-btn">Confirm</button>
        `;
    } else if (questionType === "age") {
        userDetailsEl.innerHTML = 
        `
            <h1>Enter your age</h1>
            <input type="number" class="age-input">
            <button type="button" class="confirm-detail-btn confirm-age-btn">Confirm</button>
            <button type="button" class="go-back-btn">Go Back</button>
            `;
    } else if (questionType === "weight") {
        userDetailsEl.innerHTML = 
        `
            <h1>Enter your weight</h1>
            <input type="number" class="weight-input">
            <button type="button" class="confirm-detail-btn confirm-weight-btn">Confirm</button>
            <button type="button" class="go-back-btn">Go Back</button>
        `;
    } else if (questionType === "height") {
        userDetailsEl.innerHTML = 
        `
            <h1>Enter your height</h1>
            <input type="number" class="height-input">
            <button type="button" class="confirm-detail-btn confirm-height-btn">Confirm</button>
            <button type="button" class="go-back-btn">Go Back</button>
        `;
    } else if (questionType === "activity") {
        userDetailsEl.innerHTML = 
        `
            <h1>Activity level</h1>
            <select class="activity-select">
                <option value="">Please select an option</option>
                <option value="sedentary">None</option>
                <option value="light">Light</option>
                <option value="moderate">Moderate</option>
                <option value="active">Active</option>
                <option value="very_active">Very Active</option>
            </select>
            <button type="button" class="confirm-detail-btn confirm-activity-btn">Confirm</button>
            <button type="button" class="go-back-btn">Go Back</button>
        `;
    } else if (questionType === "goal") {
        userDetailsEl.innerHTML = 
        `
            <h1>Target Goal</h1>
            <button type="button" class="goal-btn" data-goal="lose">Weight Loss</button>
            <button type="button" class="goal-btn" data-goal="mild_lose">Mild Weight Loss</button>
            <button type="button" class="goal-btn" data-goal="maintain">Maintain Weight</button>
            <button type="button" class="goal-btn" data-goal="mild_gain">Mild Weight Gain</button>
            <button type="button" class="goal-btn" data-goal="gain">Weight Gain</button>
            <button type="button" class="confirm-detail-btn confirm-goal-btn">Confirm</button>
            <button type="button" class="go-back-btn">Go Back</button>
        `;
    } else if (questionType === "exclude") {
        userDetailsEl.innerHTML = 
        `
            <h1>Anything to exclude?</h1>
            <div class="exclude-btns>
                <button type="button" class="exclude-btn" data-exclude="dairy">Dairy</button>
                <button type="button" class="exclude-btn" data-exclude="egg">Eggs</button>
                <button type="button" class="exclude-btn" data-exclude="gluten">Gluten</button>
                <button type="button" class="exclude-btn" data-exclude="grain">Grains</button>
                <button type="button" class="exclude-btn" data-exclude="peanut">Peanuts</button>
                <button type="button" class="exclude-btn" data-exclude="seafood">Seafood</button>
                <button type="button" class="exclude-btn" data-exclude="sesame">Sesame</button>
                <button type="button" class="exclude-btn" data-exclude="shellfish">Shellfish</button>
                <button type="button" class="exclude-btn" data-exclude="soy">Soy</button>
                <button type="button" class="exclude-btn" data-exclude="sulfite">Sulfite</button>
                <button type="button" class="exclude-btn" data-exclude="tree_nut">Tree nut</button>
                <button type="button" class="exclude-btn" data-exclude="wheat">Wheat</button>
            </div>
            <button type="button" class="confirm-detail-btn confirm-exclude-btn">Confirm</button>
            <button type="button" class="go-back-btn">Go Back</button>
        `;
    }
}

export function displayDailyMeal(dayName, dayData) {
    if (!dayData || !dayData.meals) return;

    const meals = dayData.meals;
    const nutrients = dayData.nutrients;

    const getImageUrl = (id) => `https://img.spoonacular.com/recipes/${id}-312x231.jpg`;

    recipesContainer.innerHTML += `
        <div id="${dayName}">
            <h1>${String(dayName).toLocaleUpperCase()}</h1>
            <div class="daily-meals">
                <div class="meal1">
                    <img src="${getImageUrl(meals[0].id)}" alt="${meals[0].title}">
                    <h1>${meals[0].title}</h1>
                </div>
                <div class="meal2">
                    <img src="${getImageUrl(meals[1].id)}" alt="${meals[1].title}">
                    <h1>${meals[1].title}</h1>
                </div>
                <div class="meal3">
                    <img src="${getImageUrl(meals[2].id)}" alt="${meals[2].title}">
                    <h1>${meals[2].title}</h1>
                </div>
            </div>
            <div class="meal-plan-nutrients"> 
                <p class="nutrient-calories">Calories: ${Math.round(nutrients.calories)} kcal</p>
                <p class="nutrient-carbs">Carbs: ${Math.round(nutrients.carbohydrates)}g</p>
                <p class="nutrient-fat">Fat: ${Math.round(nutrients.fat)}g</p>
                <p class="nutrient-protein">Protein: ${Math.round(nutrients.protein)}g</p>
            </div>
        </div>
    `;
}