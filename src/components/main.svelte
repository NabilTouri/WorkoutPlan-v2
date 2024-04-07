<script>
  import { goto, preloadCode } from '$app/navigation';
</script>

<section id="home" class="flex md:flex-row flex-col sm:py-16 py-6 px-10 sm:px-20">
    <div class="flex-1 flex justify-center items-start flex-col">

      <div class="flex flex-row justify-between items-center w-full">
        <h1 class="text-center md:text-left flex-1 font-poppins font-semibold lg:text-[72px] text-[52px] text-white md:leading-[100.8px] leading-[75px]">
          Welcome to <br />{" "}
          <span class="text-secondary">Workout Plan</span>{" "}
        </h1>
      </div>
      <p class=" font-poppins font-normal md:text-[24px] text-white text-[18px] leading-[30.8px] md:leading-[40.8px] max-w-[700px] mt-5">
        Empower your fitness journey with Workout Plan!
      </p>

      <div class="flex flex-col md:flex-row gap-5 md:gap-10 mt-10">
        <button class="bg-white text-primary font-semibold font-poppins px-5 py-2 rounded-lg hover:bg-primary hover:text-white duration-200"
        on:focus={async () => {
          await preloadCode('/training');
        }}
        on:mouseover={async () => {
            await preloadCode('/training');
        }}
        on:click={() => {
            goto('/training');
        }}
        >
          Get Started
        </button>
        <button class="bg-transparent text-white font-semibold font-poppins px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-primary duration-200">
          Learn More
        </button>
      </div>
    </div>

    <div class="flex-1 flex justify-center items-center md:my-0 my-10 relative">
      <svg class="w-full h-auto lg:h-[640px]" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <mask id="mask0" mask-type="alpha">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        </mask>
        <g mask="url(#mask0)">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            <image class="w-[370px]" x="-80" y="0" xlink:href="images/cover.png"/>
        </g>
    </svg>

      <!-- background start -->
      <div class="absolute z-[-1] w-[40%] h-[35%] top-0 pink__gradient" />
      <div class="absolute z-[-1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div class="absolute z-[-1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <!-- background end -->
    </div>
  </section>