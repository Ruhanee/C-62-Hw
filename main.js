var images=["R.jpg","r1.jpg","r2.jpg","r3.jpg","r4.jpg","r5.jpg","r6.jpg","r7.jpg","r8.png","f.jpg"];
var i=0;
function right()
{
    
    i++;
    if(i==10)
    {
      i=0;
    }
    
  
    
    document.getElementById("img").src=images[i];
}
function left()
{
    
    i--;
    if(i == -1)
    {
      i=9;
    }
        
    document.getElementById("img").src=images[i];
}