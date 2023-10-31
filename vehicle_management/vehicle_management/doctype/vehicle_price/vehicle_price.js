frappe.ui.form.on('Vehicle Price', {
	// refresh: function(frm) {

	// }
	company_price:function(frm){
		console.log(frm);
		frm.set_value('sale_price', (frm.doc.company_price + frm.doc.customer_price))
	},
	customer_price:function(frm){
		frm.set_value('sale_price', (frm.doc.customer_price + frm.doc.company_price ))
	},
	
});

frappe.ui.form.on("Other Vehicle Items", {
    item_quantity: function(frm,cdt,cdn) {
        var d = locals[cdt][cdn];
        frappe.model.set_value(cdt, cdn, 'item_amount', (d.item_quantity + d.item_rate));
       // frm.refresh_field('child_table_name');
    },
	item_rate: function(frm,cdt,cdn) {
        var d = locals[cdt][cdn];
		console.log(d);
        frappe.model.set_value(cdt, cdn, 'item_amount', (d.item_quantity + d.item_rate));
    },

	item:function(frm){
		// frm.set_value('sale_price', (frm.doc.customer_price + frm.doc.company_price ))
		// console.log(frm.fields_dict.table.grid.frm.doc.table[0].item)
		var a = Object.keys(frm.fields_dict.table.grid.frm.doc.table).length
		// for(var i= 0; i<=a; a++){
		// 	// console.log(frm.fields_dict.table.grid.frm.doc.table[i])
		// }

	},
});
