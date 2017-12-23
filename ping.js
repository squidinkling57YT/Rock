const Discord = require("discord.js");
 
const client = new Discord.Client();


 client.on("ready", () => {
  console.log("I am ready!");
});


 client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
   message.channel.send("pong!");
  }

}); 


client.login("Mzg5MTQ1MzUyOTM2MjI2ODI3.DR-DpQ.21VOC6yHG4zRXyPyxXt9S1CyhbA");