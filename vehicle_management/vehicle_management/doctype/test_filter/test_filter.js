// ===========fetch data using frappe.call, for this section I wrote query on test_filter.py=========
// frappe.ui.form.on('Test Filter', {
// 	"onload":function(frm) {
// 		frm.set_query("purchase_order", function() {
// 			if(!frm.doc.supplier){
// 				frappe.msgprint("Please first select supplier")
// 			}
// 			else{
// 				return {
// 					"filters": {
// 						"supplier": frm.doc.supplier,
// 						//Here the supplier is match from supplier field of purchase order doctype
// 					}
// 				};
// 			}
			
// 		});
// 	},
// 	purchase_order:function(frm){
// 		let purchase_order = frm.doc.purchase_order;
// 		frappe.call({
// 			method: "vehicle_management.vehicle_management.doctype.test_filter.test_filter.testFunction",
// 			args:{
// 				po: purchase_order,
// 			}
// 		}).done((r)=>{
// 				// frm.doc.item= []
// 				console.log(r.message)
// 				$.each(r.message, function(_i,e){
// 					let entry = frm.add_child("purchase_order_item")
// 					entry.posting_date = e.transaction_date
// 					entry.required_date = e.schedule_date
// 					entry.item_code = e.item_code
// 					entry.item_name = e.item_name
// 					entry.uom = e.uom
// 					entry.qty = e.qty
// 					entry.rate = e.rate
// 					entry.amount = e.amount
// 					entry.total = e.total
// 					entry.grand_total = e.grand_total
// 				})
// 				refresh_field("purchase_order_item")
// 			// }
// 		})
// 	}
// });


// ===========fetch data using frappe.db.get_doc=========

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
			method: "vehicle_management.vehicle_management.doctype.test_filter.test_filter.testFunction2",
			args:{
				po: purchase_order,
				async: false,
			}
		})
		// frappe.db.get_doc('Purchase Order', null, {name : purchase_order})
		.then((r)=>{
				// frm.doc.item= []

				// $.each(r, function(_i,e){
					// let entry = frm.add_child("purchase_order_item")
					// entry.posting_date = r.transaction_date
					// entry.required_date = r.schedule_date
					// entry.item_code = r.item_code
					// entry.item_name = r.item_name
					// entry.uom = r.uom
					// entry.qty = r.qty
					// entry.rate = r.rate
					// entry.amount = r.amount
					// entry.total = r.total
					// entry.grand_total = r.grand_total
					console.log(r)
				// })
				// refresh_field("purchase_order_item")
			// }
		})
	}
});
