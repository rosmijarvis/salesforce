class SalesForce{

	constructor(){

	}

		retrieveAccount(conn){
				conn.sobject("Account").retrieve([
					"00141000009rzoZAAQ",
					"00141000009rzoUAAQ"
				], function(err, accounts) {
						if (err) { return console.error(err); }
							for (var i=0; i < accounts.length; i++) {
								console.log("Name : " + accounts[i].Name);
							}
				});
		}
		
		retrieveContact(conn){
				conn.sobject("Contact").find(
						// conditions in JSON object 
						{ LastName : 'Herwadkar'},
						{ Id: 1,
						Name: 1,
						CreatedDate: 1 }
						)
						.execute(function(err, records) {
						if (err) { return console.error(err); }
							for (var i=0; i<records.length; i++) {
								var record = records[i];
									console.log("Name: " + record.Name);
									console.log("Created Date: " + record.CreatedDate);
									console.log("Id: " + record.Id);
						}
			
				});
		}

		updateAccount(conn){
				conn.sobject("Account").update([
						{ Id : '00141000009rzoZAAQ', Name : 'SaurabhH' },
						{ Id : '00141000009rzoUAAQ', Name : 'Prateek ChaudharI' }
						],
						function(err, rets) {
							if (err) { return console.error(err); }
								for (var i=0; i < rets.length; i++) {
								if (rets[i].success) {
								  console.log("Updated Successfully : " + rets[i].id);
								}
							  }
							});	
		}
		
		updateContact(conn){
				conn.sobject("Contact").update([
					{ Id : '0034100000CrgSQAAZ', LastName : 'H' },
					{ Id : '00341000003FWgpAAG', LastName : 'Boyle' }
					],
					function(err, rets) {
					if (err) { return console.error(err); }
							for (var i=0; i < rets.length; i++) {
							if (rets[i].success) {
							console.log("Updated Successfully Contact : " + rets[i].id);
					}
					}
			});
		}
			
			
}		

module.exports.SalesForce = SalesForce;
