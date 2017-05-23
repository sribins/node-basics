/*function Person(firstName,lastName)
{
	this.firstName=firstName;
	this.lastName=lastName;
}
	var name = new Person("sri" , "kanth");
	
	console.log(name);*/

	var fs = require("fs")
	var filepath = './sample.txt';
	/* console.log("start reading file !!!!")

	 fs.readFileSync(filepath, function(err, data){
	  	if(err){
	  		console.log(err)
	  	}
	  	console.log(data.toString())
	  })

	 console.log("Done reading file !!")*/

	 /*console.log("Done reading file !!!")

	 	 console.log("start writing file !!!")

	 	 fs.readFile(filepath, function(err,data){
	 	 		if(err){
	 	 			 	 			console.log(err)
	 	 		}
	 	 		fs.writeFile('./output.txt', data, function(err,data){
	 	 		if(err){
	 	 			throw err;
	 	 			console.log(err)
	 	 		}
	 	 		

	 	 	 	 })
	})*/

	var data = fs.readFileSync(filepath)
		fs.writeFileSync('sri.txt',data)
	