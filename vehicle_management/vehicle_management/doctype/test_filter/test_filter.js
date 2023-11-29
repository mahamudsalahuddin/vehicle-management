// ===========fetch data using Helper Function (frappe.call), for this section I wrote query on test_filter.py=========
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


// ===========fetch data using Helper Function (frappe.db.get_all)=========

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
// 			method: "vehicle_management.vehicle_management.doctype.test_filter.test_filter.testFunction2",
// 			args:{
// 				po: purchase_order,
// 			}
// 		})
// 		.then((r)=>{
// 					let a = r.message[0][0]
// 					let b= r.message[1][0]
// 					const obj = {...a, ...b}

// 					let entry = frm.add_child("purchase_order_item")
// 					entry.posting_date = obj.transaction_date
// 					entry.required_date = obj.schedule_date
// 					entry.item_code = obj.item_code
// 					entry.item_name = obj.item_name
// 					entry.uom = obj.uom
// 					entry.qty = obj.qty
// 					entry.rate = obj.rate
// 					entry.amount = obj.amount
// 					entry.total = obj.total
// 					entry.grand_total = obj.grand_total
// 				refresh_field("purchase_order_item")
// 		})
// 	}
// });



// ===========Fetch data using Query Builder========= 

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
			method: "vehicle_management.vehicle_management.doctype.test_filter.test_filter.testFunction3",
			args:{
				po: purchase_order,
			}
		})
		.then((r)=>{
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
		})
	}
});