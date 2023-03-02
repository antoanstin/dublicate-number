let arry=[1,3,1,5,6,7,5];
function dublicate(arry)
{
let dubnum=[];
for(i=0;i<arry.length;i++)
{  
for(j=i+1;j<arry.length;j++)
	{	
	if(arry[i]===arry[j])
	{
		dubnum.push(arry[i])	
	}
	}    
     }
    return dubnum
}
console.log(dublicate(arry))