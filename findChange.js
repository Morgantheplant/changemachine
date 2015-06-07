
function changeMachine(remain, i) {
    var numofType = parseInt(remain/this.changeType[i]);     
    if(numofType){
       this.minChange.push([numofType, this.changeType[i]]) 
       this.valueRemain -= (numofType * this.changeType[i])
    }
}

function findChangeAmount(total){
  this.changeType = [50,25,10,5,1]
  this.valueRemain;
  this.minChange = []
  for(var i = 0; i < this.changeType.length; i++){
    if(i===0){
     this.valueRemain = total * 100
    }
    changeMachine.call(this, this.valueRemain, i)
  }  
 
  //message returned in english
    var dict = {
        50 : 'half dollars',
        25: 'quarters',
        10: 'dimes',
        5:'nickels',
        1: 'pennies'
    }   
    
    var message = 'Hello! The amount of $'+ total + ' split into change is ' 
   
    //loop through array and build message
   this.minChange.forEach(function(item){
       //add commas and text
       if(item[0]>1){
         message += item[0] + ' ' + dict[item[1]] + ', '
       }
       //singluarize items if only 1
       if(item[0]===1 && item[1]!== 1){
         var singluar = dict[item[1]].slice(0, dict[item[1]].length-1)
           message += '1 '+ singluar +', '
       }
       //exception: can't simply remove 's' for penny
       if(item[0]===1 && item[1]=== 1){
         message+='1 penny  '
       }
   })
   
   //remove last space and comma and replace with period
   var removePer = message.slice(0,message.length-2) + "."
   
   //gross... include an 'and' for last word.. this can be replaced with a better RegExp
   return removePer.split('').reverse().join("").replace(/,/,"dna ,").split('').reverse().join("")
   
   
}

console.log(findChangeAmount(111.06))
