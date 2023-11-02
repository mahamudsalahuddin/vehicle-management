frappe.ui.form.on('Vehicle Price', {
	// company_price: function (frm) {
	// 	frm.set_value('sale_price', (frm.doc.company_price + frm.doc.customer_price))
	// 	// frm.refresh_field('sale_price');
	// },
	// customer_price: function (frm) {
	// 	frm.set_value('sale_price', (frm.doc.customer_price + frm.doc.company_price))
	// 	// frm.refresh_field('sale_price');
	// },

	setup:(frm) => {
		frm.calculate_amount_in_child_table = function(frm){
			frm.doc.table.forEach(item => {
				item.item_amount = item.item_qty * item.item_rate;
			})
			frm.refresh_field('table');
		}

		frm.calculate_total_qty_and_amount = (frm) => {
			let totalQty = 0, totalAmount = 0;
			frm.doc.table.forEach(item => {
				totalQty += item.item_qty;
				totalAmount += item.item_amount;
			})
			frm.set_value('total_qty', totalQty)
			frm.set_value('total_amount', totalAmount)
		}
	}

});

frappe.ui.form.on("Other Vehicle Items", {
	item_qty: (frm, cdt, cdn) => {
		let row = locals[cdt][cdn];
		frm.calculate_amount_in_child_table(frm);
		frm.calculate_total_qty_and_amount(frm);

	},
	item_rate: (frm, cdt, cdn) => {
		var row = locals[cdt][cdn];
		frm.calculate_amount_in_child_table(frm);
		frm.calculate_total_qty_and_amount(frm);

	},

});



