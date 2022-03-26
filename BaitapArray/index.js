var numbers = [];
var inputEl = document.getElementById("txt-number");

function tinhTongSoDuong(array) {
    var sum=0;
    array.forEach(function(item){
        if (item>0) {sum+=item}
    });
    return sum;  
}

function demSoDuong(array) {
    var count=0;
    array.forEach(function(item)
    { if (item>0) {count++}
    });
    return count;
}

function timSoNhoNhat(array) {
    var min= array[0]
    array.forEach(function(item){
    for (var i = 1; i < array.length; i++) { 
        if (min>array[i]) { min = array[i]
        }}})
    return min; 
}

function timSoDuongNhoNhat(array) {
    var minPos  ;
    array.forEach(function(item){
        for (var i = 0; i < array.length; i++) {
            if (array[i]>0) { minPos = array[i];break; 
        }}
        
        for (var i = 0; i < array.length; i++)
        {if (minPos>array[i] && array[i]>0) { minPos = array[i]}
        
        }})
        return minPos;
}

function timSoChanCuoiCung(array){
    var lastEvenNum;
    array.forEach(function(item){
        for (var i = array.length-1; i>=0; i--){
            if (array[i]%2==0) {lastEvenNum=array[i]} else {lastEvenNum=-1}
        }
    })
    return lastEvenNum;
}





        
    
    

    
    
    



      
    


document.getElementById("btn1").addEventListener("click", function() {
    numbers.push(inputEl.value * 1);
    inputEl.value ="" ;
    var tongSoDuong = tinhTongSoDuong(numbers);
    document.getElementById("ketQua").innerHTML= `  
                                                    <div> Array: ${numbers} </div>               
                                                    <div>Tổng các số dương: ${tongSoDuong} </div>
                                                    <div>Số số dương: ${demSoDuong(numbers)} </div>
                                                    <div>Số nhỏ nhất: ${timSoNhoNhat(numbers)} </div>
                                                    <div>Số dương nhỏ nhất: ${timSoDuongNhoNhat(numbers)} </div>
                                                    <div>Số chẵn cuối cùng: ${timSoChanCuoiCung(numbers)} </div>
                                                    
                                                    
                                                `
                                                
})