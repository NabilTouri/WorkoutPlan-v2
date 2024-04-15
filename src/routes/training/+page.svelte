<script>
    export let data

    const title = data.title
    const days = data.days
    const trainings = data.trainings

    let currentPage = 'Monday'; // Imposta la pagina attuale
    let filteredTraining = trainings.filter(item => item.day === currentPage); // Filtra i dati in base alla pagina attuale
    // Funzione per gestire il clic su un elemento della navigazione
    function handlePageClick(day) {
        currentPage = day;
        filteredTraining = trainings.filter(item => item.day === day);
    }
</script>

<!-- component -->
<div class="container px-6 py-8 mx-auto">
    <h3 class="text-4xl font-bold text-white">{title}</h3>
    <p class="mt-4 text-lg text-gray-300">Make your own training program for the week</p>
    <div class="flex flex-col mt-8">
        <div class="flex items-center justify-between py-3">
            <div class="flex flex-1 items-center justify-center">
              
                <nav class="bg-white isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    {#each days as day}
                    <button 
                         class={`
                             relative inline-flex items-center px-4 py-2 text-sm font-semibold
                             ${currentPage === day.name ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}
                             ${day.name === 'Sunday' ? 'rounded-r-md' : ''}
                             ${day.name === 'Monday' ? 'rounded-l-md' : ''}
                         `}
                         on:click={() => handlePageClick(day.name)}
                        >
                        {day.name}
                    </button>
                    {/each}
                  </nav>
              
            </div>
        </div>
          
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th
                                class="px-6 py-3 w-2/5 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Exercise</th>
                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Sets</th>
                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Reps</th>
                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Difficulty</th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        {#each filteredTraining as training}
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                
                                <div class="ml-4">
                                    <div class="text-sm font-medium leading-5 text-gray-900">{training.exercise}
                                    </div>
                                    <div class="text-sm leading-5 text-gray-500">{training.muscle}</div>
                                </div>
                                
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">{training.sets}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">{training.repetitions}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                <span
                                    class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{training.difficulty}</span>
                            </td>
                            <td
                                class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-nowrap border-b border-gray-200">
                                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
                <div class="absolute z-[-1] w-[40%] h-[35%] top-0 pink__gradient" />
            <div class="absolute z-[-1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div class="absolute z-[-1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
        </div>
    </div>
</div>

