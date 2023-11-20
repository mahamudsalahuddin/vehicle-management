// Author: Md Salah Uddin Mahamud
// Date: 20-11-2-23
// Description: This is the part of Function Overriding. Add two fields Total Quantity (total_qty) and Amount (amount) below of child table of Material Request Doctype. Then add functionality of both field.

frappe.ui.form.on('Material Request', {
	setup:(frm) => {
		// To calculate total amount and quantity
		frm.calculate_qty=(frm)=>{
            let totalQty=0, amount= 0
            frm.doc.items.map((item)=>{
                totalQty += item.qty
                amount += item.amount
            })
            frm.set_value('custom_total_quantity', totalQty)
			frm.set_value('custom_total', amount)
		}
	},
});
frappe.ui.form.on("Material Request Item", {
	qty: (frm, cdt, cdn) => {
		let row = locals[cdt][cdn];
		frm.calculate_qty(frm);
	},
    item_code: (frm, cdt, cdn) => {
		let row = locals[cdt][cdn];
		frm.calculate_qty(frm);
	},
	rate:(frm, cdt, cdn)=>{
		let row= locals[cdt][cdn]
		frm.calculate_qty(frm)
	},
	// If remove any item the function will call automatically and then update item and quantity fields
	items_remove:(frm, cdt, cdn)=>{
		let row= locals[cdt][cdn]
		frm.calculate_qty(frm)
	}
});