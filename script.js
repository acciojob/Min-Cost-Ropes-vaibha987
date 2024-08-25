function mincost(arr)
{ 
//write your code here
// return the min cost
let totalCost=0
while(arr.length > 1)
arr.sort((a,b)=>{
   return a-b
})
let first=arr.shift()
let second=arr.shift()
let cost=first+second
arr.push(cost)
totalCost=totalCost+cost
  
}
return totalCost	
}
module.exports=mincost;
