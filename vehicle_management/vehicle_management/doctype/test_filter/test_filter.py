import frappe
from frappe.model.document import Document
from frappe.query_builder import DocType

class TestFilter(Document):
	pass

# ===========Fetch data using Helper Function (frappe.call)=========
# @frappe.whitelist()
# def testFunction(po):
# 	query = frappe.db.sql(f""" SELECT po.name, po.transaction_date, po.schedule_date, po.total, po.grand_total, poi.item_code, poi.item_name, poi.uom, poi.qty, poi.rate, poi.amount FROM `tabPurchase Order` AS po JOIN `tabPurchase Order Item` AS poi ON poi.parent = po.name WHERE po.name= '{po}' """, as_dict=True)
# 	return query


# // ===========Fetch data using Helper Function  (frappe.db.get_all)=========
# @frappe.whitelist()
# def testFunction2(po):
# 	# It for parent doctype (Purchase Order)
# 	query_for_PO = frappe.db.get_all('Purchase Order', {"name": po}, "transaction_date, schedule_date, total, grand_total")

# 	# It for Child Table (Purchase Order Item) of Purchase Order doctype
# 	query_for_POI = frappe.db.get_all('Purchase Order Item', {"parent": po}, "item_code, item_name, uom, qty, rate, amount")
# 	query= query_for_PO + query_for_POI

# 	return query_for_PO, query_for_POI


# // ===========Fetch data using Query Builde========= 


@frappe.whitelist()
def testFunction3(po):
	PurchaseOrder= DocType("Purchase Order")
	PurchaseOrderItem= DocType("Purchase Order Item")
	query=(
		frappe.qb.from_(PurchaseOrder)
		.join(PurchaseOrderItem)
		.on(PurchaseOrder.name == PurchaseOrderItem.parent)
		.select( PurchaseOrder.transaction_date, PurchaseOrder.schedule_date, PurchaseOrderItem.item_code, PurchaseOrderItem.item_name, PurchaseOrderItem.uom, PurchaseOrderItem.qty, PurchaseOrderItem.rate, PurchaseOrderItem.amount, PurchaseOrder.total, PurchaseOrder.grand_total)
		.where(PurchaseOrder.name == po)
	).run(as_dict=True)
	return query