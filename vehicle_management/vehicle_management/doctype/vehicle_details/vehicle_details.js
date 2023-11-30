frappe.ui.form.on('Vehicle Details', {
	refresh: function(frm) {
        let a =frm.doc.chassis_number
		frm.add_custom_button(__("Vehicle Statement"), function(){
            frappe.model.open_mapped_doc({
                method: "vehicle_management.vehicle_management.doctype.vehicle_details.vehicle_details.VehicleDetailsFunction",
                frm: cur_frm,
                // run_link_triggers: true
            });
        }, __("Create"));
        
        frm.add_custom_button(__("Vehicle Price"), function(){
            console.log(frm.doc.name)
        }, __("Create"));
        
	}
});