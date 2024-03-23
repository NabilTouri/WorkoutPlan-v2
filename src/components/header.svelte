<script>
    export let y;
</script>

<header class={"sticky z-[10] top-0 duration-200 flex flex-col sm:flex-row items-center justify-between border-b border-solid" +
        (y > 0 ? " py-6 bg-primary border-secondary" : " py-6 bg-transparent border-transparent")}>
        
    <h1 class="font-medium text-lg text-center sm:text-left">
        <b class="text-white font-bold poppins">Workout</b> <span class="text-secondary">Plan</span>
    </h1>
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
    
        <button class="blueShadow relative overflow-hidden px-2 sm:px-5 py-2 group rounded-full bg-white text-slate-950">
            <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h4 class="relative z-9">Get in touch</h4>
        </button>
    </div>
</header>

