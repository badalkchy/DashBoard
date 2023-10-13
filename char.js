var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: "bar",
    data:{
        labels:["jan","fab","march","april","may","jun","jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[
            {
                data:[99,99,99,89,80,70,60,40,20,10,5,0],
                label:"",// --> show's title
                backgroundColor:["rgb(230, 227, 249)","rgb(230, 227, 249)","rgb(230, 227, 249)","rgb(230, 227, 249)","rgb(230, 227, 249)"],
                // borderColor:["black","blue","green","yellow"],  ---> Color of graph
                // borderWidth:3, -----> width of graph broder
            },
            // {
            //     data:[10,5,13,5,4],
            // },
        ],
    },
    options:{
        scales:{
            x:{
                grid:{display:false}
            },y:{
                beginAtZero:true,
                ticks:{display:false}, // remove y-axis number
                grid:{display:false} // remove grid on graph
            },
        },
        plugins:{   // -->  (start) remove head title
            legend:{
                labels:{
                    boxWidth:0
                }
            }
        },      // --> (end) remove head title
        responsive:false, // --> make no responsive the graph
        layout:{
            padding:{
                left:20,
                right:20,
            },
        },
        tooltips:{
            enabled:true,
            backgroundColor:"red",
        },
        title:{
            display:true,
            text:"Curstom chart title",
            fontSize:25,
            position:"bottom",
        },
    }
});