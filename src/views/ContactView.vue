<template>
  <div class="flex items-center min-h-screen g-gradient-to-br from-black to-red-900 p-4">
    <div class="container mx-auto">
      <div class="max-w-lg mx-auto my-10 bg-white/10 backdrop-blur-md p-5 rounded-md shadow-lg transform transition duration-500 hover:scale-105">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-white">
            Contactez-Moi
          </h1>
          <p class="text-white text-sm">
            Si vous souhaitez me poser des questions alors n'hésitez pas !
          </p>
        </div>
        
        <div class="m-7">
          <form action="https://api.web3forms.com/submit" method="POST" id="form" class="animate-fade-in-up">
            <input type="hidden" name="access_key" value="your_access_key" />
            <input type="hidden" name="subject" value="Mail Podcasts" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" id="" style="display: none;" />
            <div class="mb-6">
              <label for="name" class="block mb-2 text-sm text-white">Nom</label>
              <input type="text" name="name" id="name" placeholder="Regina Phalange / Central Perk" required class="w-full px-3 py-2 placeholder-gray-300 bg-white/20 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300" />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm text-white">Email</label>
              <input type="email" name="email" id="email" placeholder="Votre Mail" required class="w-full px-3 py-2 placeholder-gray-300 bg-white/20 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300" />
            </div>
            <div class="mb-6">
              <label for="phone" class="text-sm text-white">Numéro de téléphone</label>
              <input type="text" name="phone" id="phone" placeholder="Votre Numéro" required class="w-full px-3 py-2 placeholder-gray-300 bg-white/20 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300" />
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm text-white">Votre Message</label>
              <textarea rows="5" name="message" id="message" placeholder="Votre Message" class="w-full px-3 py-2 placeholder-gray-300 bg-white/20 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300" required></textarea>
            </div>
            <div class="mb-6">
              <button type="submit" class="w-full px-3 py-4 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none shadow-lg transform transition duration-500 hover:scale-105">
                Envoyer le Message
              </button>
            </div>
            <p class="text-base text-center text-white" id="result"></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.5s ease-out both;
  }
</style>


<script>



</script>

<style scoped>

</style>