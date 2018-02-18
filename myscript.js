$(document).ready(function(){

  $("#myform").submit(function(){
	 
    var search = $("#books").val();
    if(search=='')
	{
     alert("Please enter something in the field");

    }	
    else{
        var url='';
		var img='';
		var title='';
		var author='';
		
		console.log("Search for "+search);
        
        $.get("https://www.googleapis.com/books/v1/volumes?q="+search,function(response){
		
              for(i=0;i<response.items.length;i++){
				  
				  title=$('<h5>'+response.items[i].volumeInfo.title + '</h5>');
				  author=$('<h5>'+response.items[i].volumeInfo.authors + '</h5>');
				  img=$('<img><a href=' + response.items[i].volumeInfo.infoLink + '><button>Read More</button></a>');
				  url=response.items[i].volumeInfo.imageLinks.thumbnail;
				  
				  img.attr('src',url);
				  
				  title.appendTo("#result");
				  author.appendTo("#result");
				  img.appendTo("#result");
				  
				  
				  
			  }
		
		});	
		
	}
                  
  });
  
  

  return false;
});

