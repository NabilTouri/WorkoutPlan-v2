<script>
    import { createEventDispatcher } from 'svelte';
    import Table from '../../components/table.svelte';
    import DayNav from '../../components/dayNav.svelte'
    export let data

    const title = data.title
    const days = data.days
    const trainings = data.trainings
    const exercises = data.exercises

    let currentPage = 'Monday'; // Imposta la pagina attuale
    let filteredTraining = trainings.filter(item => item.day === currentPage); // Filtra i dati in base alla pagina attuale
    // Funzione per gestire il clic su un elemento della navigazione
    const handlePageClick = (day) => {
        currentPage = day;
        filteredTraining = trainings.filter(item => item.day === day);
    }
    let isModalOpen = false;

    const isModal = () => {
        isModalOpen = true;
    }
    
    // Variabile per gestire la visualizzazione del modal
    

    // Dispatcher per emettere eventi quando viene aggiunto un nuovo training
    const dispatch = createEventDispatcher();

    // Funzione per gestire l'aggiunta di un nuovo training
    const addTraining = () => {
        // Emetti un evento per notificare al componente padre che è stato aggiunto un nuovo training
        dispatch('trainingAdded', { day: currentPage });
        // Chiudi il modal
        isModalOpen = false;
    }
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
    <div>
        <div class="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center z-50">
            <div class="bg-white p-6 rounded-lg shadow-xl">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold text-gray-800">Aggiungi un nuovo training</h2>
                    <button class="text-gray-500 hover:text-gray-800" title="Chiudi" aria-label="Chiudi" on:click={() => isModalOpen = false}>
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <!-- Contenuto del form per l'aggiunta del training -->
                <form class="flex flex-col space-y-4">
                    
                    <div class="grid grid-cols-2 gap-4">
                        <select class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option disabled selected value="" class="text-gray-500">Select a training</option>
                            {#each exercises as exercise}
                                <option value={exercise.name} class="text-gray-900 text-base font-normal">{exercise.name}</option>
                            {/each}
                        </select>
                        <select class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option disabled selected value="" class="text-gray-500">Select a training</option>
                            {#each exercises as exercise}
                                <option value={exercise.name} class="text-gray-900 text-base font-normal">{exercise.name}</option>
                            {/each}
                        </select>
                        <input type="text" placeholder="Sets" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <input type="text" placeholder="Repetitions" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                    <button on:click={addTraining} class="bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Add</button>
                </form>
            </div>
        </div>
    </div>
{/if}


</div>
