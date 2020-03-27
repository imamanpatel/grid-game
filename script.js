var cell_state = {},score=0;
function init(){
    var ele = document.getElementsByClassName('cell');
    var arr = [1,2,3,4,5,6,7,8];
    arr = shuffle(arr);
    for(var i=0;i<8;i++){
        ele[i].innerHTML=arr[i];  
    }
    var cell_no = 0,temp;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
                if(cell_no!=8)
                    temp = ele[cell_no].innerHTML;
                else
                    temp = "9";
                cell_state[temp]=[i,j];
                cell_state[temp]["top"]=0;
                cell_state[temp]["left"]=0;
                cell_no++;
            }
        }
    }
init();


            