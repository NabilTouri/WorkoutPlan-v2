<script>
    import Table from '../../components/table.svelte';
    import DayNav from '../../components/dayNav.svelte';
    
    // Data
    export let data;
    const title = data.title;
    const days = data.days;
    const trainings = data.trainings;
    const exercises = data.exercises;
    const muscles = data.muscles;

    let currentPage = 'Monday'; // Actual page
    let filteredTraining = trainings.filter(item => item.day === currentPage); // Filtered training

    // State variables for selected muscle and filtered exercises
    let selectedMuscle = null;
    let filteredExercises = exercises;

    // Change page function
    const handlePageClick = (day) => {
        currentPage = day;
        filteredTraining = trainings.filter(item => item.day === day);
    };

    // Open modal function
    let isModalOpen = false;
    const isModal = () => {
        isModalOpen = true;
    };

    // Select muscle function to filter exercises
    const handleMuscleSelect = (e) => {
        const muscleName = e.target.value;
        selectedMuscle = muscleName;
        filteredExercises = exercises.filter(exercise => exercise.muscle === muscleName);
    };
</script>

<!-- component -->
<div class="container px-6 py-8 mx-auto">
    <h3 class="text-4xl font-bold text-white">{title}</h3>
    <p class="mt-4 text-lg text-gray-300">Make your own training program for the week</p>
    <div class="flex flex-col mt-8">
        <div class="flex items-center justify-between"> <!-- Contenitore per DayNav e pulsante -->
            <DayNav {days} {currentPage} {handlePageClick}></DayNav>
            <button on:click={isModal} class="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700">
                Aggiungi
            </button>
        </div>

        <Table {filteredTraining}></Table>
    </div>

    {#if isModalOpen}

        <div class="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center z-50 p-4">
            <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg h-auto overflow-auto">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-semibold text-gray-800">Aggiungi un nuovo training</h2>
                    <button class="text-gray-500 hover:text-gray-800" title="Chiudi" aria-label="Chiudi" on:click={() => isModalOpen = false}>
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <form method="post" action="?/add" class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-2">
                            <label for="training1" class="block text-gray-700 text-sm font-semibold mb-2">Scegli un esercizio</label>
                            <select name="exercise1" id="training1" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mb-4" on:change={handleMuscleSelect} required>
                                <option disabled selected value="" class="text-gray-500">Seleziona un esercizio</option>
                                {#each muscles as muscle}
                                    <option value="{muscle.muscle}" class="text-gray-900 text-base font-normal">{muscle.muscle}</option>
                                {/each}
                            </select>
                        </div>
                        <div class="col-span-2">
                            <label for="training2" class="block text-gray-700 text-sm font-semibold mb-2">Scegli un altro esercizio</label>
                            <select name="exercise2" id="training2" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mb-4" required>
                                <option disabled selected value="" class="text-gray-500">Seleziona un esercizio</option>
                                {#each filteredExercises as exercise}
                                    <option value="{exercise.id}" class="text-gray-900 text-base font-normal">{exercise.name}</option>
                                {/each}
                            </select>
                        </div>
                        <div class="col-span-1">
                            <label for="sets" class="block text-gray-700 text-sm font-semibold mb-2">Serie</label>
                            <input id="sets" type="number" min="1" placeholder="Serie" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mb-4" required>
                        </div>
                        <div class="col-span-1">
                            <label for="repetitions" class="block text-gray-700 text-sm font-semibold mb-2">Ripetizioni</label>
                            <input id="repetitions" type="number" min="1" placeholder="Ripetizioni" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mb-4" required>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button type="submit" class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Aggiungi</button>
                    </div>
                </form>
            </div>
        </div>
    
    {/if}

</div>
