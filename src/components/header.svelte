<script>
    import { goto, preloadCode } from '$app/navigation';
    export let y;
    export let user;
</script>

<header class={"sticky z-[10] top-0 duration-200 flex flex-col sm:flex-row items-center justify-between border-b border-solid px-10 sm:px-20" +
        (y > 0 ? " py-6 backdrop-blur-md bg-primary/50 border-secondary" : " py-6 bg-transparent border-transparent")}>
    <a href="/">    
        <h1 class="font-medium text-lg text-center sm:text-left">
            <b class="text-white font-bold poppins">Workout</b> <span class="text-secondary">Plan</span>
        </h1>
    </a>
    <div class="hidden sm:flex sm:gap-5 md:gap-20">
        <div class="text-white flex items-center gap-4 md:gap-16">
            <a href="#home" class="duration-200 hover:text-violet-400">
                <p>Home</p>
            </a>
            <a href="#about" class="duration-200 hover:text-violet-400">
                <p>About</p>
            </a>
            <a href="#projects" class="duration-200 hover:text-violet-400">
                <p>Projects</p>
            </a>
        </div>

        {#if user}
        <div class="group relative">
            <button>
                <svg class="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" id="profile">
                    <g fill="none" fill-rule="evenodd">
                        <g fill="#fff" transform="translate(-140 -2159)">
                            <g transform="translate(56 160)">
                                <path d="M100.563 2017H87.438c-.706 0-1.228-.697-.961-1.338 1.236-2.964 4.14-4.662 7.523-4.662 3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338m-10.646-12c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4s-1.831 4-4.083 4c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </button>

                <div class="absolute hidden group-focus-within:block z-10 -translate-x-1/2">
                    <div class=" flex-auto overflow-hidden rounded-xl text-sm leading-6 shadow-lg border-b border-black">
                        <div class="p-4 text-white">
                            <div class="group relative flex gap-x-6 rounded-lg p-2">
                                <span class="font-semibold">
                                    Benvenuto <br>
                                    { user.name } { user.surname }!
                                    <span class="absolute inset-0"></span>
                                </span>
                            </div>
                            <div class="group relative flex gap-x-6 rounded-lg p-2">
                                <button class="font-semibold"
                                    on:focus={async () => {
                                        await preloadCode('/profile');
                                    }}
                                    on:mouseover={async () => {
                                        await preloadCode('/profile');
                                    }}
                                    on:click={async () => {
                                        goto('/profile');
                                    }}
                                >
                                    Profile
                                    
                                </button>
                                <button on:click={() => goto('/auth/logout')} class="font-semibold">
                                    Logout 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            
        
        
            
        {:else}
            <button class="blueShadow relative overflow-hidden px-2 sm:px-5 py-2 group rounded-full bg-white text-slate-950">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
                <h4 class="relative z-9">Login</h4>
            </button>
        {/if}
    </div>
</header>

