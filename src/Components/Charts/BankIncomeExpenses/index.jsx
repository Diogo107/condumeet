import React from 'react';
//Import Services
import Chart from './../../../../node_modules/chart.js';

function Index(props) {
	setTimeout(() => {
		var ctx = document.getElementById('Bank__Chart--Overview').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow'],
				datasets: [
					{
						label: '# of Votes',
						pointBackgroundColor: false,
						pointBorderColor: false,
						pointBorderWidth: 0,
						pointRadius: 0,
						data: [12, 19, 3, 4, 12, 5, 5, 6, 26, 1, 5],
						backgroundColor: [
							'rgba(210,246,237, 0.8)',
							'rgba(49,27,146, 0.8)',
							'rgba(98,0,234, 0.8)',
						],
						borderColor: [
							'rgba(0,200,83, 1)',
							'rgba(49,27,146, 1)',
							'rgba(98,0,234, 1)',
						],
						borderWidth: 1,
						lineTension: 0,
					},
				],
			},
			options: {
				bezierCurve: false,
				scales: {
					yAxes: [
						{
							display: false,
							stacked: false,
						},
					],
					xAxes: [
						{
							display: false,
							stacked: false,
						},
					],
					gridLines: {
						drawTicks: false,
						display: false,
					},
				},
				legend: {
					display: false,
					position: 'bottom',
					align: 'start',
				},
			},
		});
	}, 10);
	return (
		<div>
			<canvas id="Bank__Chart--Overview"></canvas>
		</div>
	);
}

export default Index;
