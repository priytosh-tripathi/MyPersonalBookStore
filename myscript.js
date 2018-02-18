$(document).ready(function(){

  $("#myform").submit(function(e){
	  
	  e.preventDefault();
	 
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
			
			
			var table = $('<table>');
				table.attr('border','1');
				var tr = $('<tr>');
				var td = $('<td>');
				td.html('Preview');
				tr.append(td);
				td = $('<td>');
				td.html("Title");
				tr.append(td);
				td = $('<td>');
				td.html('Authors');
				tr.append(td);
				
				table.append(tr);
			
		
              for(i=0;i<response.items.length;i++){
				  
				  title=$('<h5>'+response.items[i].volumeInfo.title + '</h5>');
				  author=$('<h5>'+response.items[i].volumeInfo.authors + '</h5>');
				  img=$('<img><a href=' + response.items[i].volumeInfo.imageLinks.thumbnail + '></a>');
				  
                     response.items[i].volumeInfo.imageLinks.thumbnail

				
				
					var tr = $('<tr>');
					var td = $('<td>');
					td.html(img);
					tr.append(td);
					td = $('<td>');
					
					td.html(response.items[i].volumeInfo.title);
					tr.append(td);
					td = $('<td>');
					td.html(response.items[i].volumeInfo.authors);
					tr.append(td);
					
					
					
					
					url=response.items[i].volumeInfo.imageLinks.thumbnail;
				  
				  img.attr('src',url);
				  table.append(tr);
				
				$('body').append(table);
				  
				  
				  
			  }
		
		});	
		
	}
                  
  });
  
  

  return false;
});

