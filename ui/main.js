
//counter
var button=document.getElementById('counter');
button.onclick = function () {
    
    var request=new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.state===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('scount');
    span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://sujithnair97.imad.hasura-app.io/counter',true);
    request.send(null);
};