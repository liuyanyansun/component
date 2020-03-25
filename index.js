var data = [
    {name: 'Java',num: 1,trend: '降',change: -0.0001},
    {name: 'C',num: 2,trend: '升',change: 0.0244},
    {name: 'Python',num: 3,trend: '升',change: 0.0141},
    {name: 'C++',num: 4,trend: '降',change: -0.0258},
    {name: 'C#',num: 5,trend: '升',change: 0.0207},
    {name: 'Visual Basic .NET',num: 6,trend: '降',change: -0.0117},
    {name: 'JavaScript',num: 7,trend: '降',change: -0.0085},
];
var hotObj = document.getElementById('hot');
var hotSettings = {
    data: data,
    columns: [
        {data: 'name',type: 'text'},
        {data: 'num',type: 'numeric'},
        {data: 'trend',type: 'text'},
        {data: 'change',type: 'numeric',
            numericFormat: {
                pattern: '+0.00%'
            }
        }
    ],
    stretchH: 'all',
    width: 800,
    autoWrapRow: true,
    height: 350,
    rowHeights: 45,
    colWidths: 35,
    className: "htCenter htMiddle",
    maxRows: 22,
    manualRowMove: true,
    manualColumnMove: true,
    rowHeaders: false,
    colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度',
    ],
    manualRowResize: true,
    manualColumnResize: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: false
};
var one = new Handsontable(hotObj, hotSettings);
var myChart = echarts.init(document.getElementById('po'));
var option = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#555',
                width: 1,
                type: 'solid'
            },
        },
        formatter: '<div style="text-align:center;">{a}<br/>{b}: {c}</div>'
    },
    xAxis: {
        data: [2000, 2005, 2010, 2015, 2020],
        axisPointer: {
            show: true
        }
    },
    yAxis: {},
    series: [{
        name: '排名',
        type: 'line',
        data: [6, 9, 8, 8, 7]
    }]
};
myChart.setOption(option);
