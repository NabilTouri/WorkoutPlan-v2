import { json } from '@sveltejs/kit'
import { mysqlconnFn } from '../../../hooks.server';

export const GET = async (loadEvent) => {
    const mysqlconn = await mysqlconnFn();
    const muscles = [
        'cardio',
        'olympic_weightlifting',
        'plyometrics',
        'powerlifting',
        'strength',
        'stretching',
        'strongman'
    ];

    const { fetch } = loadEvent;

    let allexercises = []

    muscles.forEach(async muscle => {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        headers: {
            'X-Api-Key': 'mdSFB21Rg1wlfhJmUeT+aQ==Sq8gwUUGDxp8NOYB'
        }
        });
    if (!response.ok) {
        throw new Error(`Failed to fetch data for muscle: ${muscleName}`);
    }
    const exercises = await response.json();
     allexercises.push(exercises)
    });
    
    
    

    // Supponendo che 'exercises' sia un array di oggetti contenente gli esercizi da inserire
    
         // Definisci l'istruzione di inserimento

        // Esegui l'istruzione di inserimento per ciascun esercizio
        // exercises.forEach(async (exercise) => {
        //     await mysqlconn.query(`
        //         INSERT INTO exercises (name, type, muscle, equipment, difficulty, instructions)
        //         VALUES (?, ?, ?, ?, ?, ?)`,
        //         [
        //             exercise.name,
        //             exercise.type,
        //             exercise.muscle,
        //             exercise.equipment,
        //             exercise.difficulty,
        //             exercise.instructions
        //         ]
        //     );
        // });
    


    return json(allexercises);
} 
