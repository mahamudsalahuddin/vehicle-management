
frappe.ui.form.on('Material Request', {
	setup:(frm) => {
		frm.calculate_qty=(frm)=>{
            let totalQty=0, amount= 0
			// frm.set_value('sale_price', (frm.doc.customer_price  + frm.doc.company_price))
            frm.doc.items.map((item)=>{
                totalQty += item.qty
                // amount += item.amount
            })
            frm.set_value('custom_total_quantity', totalQty)
            // console.log("hello")
		}
		// frm.calculate_qty(frm)
	},


});


// frappe.ui.form.on('Material Request Item', {
// 	qty:(frm, cdt, cdn) => {
//         let row = locals[cdt][cdn];
// 		frm.calculate_qty(frm)
// 	},
    

// });

frappe.ui.form.on("Material Request Item", {
	qty: (frm, cdt, cdn) => {
		let row = locals[cdt][cdn];
		frm.calculate_qty(frm);
	},
    item_code: (frm, cdt, cdn) => {
		let row = locals[cdt][cdn];
		frm.calculate_qty(frm);
	},
});































// frappe.ui.form.on("Other Vehicle Items", {
// 	item_qty: (frm, cdt, cdn) => {
// 		let row = locals[cdt][cdn];
// 		frm.calculate_amount_in_child_table(frm);
// 		frm.calculate_total_qty_and_amount(frm);
// 	},
// });
