//$(document).ready (function(){init();
//});
var TotalSalary = [];

function submitEmployee() {
    var name = $("#name").val();
    var id = $("#id").val();
    var salary = $("#salary").val();


    TotalSalary.push(parseFloat(salary));

    var value = 0;
    for (var i = 0; i < TotalSalary.length; i++) {
        value += TotalSalary[i];

        $("#salaryLine").text("Total Salary: $" + value);
        console.log(name, id, salary);
        console.log(value);

//
    }
}


