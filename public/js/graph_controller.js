'use strict';

App.controller('GraphController', [
		'$scope',
		'ReportService',
		function($scope, ReportService) {
			var self = this;
			self.reports ={
				selectedReport:null,
			
				availableReports:[ {
							id : 1,
							reportName : 'Sample Expense Report',
							description : 'My expenses were 400 in 2010, 460 in 2011, 540 in 2012 and 1100 in 2013' 
						}, {
							id : 2,
							reportName : 'Sample Sale Report',
							description : 'Sales were 1000 in 2010, 1100 in 2011, 1200 in 2012 and 1500 in 2013' 
						},
						{
							id : 3,
							reportName : 'Profit Report',
							description : 'Profits were 600 in 2010, 640 in 2011, 660 in 2012 and 400 in 2013' 
						},
						{
							id : 4,
							reportName : 'Custom Report',
							description : 'Hey, I am just a kid. You should invest on my education so that I can learn and grow and become useful for you.' 
						}
						]
			};
			self.report = [];
			
			self.users = [];

			self.getReport = function(id) {
				console.log('Report ID', id);
				ReportService.getReport(id).then(function(d) {
					self.report = d;
					/* var data = google.visualization.arrayToDataTable(self.report);
					var options = {
						  title: 'Company Performance'
						};
						var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));
						chart.draw(data, options); */
				}, function(errResponse) {
					console.error('Error while fetching Currencies');
				});
			};

			
			self.reset = function() {
				self.report = [];
				$scope.myForm.$setPristine(); // reset Form
			};

		} ]);
