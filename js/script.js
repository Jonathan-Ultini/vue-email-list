const { createApp } = Vue

createApp({
  data() {
    return {
      emails: []
    };
  },
  mounted() {
    this.generateEmails();
  },
  methods: {
    generateEmails() {
      for (let i = 0; i < 10; i++) {
        //richiesta http
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          //per ogni chiamata API viene aggiunta all'interno dell'array
          .then(response => {
            this.emails.push(response.data.response);
          })
          //gestione errori
          .catch(error => {
            console.error('Non ci sono email:', error);
          });
      }
    }
  }
}).mount('#app');