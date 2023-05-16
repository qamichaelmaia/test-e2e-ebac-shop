const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8968by',
  e2e: {
   baseUrl:"http://lojaebac.ebaconline.art.br/minha-conta/"
  },
});