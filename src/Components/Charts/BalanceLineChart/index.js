import React from 'react';
//Import Services
import Chart from 'chart.js';

function Index(props) {
	setTimeout(() => {
		var ctx = document
			.getElementById('Balance__Chart--Overview')
			.getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow'],
				datasets: [
					{
						fill: false,
						label: '# of Votes',
						pointBackgroundColor: false,
						pointBorderColor: true,
						pointBorderWidth: 1,
						pointRadius: 5,
						data: [12, 19, 3, 4, 12, 5, 5, 6, 26, 1, 5],
						backgroundColor: [
							'rgba(210,246,237, 0.8)',
							'rgba(49,27,146, 0.8)',
							'rgba(98,0,234, 0.8)',
						],
						borderColor: [
							'rgba(49,27,146, 1)',
							'rgba(49,27,146, 1)',
							'rgba(98,0,234, 1)',
						],
						borderWidth: 3,
					},
				],
			},
			options: {
				bezierCurve: false,
				scales: {
					yAxes: [
						{
							position: 'right',
							display: true,
							stacked: false,
						},
					],
					xAxes: [
						{
							display: true,
							gridLines: false,
							stacked: true,
						},
					],
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
			<canvas id="Balance__Chart--Overview"></canvas>
		</div>
	);
}

export default Index;
