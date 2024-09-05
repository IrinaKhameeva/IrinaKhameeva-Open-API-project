fetch("https://api.sampleapis.com/coffee/hot")
   .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      } else {
        return response.json();
      }
   })

   

   .then((data) => {
     console.log(data);
   })

   .catch((error) => {
    console.error("An error occured:", error);
   });