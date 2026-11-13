export async function fetchTargetCalories(userObj) {
    try {
        const params = new URLSearchParams({
            sex: userObj.gender,
            age: userObj.age,
            weight_kg: userObj.weight,
            height_cm: userObj.height,
            activity: userObj.activity,
            goal: userObj.goal
        });

        const response = await fetch(`https://nutraplanner.com/api/public/v1/calculators/calorie-target?${params}`);
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }
        const data = await response.json();
        return data;

    } catch(error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

export async function fetchMeals(macros) {
    const API_KEY = "3650e06830af41b5ae4edc7bbde23ae5";

    try {
        const params = new URLSearchParams({
            apiKey: API_KEY,
            timeFrame: "week",     
            targetCalories: macros.target_calories,
            diet: "protein"             
        });

        const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?${params}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }

        console.log("Weekly Meal Plan:", data);
        return data; 

    } catch (error) {
        console.error("Meal Plan Error:", error);
        throw error;
    }
}
