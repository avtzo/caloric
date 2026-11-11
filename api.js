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

export async function fetchMacros(calories) {
    try {
        const params = new URLSearchParams({
            calories: calories,
            split: "balanced"
        });

        const response = await fetch(`https://nutraplanner.com/api/public/v1/calculators/macros?${params}`);

        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }

        const data = await response.json();
        return data;
        
    } catch(error) {
        console.error(`Error fetching macros: ${error.message}`);
    }
}

export async function fetchMeals(macros) {
    const API_KEY = "742906af2ad98ed82878e238fa0b7e0b";
    const APP_ID = "59478a40";

    const { calories, protein, fat, carbs } = macros;

    try {
        const response = await fetch(`https://api.edamam.com/api/meal-planner/v1/${APP_ID}/select?type=edamam-generic`);

        if (!response.ok) {
            const errorData = await response.text();

            console.error("Edamam API Error:", {
                status: response.status,
                message: errorData
            });

            throw new Error(`API Error ${response.status}: ${errorData}`);
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch(error) {
        console.error("Error: " + error.message);
    }
}