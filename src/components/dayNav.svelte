<script>
    export let days
    export let currentPage
    export let handlePageClick
</script>

<div class="flex items-center justify-between py-3">
    <div class="flex flex-1 items-center justify-center">
      
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {#each days as day}
            <button 
                 class={`
                     relative inline-flex items-center justify-center py-2 text-sm font-semibold
                     ${currentPage.name === day.name ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}
                     ${day.name === 'Sunday' ? 'rounded-r-md' : ''}
                     ${day.name === 'Monday' ? 'rounded-l-md' : ''}
                     w-28
                 `}
                 on:click={() => handlePageClick(day)}
                >
                {day.name}
            </button>
            {/each}
          </nav>
      
    </div>
</div>