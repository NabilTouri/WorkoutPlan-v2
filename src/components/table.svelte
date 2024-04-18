<script>
    export let filteredTraining
</script>

<div class="py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
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
                            class={`
                            inline-flex px-2 text-xs font-semibold leading-5 rounded-full capitalize
                            ${training.difficulty === 'beginner' ? 'text-green-800 bg-green-100' : ''}
                            ${training.difficulty === 'intermediate' ? 'text-orange-800 bg-orange-100' : ''}
                            ${training.difficulty === 'expert' ? 'text-red-800 bg-red-100' : ''}
                            `}>
                            {training.difficulty}
                        </span>
                    </td>
                    <td
                        class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-nowrap border-b border-gray-200">
                        <a href="#edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
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