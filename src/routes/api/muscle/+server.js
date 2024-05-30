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

    console.log(muscles);

    const allexercises = [];

    for (const muscle of muscles) {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
                headers: {
                    'X-Api-Key': 'mdSFB21Rg1wlfhJmUeT+aQ==Sq8gwUUGDxp8NOYB'
                }
            });

            if (!response.ok) {
                console.error(`Failed to fetch data for muscle: ${muscle}, Status: ${response.status}`);
            } else {
                console.log(`Fetched data for muscle: ${muscle}`);
                const exercises = await response.json();
                allexercises.push(...exercises);
            }

            // Introduce a delay of 1 second between requests
            await delay(1000);
        } catch (error) {
            console.error(`Error fetching data for muscle: ${muscle}, Error: ${error.message}`);
        }
    }

    // Insert the exercises into the database
    const insertExercisesPromises = allexercises.map(async (exercise) => {
        try {
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
        } catch (error) {
            console.error(`Error inserting exercise: ${exercise.name}, Error: ${error.message}`);
        }
    });

    await Promise.all(insertExercisesPromises);

    return json({ message: 'Exercises inserted into the database successfully', exercises: allexercises });
};
