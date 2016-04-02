'use strict';

App.factory('ReportService', ['$http', '$q', function($http, $q){

	return {
			getReport: function(id){
				var data = [];
				if(id ===1)
				{
					data = {
							  type: "bar",
							  plotarea: {
								adjustLayout:true
							  },
							  scaleX: {
								label:{
								  text:"Expense Report for 2015"
								},
								labels:["Jan","Feb","March","April"] 
							  },
							  series: [
								{
								  values:[400,500,600,700]
								}
								]
							};
				}
				else if(id ===2)
				{
					data = {
							  type: "bar",
							  plotarea: {
								adjustLayout:true
							  },
							  scaleX: {
								label:{
								  text:"Sales Report for 2015"
								},
								labels:["Jan","Feb","March","April"] 
							  },
							  series: [
								{
								  values:[500,575,650,800]
								}
								]
							};
				}
				else if(id ===3)
				{
					data = {
							  type: "bar",
							  plotarea: {
								adjustLayout:true
							  },
							  scaleX: {
								label:{
								  text:"Profit Report for 2015"
								},
								labels:["Jan","Feb","March","April"] 
							  },
							  series: [
								{
								  values:[100,75,50,100]
								}
								]
							};
				}
				else if(id ===4)
				{
					data = {
							  type: "bar",
							  plotarea: {
								adjustLayout:true
							  },
							  scaleX: {
								label:{
								  text:"Expense, Sale and Profit Reports for 2015"
								},
								labels:["Jan","Feb","March","April"] 
							  },
							  series: [
									{
									 values:[400,500,600,700]
									},
									{
									 values:[500,575,650,800]
									},	
									{
									 values:[100,75,50,100]
									}	
								]
							};
				}
			
				return data;
			}
		
	};

}]);
