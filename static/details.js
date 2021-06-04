var pune = [
    { "Hospital Name": "Jahangir Hospital", 
    "Address": "32, Sasoon Road Opposite Railway Station, Central Excise Colony, Sangamvadi, Pune, Maharashtra 411001" , 
    "No. of Beds":"10",
    "Phone no":"+918192736455"},
    { "Hospital Name": "Kamla Nehru Hospital", 
    "Address": "Mangalwar Peth, near Kasba Post Office, Pune, Maharashtra 411002" , 
    "No. of Beds":"10",
    "Phone no":"+918192736283"},
    {"Hospital Name": "Naidu Hospital", 
    "Address": "Behind Pune Main Railway station, off, Wellesley Rd, 411001" , 
    "No. of Beds":"10",
    "Phone no":"+918192284634"}
    // { "col_2": "val_22", "col_3": "val_23" },
    // { "col_1": "val_31", "col_3": "val_33" }
];

var mumbai = [
    { "Hospital Name": "Bombay Hospital & Medical Research Centre", 
    "Address": "12, Vitthaldas Thackersey Marg, Near to Liberty Cinema" , "No. of Beds":"5","Phone no":"+917365736455"},
    { "Hospital Name": "Wockhardt Hospitals, Mumbai Central", "Address": "Police Station, 1877 Doctor Anandrao Nair Marg Near Agripada" , "No. of Beds":"5","Phone no":"+918236456455"},
    { "Hospital Name": "Seven Hills Hospital", "Address": "Marol Maroshi Rd, Shivaji Nagar JJC, Marol, Andheri East, Mumbai, Maharashtra 400059" , "No. of Beds":"5","Phone no":"+919246736455"}
    // { "col_2": "val_22", "col_3": "val_23" },
    // { "col_1": "val_31", "col_3": "val_33" }
]; 

var chennai = [
    { "Hospital Name": "Fortis Malar Hospital, Adyar, Chennai", 
    "Address": "General hospital No. 52, 1st Main Rd" , 
    "No. of Beds":"10",
    "Phone no":"+918146286455"},
    { "Hospital Name": "VS Hospitals - Multi-speciality Hospital - Kilpauk, Chennai", 
    "Address": "815/306, Poonamallee High Rd" , 
    "No. of Beds":"10",
    "Phone no":"+918173956283"},
    {"Hospital Name": "Dr. Mehta's Hospitals", 
    "Address": "No.2, Mc Nichols Rd" , 
    "No. of Beds":"10",
    "Phone no":"+917839284634"}
    // { "col_2": "val_22", "col_3": "val_23" },
    // { "col_1": "val_31", "col_3": "val_33" }
];

var hyderabad = [
    { "Hospital Name": "Medicover Hospitals HiTech City", 
    "Address": "behind Cyber Towers, In the Lane of IBIS Hotels, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081" , "No. of Beds":"5","Phone no":"+917368394455"},
    { "Hospital Name": "Sunshine Hospitals - Gachibowli, Hyderabad", "Address": "45, 7-56/19, Survey No. 40 46, Dargah Road LIG Chitrapuri Colony, Prashant Hills, Radhe Nagar, Gachibowli, Telangana 500035" , "No. of Beds":"5","Phone no":"+917893456455"},
    { "Hospital Name": "Apollo Hospitals", "Address": "Road No 72, Film Nagar, Rd Number 92, Opposite Bharatiya Vidya Bhavan School, Jubilee Hills, Hyderabad, Telangana 500033" , "No. of Beds":"5","Phone no":"+919247569455"}
    // { "col_2": "val_22", "col_3": "val_23" },
    // { "col_1": "val_31", "col_3": "val_33" }
];
    


function myFunction() {
    var x = document.getElementById("cities").value;
    // mumbai.push({ "Hospital Name": "sample", "Address": "val_13" , "No. of Beds":"5","Phone no":"+918192736455"})
    if(x=="pune"){
        return pune
    }
    if(x=="mumbai"){
        return mumbai
    }
    if(x=="chennai"){
        return chennai
    }
    if(x=="hyderabad"){
        return hyderabad
    }
  }
  

     
function constructTable(selector) {
        
    // Getting the all column names
    list=myFunction()
    var cols = Headers(list, selector);  

    // Traversing the JSON data
    for (var i = 0; i < list.length; i++) {
        var row = $('<tr/>');   
        for (var colIndex = 0; colIndex < cols.length; colIndex++)
        {
            var val = list[i][cols[colIndex]];
                
            // If there is any key, which is matching
            // with the column name
            if (val == null) val = "";  
                row.append($('<td/>').html(val));
        }
            
        // Adding each row to the table
        $(selector).append(row);
    }
}
    
function Headers(list, selector) {
    var columns = [];
    var header = $('<tr/>');
        
    for (var i = 0; i < list.length; i++) {
        var row = list[i];
            
        for (var k in row) {
            if ($.inArray(k, columns) == -1) {
                columns.push(k);
                    
                // Creating the header
                header.append($('<th/>').html(k));
            }
        }
    }
        
    // Appending the header to the table
    $(selector).append(header);
        return columns;
}       
