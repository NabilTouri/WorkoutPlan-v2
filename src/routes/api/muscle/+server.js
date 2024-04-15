import { json } from '@sveltejs/kit'
import { mysqlconnFn } from '../../../hooks.server';

export const GET = async (loadEvent) => {
    const mysqlconn = await mysqlconnFn();
    const muscle = [
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
        'triceps'
    ];
    const { fetch } = loadEvent;

    const allExercises = [];

    for (const muscleName of muscle) {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscleName}`, {
            headers: {
                'X-Api-Key': 'mdSFB21Rg1wlfhJmUeT+aQ==Sq8gwUUGDxp8NOYB'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data for muscle: ${muscleName}`);
        }

        const exercises = await response.json();
        allExercises.push(...exercises);
    }

    return json(allExercises);
} 
