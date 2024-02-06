<template>
    <div class="min-h-screen bg-gradient-to-br from-black to-red-900 flex items-center justify-center p-4">
      <div class="text-white max-w-md mx-auto p-5 bg-black/50 rounded-lg shadow-xl">
        <div v-if="currentQuestion < questions.length" class="space-y-4">
          <p class="text-lg font-semibold">{{ questions[currentQuestion].text }}</p>
          <div class="space-y-2">
            <button v-for="(answer, index) in questions[currentQuestion].answers" :key="index"
                    @click="selectAnswer(answer.score)"
                    class="w-full px-4 py-2 bg-white text-black rounded-md hover:bg-red-200 transition">
              {{ answer.text }}
            </button>
          </div>
        </div>
        <div v-else class="text-center p-6 bg-gray-800/50 rounded-lg shadow-lg">
          <p class="text-xl md:text-2xl font-bold text-red-300 mb-6">Votre langage d'amour principal est :</p>
          <p class="text-2xl md:text-3xl font-semibold text-white mb-4">{{ result }}</p>
          <img :src="resultImage" alt="Image du Résultat" class="mx-auto mb-4 max-h-40">
          <p class="text-md md:text-lg text-white mb-8">{{ resultSummary }}</p>
          <button @click="restartQuiz" class="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 font-semibold transition duration-300 ease-in-out shadow-md">
            Recommencer le test
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentQuestion: 0,
        score: {
          wordsOfAffirmation: 0,
          gifts: 0,
          actsOfService: 0,
          qualityTime: 0,
          physicalTouch: 0
        },
        questions: [
                
                {
                    text: "Au réveil que préféré vous ?",
                    answers: [
                        { text: "De douces phrases pour me réveiller avec sa voix", score: { wordsOfAffirmation: 1 } },
                        { text: "Une nouvelle peluche", score: { gifts: 1 } },
                        { text: "Amener un petit déjeuner ", score: { actsOfService: 1 } },
                        { text: "Que mon/ma partenaire(e) est prévu une journée géniale", score: { qualityTime: 1 } },
                        { text: "Un réveil doux avec une etreinte", score: { physicalTouch: 1 } }
                    ]
                },
                {
                    text: "Quand vous avez accompli quelque chose d'important, comment aimez-vous être félicité par votre partenaire ?",
                    answers: [
                        { text: "J'aime qu'il/elle me félicite verbalement ", score: { wordsOfAffirmation: 1 } },
                        { text: "Recevoir un petit cadeau ou une surprise ", score: { gifts: 1 } },
                        { text: "Qu'il/elle fasse quelque chose de spécial pour moi ", score: { actsOfService: 1 } },
                        { text: "Passer du temps ensemble pour célébrer ", score: { qualityTime: 1 } },
                        { text: "Un câlin ou une étreinte ", score: { physicalTouch: 1 } }
                    ]
                },
                {
                    text: "Si vous deviez choisir une demande en mariage ?",
                    answers: [
                        { text: "Un discours émouvant mais a la maison", score: { wordsOfAffirmation: 1 } },
                        { text: "Un cadeau impressionant et sincère suivi d'une demande", score: { gifts: 1 } },
                        { text: "Une fête surprise et une demande en face des invités", score: { actsOfService: 1 } },
                        { text: "Passer la journée à faire vos activités favorites choisi par votre âme-soeur", score: { qualityTime: 1 } },
                        { text: "En surprise juste après une etreinte", score: { physicalTouch: 1 } }
                    ]
                },
                {
                    text: "Comment aimez-vous que votre partenaire réagisse lorsque vous partagez vos sentiments ?",
                    answers: [
                        { text: "En me réconfortant et avec de la compréhension", score: { wordsOfAffirmation: 1 } },
                        { text: "En m'offrant un petit quelque chose pour me montrer son soutien ", score: { gifts: 1 } },
                        { text: "En m'aidant à résoudre mes problèmes ou mes préoccupations ", score: { actsOfService: 1 } },
                        { text: "En m'écoutant attentivement sans distraction ", score: { qualityTime: 1 } },
                        { text: "Avec une étreinte réconfortante ou une caresse ", score: { physicalTouch: 1 } }
                    ]
                },
                {
                    text: "Quel est le meilleur moyen pour votre partenaire de vous montrer de l'amour pendant les vacances ?",
                    answers: [
                        { text: "Des mots affectueux et des cartes de vœux ", score: { wordsOfAffirmation: 1 } },
                        { text: "Des cadeaux qui montrent qu'il/elle a pensé à moi ", score: { gifts: 1 } },
                        { text: "Planifier des activités de vacances ou des sorties ", score: { actsOfService: 1 } },
                        { text: "Passer du temps de qualité ensemble, explorer de nouveaux endroits ", score: { qualityTime: 1 } },
                        { text: "Des moments d'intimité et de proximité physique ", score: { physicalTouch: 1 } }
                    ]
                },
                {
                    text: "Votre Moitié vous offre la montre que vous avez toujours voulus, votre resentie ?",
                    answers: [
                        { text: "Le fait qu'il(elle) s'en ai souvenue montre son amour envers moi", score: { gifts: 4 } },
                        { text: "Je me sens aimé par cette personne", score: { gifts:3 } },
                        { text: "J'aime énormemment ce cadeau", score: { gifts: 2 } },
                        { text: "Cool, je la voulais", score: { gifts: 1 } },
                        { text: "Il a dépensé de l'argent pour pas grand chose", score: { gifts: 0} }
                    ]
                },
                {
                    text: "Votre Moitié vous a préparé une journée personnalisée, votre resentie ?",
                    answers: [
                        { text: "Le fait qu'il/elle est préparé cette journée montre son amour envers moi", score: { qualityTime: 4 } },
                        { text: "Je me sens aimé par cette personne", score: { qualityTime:3 } },
                        { text: "J'aime énormemment ce cadeau", score: { qualityTime: 2 } },
                        { text: "Cool, je la voulais", score: { qualityTime: 1 } },
                        { text: "Il a dépensé de l'argent pour pas grand chose", score: { qualityTime: 0} }
                    ]
                },
                {
                    text: "Votre Moitié vous complimente de manière sincère et réguliere, votre ressentie ?",
                    answers: [
                        { text: "Le fait qu'il(elle) le fasse cette manière montre son amour envers moi", score: { wordsOfAffirmation: 4 } },
                        { text: "Je me sens aimé par cette personne", score: { wordsOfAffirmation:3 } },
                        { text: "J'aime énormemment cette attention", score: { wordsOfAffirmation: 2 } },
                        { text: "C'est gentil de sa part", score: { wordsOfAffirmation: 1 } },
                        { text: "Si il/elle aime", score: { wordsOfAffirmation: 0} }
                    ]
                },
                {
                    text: "Votre voiture viens de lachez sur une route de campagne, vous appelez votre moitié pour de l'aide vous préférer ?",
                    answers: [
                        { text: "Qu'il viennent vous cherchez", score: { actsOfService: 4 } },
                        { text: "Il/elle appelle une dépanneuse pas besoin de venir", score: { actsOfService:3 } },
                        { text: "Qu'il/elle me donne le numéro d'un dépanneur, je me débrouille", score: { actsOfService: 2 } },
                        { text: "Qu'il vous conseille a l'oral", score: { actsOfService: 1 } },
                        { text: "Bonne chance mon amour", score: { actsOfService: 0} }
                    ]
                },

                // Ajoutez plus de questions ici
                ],
      result: '',
      resultImage: '',
      resultSummary: '', // Résumé du résultat
      images: {
        wordsOfAffirmation: '/type/paroles.jpg',
        gifts: '/type/gift.jpg',
        actsOfService: '/type/service.jpg',
        qualityTime: '/type/moment.jpg',
        physicalTouch: '/type/touch.jpg'
      },
      summaries: { // Résumés pour chaque langage d'amour
        wordsOfAffirmation: "Les mots d'affirmation comme langage d'amour...",
        gifts: "Recevoir des cadeaux comme expression d'amour...",
        actsOfService: "Les actes de service démontrent l'amour par...",
        qualityTime: "Passer du temps de qualité signifie...",
        physicalTouch: "Le toucher physique comme langage d'amour..."
      }
    };
  },
  methods: {
    selectAnswer(score) {
            for (const key in score) {
                this.score[key] += score[key];
            }
            this.currentQuestion++;
            if (this.currentQuestion === this.questions.length) {
                this.calculateResult();
            }
        },
        calculateResult() {
    const maxScore = Math.max(...Object.values(this.score));
    const primaryLoveLanguage = Object.keys(this.score).find(key => this.score[key] === maxScore);

    // Mise à jour de l'image et du résumé en fonction du résultat
    this.resultImage = this.images[primaryLoveLanguage];
    this.resultSummary = this.summaries[primaryLoveLanguage];
            switch (primaryLoveLanguage) {
                case 'wordsOfAffirmation':
      this.result = 'Paroles Valoristantes';
      break;
    case 'gifts':
      this.result = 'Cadeaux';
      break;
    case 'actsOfService':
      this.result = 'Services Rendus';
      break;
    case 'qualityTime':
      this.result = 'Temps de Qualité';
      break;
    case 'physicalTouch':
      this.result = 'Toucher Physique';
      break;
      default:
        this.result = 'Non défini';
        // Assurez-vous de réinitialiser l'image et le résumé si aucun résultat n'est défini
        this.resultImage = '';
        this.resultSummary = '';
            }
        },
        restartQuiz() {
            this.currentQuestion = 0;
            this.score = {
                wordsOfAffirmation: 0,
                gifts: 0,
                actsOfService: 0,
                qualityTime: 0,
                physicalTouch: 0
            };
            this.result = '';
        }
    }
}
</script>
  
  
  
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Satisfy|Pathway+Gothic+One);
</style>