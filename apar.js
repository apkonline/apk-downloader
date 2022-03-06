(function(){
    
         
        document.getElementById('perfecto').innerText = "Apk Downloader manager. "; 
    
       var username = ""; 
       if ( localStorage.getItem('username') )
       {
            username = localStorage.getItem('username');
       }
       else {
           username = "myapkonline" + randomS(5);
           localStorage.setItem('username', username);
       }
 
        //document.getElementById('integrator').innerText = "My username: "+username; 

    
        var submit = document.getElementById('submitx');
        submit.onclick = function() {
            //alert("Button pressed!");
            var textx = document.getElementById('textx');
            //alert("Button pressed!" + textx.value);
            showResult(textx.value);
            event.preventDefault();  
        }

       /*$("#something").submit(function( event ) {  
              //alert("aaaaaa" + $( "input:first" ).val());
              showResult($( "input:first" ).val())
              event.preventDefault();  
        });  */
   
    
  
})();




function randomS(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        return randomString;
}


function showResult(str) {
      if (str.length==0) {
                document.getElementById("livesearch").innerHTML="";
                document.getElementById("livesearch").style.border="0px";
                return;
      }
      var xmlhttp=new XMLHttpRequest();
      xmlhttp.onreadystatechange=function() {
                if (this.readyState==4 && this.status==200) {
                  document.getElementById("livesearch").innerHTML=this.responseText;
                  //document.getElementById("livesearch").style.border="1px solid #A5ACB2";
                }
       }
       xmlhttp.open("GET","https://www.apkonline.net/phpextensions/apksearch/connectorapksearch.php?q="+str,true);
       xmlhttp.send();
}




