'use strict';

App.controller('ReportController', [
		'$scope',
		'ReportService',
		function($scope, ReportService) {
			var self = this;
			/* $scope.myJson = {
			  type : "bar",
			  title:{
				backgroundColor : "transparent",
				fontColor :"black",
				text : "Hello world"
			  },
			  backgroundColor : "white",
			  series : [
				{
				  values : [1,2,3,4],
				  backgroundColor : "#4DC0CF"
				}
			  ]
			}; */
			self.myJson = [];
			self.reports ={
				selectedReport:null,
			
				availableReports:[ {
							id : 1,
							reportName : 'Sample Expense Report',
							description : 'Expenses were 400 in january, 500 in february, 600 in march and 700 in april'
						}, {
							id : 2,
							reportName : 'Sample Sale Report',
							description : 'Sales were 500 in january, 575 in february, 650 in march and 800 in april'
						},
						{
							id : 3,
							reportName : 'Profit Report',
							description : 'Profits were 100 in january, 75 in february, 50 in march and 100 in april'
						},
						{
							id : 4,
							reportName : 'Expense, Sale and Profit Reports in One',
							description : 'Expense 400, Sale 500 and profit was 100 in january, Expense 500, Sale 575 and profit was 75 in february, Expense 600, Sale 650 and profit was 50 in march and lastly the Expense 700, Sale 800 and profit was 100 in april of 2,015' 
						},
						{
							id : 5,
							reportName : 'Custom Report',
							description : 'Hey, I am just a kid. You should invest on my education so that I can learn and grow and become useful for you.' 
						}
						]
			};
			self.report = [];
			
			self.users = [];

			self.getReport = function(id) {
				console.log('Report ID', id);
				//alert(id);
				self.myJson = ReportService.getReport(id);
				$('#textArea').val(self.reports.selectedReport.description);
				$('.speak-button').click();
				//$scope.$apply();
			};

			
			self.reset = function() {
				self.report = [];
				$scope.myForm.$setPristine(); // reset Form
			};

		} ]);
