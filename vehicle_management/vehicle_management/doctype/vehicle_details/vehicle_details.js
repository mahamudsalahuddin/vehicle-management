// Copyright (c) 2023, salahuddin and contributors
// For license information, please see license.

frappe.ui.form.on('Vehicle Details', {
	refresh: function(frm) {
		// if (frm.doc.car_model && frm.doc.chassis_number) {
        //     frm.add_custom_button(__(frm.doc.car_model), () => {
        //         frappe.set_route("Form", frm.doc.chassis_number, frm.doc.car_model);
        //     });
        // }
	}
});
