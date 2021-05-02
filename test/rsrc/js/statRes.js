$(function() {
	

	/**
	 * drowChartSexe
	 */
	drowChartSexe = function() {
		var list;
		$.ajax({
			   type: "POST", 
			   url: "statRes!StatSexe", 
			   data: {
				   vlg_id : $("#vlg_id").val()
			   },
			   async: false, 
			   success: function(data){
				   list = data
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
		        labels: ["Hommes", "Femmes", "Inconnu"],
		        datasets: [{
		            label: 'Résidents / Sexe ', 
		            data: eval(list),
		            backgroundColor: [
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)'
		            ],
		            borderColor: [
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
	 * drowChartAge
	 */
	drowChartAge = function() {
		var list;		
		$.ajax({
			   type: "POST", 
			   url: "statRes!StatAge", 
			   data: {
				   vlg_id : $("#vlg_id").val()
			   },
			   async: false, 
			   success: function(data){
				   list = data
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("stat age error : ."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		});

		
		var ctx = document.getElementById("charGenerique");
		var ctx = document.getElementById("charGenerique").getContext("2d");
		var ctx = $("#charGenerique");
		var ctx = "charGenerique";
		
		var ctx = document.getElementById("charGenerique");
		var charGenerique = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["<21","21-30", "31-50", "51-60", "61-70", ">70"],
		        datasets: [{
		            label: 'Résidents / Age',
		            data: eval(list),
		            backgroundColor: [
		            	'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		            	'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
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
	 * drowChartProfession
	 */
	drowChartProfession = function() {
		var list;
		var listLables;
		$.ajax({
			   type: "POST", 
			   url: "statRes!StatProf", 
			   data: {
				   vlg_id : $("#vlg_id").val()
			   },
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
			   url: "statRes!StatProfLabels", 
			   data: {
				   vlg_id : $("#vlg_id").val()
			   },
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
		            label: ' Profession ', 
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
		                'rgba(153, 102, 255, 0.2)'
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
	 * drowChartLoca
	 */
	drowChartLoca = function() {
		var list;
		$.ajax({
			   type: "POST", 
			   url: "statRes!StatLoca", 
			   data: {
				   vlg_id : $("#vlg_id").val()
			   },
			   async: false, 
			   success: function(data){
				   list = data
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
		        labels: ["Locataire", "Propriétaire","Les deux" , "Inconnu"],
		        datasets: [{
		            label: 'Locataire / Proprietaire ', 
		            data: eval(list),
		            backgroundColor: [
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(54, 162, 235, 0.2)'
		            ],
		            borderColor: [
		                'rgba(54, 162, 235, 1)',
		                'rgba(255,99,132,1)',  
		                'rgba(153, 102, 255, 1)',
		                'rgba(54, 162, 235, 1)'
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
		case '0':	// Sexe
			drowChartSexe();
			break;
		case '1':	// Profession
			drowChartProfession();
			break;
		case '2':	// Locataire / Propriétaire
			drowChartLoca();
			break;
		case '3':	// Age
			drowChartAge();
			break;
		case '4':	// Village
			drowChartVillage();
			break;
			
		default:
			break;
		}

		
	}


});
