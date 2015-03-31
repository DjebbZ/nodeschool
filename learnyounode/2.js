var result = 0;
for(i=2, l=process.argv.length; i<l; i++) {
    result += Number(process.argv[i]);
}
console.log(result);
