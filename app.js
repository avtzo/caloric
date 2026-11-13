import { displayUserDetailsContainer, displayDailyMeal } from "./ui.js";
import { fetchTargetCalories, fetchMeals } from "./api.js";

// DOM Elements

const userDetailsScreen = document.querySelector(".user-details");
const resultsScreen = document.querySelector(".result-screen");
const recipesContainer = document.querySelector(".recipes-container");


// Global Variables

let userGender = "";
let userAge = "";
let userCurrentWeight = "";
let userHeight = "";
let userActivityLevel = "";
let userGoal = "";
let userExclude = [];

let USER_MACROS = {
    target_calories: "",
    excluded: []
};

let nextDetail = "gender"; // For user questions
let previousDetail = "";

displayUserDetailsContainer("gender");

function createObjectData(gender, age, weight, height, activity, goal) {
    const userData = new Object();
    userData.gender = gender;
    userData.age = age;
    userData.weight = weight;
    userData.height = height;
    userData.activity = activity;
    userData.goal = goal;

    return userData;
}

document.addEventListener("click", async (e) => {
    // GENDER
    const confirmGenderBtn = e.target.closest(".confirm-gender-btn");
    const genderBtns = e.target.closest(".gender-btn");

    if (genderBtns) {
        userGender = genderBtns.dataset.gender;
    }
    if (confirmGenderBtn) { 
        if (userGender === "") {
            alert("Please select your gender");
            return;
        }

        previousDetail = nextDetail;
        nextDetail = "age";
        displayUserDetailsContainer(nextDetail);
    }

    // AGE
    const confirmAgeBtn = e.target.closest(".confirm-age-btn");
    const ageInput = document.querySelector(".age-input");

    if (confirmAgeBtn) {                
        if (ageInput.value === "") {
            alert("Please enter your age");
            return;
        }

        userAge = Number(ageInput.value);
        previousDetail = nextDetail;
        nextDetail = "weight";
        displayUserDetailsContainer(nextDetail)
    }

    // WEIGHT
    const confirmWeightBtn = e.target.closest(".confirm-weight-btn");
    const weightInput = document.querySelector(".weight-input");

    if (confirmWeightBtn) {        
        if (weightInput.value === "") {
            alert("Please enter your weight");
            return;
        }

        userCurrentWeight = Number(weightInput.value);
        previousDetail = nextDetail;
        nextDetail = "height";
        displayUserDetailsContainer(nextDetail);
    }

    // HEIGHT
    const confirmHeightBtn = e.target.closest(".confirm-height-btn");
    const heightInput = document.querySelector(".height-input");

    if (confirmHeightBtn) {
        if (heightInput.value === "") {
            alert("Please enter your height");
            return;
        }

        userHeight = Number(heightInput.value);
        previousDetail = nextDetail;
        nextDetail = "activity";
        displayUserDetailsContainer(nextDetail);
    }

    // ACTIVITY LEVEL
    const confirmActivityBtn = e.target.closest(".confirm-activity-btn");
    const activitySelect = document.querySelector(".activity-select");

    if (confirmActivityBtn) {
        if (activitySelect.value === "") {
            alert("Please select your activity level");
            return;
        }

        userActivityLevel = activitySelect.value;
        previousDetail = nextDetail;
        nextDetail = "goal";
        displayUserDetailsContainer(nextDetail);
    }

    // GOAL
    const confirmGoalBtn = e.target.closest(".confirm-goal-btn");
    const goalSelectBtns = e.target.closest(".goal-btn");
    
    if (goalSelectBtns) {
        userGoal = goalSelectBtns.dataset.goal;
    }

    if (confirmGoalBtn) {
        if (userGoal === "") {
            alert("Please select your goal");
            return;
        }

        previousDetail = nextDetail;
        nextDetail = "exclude";
        displayUserDetailsContainer(nextDetail);

    }

    // EXCLUDE
    const confirmExcludeBtn = e.target.closest(".confirm-exclude-btn");
    const excludeBtn = e.target.closest(".exclude-btn");

    if (excludeBtn) {
        if (userExclude.includes(excludeBtn.dataset.exclude)) {
            userExclude.splice(userExclude.indexOf(excludeBtn.dataset.exclude), 1);
        } else {
            userExclude.push(excludeBtn.dataset.exclude);
        }
        console.log(userExclude);
    }

    if (confirmExcludeBtn) {

        const userObject = createObjectData(userGender, userAge, userCurrentWeight, userHeight, userActivityLevel, userGoal);
        const userTargetCalories = await fetchTargetCalories(userObject);
    
        if (!userTargetCalories) {
            alert("Could not calculate target calories. Try Again.");
            return;
        }
    
        USER_MACROS = {
            target_calories: userTargetCalories.target_kcal,
            excluded: [...userExclude]
        };
        
        const responseData = await fetchMeals(USER_MACROS);
        const weekDays = responseData.week;

        userDetailsScreen.classList.add("hidden");
        resultsScreen.classList.remove("hidden");

        for (let day in weekDays) {
            displayDailyMeal(day, weekDays[day]);
        }

    };
    // GO BACK BUTTON
    const goBackBtn = e.target.closest(".go-back-btn");
    if (goBackBtn) {
        nextDetail = previousDetail;
        displayUserDetailsContainer(previousDetail);
    };

});

