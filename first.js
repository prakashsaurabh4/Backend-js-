const fs = require('fs');
fs.writeFile ("output.txt" , " Writing File",(err) => {
  if(err) console.log('Error Occur');
  else console.log('File Written Successfully');
})
