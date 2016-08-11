//print process.argv
process.argv.forEach(function(item,index) {
  console.log(index + ':'+typeof(item)+':',item);
  
  if(item=='--sleep'){
	  console.log(process.argv[index+1]);
	  var exitTime = Number(process.argv[index+1]);
	  
	  setTimeout(function(){
		  console.log('bye~~');
		  process.exit();
	  },exitTime);
  }
});