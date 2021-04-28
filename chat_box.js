var ball=document.getElementById("ball");
var father=document.getElementById("father");
// function fasong(){
//     var btn = document.getElementById("btn");
//     var txt = document.getElementById("txt");
//     var father = document.getElementById("father");
//     var response =document.getElementById("response");
//     var canshu="a8696861827b0de8120584ea17ef9f6a";
//     btn.onclick=function(){
//         if(txt.value==""){
//             alert("请勿发送空内容");
//         }
//         else{
//             var son = document.createElement("p");
//             son.innerText=txt.value;
//             father.appendChild(son);
//             txt.value="";
//             son.scrollIntoView();

//             var res2=load1(canshu,son.innerText);
//             console.log("res2");
//             father.appendChild(res2);
//         }
//     }
// }
function fasong(){
    var btn = document.getElementById("btn");
    var txt = document.getElementById("txt");
    var father = document.getElementById("father");
    var response =document.getElementById("response");
    var canshu="a8696861827b0de8120584ea17ef9f6a";
    btn.onclick=function(){
        if(txt.value==""){
            alert("请勿发送空内容");
        }
        else{
            let son = document.createElement("p");
            son.innerText=txt.value;
            question.value=txt.value;
            father.appendChild(son);
            txt.value="";
            son.style.float="right";
            son.scrollIntoView();

            setTimeout(function(){ 
                let res2=load1(canshu,son.innerText);
            response.value=res2;
            let son2 =document.createElement("p");
            son2.style.float="left";
			son2.innerText=res2;
			father.appendChild(son2);
            son2.scrollIntoView();
            }, 1000);
            
        }
    }
}
function chabuduo(){
    var father=document.getElementById("father");
        if(father.dataset.active=='1'){
            // father.style.display="block";
            father.style.animationName="example1";
            father.dataset.active='2';
            
        }
        else{
            // father.style.display="none";
            father.style.animationName="example2";
            father.dataset.active='1';           
            
        }
}

function load1(canshu1,canshu2){
    var result;
    $.ajax({
        type: "GET",
        url: " http://api.tianapi.com/txapi/robot/index",
        async:false,
        data: {
            key:canshu1,
            question:canshu2
        },
        dataType: "json",
        success: function (res) {
            if (res.newslist.length==0) {
                alert("ERROR!")
                } else {
                    result=res.newslist[0].reply;      
                }
        },
        error:function(error){
            alert("error!");
        }
    });
    return result; 
}

// $(document).ready(function(){
//     $(".ball").click(function(){
//         $(".bottle").slidToggle("slow");
//     });
// });

