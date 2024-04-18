<script>
    export let data
    import Table from '../../components/table.svelte';
    import DayNav from '../../components/dayNav.svelte'
    const title = data.title
    const days = data.days
    const trainings = data.trainings

    let currentPage = 'Monday'; // Imposta la pagina attuale
    let filteredTraining = trainings.filter(item => item.day === currentPage); // Filtra i dati in base alla pagina attuale
    // Funzione per gestire il clic su un elemento della navigazione
    const handlePageClick = (day) => {
        currentPage = day;
        filteredTraining = trainings.filter(item => item.day === day);
    }

</script>

<!-- component -->
<div class="container px-6 py-8 mx-auto">
    <h3 class="text-4xl font-bold text-white">{title}</h3>
    <p class="mt-4 text-lg text-gray-300">Make your own training program for the week</p>
    <div class="flex flex-col mt-8">
        <div class="flex items-center justify-between"> <!-- Contenitore per DayNav e pulsante -->
            <DayNav {days} {currentPage} {handlePageClick}></DayNav>
            <button on:click={() => alert('ciao')} class="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700">
                Aggiungi
            </button>
        </div>
        <!-- <form method="post" action="?/add" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input type="text" name="exercise" placeholder="exercise" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input type="text" name="sets" placeholder="sets" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4">
            <input type="text" name="repetitions" placeholder="reps" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4">
            <input type="text" name="day" placeholder="day" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4">
            <input type="text" name="user" placeholder="user" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Add</button>
        </form>

        <div class="flex items-center justify-center">
            <button on:click={add} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4">Add</button>
        </div> -->

        <Table {filteredTraining}></Table>
    </div>
</div>

