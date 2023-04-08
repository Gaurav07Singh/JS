const fs = require('fs');

fs.writeFile('read.txt' , "today is awesome day") ,
(err) => {
    console.log("files are created");
    console.log(err);
} 

fs.addendFile("read.txt" , "new text added"),
(err) => {
    console.log('task completed');
};

