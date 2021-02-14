$.getJSON('https://f92c6b35-d121-4c8a-987b-81217155297f.mock.pstmn.io/transactions',

function buildTable(data) {

		var table = document.getElementById('myTable')
		
		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].transaction_id}</td>
							<td>${data[i].timestamp}</td>
							<td>${data[i].category}</td>
							<td>${data[i].account}</td>
							<td>${data[i].amount}</td>
					  </tr>`
			table.innerHTML += row
			}
		
		document.getElementById("btn").addEventListener("click", buildTable);
	})
