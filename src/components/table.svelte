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
                    <td
                        class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-nowrap border-b border-gray-200">
                        <a href="#edit" class="text-indigo-600 hover:text-indigo-900"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xml:space="preserve">

                            <defs>
                            </defs>
                            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                <path d="M 64.71 90 H 25.291 c -4.693 0 -8.584 -3.67 -8.859 -8.355 l -3.928 -67.088 c -0.048 -0.825 0.246 -1.633 0.812 -2.234 c 0.567 -0.601 1.356 -0.941 2.183 -0.941 h 59.002 c 0.826 0 1.615 0.341 2.183 0.941 c 0.566 0.601 0.86 1.409 0.813 2.234 l -3.928 67.089 C 73.294 86.33 69.403 90 64.71 90 z M 18.679 17.381 l 3.743 63.913 C 22.51 82.812 23.771 84 25.291 84 H 64.71 c 1.52 0 2.779 -1.188 2.868 -2.705 l 3.742 -63.914 H 18.679 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 80.696 17.381 H 9.304 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 71.393 c 1.657 0 3 1.343 3 3 S 82.354 17.381 80.696 17.381 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 58.729 17.381 H 31.271 c -1.657 0 -3 -1.343 -3 -3 V 8.789 C 28.271 3.943 32.214 0 37.061 0 h 15.879 c 4.847 0 8.789 3.943 8.789 8.789 v 5.592 C 61.729 16.038 60.386 17.381 58.729 17.381 z M 34.271 11.381 h 21.457 V 8.789 C 55.729 7.251 54.478 6 52.939 6 H 37.061 c -1.538 0 -2.789 1.251 -2.789 2.789 V 11.381 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 58.33 74.991 c -0.06 0 -0.118 -0.002 -0.179 -0.005 c -1.653 -0.097 -2.916 -1.517 -2.819 -3.171 l 2.474 -42.244 c 0.097 -1.655 1.508 -2.933 3.171 -2.819 c 1.653 0.097 2.916 1.516 2.819 3.17 l -2.474 42.245 C 61.229 73.761 59.906 74.991 58.33 74.991 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 31.669 74.991 c -1.577 0 -2.898 -1.23 -2.992 -2.824 l -2.473 -42.245 c -0.097 -1.654 1.165 -3.073 2.819 -3.17 c 1.646 -0.111 3.073 1.165 3.17 2.819 l 2.473 42.244 c 0.097 1.654 -1.165 3.074 -2.819 3.171 C 31.788 74.989 31.729 74.991 31.669 74.991 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 45 74.991 c -1.657 0 -3 -1.343 -3 -3 V 29.747 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 42.244 C 48 73.648 46.657 74.991 45 74.991 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            </g>
                            </svg></a>
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