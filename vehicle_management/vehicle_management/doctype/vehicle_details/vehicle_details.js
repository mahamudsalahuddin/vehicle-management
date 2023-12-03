frappe.ui.form.on('Vehicle Details', {
	refresh: function(frm) {
		if(frm.doc.docstatus===1){
            frm.add_custom_button(__("Vehicle Statement"), function(){
                // frm.MoveTo(frm)
                frappe.call({
                    method:"vehicle_management.vehicle_management.doctype.vehicle_details.vehicle_details.VahicleAvailability",
                    freeze: true,
                    freeze_message: __("Moving Data ..."),
                    args: {source_name: frm.doc.name},
                    callback: function (r) {
                        if (!r.exc) {
                            frappe.model.sync(r.message);
                            frappe.set_route("Form", r.message.doctype, r.message.name);
                        }
                        },
                })
            }, __("Create"));
            
            frm.add_custom_button(__("Vehicle Price"), function(){
                frappe.call({
                    method:"vehicle_management.vehicle_management.doctype.vehicle_details.vehicle_details.VahiclePrice",
                    freeze: true,
                    freeze_message: __("Moving Data ..."),
                    args: {source_name: frm.doc.name},
                    callback: function (r) {
                        if (!r.exc) {
                            frappe.model.sync(r.message);
                            frappe.set_route("Form", r.message.doctype, r.message.name);
                        }
                        },
                })
            }, __("Create"));
        }
        
	}
    // ,
    // setup: function(frm){
    //     frm.MoveTo = function(frm){
    //         return frappe.call({
    //             method:"vehicle_management.vehicle_management.doctype.vehicle_details.vehicle_details.VehicleDetailsFunction",
    //             freeze: true,
    //             freeze_message: __("Moving Data ..."),
    //             args: {source_name: frm.doc.name},
    //             callback: function (r) {
    //                 if (!r.exc) {
    //                     frappe.model.sync(r.message);
    //                     frappe.set_route("Form", r.message.doctype, r.message.name);
    //                 }
    //                 },
    //         })
    //     }
    // }
});
