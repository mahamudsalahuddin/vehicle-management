frappe.ui.form.on('Vehicle Availability', {
	status: function(frm, cdt, cdn) {
		let emptyArr = []
		if(frm.doc.status =="Port"){
			emptyArr = ["ship_details", "house_address", "workshop_address", "other_details"]
			emptyfunc(emptyArr)
		}
		else if(frm.doc.status =="Onship"){
			emptyArr = ["port_location","shed_number", "house_address", "workshop_address", "other_details"]
			emptyfunc(emptyArr)
		}
		else if(frm.doc.status =="Inhouse"){
			emptyArr = ["port_location","shed_number", "ship_details", "workshop_address", "other_details"]
			emptyfunc(emptyArr)
		}
		else if(frm.doc.status =="Workshop"){
			emptyArr = ["port_location","shed_number", "ship_details", "house_address", "other_details"]
			emptyfunc(emptyArr)
		}
		else if(frm.doc.status =="Other"){
			emptyArr = ["port_location","shed_number", "ship_details", "house_address", "workshop_address"]
			emptyfunc(emptyArr)
		}
		else{
			emptyArr = ["port_location","shed_number", "ship_details", "house_address", "workshop_address","other_details"]
			emptyfunc(emptyArr)
		}
		
		function emptyfunc(...arr){
			arr[0].map((attributeName)=>{
				frappe.model.set_value(cdt, cdn, attributeName, "");	
				refresh_field(attributeName);

			})
			
		}
	}
});
