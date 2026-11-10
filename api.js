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