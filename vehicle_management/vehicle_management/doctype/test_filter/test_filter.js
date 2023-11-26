frappe.ui.form.on('Test Filter', {
	"onload":function(frm) {
		frm.set_query("purchase_order", function() {
			if(!frm.doc.supplier){
				frappe.msgprint("Please first select supplier")
			}
			else{
				return {
					"filters": {
						"supplier": frm.doc.supplier,
						//Here the supplier is match from supplier field of purchase order doctype
					}
				};
			}
			
		});
	},
	purchase_order:function(frm){
		let purchase_order = frm.doc.purchase_order;
		frappe.call({
			method: "vehicle_management.vehicle_management.doctype.test_filter.test_filter.testFunction",
			args:{
				po: purchase_order,
			}
		}).done((r)=>{
				// frm.doc.item= []
				console.log(r.message)
				$.each(r.message, function(_i,e){
					let entry = frm.add_child("purchase_order_item")
					entry.posting_date = e.transaction_date
					entry.required_date = e.schedule_date
					entry.item_code = e.item_code
					entry.item_name = e.item_name
					entry.uom = e.uom
					entry.qty = e.qty
					entry.rate = e.rate
					entry.amount = e.amount
					entry.total = e.total
					entry.grand_total = e.grand_total
				})
				refresh_field("purchase_order_item")
			// }
		})
	}
});
