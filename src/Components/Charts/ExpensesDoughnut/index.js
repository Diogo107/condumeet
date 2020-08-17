import React from 'react';
//Import Services
import Chart from './../../../../node_modules/chart.js';

function Index(props) {
	setTimeout(() => {
		var ctx = document.getElementById('myChart');
		if (ctx !== null) {
			ctx = ctx.getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ['Red', 'Blue', 'Yellow'],
					datasets: [
						{
							label: '# of Votes',
							data: [12, 19, 3],
							backgroundColor: [
								'rgba(179,136,255, 0.8)',
								'rgba(49,27,146, 0.8)',
								'rgba(98,0,234, 0.8)',
							],
							borderColor: [
								'rgba(179,136,255, 1)',
								'rgba(49,27,146, 1)',
								'rgba(98,0,234, 1)',
							],
							borderWidth: 1,
							hoverBorderWidth: 8,
							weight: 0.1,
						},
					],
				},
				options: {
					cutoutPercentage: 70,
					legend: {
						display: false,
						position: 'bottom',
						align: 'start',
					},
					scales: {},
				},
			});
		}
	}, 10);
	return (
		<div>
			<canvas id="myChart"></canvas>
		</div>
	);
}

export default Index;
