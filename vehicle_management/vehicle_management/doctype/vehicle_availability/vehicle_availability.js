frappe.ui.form.on('Vehicle Availability', {
	status: function(frm) {
		let emptyObj = {}
		if(frm.doc.status =="Port"){
			frm.doc.other_details =""
			frm.doc.workshop_address =""
			frm.doc.house_address =""
			frm.doc.ship_details =""
			
		}
		else if(frm.doc.status =="Onship"){
			emptyfunc({port_location,shed_number,house_address,})
		}
		else if(frm.doc.status =="Inhouse"){
			emptyfunc()
		}
		else if(frm.doc.status =="Workshop"){
			emptyfunc()
		}
		else if(frm.doc.status =="Other"){
			emptyfunc()
		}
		else{

		}
		function emptyfunc(...arr){
			console.log(typeof(arr));
			frm.doc.a =""
			frm.doc.b =""
			frm.doc.c =""
			frm.doc.d =""
			emptyObj = {}
		}

			// port_location
			// shed_number
			// frm.doc.ship_details== ""
			// frm.doc.house_address== ""
			// frm.doc.workshop_address== ""
			// frm.doc.other_details== ""
			// house_address 
			// workshop_address other_details
	}
});
