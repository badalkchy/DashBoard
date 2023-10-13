var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: "pie",
    data:{
        datasets:[
            {
                data:[63,23,25],
                label:"Monthly Collection",// --> show's title
                backgroundColor:["#4318FE","#69D2FF","rgb(230, 227, 249)"],
                // borderColor:["black","blue","green","yellow"],  ---> Color of graph
                borderWidth:0, //-----> width of graph broder
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
                grid:{display:false}

            },
        },
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