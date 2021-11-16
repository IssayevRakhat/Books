function showFavourites(){
	for(i=1;i<3;i++){
	if(localStorage.getItem(i)!=null){
		var table=document.getElementById("ftable");
		var row=table.insertRow(i);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		var cell4=row.insertCell(3);
		
		
		cell1.innerHTML= JSON.parse(localStorage.getItem(i)).name;
		cell2.innerHTML= JSON.parse(localStorage.getItem(i)).author;
		cell3.innerHTML= JSON.parse(localStorage.getItem(i)).genre;
		cell4.innerHTML= JSON.parse(localStorage.getItem(i)).rating;
		
	}
}}
function edit(){

            let bname = prompt("Write Book name")
            let newr = prompt("Write a new rating")
            for(i=1;i>0;i++){
                if(localStorage.getItem(i)!=null){
                    if(JSON.parse(localStorage.getItem(i)).name==bname){
                        var fav = 
                            {name:JSON.parse(localStorage.getItem(i)).name,
						     author:JSON.parse(localStorage.getItem(i)).author,
						     genre:JSON.parse(localStorage.getItem(i)).genre,
						     rating:newr}
                        localStorage.setItem(i, JSON.stringify(fav));
                        break;
                        window.location.href = "#";
                    }
                     
                }
                else break;
                
            }
        }

function del(){

            let bname = prompt("Write Book name")
            
            for(i=1;i>0;i++){
                if(localStorage.getItem(i)!=null){
                    if(JSON.parse(localStorage.getItem(i)).name==bname){
                       localStorage.removeItem(i);
                }
                
                
            }
            else break;
        }
        
        }

function cl(){
	localStorage.clear()
}