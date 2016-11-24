var sf = require('node-salesforce');
/* var conn = new sf.Connection({
   loginUrl : 'https://login.salesforce.com',
  // username: 'chatbot.integration@lntinfotech.com',
  // password: 'Nov@2016FfFwBz6Yr35Mk0trNvfSR72C'

}); */
/* conn.login('chatbot.integration@lntinfotech.com', 'Nov@2016FfFwBz6Yr35Mk0trNvfSR72C', function(err, userInfo) {
  if (err) { return console.error(err); }
  
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
 
  console.log("User ID: " + userInfo.id);
  //console.log("Org ID: " + userInfo.organizationId);

}); */
var conn = new sf.Connection({
  instanceUrl : 'https://lntdf16-dev-ed.my.salesforce.com',
  accessToken : '00D410000007tzC!AQ0AQDJaZz9an7PUKzvCrZv5iXQVDHyUfWdpdUZfdjdxg529Ct22ftDeS95EBOkrDJr8Esbh_Ph5X9s8V5k6Yhv_BbGvvz.L'
});

var SalesForce = require('./Account.js').SalesForce;
var salesforce = new SalesForce();
salesforce.retrieveAccount(conn);
salesforce.retrieveContact(conn);
salesforce.updateAccount(conn);
salesforce.updateContact(conn);

	
 /* conn.sobject("Contact").create([
				{ Name : 'Ravi' },
				{ Name : 'Rosmi'}
				],
				function(err, rets) {
				if (err) { return console.error(err); }
				for (var i=0; i < rets.length; i++) {
					if (rets[i].success) {
						console.log("Created record id : " + rets[i].id);
					}
				}

				});  */
				
		/* conn.sobject("Contact").find(
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
		  
		  
		  conn.sobject("Contact").update([
					{ Id : '00341000003FWgrAAG', LastName : 'Davis' },
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
		  
		  
conn.sobject("Account").retrieve([
  "00141000009rzoZAAQ",
  "00141000009rzoUAAQ"
], function(err, accounts) {
  if (err) { return console.error(err); }
  for (var i=0; i < accounts.length; i++) {
    console.log("Name : " + accounts[i].Name);
  }
});

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
}); */

/* conn.sobject("Account").del([ '00141000009rzoeAAA','00141000009rzojAAA'], 
function(err, rets) {
		if (err) { return console.error(err); }
		for (var i=0; i < rets.length; i++) {
			if (rets[i].success) {
				console.log("Deleted Successfully : " + rets[i].id);
			}
		}
}); */


