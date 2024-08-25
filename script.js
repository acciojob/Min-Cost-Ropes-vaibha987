function mincost(arr)
{ 
//write your code here
// return the min cost
let totalCost=0
for(let i=0;i<=arr.length;i++){
arr.sort((a,b)=>{
   return a-b
})
let first=arr.shift()
let second=arr.shift()
let cost=first+second
arr.push(cost)
totalCost=totalCost+cost
  
}

module.exports=mincost;
