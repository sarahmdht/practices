const today = "07-02-2024";
console.log(today);

const tabledata = [
    {id:1, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1, total:500, date: today},
    {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true, total:500, date: today},
    {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true", total:500, date: today},
    {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980", total:500, date: today},
    {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999", total:500, date: today},
    {id:6, name:"Frank Harbours", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1, total:500, date: today},
    {id:7, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1, total:500, date: today},
    {id:8, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true, total:500, date: today},
    {id:9, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true", total:500, date: today},
    {id:10, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980", total:500, date: today},
    {id:11, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999", total:500, date: today},
    {id:12, name:"Frank Harbours", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1, total:500, date: today},
];
const tableColumns = [                 //define the table columns
    {title:"Name", field:"name", editor:"input"},
    {title:"Task Progress", field:"progress", hozAlign:"left", formatter:"progress", editor:true},
    {title:"Gender", field:"gender", width:95, editor:"select", editorParams:{values:["male", "female"]}},
    {title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100, editor:true},
    {title:"Color", field:"col", width:130, editor:"input"},
    {title:"Date Of Birth", field:"dob", width:130, sorter:"date", hozAlign:"center"},
    {title:"Driver", field:"car", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:true},
    {title:"Total", field:"total", formatter:"money", formatterParams:{
        decimal:",",
        thousand:".",
        symbol:"£",
        symbolAfter:"p",
        negativeSign:true,
        precision:false,
    }},
    {title:"Date", field:"date", formatter:"datetime", formatterParams:{
        inputFormat:"MM-dd-yyyy",
        outputFormat:"dd/MM/yy",
        invalidPlaceholder:"(invalid date)",
        timezone:"America/Los_Angeles",
    }}
];

const tableSorting = [             //set the initial sort order of the data
    {column:"col", dir:"asc"},
];

const table = new Tabulator("#example-table", {
    data:tabledata,           //load row data from array
    layout:"fitColumns",      //fit columns to width of table
    responsiveLayout:"hide",  //hide columns that don't fit on the table
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    pagination:"local",       //paginate the data
    paginationSize:15,         //allow 7 rows per page of data
    paginationCounter:"rows", //display count of paginated rows in footer
    movableColumns:true,      //allow column order to be changed
    initialSort: tableSorting,
    columnDefaults:{
        tooltip:true,         //show tool tips on cells
    },
    columns: tableColumns,
    placeholder: "No data found",
});