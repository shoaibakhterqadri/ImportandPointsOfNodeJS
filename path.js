const path=require('path');
console.log(path.sep);
// It show only seperation thing (/)

const filePath=path.join('/content/','subfolder','text.txt');
console.log(filePath)
// It show all folders and files

const base=path.basename(filePath);
console.log(base)
// It show last file in the folder 

const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute)
// It shows the all folers from C to your end path 