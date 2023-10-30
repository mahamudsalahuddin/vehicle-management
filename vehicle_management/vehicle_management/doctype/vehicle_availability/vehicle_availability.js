frappe.ui.form.on('Vehicle Availability', {
	status: function(frm) {
		if(frm.doc.status =="Port"){
			frm.doc.other_details =""
		}
		if(frm.doc.status =="Onship"){
			frm.doc.port_location =""
		}
		if(frm.doc.status =="Inhouse"){
			frm.doc.port_location =""
		}
		if(frm.doc.status =="Workshop"){
			frm.doc.port_location =""
		}
		if(frm.doc.status =="Other"){
			frm.doc.port_location =""
		}
		function emptyfunc(){

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
