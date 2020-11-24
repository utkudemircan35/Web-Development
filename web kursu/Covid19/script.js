$(document).ready(function () {

    $("#covidgraphturkey").hide();

    $.getJSON("https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true", function (result) {

        var totalData = result["regionData"][0];
        //var turkeyData = result.regionData[31];
        var turkeyData = result.regionData.find(cnt => cnt.country=="Turkey");
        

        // Cases
        var TotalCases = totalData.totalCases;
        var TurkeyCases = turkeyData.totalCases;

        // Deaths
        var TotalDeaths = totalData.totalDeaths;
        var TurkeyDeaths = turkeyData.totalDeaths;

        // Recovered
        var TotalRecovered = totalData.totalRecovered;
        var TurkeyRecovered = turkeyData.totalRecovered;

        // Daily Cases
        var TotalDailyCases = totalData.newCases;
        var TurkeyDailyCases = turkeyData.newCases;

        // Daily Deaths
        var TotalDailyDeaths = totalData.newDeaths;
        var TurkeyDailyDeaths = turkeyData.newDeaths;

        // Active Cases
        var TotalActiveCases = totalData.activeCases;
        var TurkeyActiveCases = turkeyData.activeCases;


        // Set Case Data To Local Storage
        var caseDataTurkey = [TurkeyActiveCases, TurkeyDeaths, TurkeyRecovered];
        var caseDataWorld = [TotalActiveCases, TotalDeaths, TotalRecovered];
        var datalabel = ["Active Cases", "Total Deaths", "Total Recovered"];

       
/*
        // Set Date to Local Storage
        let d = new Date();
        let dayOfMonth = d.getDate();
        let month = d.getMonth() + 1;
        let newDate = `${dayOfMonth}/${month}`;

        let deger = {
            "case": dailycase,
            "date": newDate
        };

        //localStorage.setItem("veri", deger)

        caseData.push(deger.case);

        localStorage.setItem("dailycase",JSON.stringify(caseData));
        let retrievingCaseData = localStorage.getItem("dailycase");
        let caseArray = JSON.parse(retrievingCaseData)
  


        datelabel.push(deger.date);

        localStorage.setItem("datelabel", JSON.stringify(datelabel));

        let retrievingData = localStorage.getItem("datelabel");

        let datearray = JSON.parse(retrievingData)

*/

        //CANVAS

        var caseGraphTurkey = document.getElementById("covidgraphturkey").getContext("2d");
        var caseGraphWorld = document.getElementById("covidgraphworld").getContext("2d");

        new Chart(caseGraphTurkey, {
            type: "doughnut",
            data: {
                labels: datalabel,
                datasets: [{
                    label: "Turkey Cases",
                    data: caseDataTurkey,
                    backgroundColor: [
                        "rgb(220, 53, 69)",
                        "rgb(255, 193, 7)",
                        "rgb(40, 167, 69)"
                    ],
                    
                }]
            },
        });

        new Chart(caseGraphWorld, {
            type:"doughnut",
            data: {
                labels: datalabel,
                datasets: [{
                    label: "World Cases",
                    data: caseDataWorld,
                    backgroundColor:[
                        "rgb(220, 53, 69)",
                        "rgb(255, 193, 7)",
                        "rgb(40, 167, 69)"
                    ],
                }]
            }
        });

        // Show Graphics
        $("#worldgraph").click(function(){
            $("#covidgraphworld").fadeIn();
            $("#covidgraphturkey").hide();
        });

        $("#turkeygraph").click(function(){
            $("#covidgraphworld").hide();
            $("#covidgraphturkey").fadeIn();
        });


        /*
        $("tbody tr td").each(function(index) {
            $(this).append(TotalCases);
            
        });
        */

        /*
        $.each(result["regionData"], function (index) {
            
            if(result["regionData"][index]["country"]=="Turkey"){
                console.log(index)
            }
        };
        */

        // Total Statics
        $("#totalcase").text(TotalCases);
        $("#totalnewcase").text(TotalDailyCases);
        $("#totaldeath").text(TotalDeaths);
        $("#totalnewdeath").text(TotalDailyDeaths);
        $("#totalrecovered").text(TotalRecovered);
        $("#totalactivecase").text(TotalActiveCases);

        // Turkey Statics
        $("#turkeycase").text(TurkeyCases);
        $("#turkeynewcase").text(TurkeyDailyCases);
        $("#turkeydeath").text(TurkeyDeaths);
        $("#turkeynewdeath").text(TurkeyDailyDeaths);
        $("#turkeyrecovered").text(TurkeyRecovered);
        $("#turkeyactivecase").text(TurkeyActiveCases);

    });



});