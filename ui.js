const userDetailsEl = document.querySelector(".user-details-container");

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
    }
}