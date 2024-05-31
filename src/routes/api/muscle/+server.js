import { json } from '@sveltejs/kit';
import { mysqlconnFn } from '../../../hooks.server';

// Helper function to introduce a delay

export const GET = async ({ fetch }) => {
    const mysqlconn = await mysqlconnFn();
    const muscles = [
        'abdominals',
        'abductors',
        'adductors',
        'biceps',
        'calves',
        'chest',
        'forearms',
        'glutes',
        'hamstrings',
        'lats',
        'lower_back',
        'middle_back',
        'neck',
        'quadriceps',
        'traps',
        'triceps',
    ];

    const exercises = [];

    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?difficulty=expert`, {
            headers: {
                'X-Api-Key': 'mdSFB21Rg1wlfhJmUeT+aQ==Sq8gwUUGDxp8NOYB'
            }
        });
        if (!response.ok) {
            console.error(`Failed to fetch data, Status: ${response.status}`);
        } else {
            console.log(`Fetched data`);
            const data = await response.json();
            exercises.push(...data);
        }
    } catch (error) {
        console.error(`Error fetching data, Error: ${error.message}`);
    }
    
    try {
        exercises.forEach(async (exercise) => {
            const { name, type, muscle, equipment, difficulty, instructions } = exercise;
            const query = `INSERT INTO exercises (name, type, muscle, equipment, difficulty, instructions) VALUES (?, ?, ?, ?, ?, ?)`;
            await mysqlconn.query(query, [name, type, muscle, equipment, difficulty, instructions]);
            console.log(`Inserted data for ${name}`);
        });
    }
    catch (error) {
        console.error(`Error inserting data, Error: ${error.message}`);
    }
   


    return json({ exercises });
};
