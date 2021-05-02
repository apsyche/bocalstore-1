$(function() {
	
	
	/**
	 * drowChartVillage
	 */
	drowChartVillage = function() {
		var list;
		var listLables;
		$.ajax({
			   type: "POST", 
			   url: "statRes!StatVillage", 
			   async: false, 
			   success: function(data){
				   list = data
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("stat sexe error : ."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		});
		
		$.ajax({
			   type: "POST", 
			   url: "statRes!StatVillageLabels", 
			   async: false, 
			   success: function(data){
				   listLables = data
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("stat sexe error : ."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		});
		
		
		var ctx = document.getElementById("charGenerique");
		var ctx = document.getElementById("charGenerique").getContext("2d");
		var ctx = $("#charGenerique");
		var ctx = "charGenerique";
		
		var ctx = document.getElementById("charGenerique");
		var charDrow = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: eval(listLables),
		        datasets: [{
		            label: ' Village ', 
		            data: eval(list),	
		            backgroundColor: [
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(153, 102, 255, 1)'
		            ],
		            borderColor: [
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)'
		            ],
		            borderWidth: 1
		        },
       
		        
		        
		        ]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	}
	
	
	
	
	/**
	 * refresh
	 */
	refresh = function() {
		var choix = $("#choix").val();
		//$('#charGenerique').remove();
		$('#charGenerique').remove(); // this is my <canvas> element
		$('#charGenerique-cont').append('<canvas id="charGenerique" width="400" height="150"></canvas>');
		$("#text").text( $("#choix option:selected").text() + ' - ' +  $("#vlg_id option:selected").text() );

		switch (choix) {
		case '0':	// Capacité
			drowChartSexe();
			break;
		case '1':	// Classes
			drowChartClasses();
			break;
		case '2':	// Budget
			drowChartBudget();
			break;

		default:
			break;
		}

		
	}


});
