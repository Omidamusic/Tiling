function solve(row , column)
{

    document.getElementById("pagecontainer").innerHTML = ""
    var n = Number(document.getElementById("length").value)
    
    if(row == Math.pow(2,n)-1 || column == Math.pow(2,n)-1)
    {
        if(row == Math.pow(2,n)-1 && column == Math.pow(2,n)-1)
        var matrix = recursive(n,0,2 , row , column)
        else if(row == Math.pow(2,n)-1) var matrix = recursive(n,0,1,row , column )
        else if(column == Math.pow(2,n)-1) var matrix = recursive(n,0,3,row , column) 
    
    }
    else
    if((row == undefined && column == undefined)|| (row == 0 && column == 0)){
        var matrix = recursive(n,0,4 ,row , column)
    }
    else
    {
        var matrix = recursive(n,0,0 ,row , column)
    }
    
    for(var i = 0 ; i<Math.pow(2,n) ; i++)
    {
        var row = document.createElement("div")
        row.style = "width : 100%"

        for(var j = 0 ; j<Math.pow(2,n) ; j++)
        {
            var color = matrix[i][j]
            var part = document.createElement("div")
            part.style = "background-color :" + getRandomColor(color)+"; height:"+ window.innerWidth/Math.pow(2,n)+";"+"width :"+100/Math.pow(2,n)+"%;float:left;"
            part.id = "matrix" + String(i)+String(j)
            part.setAttribute("onClick","solve("+String(i)+","+String(j)+")")
            row.appendChild(part)
        }
        document.getElementById("pagecontainer").appendChild(row)
    }
    console.log(matrix)
  
  
}
var arrayofcolors=["#000"]
var arrayofcolorcodes=[0]
function recursive(n , color = 1 , position = 4 , baserow , basecolumn)
{
    
    if(arrayofcolorcodes.indexOf(color)>=0) color += 1
    else arrayofcolorcodes[arrayofcolorcodes.length] = color

    if(n<=1 && position == 4) return  [["NOTCOLORED", color ],[color , color]]
    if(n<=1 && position == 1) return  [[color , color],["NOTCOLORED",color]]
    if(n<=1 && position == 2) return  [[color , color],[color , "NOTCOLORED"]]
    if(n<=1 && position == 3) return  [[color , "NOTCOLORED"],[color , color]]
    
    //SETTING CONDITIONS AND NEXT POSITIONS
    var firstposition
    var secondposition
    var thirdposition
    var fourthposition

    if(position == 1)
    {
        firstposition = 1
        secondposition = 2
        thirdposition = 1
        fourthposition = 4
        
        
    }
    if(position == 2)
    {
        firstposition = 1
        secondposition = 2
        thirdposition = 3 
        fourthposition = 2
    }
    if(position == 3)
    {
        firstposition = 3
        secondposition = 2
        thirdposition = 3
        fourthposition = 4
    }
    if(position == 4)
    {
        firstposition = 1
        secondposition = 4
        thirdposition = 3
        fourthposition = 4
    }
    
    var half = Math.pow(2,n-1)
    var complete = Math.pow(2,n)-1
    var boolean = false
    if(baserow == 0 && basecolumn == 0)
    {
        secondposition = 4
        boolean = true
        position = 4
        firstposition = 1
        thirdposition = 3
        fourthposition = 4
        
        
    }
    if(baserow == 0 && basecolumn == half -1)
    {
        secondposition = 3
        boolean = true
        position = 4
        firstposition = 1
        thirdposition = 3
        fourthposition = 4
    }
    if(baserow == 0 && basecolumn == half)
    {
        firstposition = 4
        boolean = true
        position = 3
        secondposition = 2
        thirdposition = 3
        fourthposition = 4
    }
    if(baserow == 0 && basecolumn == complete)
    {
        firstposition = 3
        boolean = true
        position = 3
        secondposition = 2
        thirdposition = 3
        fourthposition = 4
        
    }
    if(baserow == half -1 && basecolumn == 0)
    {
        secondposition = 1
        boolean = true
        position = 4
        firstposition = 1
        thirdposition = 3
        fourthposition = 4
    }
    if(baserow == half-1 && basecolumn == half -1)
    {
        secondposition = 2 
        boolean = true
        position = 4
        firstposition = 1
        thirdposition = 3
        fourthposition = 4
    }
    if(baserow == half-1 && basecolumn == half)
    {
        firstposition = 1
        boolean = true
        position = 3
        secondposition = 2
        thirdposition = 3
        fourthposition = 4
    }
    if(baserow == half -1 && basecolumn == complete)
    {
        firstposition =2
        boolean = true
        position = 3
        secondposition = 2
        thirdposition = 3
        fourthposition = 4
    }
    if(baserow == half && basecolumn == 0)
    {
        thirdposition = 4
        boolean = true
        position = 1
        firstposition = 1
        secondposition = 2
        fourthposition = 4
    }
    if(baserow == half && basecolumn == half -1)
    {
        thirdposition = 3
        boolean = true
        position = 1
        firstposition = 1
        secondposition = 2
        fourthposition = 4
    }
    if(baserow == half && basecolumn == half)
    {
        fourthposition = 4
        boolean = true
        position = 2
        firstposition = 1
        secondposition = 2
        thirdposition = 3 

    }
    if(baserow == half && basecolumn == complete)
    {
        fourthposition = 3
        boolean = true
        position = 2
        firstposition = 1
        secondposition = 2
        thirdposition = 3 
    }
    if(baserow == complete && basecolumn == 0)
    {
        thirdposition = 1
        boolean = true
        position = 1
        firstposition = 1
        secondposition = 2
        fourthposition = 4
        
    }
    if(baserow == complete && basecolumn == half-1)
    {
        thirdposition = 2
        boolean = true
        position = 1
        firstposition = 1
        secondposition = 2
        fourthposition = 4
    }
    if(baserow == complete && basecolumn == half)
    {
        fourthposition = 1
        boolean = true
        position = 2
        firstposition = 1
        secondposition = 2
        thirdposition = 3 
    }
    if(baserow == complete && basecolumn == complete)
    {
        fourthposition = 2
        boolean = true
        position = 2
        firstposition = 1
        secondposition = 2
        thirdposition = 3 
    }
    if(!boolean)
    {
        if(baserow >= 0 && basecolumn >=0 && baserow < Math.pow(2,n) && basecolumn < Math.pow(2,n) )
        {
        if(baserow < Math.pow(2,n-1) && basecolumn < Math.pow(2,n-1))
        {
            secondposition = 0
           // position = 4
            firstposition = 1
            fourthposition = 4
            thirdposition = 3 
        }
        if(baserow < Math.pow(2,n-1) && basecolumn >= Math.pow(2,n-1))
        {
            firstposition = 0
            //position  = 3
            fourthposition = 4
            secondposition = 2
            thirdposition = 3 
        }
        if(baserow >= Math.pow(2,n-1) && basecolumn < Math.pow(2,n-1))
        {
            thirdposition = 0
           // position = 1
            firstposition = 1
            secondposition = 2
            fourthposition = 4 
        }
        if(baserow >= Math.pow(2,n-1) && basecolumn >= Math.pow(2,n-1))
        {
            fourthposition = 0
            //position = 2 
            firstposition = 1
            secondposition = 2
            thirdposition = 3 
        }
        }
    }
    if(position == 0 )
    {
        if(baserow < Math.pow(2,n-1) && basecolumn < Math.pow(2,n-1))
        return mergefour(n-1 , recursive(n-1,Math.floor(Math.random()*100),secondposition,baserow,basecolumn) ,recursive(n-1,Math.floor(Math.random()*100),firstposition,baserow,basecolumn - Math.pow(2,n-1)),recursive(n-1,Math.floor(Math.random()*100),thirdposition,baserow - Math.pow(2,n-1),basecolumn),recursive(n-1,Math.floor(Math.random()*100),fourthposition,baserow - Math.pow(2,n-1),basecolumn - Math.pow(2,n-1)),4)
        if(baserow < Math.pow(2,n-1) && basecolumn >= Math.pow(2,n-1))
        return mergefour(n-1 , recursive(n-1,Math.floor(Math.random()*100),secondposition,baserow,basecolumn) ,recursive(n-1,Math.floor(Math.random()*100),firstposition,baserow,basecolumn - Math.pow(2,n-1)),recursive(n-1,Math.floor(Math.random()*100),thirdposition,baserow - Math.pow(2,n-1),basecolumn),recursive(n-1,Math.floor(Math.random()*100),fourthposition,baserow - Math.pow(2,n-1),basecolumn - Math.pow(2,n-1)),3)
        if(baserow >= Math.pow(2,n-1) && basecolumn < Math.pow(2,n-1))
        return mergefour(n-1 , recursive(n-1,Math.floor(Math.random()*100),secondposition,baserow,basecolumn) ,recursive(n-1,Math.floor(Math.random()*100),firstposition,baserow,basecolumn - Math.pow(2,n-1)),recursive(n-1,Math.floor(Math.random()*100),thirdposition,baserow - Math.pow(2,n-1),basecolumn),recursive(n-1,Math.floor(Math.random()*100),fourthposition,baserow - Math.pow(2,n-1),basecolumn - Math.pow(2,n-1)),1)
        if(baserow >= Math.pow(2,n-1) && basecolumn >= Math.pow(2,n-1))
        return mergefour(n-1 , recursive(n-1,Math.floor(Math.random()*100),secondposition,baserow,basecolumn) ,recursive(n-1,Math.floor(Math.random()*100),firstposition,baserow,basecolumn - Math.pow(2,n-1)),recursive(n-1,Math.floor(Math.random()*100),thirdposition,baserow - Math.pow(2,n-1),basecolumn),recursive(n-1,Math.floor(Math.random()*100),fourthposition,baserow - Math.pow(2,n-1),basecolumn - Math.pow(2,n-1)),2)    
    }

    return mergefour(n-1 , recursive(n-1,Math.floor(Math.random()*100),secondposition,baserow,basecolumn) ,recursive(n-1,Math.floor(Math.random()*100),firstposition,baserow,basecolumn - Math.pow(2,n-1)),recursive(n-1,Math.floor(Math.random()*100),thirdposition,baserow - Math.pow(2,n-1),basecolumn),recursive(n-1,Math.floor(Math.random()*100),fourthposition,baserow - Math.pow(2,n-1),basecolumn - Math.pow(2,n-1)),position)


}
function mergefour(n,first,second,third,fourth,position){
    var resultmatrix = [];
    for(var i = 0;i<Math.pow(2,n)*2;i++)
    { resultmatrix[i]= [];
        for(var j=0;j<Math.pow(2,n)*2;j++)
        {
            if(i>= Math.pow(2,n) && j>=Math.pow(2,n))
            resultmatrix[i][j] = fourth[i-Math.pow(2,n)][j-Math.pow(2,n)]
            if(i>= Math.pow(2,n) && j<Math.pow(2,n))
            resultmatrix[i][j] = third[i-Math.pow(2,n)][j]
            if(i<Math.pow(2,n) && j>=Math.pow(2,n))
            resultmatrix[i][j] = second[i][j-Math.pow(2,n)]
            if(i<Math.pow(2,n) && j<Math.pow(2,n))
            resultmatrix[i][j] = first[i][j]
        }
    }
    if(position == 4 )
    {
    var randomnumber = Math.floor(Math.random()*100)
    resultmatrix[Math.pow(2,n)][Math.pow(2,n)]=randomnumber
    resultmatrix[Math.pow(2,n)][Math.pow(2,n)-1]=randomnumber
    resultmatrix[Math.pow(2,n)-1][Math.pow(2,n)]=randomnumber
    arrayofcolorcodes[arrayofcolorcodes.length] = randomnumber
    }
    if(position == 1)
    {
        var randomnumber = Math.floor(Math.random()*100)
        resultmatrix[Math.pow(2,n)][Math.pow(2,n)]=randomnumber
        resultmatrix[Math.pow(2,n)-1][Math.pow(2,n)-1]=randomnumber
        resultmatrix[Math.pow(2,n)-1][Math.pow(2,n)]=randomnumber
        arrayofcolorcodes[arrayofcolorcodes.length] = randomnumber
    }
    if(position == 3)
    {
        var randomnumber = Math.floor(Math.random()*100)
        resultmatrix[Math.pow(2,n)][Math.pow(2,n)]=randomnumber
        resultmatrix[Math.pow(2,n)][Math.pow(2,n)-1]=randomnumber
        resultmatrix[Math.pow(2,n)-1][Math.pow(2,n)-1]=randomnumber
        arrayofcolorcodes[arrayofcolorcodes.length] = randomnumber
    }
    if(position == 2)
    {
        var randomnumber = Math.floor(Math.random()*100)
        resultmatrix[Math.pow(2,n)-1][Math.pow(2,n)]=randomnumber
        resultmatrix[Math.pow(2,n)][Math.pow(2,n)-1]=randomnumber
        resultmatrix[Math.pow(2,n)-1][Math.pow(2,n)-1]=randomnumber
        arrayofcolorcodes[arrayofcolorcodes.length] = randomnumber
    }
    return resultmatrix;
}

function getRandomColor(colornum) {
    
    if(colornum == "NOTCOLORED")
    {
        return "#000"
    }
    if(arrayofcolors[colornum])
    {
        return arrayofcolors[colornum]
    }
    else
    {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        // if(i==0)
        // color +=  String(colornum%10)
        // else
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    arrayofcolors[colornum] = color
    return color
    }
  }