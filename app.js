const fetch = require('node-fetch');

!process.argv[2] && process.exit(console.log("pvtos"))

let settings = { method: "Get" };
let url = "https://mach-eight.uc.r.appspot.com/";
fetch(url, settings)
.then(res => res.json())
.then((json) => {
    var matriz = json['values'];
    matriz.sort((a, b) => Number(a.h_in) - Number(b.h_in));
        
        const input = process.argv[2];
        var cursor1 = 0;
        var add = [];
        var selected = [];
        var cursor2 = matriz.length-1;

    while (cursor1 < cursor2) {
        
        if (parseInt(matriz[cursor1].h_in) + parseInt(matriz[cursor2].h_in) == input)  {
            add = [cursor1,cursor2]
            selected.push(add)
            cursor2=cursor2-1
                }
        else if(input > parseInt(matriz[cursor1].h_in) + parseInt(matriz[cursor2].h_in)){
            cursor1++;
        }
        else{
            cursor2--;
        }
    } 
 if (selected.length == 0){
    console.log("no matches found")
 } else {
    for (let i = 0; i < selected.length; i++) {
        console.log(matriz[(selected[i][0])]['first_name']," ", matriz[(selected[i][0])]['last_name'],"  &  ",
                            matriz[(selected[i][1])]['first_name']," ", matriz[(selected[i][1])]['last_name']);
    } ;
 }
});