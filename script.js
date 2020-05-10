
$(document).ready(function () {
        var all = []
        
        $('#btn1').click(function () {

  if ( document.querySelector('#input').value === "" ) {
  return alert(' inter memory')
  }
  
 var mylist  =  $('#input').val();
                all.push(mylist)
               
                return false;
                 });


        $('#btn2').click(function () {
                var date = new Date()
                var day = date.getDate();
                var month = date.getMonth();
                var year = date.getFullYear();
                var hours = date.getHours();
                var min = date.getMinutes();
                var time = hours + ':' + min + ' ' + ' ' + day + '/' + month + '/' + year
                var fav = []
            

                
              

                for (var i = 0; i < all.length; i++) {


                    var x=    $('#c').append('<li>'+ '(' + time + ')' + '</li>' + '<il>' + all[i] + '</li>' 
                              +  '<input type="button" value="❤️" id="btn3" onclick=myFunction()>' +  '<input type="button" value="x" id="btn5">'  ) 
                        $('#btn5').click(function () {
              var dell=  $(this ).parent();
                         dell.fadeOut(function(){
                                 dell.remove
                         })

                 });

  

                    
                       }
         })
              var fav = []
        $('#btn3').click(function () {
         var myfav = $('#input').val();
               fav.push(myfav)
            return false;
        })
           $('#btn4').click(function () {
                for (var i = 0; i < fav.length; i++) {
                        $('#favor').append('<li>' + fav[i] + '</li>')
                }
                    $('#btn5').click(function () {
              var dell=  $('input').remove()
                 })
        })
})

