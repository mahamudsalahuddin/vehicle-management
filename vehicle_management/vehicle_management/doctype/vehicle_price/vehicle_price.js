frappe.ui.form.on('Vehicle Price', {
	company_price: function (frm) {
		// frm.set_value('sale_price', (frm.doc.company_price + frm.doc.customer_price))
		// frm.refresh_field('sale_price');
		frm.calculate_sale_price(frm)
		frm.calculate_total_qty_and_amount(frm)
	},
	customer_price: function (frm) {
		// frm.set_value('sale_price', (frm.doc.customer_price + frm.doc.company_price))
		// frm.refresh_field('sale_price');
		frm.calculate_sale_price(frm)
		frm.calculate_total_qty_and_amount(frm)
	},

	setup:(frm) => {
		frm.calculate_sale_price=(frm)=>{
			// if(frm.doc.customer_price != "" && frm.doc.company_price !=""){}
				frm.set_value('sale_price', (frm.doc.customer_price  + frm.doc.company_price))
				
		}
		frm.calculate_grand_total=(frm)=>{
			// if(frm.doc.customer_price != "" && frm.doc.company_price !=""){}
				frm.set_value('sale_price', (frm.doc.sell_price  + frm.doc.company_price))
			
		}
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
			let grandTotal = frm.doc.sale_price + totalAmount
			frm.set_value('total_qty', totalQty)
			frm.set_value('total_amount', totalAmount)
			frm.set_value('grand_total', grandTotal)
		}
		frm.table_items_remove = (frm)=>{
			frm.calculate_amount_in_child_table(frm);
			frm.calculate_total_qty_and_amount(frm);
		}
		frm.add_sale_price_and_total_amount = (frm)=>{
			frm.sale_price_plus_total_amount(frm);
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
	table_remove: (frm, cdt, cdn) => {
		var row = locals[cdt][cdn];
		frm.table_items_remove(frm);
	},
	grand_total: (frm, cdt, cdn) => {
		var row = locals[cdt][cdn];
		frm.add_sale_price_and_total_amount(frm);
	},

});



