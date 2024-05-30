import { json } from '@sveltejs/kit';
import { mysqlconnFn } from '../../../hooks.server';

// Helper function to introduce a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const GET = async ({ fetch }) => {
    console.log('GET /api/muscle');
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

    const allexercises = [];

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
            const exercises = await response.json();
            allexercises.push(exercises);
            console.log(exercises);
        }
    } catch (error) {
        console.error(`Error fetching data, Error: ${error.message}`);
    }
    

    try {
        allexercises.forEach(async (exercise) => {
            const { name, type, muscle, equipment, difficulty, instructions } = exercise;
            const query = `
                INSERT INTO exercises (name, type, muscle, equipment, difficulty, instructions)
                VALUES (?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE 
                    type = VALUES(type),
                    muscle = VALUES(muscle),
                    equipment = VALUES(equipment),
                    difficulty = VALUES(difficulty),
                    instructions = VALUES(instructions)
            `;

            await mysqlconn.query(query, [name, type, muscle, equipment, difficulty, instructions]);
            console.log(`Inserted exercise: ${exercise.name}`);
        });
    }
    catch (error) {
        console.error(`Error inserting data, Error: ${error.message}`);
    }


    return json({ message: 'Exercises inserted into the database successfully', exercises: allexercises });
};
