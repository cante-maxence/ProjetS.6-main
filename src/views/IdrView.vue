<template>

<figure class="max-w-screen-md my-10 text-white mx-auto text-center">
    <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p class="text-2xl italic font-medium text-white">"Il est inutile de parler de l'amour, car l'amour possède sa propre voix, et parle de lui-même"</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        
        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-00">
            <cite class="pe-3 font-medium text-white">Paulo Coelho   </cite>
            <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400 pl-2 ml-2">   Écrivain</cite>
        </div>
    </figcaption>
</figure>

    <div id="app" class="text-center">
      <PersonalityTest/>
    </div>


  </template>
  
  <script>
  import PersonalityTest from '../components/PersonalityTest.vue';
  
  export default {
    name: 'App',
    components: {
      PersonalityTest
    }
  };
  </script>
  