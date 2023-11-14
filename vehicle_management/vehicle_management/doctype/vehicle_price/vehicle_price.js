frappe.ui.form.on('Vehicle Price', {
	company_price: function (frm) {
		frm.calculate_sale_price(frm)
		// It call here for grand total
		frm.calculate_total_qty_and_amount(frm)
	},
	customer_price: function (frm) {
		frm.calculate_sale_price(frm)
		// It call here for grand total
		frm.calculate_total_qty_and_amount(frm)
	},

	setup:(frm) => {
		// To calculate sale price (customer price + company price)
		frm.calculate_sale_price=(frm)=>{
			frm.set_value('sale_price', (frm.doc.customer_price  + frm.doc.company_price))
				
		}
		// To calculate item amount =(quality*rate)
		frm.calculate_amount_in_child_table = function(frm){
			frm.doc.table.forEach(item => {
				item.item_amount = item.item_qty * item.item_rate;
			})
			frm.refresh_field('table');
		}
		// To calculate total quantity, total amount and grand total
		frm.calculate_total_qty_and_amount = (frm) => {
			let totalQty = 0, totalAmount = 0, grandTotal=0;
			frm.set_value('total_qty', totalQty)
			frm.set_value('total_amount', totalAmount)
			frm.set_value('grand_total', grandTotal)
			if(frm.doc.table!=undefined){
				frm.doc.table.forEach(item => {
					totalQty += item.item_qty;
					totalAmount += item.item_amount;
					frm.set_value('total_qty', totalQty)
					frm.set_value('total_amount', totalAmount)
					let grandTotal = frm.doc.sale_price + totalAmount
					frm.set_value('grand_total', grandTotal)
				})
			}else{
				let grandTotal = frm.doc.sale_price 
				frm.set_value('total_qty', totalQty)
				frm.set_value('total_amount', totalAmount)
				frm.set_value('grand_total', grandTotal)
			}
		}
		// To remove items from child table
		frm.table_items_remove = (frm)=>{
			frm.calculate_amount_in_child_table(frm);
			frm.calculate_total_qty_and_amount(frm);
			
		}
		// This function check the adding item is duplicate or not. if duplicate than show error
		frm.check_items_duplicate = function(frm, row){
			frm.doc.table.forEach(items =>{
				if(row.item == '' || row.idx == items.idx){
				}
				else{
					if(row.item == items.item){
						row.item = '';
						frm.refresh_field('table');
						frappe.throw(__(`${items.item} already exists in row ${items.idx}`));
					}
				}
			})
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
	item: (frm, cdt, cdn) => {
		var row = locals[cdt][cdn];
		frm.check_items_duplicate(frm, row);
	}
});
